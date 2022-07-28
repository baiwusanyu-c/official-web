/* * @login-dialog.vue * @deprecated 移动端登录弹窗 * @author czh * @update (czh 2022/3/10) */
<template>
  <n-modal v-model:show="show" class="font-format" close-on-esc esc-exit>
    <div class="modal-container">
      <h4 class="modal-header">
        <n-icon size="30" @click="close"><CloseOutline /></n-icon>
      </h4>
      <div class="modal-body">
        <register-account
          v-if="showType === 'register'"
          @show-change="changeType"></register-account>
        <login-password v-if="showType === 'login'" @show-change="changeType"></login-password>
        <forget-password v-if="showType === 'forget'" @show-change="changeType"></forget-password>
      </div>
    </div>
  </n-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import RegisterAccount from './register-account.vue'
  import LoginPassword from './login-password.vue'
  import ForgetPassword from './forget-password.vue'
  import { useEventBus } from '@vueuse/core'
  import { NModal, NIcon } from 'naive-ui'
  import { CloseOutline } from '@vicons/ionicons5'
  export default defineComponent({
    name: 'LoginDialog',
    components: { ForgetPassword, LoginPassword, RegisterAccount, NModal, NIcon, CloseOutline },
    setup() {
      const show = ref<boolean>(false)
      const showType = ref<string>('login')
      /**
       * 切換顯示
       * @param type
       */
      const changeType = (type: string): void => {
        showType.value = type
      }
      const bus = useEventBus<string>('isLogin')
      bus.on(params => {
        if (params === 'true') {
          show.value = false
        }
      })
      const close = () => {
        show.value = false
      }
      return {
        changeType,
        showType,
        show,
        close,
      }
    },
  })
</script>

<!-- prettier-ignore -->
<style lang="less" scoped>
  .modal-container{
    background-color: #fff;
    width: 90%;
    h4 {
      padding: 10px 1.25rem;
      text-align: right;
      .n-icon{
        cursor: pointer;
      }
    }
    .modal-body{
      padding: 0 1rem 1.25rem 1rem
    }
  }
</style>
