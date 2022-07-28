<template>
  <n-modal v-model:show="isShow" class="font-format" close-on-esc>
    <div class="modal-container">
      <h4 class="modal-header">
        <span>{{ $t('lang.login.verCode') }}</span
        ><n-icon size="30" @click="isShow = false"><CloseOutline /></n-icon>
      </h4>
      <div class="modal-body">
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
      </div>
      <div class="modal-footer">
        <be-button custom-class="sure-btn" round="3" @click="submit">
          <span class="font-format">{{ $t('lang.sure') }}</span>
        </be-button>
      </div>
    </div>
  </n-modal>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { NInput, NModal, NIcon } from 'naive-ui'
  import { CloseOutline } from '@vicons/ionicons5'
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

<style lang="less" scoped>
  .modal-container {
    background-color: #eff2f7;
    width: 33.33333%;
    min-width: 24rem;
    border-radius: 2px;
    border-top: 5px solid #02fbbb;
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.25rem;
      span {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
          Courier New, monospace;
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 700;
        --tw-text-opacity: 1;
        color: #333333;
      }
      .n-icon {
        cursor: pointer;
      }
    }
    .modal-body {
      padding: 1rem 1.25rem;
    }
    .modal-footer {
      padding: 1rem 1.25rem;
      display: flex;
      justify-content: flex-end;
      .sure-btn {
        --tw-bg-opacity: 1;
        background-color: #02fbbb;
        --tw-text-opacity: 1;
        color: #000000;
        width: 7rem;
        text-align: center;
        display: flex;
        justify-content: center;
        &:hover {
          background-color: #01e099;
        }
      }
    }
  }
  .results-container {
    background-color: #fff;
    width: 100%;
    max-width: 648px;
    min-width: 320px;
    .modal-footer {
      display: none;
    }
  }
</style>
