/*
* @login-dialog.vue
* @deprecated 移动端登录弹窗
* @author czh
* @update (czh 2022/3/10)
*/
<template>
  <teleport to="body">
    <div id='login_dialog'>
      <be-dialog
        ref="moreNodeDialog"
        v-model:is-show="show"
        :titles="''"
        layout="right"
        custom-class="font-format"
        esc-exit
        :is-drag="false"
        :is-open-modal="true">
        <template #headerIcon>
          <be-icon icon="deleteIc" @click="show = false"></be-icon>
        </template>
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
        <template #footer><span></span></template>
      </be-dialog>
    </div>
  </teleport>

</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import RegisterAccount from './register-account.vue'
import LoginPassword from './login-password.vue'
import ForgetPassword from './forget-password.vue'
import { useEventBus } from '_@vueuse_core@7.7.1@@vueuse/core'
export default defineComponent({
  name: 'login-dialog',
  components: { ForgetPassword, LoginPassword, RegisterAccount },
  setup(){
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
    bus.on((params)=>{
      if(params === 'true'){
        show.value = false
      }
    })
    return {
      changeType,
      showType,
      show
    }
  }
})
</script>

<style>
#login_dialog .be-dialog .be-dialog-container,
#login_dialog .be-dialog .be-dialog-container .be-dialog-title {
  border-radius: 2px;
}

#login_dialog .be-dialog .be-dialog-container {
 width: 90%;
 min-width: 14rem;
}
#login_dialog .be-dialog-body{
  padding-top: 0;
}

#login_dialog .be-dialog-container-head {
  cursor: initial;
}

#login_dialog .request-quote-dialog {
  border-top: 5px solid #02fbbb;
}
#login_dialog .be-dialog-footer{
  display: none;
}
</style>