/* * @ver-code-dialog.vue * @deprecated * @author czh * @update (czh 2021/12/18) */
<template>
  <div id="ver_code_dialog">
    <be-dialog
      ref="moreNodeDialog"
      v-model:is-show="isShow"
      :titles="$t('lang.login.verCode')"
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
              v-model:value="formData.code"
              :on-input="
                () => {
                  formData.code = formData.code.replace(/[^\d]/g, '')
                }
              "
              size="large"
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

<script lang="ts">
  import { watch, defineComponent, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { NInput } from 'naive-ui'
  import { getReportByCode, IReportCode } from '../api/service'
  import { setSession } from '../utils/common'
  import composition from '../utils/mixin/common-func'
  export default defineComponent({
    name: 'VerCodeDialog',
    components: { NInput },
    props: {
      num: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const { message } = composition()
      const isShow = ref<boolean>(false)
      const formData = ref<IReportCode>({})
      const { t } = useI18n()
      const handleClose = (): void => {
        isShow.value = false
      }
      watch(isShow, nVal => {
        if (!nVal) {
          formData.value = {}
        }
      })
      const submit = (): void => {
        const params: IReportCode = {
          num: formData.value.num,
          code: formData.value.code,
          uuid: uuid.value,
        }
        getReportByCode(params)
          .then((res: any) => {
            if (res.code === 200 && res.data) {
              message('success', t('lang.opSuccess'), 'hermit-msg')
              setSession('CETInfo', JSON.stringify(res.data))
              window.open('#/report', 'view_window')
              handleClose()
            } else {
              message('warning', t('lang.noResults'), 'hermit-msg')
              getCode()
            }
          })
          .catch(err => {
            message('warning', err.message, 'hermit-msg')
            getCode()
            console.error(err)
          })
      }
      const { codeUrl, getCode, uuid } = composition()
      watch(isShow, (nVal: boolean) => {
        if (nVal) {
          formData.value.num = (props.num && parseInt(props.num)) || undefined
          formData.value.code = ''
          getCode()
        }
      })
      return {
        getCode,
        formData,
        submit,
        isShow,
        codeUrl,
      }
    },
  })
</script>

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

  /* .request-quote-dialog .be-dialog-footer,
.request-quote-dialog .be-dialog-title{
     border-radius: 2px;
 } */
</style>
