/* * @ver-code-dialog.vue * @deprecated * @author czh * @update (czh 2021/12/18) */
<template>
  <n-modal v-model:show="isShow" class="font-format" close-on-esc>
    <div :class="{ 'modal-container': true, 'results-container': isSuccess }">
      <h4 class="modal-header">
        <span>{{ isSuccess ? `${list!.length} Results ` : $t('lang.login.verCode') }}</span
        ><n-icon size="30" @click="isShow = false"><CloseOutline /></n-icon>
      </h4>
      <div class="modal-body">
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
      </div>
      <div class="modal-footer">
        <be-button custom-class="sure-btn" round="3" @click="submit">
          <span class="font-format">{{ $t('lang.sure') }}</span>
        </be-button>
      </div>
    </div>
  </n-modal>
</template>

<script lang="ts">
  import { watch, defineComponent, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { NInput, NModal, NIcon } from 'naive-ui'
  import { getReportByCode, IReportCode } from '../api/service'
  import { setSession } from '../utils/common'
  import composition from '../utils/mixin/common-func'
  // import config from '../enums/config'
  import ReportResult from './report-result.vue'
  import { CloseOutline } from '@vicons/ionicons5'
  type Row = { createTime: string; reportNum: string; id: string; projectName: string }
  export default defineComponent({
    name: 'VerCodeDialog',
    components: { NInput, ReportResult, NModal, NIcon, CloseOutline },
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
              if (!res.data?.length) {
                message('warning', t('lang.noResults'), 'hermit-msg')
                handleClose()
                return
              }
              message('success', t('lang.opSuccess'), 'hermit-msg')
              setSession('CETInfo', JSON.stringify(res.data))
              isSuccess.value = true
              list.value = res.data
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
