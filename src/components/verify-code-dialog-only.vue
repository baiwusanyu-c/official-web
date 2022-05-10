<template>
  <div id="ver_code_dialog">
    <be-dialog
      ref="moreNodeDialog"
      v-model:is-show="isShow"
      titles="verification code"
      layout="right"
      custom-class="request-quote-dialog font-format"
      esc-exit
      :is-drag="false"
      :is-open-modal="true">
      <template #headerIcon>
        <be-icon icon="deleteIc" @click="isShow = false"></be-icon>
      </template>

      <div class="plus-dialog-body flex flex-col justify-center items-center w-full">
        <div class="flex w-full mb-12">
          <div class="flex-1 mr-6">
            <n-input
              :value="code"
              size="large"
              @input="v => (code = v.replace(/\D/g, ''))"
              @keyup.enter="submit" />
          </div>
          <div class="flex-1" @click="getCode()">
            <img :src="codeUrl" alt="" style="height: 40px" />
          </div>
        </div>
      </div>

      <template #footer>
        <be-button custom-class="sure-btn" round="3" @click="submit">
          <span class="font-format">{{ $t('lang.sure') }}</span>
        </be-button>
      </template>
    </be-dialog>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { NInput } from 'naive-ui'
  import { getCodeImg } from '../api/login'
  import composition from '../utils/mixin/common-func'
  const emit = defineEmits<{
    (e: 'submit', v: { code: string; uuid: string }): void
  }>()
  const isShow = ref<boolean>(false)

  const codeUrl = ref('')
  const code = ref('')
  let uuid = ''
  const getCode = () => {
    getCodeImg().then((res: any) => {
      uuid = res.uuid
      codeUrl.value = 'data:image/gif;base64,' + res.img
    })
  }
  getCode()
  const { message } = composition()
  const submit = () => {
    if (code.value === '') {
      message('warning', 'please enter verification code', 'hermit-msg')
      return
    }
    emit('submit', { code: code.value, uuid })
  }
  const hidden = () => {
    isShow.value = false
  }
  const show = () => {
    isShow.value = true
    code.value = ''
    getCode()
  }

  defineExpose({
    show,
    hidden,
  })
</script>

<!-- prettier-ignore -->
<style>
#ver_code_dialog .be-dialog .be-dialog-container,
#ver_code_dialog .be-dialog .be-dialog-container .be-dialog-title {
  border-radius: 2px;

  @apply bg-mainBlueGary;
}

#ver_code_dialog .be-dialog .be-dialog-container {
  @apply w-1/3;
}

#ver_code_dialog .be-dialog-container-head {
  cursor: initial;
}

#ver_code_dialog .request-quote-dialog {
  border-top: 5px solid #02fbbb;
}

#ver_code_dialog .sure-btn {
  @apply bg-mainG text-black w-28 hover:bg-mainGHover;
}

#ver_code_dialog .plus-dialog-body {
  @apply bg-mainBlueGary;
}

#ver_code_dialog .plus-dialog-body .label {
  @apply text-black text-lg mb-2 font-light;
}
#ver_code_dialog.big .be-dialog-container{
  width: 100%;
  max-width: 648px;
  min-width: 320px;
  background-color: #fff;
}
#ver_code_dialog.big .be-dialog-title {
  background-color: #fff !important;
}
#ver_code_dialog.big .be-dialog-footer {
  display:none !important;
}


/* .request-quote-dialog .be-dialog-footer,
.request-quote-dialog .be-dialog-title{
     border-radius: 2px;
 } */
</style>
