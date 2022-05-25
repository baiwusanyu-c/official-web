<template>
  <div class="trace-form">
    <div class="trace-form-content mx-auto">
      <h2 class="trace-form-title">Contact Us</h2>
      <n-form
        ref="formRef"
        class="t-form"
        :label-width="80"
        :model="form"
        :rules="rules"
        size="medium">
        <n-form-item label="Stolen address">
          <n-input
            v-model:value="form.message1"
            type="textarea"
            placeholder="Multiple items are allowed" />
        </n-form-item>
        <n-form-item label="Stolen transaction hash" path="message2">
          <n-input
            v-model:value="form.message2"
            type="textarea"
            placeholder="Multiple items are allowed" />
        </n-form-item>
        <n-form-item label="Description">
          <n-input
            v-model:value="form.message3"
            placeholder="To guide the discussion, please give us specific details" />
        </n-form-item>
        <n-form-item label="Name">
          <n-input v-model:value="form.name" maxlength="200" placeholder="Your name" />
        </n-form-item>
        <n-form-item label="Email" path="email">
          <n-input v-model:value="form.email" maxlength="200" placeholder="Your email address" />
        </n-form-item>
        <n-form-item label="Verification Code" path="code">
          <verify-code-input
            ref="codeRef"
            v-model:code="form.code"
            v-model:uuid="form.uuid"
            class="verify-code-input"></verify-code-input>
        </n-form-item>
      </n-form>

      <n-button
        attr-type="button"
        class="bg-mainG trace-btn text-black hover:bg-mainGHover;"
        @click="submit">
        Submit
      </n-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { NForm, NFormItem, NInput, NButton } from 'naive-ui'
  import { reactive, ref } from 'vue'
  import { createQuote } from '@/api/quote'
  import { useI18n } from 'vue-i18n'
  import VerifyCodeInput from '@/components/verify-code-input.vue'
  import composition from '@/utils/mixin/common-func'
  import { getStore } from '@/utils/common'

  const { message } = composition()
  const { t } = useI18n()
  const userInfo = getStore('userInfo') && JSON.parse(getStore('userInfo'))
  const rules = {
    message2: { required: true, message: 'Please enter Stolen transaction hash' },
    email: [
      {
        required: true,
        message: 'Please enter your email address',
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
    email: userInfo?.username || '',
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
      .finally(codeRef.value.refreshCode)
  }
  //  type?: number
</script>

<style>
  .trace-form-title {
    border-top: 5px solid #01e4b7;
    width: fit-content;
    font-size: 36px;
    font-weight: bold;
    color: #1b1b1b;
    line-height: 44px;
    padding: 0 5px;
    margin: 0 auto;
    padding-top: 21px;
  }
  .trace-form .n-form-item-label {
    font-size: 24px;
    font-weight: 500;
    color: #333333;
    line-height: 32px;
  }
  .trace-form .t-form {
    width: 100%;
    margin-top: 76px;
  }
  .trace-form .n-form-item {
    margin-top: 20px;
  }
  .trace-form .n-form-item:nth-last-child(1),
  .trace-form .n-form-item:nth-last-child(2) {
    width: 60%;
  }
  .trace-form textarea,
  .trace-form input {
    font-size: 20px;
    min-height: 60px;
  }
  .trace-form {
    background: url(@/assets/img/trace/form-bg.png) no-repeat center bottom #fff;
    padding: 110px 0 80px;
  }
  .trace-form-content {
    width: 1230px;
    padding: 76px 175px 56px;
    background: url(@/assets/img/trace/form-img.png) no-repeat #efefefd6;
    background-position: calc(100% - 64px) calc(100% - 32px);
  }

  .trace-btn {
    font-size: 20px;
    font-weight: bold;
    color: #0f1627;
    line-height: 28px;
    width: 220px;
    height: 52px;
    margin-top: 30px;
    font-weight: bold;
  }
  @media screen and (max-width: 750px) {
    .trace-form-content {
      width: 750px;
      padding: 44px;
    }
    .trace-form-content {
      background: url(@/assets/img/trace/form-img.png) no-repeat #efefefd6;
      background-position: calc(100% - 32px) calc(100% - 60px);
      background-size: 255px 263px;
      padding-bottom: 80px;
    }
    .trace-form textarea,
    .trace-form input,
    .trace-form .n-input__placeholder {
      font-size: 24px !important;
    }
    .trace-form {
      padding: 80px 0 0;
    }

    .trace-btn {
      font-size: 24px;
    }
  }
</style>
