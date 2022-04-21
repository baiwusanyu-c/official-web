<template>
  <div class="trace-form bg-[#EEF6F9]">
    <div class="trace-form-content w-77.6vw mx-auto pt-3.2vw">
      <h2 class="text-1.7vw">For on-chain tracing needs, do not hesitate to contact us.</h2>
      <div class="flex items-center">
        <n-form
          ref="formRef"
          class="mt-4.3vw n-form"
          :label-width="80"
          :model="form"
          :rules="rules"
          size="medium">
          <n-form-item label="Stolen address (multiple fields are allowed):">
            <n-input v-model:value="form.message1" type="textarea" placeholder="" />
          </n-form-item>
          <n-form-item
            label="Stolen transaction hash (multiple fields are allowed):"
            path="message2">
            <n-input v-model:value="form.message2" type="textarea" placeholder="" />
          </n-form-item>
          <n-form-item label="Detailed description:">
            <n-input v-model:value="form.message3" placeholder="" />
          </n-form-item>
          <n-form-item label="Your name:" path="name">
            <n-input v-model:value="form.name" placeholder="" />
          </n-form-item>
          <n-form-item label="Your email address:" path="email">
            <n-input v-model:value="form.email" placeholder="" />
          </n-form-item>
          <n-form-item label="Your email address:" path="email">
            <n-input v-model:value="form.email" placeholder="" />
          </n-form-item>
          <n-form-item label="VERIFICATION CODE:">
            <n-button
              attr-type="button"
              class="bg-mainG text-black w-28 hover:bg-mainGHover;"
              @click="submit">
              submit
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
  const submit = async () => {
    await formRef.value.validate()
    const { name, email, code, uuid, message1, message2, message3 } = form
    createQuote({
      message: `${message1}-${message2}-${message3}`,
      name,
      email,
      code,
      uuid,
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
    width: 60%;
  }
  .trace-form .n-form-item {
    margin-top: 1vw;
  }
</style>
