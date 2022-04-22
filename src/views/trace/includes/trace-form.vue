<template>
  <div class="trace-form bg-[#EEF6F9]">
    <div class="trace-form-content w-77.6vw mx-auto pt-3.2vw">
      <h1 class="text-1.7vw font-bold">
        {{ $t('lang.tracePage.formTitle') }}
      </h1>
      <div class="flex items-center">
        <n-form
          ref="formRef"
          class="mt-4.3vw n-form"
          :label-width="80"
          :model="form"
          :rules="rules"
          size="medium">
          <n-form-item :label="$t('lang.tracePage.message1')">
            <n-input v-model:value="form.message1" type="textarea" placeholder="" />
          </n-form-item>
          <n-form-item :label="$t('lang.tracePage.message2')" path="message2">
            <n-input v-model:value="form.message2" type="textarea" placeholder="" />
          </n-form-item>
          <n-form-item :label="$t('lang.tracePage.message3')">
            <n-input v-model:value="form.message3" placeholder="" />
          </n-form-item>
          <n-form-item :label="$t('lang.tracePage.itemName')">
            <n-input v-model:value="form.name" placeholder="" />
          </n-form-item>
          <n-form-item :label="$t('lang.tracePage.itemEmail')" path="email">
            <n-input v-model:value="form.email" placeholder="" />
          </n-form-item>
          <n-form-item :label="$t('lang.tracePage.verify')" path="code">
            <verify-code-input
              ref="codeRef"
              v-model:code="form.code"
              v-model:uuid="form.uuid"
              class="verify-code-input"></verify-code-input>
          </n-form-item>
          <n-form-item>
            <n-button
              attr-type="button"
              class="bg-mainG trace-btn text-black w-15.3vw h-3vw min-w-230px min-h-32px hover:bg-mainGHover;"
              @click="submit">
              {{ $t('lang.tracePage.submit') }}
            </n-button>
          </n-form-item>
        </n-form>
        <img src="@/assets/img/trace/trace-form-right.png" class="right-img ml-2.8vw" alt="" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { NForm, NFormItem, NInput, NButton } from 'naive-ui'
  import { reactive, ref } from 'vue'
  import { createQuote } from '../../../api/quote'
  import { useI18n } from 'vue-i18n'
  import VerifyCodeInput from '../../../components/verify-code-input.vue'
  import composition from '../../../utils/mixin/common-func'
  const { message } = composition()
  const { t } = useI18n()

  const rules = {
    message2: { required: true, message: 'please enter Stolen transaction hash' },
    email: [
      {
        required: true,
        message: 'please enter your email address',
      },
      {
        pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        message: t('lang.login.tipErrEmail'),
      },
    ],
    code: {
      required: true,
      message: t('lang.login.tipVerCode'),
    },
  }
  const form = reactive({
    name: '',
    email: '',
    message1: '',
    message2: '',
    message3: '',
    code: '',
    uuid: '',
  })
  const formRef = ref()
  const codeRef = ref()
  const submit = async () => {
    await formRef.value.validate()
    const { name, email, code, uuid, message1, message2, message3 } = form
    createQuote({
      message: `${message1}-${message2}-${message3}`,
      name,
      email,
      code,
      uuid,
      type: 5,
    })
      .then(() => {
        message('success', t('lang.opSuccess'), 'hermit-msg')
        Object.keys(form).forEach(key => (form[key] = ''))
      })
      .catch(err => {
        message('warning', err.message, 'hermit-msg')
        codeRef.value.refreshCode()
        console.error(err)
      })
  }
  //  type?: number
</script>

<style>
  .trace-form .n-form-item-label {
    color: #666;
    font-size: 1.3vw;
  }
  .trace-form .right-img {
    width: 30%;
    height: auto;
  }
  .trace-form .n-form {
    flex: 1 1 60%;
  }
  .trace-form .n-form-item {
    margin-top: 1vw;
  }
  .trace-form .n-input__input-el,
  .trace-form .verify-code-input {
    height: 2.5vw;
    min-height: 32px;
  }

  .trace-btn {
    font-size: 18px;
    font-weight: bold;
  }
  @media screen and (max-width: 900px) {
    .trace-form-content h1 {
      font-size: 18px !important;
    }
    .trace-form-content .n-form-item-label {
      font-size: 14px !important;
    }
  }
  /* 手机 */
  @media screen and (max-width: 500px) {
    .trace-form-content {
      padding-top: 76px;
    }
    .trace-btn {
      font-size: 14px;
    }
    .right-img {
      display: none !important;
    }
    .trace-btn {
      margin: 0 auto;
    }
    .trace-form-content h1 {
      font-size: 16px !important;
    }
    .trace-form-content .n-form-item-label {
      font-size: 12px !important;
    }
  }
</style>
