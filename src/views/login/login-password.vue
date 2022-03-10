/* * @login-password.vue * @deprecated * @author czh * @update (czh 2021/12/17)
*/
<template>
  <div class="flex flex-col items-start w-full">
    <img
      src="../../assets/img/logo-green-black.png"
      class="mb-8 w-1/2 sm:mb-0"
      alt=""
    />
    <div class="flex flex-col items-start w-full flex-grow">
      <!--  账户      -->
      <div class="mb-2 h-14 border-b w-full">
        <span class="text-gray-500 mr-4 font-format">{{
          $t('lang.login.account')
        }}</span>
        <input
          v-model="form.username"
          type="text"
          class="w-9/12 font-format login-input"
          :placeholder="$t('lang.login.tipAccount')"
        />
      </div>
      <!--  密码      -->
      <div
        class="login-password mb-2 h-24 border-b w-full flex items-center sm:h-14"
      >
        <span class="text-gray-500 mr-4 flex-grow-0 font-format">{{
          $t('lang.login.password')
        }}</span>
        <input
          v-model="form.password"
          class="flex-grow font-format login-input w-9/12"
          :type="isShowPassword"
          :placeholder="$t('lang.login.tipPassword')"
        />
        <be-icon
          :icon="isShowPassword === 'password' ? 'noEye' : 'eye'"
          custom-class="flex-grow-0"
          @click="changeShowPWord"
        ></be-icon>
        <!--       no-eye     -->
      </div>
      <!--  數字驗證碼      -->
      <div class="mt-8 flex w-full">
        <input
          v-model="form.code"
          type="text"
          class="border h-12 flex-1 font-format login-input w-9/12"
        />
        <div
          class="bg-mainG cursor-pointer flex items-center justify-center w-32"
          @click="getCode()"
        >
          <img :src="codeUrl" alt="" style="height: 100%" />
        </div>
      </div>
    </div>
    <be-button
      size="large"
      custom-class="login-btn linear-l-r font-bold text-lg w-full mb-8 mx-auto sm:my-4"
      @click="login"
    >
      <span class="font-format text-black">{{ $t('lang.login.login') }}</span>
    </be-button>
    <div class="flex items-center justify-between w-full">
      <p
        class="text-gray-500 cursor-pointer font-format"
        style="text-decoration: underline"
        @click="changeShow('forget')"
      >
        {{ $t('lang.login.forget') }}
      </p>
      <p
        class="text-gray-500 cursor-pointer font-format"
        style="text-decoration: underline"
        @click="changeShow('register')"
      >
        {{ $t('lang.login.register') }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { loginAccount, ILogin } from '../../api/login'
import { setStore } from '../../utils/common'
import { useI18n } from 'vue-i18n'
import { verEmail } from '../../utils/common'
import {
  Router,
  useRouter,
  useRoute,
  RouteLocationNormalizedLoaded,
} from 'vue-router'
import { Base64 } from 'js-base64'
import composition from '../../utils/mixin/common-func'
import { useEventBus } from '_@vueuse_core@7.7.1@@vueuse/core'
export default defineComponent({
  name: 'LoginPassword',
  emits: ['showChange'],
  setup(props, ctx) {
    const { message } = composition()
    const form = ref<ILogin>({})
    const isShowPassword = ref<string>('password')
    const { t } = useI18n()
    /**
     * 密碼顯示
     */
    const changeShowPWord = (): void => {
      if (isShowPassword.value === 'password') {
        isShowPassword.value = 'text'
      } else {
        isShowPassword.value = 'password'
      }
    }
    /**
     * 校验提示
     */
    const verMsg = (tipStr: string): void => {
      message('warning', tipStr, 'hermit-msg')
    }
    /**
     * 表单校验
     */
    const verifyCodeForm = (): boolean => {
      let tipStr = ''
      if (!form.value.username) {
        tipStr = t('lang.login.tipAccount')
        verMsg(tipStr)
        return false
      }
      if (!verEmail(String(form.value.username))) {
        tipStr = t('lang.login.tipErrEmail')
        verMsg(tipStr)
        return false
      }
      if (!form.value.password) {
        tipStr = t('lang.login.tipPassword')
        verMsg(tipStr)
        return false
      }
      return true
    }
    /**
     * 登錄方法
     */
    const router: Router = useRouter()
    const bus = useEventBus<string>('isLogin')
    const route: RouteLocationNormalizedLoaded = useRoute()
    const login = (): void => {
      if (!verifyCodeForm()) {
        getCode()
        return
      }
      const params: ILogin = {
        username: String(form.value.username),
        password: Base64.encode(form.value.password as string),
        client_id: 'official_site_sg_system',
        client_secret: 'uZtik#Iu8D',
        grant_type: 'password',
        scope: 'server',
        code: form.value.code,
        uuid: uuid.value,
        login_type: 'password',
      }
      loginAccount(params)
        .then((res: any) => {
          message('success', t('lang.loginSuccess'), 'hermit-msg')
          setStore('token', res.access_token)
          setStore('userInfo', JSON.stringify(res))
          bus.emit('true')
          if (route.path.indexOf('login') > 0) {
            router.push('/index/home')
          }
        })
        .catch((err) => {
          getCode()
          message('warning', err.message, 'hermit-msg')
          console.error(err)
        })
    }
    /**
     * 切換顯示
     */
    const changeShow = (type: string): void => {
      ctx.emit('showChange', type)
    }
    const { codeUrl, getCode, uuid } = composition()
    onMounted(() => {
      getCode()
    })
    return {
      codeUrl,
      changeShow,
      isShowPassword,
      form,
      changeShowPWord,
      login,
      getCode,
    }
  },
})
</script>

<style>
#login_form .login-btn,
#login_form .login-btn .be-button-body {
  height: 50px;
  line-height: 50px;
  color: black;
}

#login_form .login-btn .be-button-body:hover,
#login_form .login-btn:hover {
  color: #02fbbb;
  border-color: #02fbbb;
}

.login-password .be-icon {
  width: 60px;
  height: 30px;
}

.login-input {
  height: 48px;
  background-color: transparent;
}

.login-input:focus {
  outline: none;
}
</style>
