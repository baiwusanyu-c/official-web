/* * @request-quote-dialog.vue * @deprecated @author czh * @update (czh 2021/12/17) */
<template>
  <div id="request_quote_dialog">
    <n-modal
      v-model:show="isShow"
      preset="dialog"
      :title="$t('lang.header.requestUs')"
      to="#request_quote_dialog">
      <template #header>
        <p class="pb-6 font-bold font-format md:pb-4">
          {{ $t('lang.header.requestUs') }}
        </p>
      </template>
      <div class="plus-dialog-body flex flex-col justify-center items-center w-full">
        <div class="flex w-full mb-8 md:mb-4 sm:flex-col sm:mb-4">
          <div class="flex-1 mr-6 sm:mb-4 sm:mr-0">
            <p class="label font-format">
              {{ $t('lang.quoteDialog.projectName') }}
              <span style="color: red">*</span>
            </p>
            <n-select
              v-model:value="formData.type"
              placeholder="Select"
              size="large"
              :options="selectList" />
          </div>
          <div class="flex-1">
            <p class="label font-format">
              {{ $t('lang.quoteDialog.yourName') }}
            </p>
            <n-input v-model:value="formData.name" maxlength="200" size="large" />
          </div>
        </div>
        <div class="flex flex-col w-full mb-8 md:mb-4 sm:mb-4">
          <p class="label font-format">
            {{ $t('lang.quoteDialog.companyName') }}
          </p>
          <n-input v-model:value="formData.company" maxlength="30" size="large" />
        </div>
        <div class="flex flex-col w-full mb-8 md:mb-4 sm:mb-4">
          <p class="label font-format">
            {{ $t('lang.quoteDialog.email') }}
            <span style="color: red">*</span>
          </p>
          <n-input v-model:value="formData.email" maxlength="200" size="large" />
        </div>
        <!--<div class="flex flex-col w-full mb-8 md:mb-4 sm:mb-4">
            <p class="label font-format">{{ $t('lang.quoteDialog.phone') }}</p>
            <n-input v-model:value="formData.mobile" size="large" />
          </div>-->
        <div class="flex flex-col w-full mb-8 md:mb-4 sm:mb-4">
          <p class="label font-format">{{ $t('lang.quoteDialog.message') }}</p>
          <n-input
            v-model:value="formData.message"
            type="textarea"
            :placeholder="$t('lang.quoteDialog.messageP')"
            :autosize="{ minRows: 4, maxRows: 6 }" />
        </div>
        <div class="flex w-full mb-8 md:mb-4 sm:mb-4">
          <div class="flex-1 mr-6">
            <p class="label font-format">
              {{ $t('lang.quoteDialog.code') }}
              <span style="color: red">*</span>
            </p>
            <n-input
              v-model:value="formData.code"
              size="large"
              :on-input="
                () => {
                  formData.code = formData.code.replace(/[^\d]/g, '')
                }
              " />
          </div>
          <div class="flex-1 relative">
            <img
              :src="codeUrl"
              alt=""
              class="absolute bottom-0 left-0"
              style="height: 42px"
              @click="getCode(formData)" />
          </div>
        </div>
      </div>
      <template #action>
        <n-button color="#02fbbb" text-color="#000" class="sure-btn" @click="submit">
          {{ $t('lang.sure') }}
        </n-button>
      </template>
    </n-modal>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue'
  import { NInput, NSelect, NModal, NButton } from 'naive-ui'
  import { IOption } from '../utils/types'
  import { useI18n } from 'vue-i18n'
  import { createQuote, IQuote } from '../api/quote'
  import { verEmail } from '../utils/common'
  import composition from '../utils/mixin/common-func'
  import { getStore } from '../utils/common'

  export default defineComponent({
    name: 'RequestQuoteDialog',
    components: {
      NSelect,
      NModal,
      NInput,
      NButton,
    },
    setup() {
      const { message, codeUrl, getCode, uuid } = composition()
      const isShow = ref<boolean>(false)
      const handleClose = (): void => {
        isShow.value = false
      }
      watch(isShow, nVal => {
        const userInfo = getStore('userInfo') && JSON.parse(getStore('userInfo'))
        if (nVal) {
          formData.value = {
            name: '',
            email: userInfo?.username || '',
            type: 1,
            code: '',
            mobile: '',
            message: '',
            company: '',
          }
        }
        getCode()
      })
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
        if (!formData.value.type) {
          tipStr = t('lang.login.tipProject')
          verMsg(tipStr)
          return false
        }
        if (!formData.value.email) {
          tipStr = t('lang.login.tipAccount')
          verMsg(tipStr)
          return false
        }
        if (!verEmail(String(formData.value.email))) {
          tipStr = t('lang.login.tipErrEmail')
          verMsg(tipStr)
          return false
        }
        if (!formData.value.code) {
          tipStr = t('lang.login.tipVerCode')
          verMsg(tipStr)
          return false
        }
        return true
      }
      const submit = (): void => {
        if (!verifyCodeForm()) {
          getCode()
          return
        }
        const params: IQuote = {
          name: formData.value.name,
          company: formData.value.company,
          email: formData.value.email,
          type: formData.value.type,
          mobile: formData.value.mobile,
          message: formData.value.message,
          code: formData.value.code,
          uuid: uuid.value,
        }
        createQuote(params)
          .then((res: any) => {
            if (res.code === 200) {
              message('success', t('lang.opSuccess'), 'hermit-msg')
              handleClose()
              //paginationReactive.itemCount = 1
            }
          })
          .catch(err => {
            message('warning', err.message, 'hermit-msg')
            getCode()
            console.error(err)
          })
      }
      const userInfo = getStore('userInfo') && JSON.parse(getStore('userInfo'))

      const formData = ref<IQuote>({
        name: '',
        email: userInfo?.username || '',
        type: 1,
        code: '',
        mobile: '',
        message: '',
        company: '',
      })
      const { t } = useI18n()
      let selectList: IOption = ref([
        { label: t('lang.projectList.project1'), value: 1 },
        { label: t('lang.projectList.project2'), value: 2 },
        { label: t('lang.projectList.project3'), value: 3 },
        { label: t('lang.projectList.project4'), value: 4 },
        { label: t('lang.projectList.project5'), value: 5 },
        { label: t('lang.projectList.project6'), value: 6 },
      ])

      return {
        codeUrl,
        getCode,
        formData,
        submit,
        selectList,
        isShow,
      }
    },
  })
</script>

<!-- prettier-ignore -->
<style>
  #request_quote_dialog .n-dialog {
    width: 600px;
    background: #eff2f7 !important;
    border-top: 5px solid #02fbbb;
  }

  #request_quote_dialog .request-quote-dialog {
    border-top: 5px solid #02fbbb;
  }

  #request_quote_dialog .sure-btn {
    font-family: SourceHanSansNormal, sans-serif !important;
    border-radius: 3px;

    @apply bg-mainG text-black w-28 hover:bg-mainGHover;
  }

  #request_quote_dialog .sure-btn .be-button-slot {
    font-family: SourceHanSansNormal, sans-serif !important;
  }

  #request_quote_dialog .plus-dialog-body {
    @apply bg-mainBlueGary;
  }

  #request_quote_dialog .plus-dialog-body .label {
    @apply text-black text-sm mb-2 font-light;
    font-size: .675rem;
  }

  #request_quote_dialog .n-dialog.n-dialog--icon-left .n-dialog__icon {
    display: none;
  }
</style>
