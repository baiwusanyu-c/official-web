/* * @login.vue * @deprecated * @author czh * @update (czh 2021/12/17) */
<template>
  <div class="login flex justify-center items-center relative">
    <div
      id="login_form"
      class="login-form px-12 py-10 box-border flex md:py-8 md:px-10"
    >
      <register-account
        v-if="showType === 'register'"
        @show-change="changeType"
      ></register-account>
      <login-password
        v-if="showType === 'login'"
        @show-change="changeType"
      ></login-password>
      <forget-password
        v-if="showType === 'forget'"
        @show-change="changeType"
      ></forget-password>
      <be-icon
        icon="deleteIc"
        custom-class="back absolute"
        @click="routerPush('/index/home')"
      ></be-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import RegisterAccount from './register-account.vue'
import LoginPassword from './login-password.vue'
import ForgetPassword from './forget-password.vue'
import composition from '../../utils/mixin/common-func'

export default defineComponent({
  name: 'LoginPage',
  components: { ForgetPassword, LoginPassword, RegisterAccount },
  setup(props, ctx) {
    const showType = ref<string>('login')
    /**
     * 切換顯示
     * @param type
     */
    const changeType = (type: string): void => {
      showType.value = type
    }
    const { routerPush } = composition()
    return {
      showType,
      routerPush,
      changeType,
    }
  },
})
</script>

<style scoped>
.login {
  width: 100vw;
  min-height: 100vh;
  background-image: url('../../assets/img/login-bg.png');
  background-size: cover;
}

.login-form {
  -moz-box-sizing: content-box;
  min-width: 480px;
  min-height: 600px;

  /* background-image: url("../../assets/img/hat-bg.png"); */
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 5%;
  background-size: 28%;
  border-top: 5px solid #02fbbb;
  @apply rounded w-1/4 h-4/6 bg-default lg125:h-5/6;
}
@media screen and (min-width: 1540px) and (max-width: 1750px) {

  .login-form {
    height: 70%;
  }
}

.back {
  top: 30px;
  right: 30px;
  cursor: pointer;
}
</style>
