/* * @ver-code-dialog.vue * @deprecated * @author czh * @update (czh 2021/12/18) */
<template>
  <div id="ver_code_dialog" :class="{ big: isSuccess }">
    <be-dialog
      ref="moreNodeDialog"
      v-model:is-show="isShow"
      :titles="isSuccess ? '' : $t('lang.login.verCode')"
      layout="right"
      custom-class="request-quote-dialog font-format"
      esc-exit
      :is-drag="false"
      :is-open-modal="true">
      <template #headerIcon>
        <be-icon icon="deleteIc" @click="isShow = false"></be-icon>
      </template>
      <ReportResult v-if="isSuccess" :list="list"></ReportResult>

      <div v-else class="plus-dialog-body flex flex-col justify-center items-center w-full">
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
  import config from '../enums/config'
  import ReportResult from './report-result.vue'
  type Row = { createTime: string; reportNum: string; id: string; projectName: string }
  export default defineComponent({
    name: 'VerCodeDialog',
    components: { NInput, ReportResult },
    props: {
      keyword: {
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
          isSuccess.value = false
        }
      })
      const list = ref<Row[]>()
      const submit = (): void => {
        const params: IReportCode = {
          keyword: props.keyword,
          code: formData.value.code,
          uuid: uuid.value,
        }

        getReportByCode(params)
          .then((res: any) => {
            if (res.code === 200 && res.data) {
              message('success', t('lang.opSuccess'), 'hermit-msg')
              setSession('CETInfo', JSON.stringify(res.data))
              isSuccess.value = true
              list.value = res.data
              //https://beosin.com/audit/COMC_201808011445.pdf
              // window.open(
              //   `${config.baseURL}/audit?${res.data.reportName.match(/[^-—]+$/)[0].trim()}_${
              //     res.data.reportNum
              //   }.pdf`,
              //   `preview${res.data.reportNum}`
              // )

              // handleClose()
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
          formData.value.code = ''
          getCode()
        }
      })
      const isSuccess = ref(false)
      return {
        getCode,
        formData,
        submit,
        isShow,
        codeUrl,
        isSuccess,
        list,
      }
    },
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
