<template>
  <div class="verify-code-input flex">
    <n-input :value="data.code" class="verify-n-input" :on-input="change" />
    <img :src="img" class="ml-10px verify-code-img3 cursor-pointer" @click="getCode" />
  </div>
</template>
<script lang="ts" setup>
  import { NInput } from 'naive-ui'
  import { getCodeImg } from '../api/login'
  import { ref } from 'vue'
  type Props = {
    uuid: string
    code: string
  }

  const data = defineProps<Props>()
  const emit = defineEmits<{
    (e: 'update:uuid', d: string): void
    (e: 'update:code', d: string): void
  }>()

  const img = ref('')
  const getCode = () => {
    getCodeImg().then((res: any) => {
      emit('update:uuid', res.uuid)
      img.value = 'data:image/gif;base64,' + res.img
    })
  }
  getCode()
  const change = v => {
    emit('update:code', v)
  }

  defineExpose({
    refreshCode: getCode,
  })
</script>

<style>
  .verify-code-input {
    width: 100%;
  }
  .verify-code-img3 {
    height: 100% !important;
    flex: 0 0 auto;
  }

  .verify-n-input {
    flex: 1 1 auto;
  }
  .verify-code-input .verify-code-input .n-input__input-el {
    height: 100% !important;
  }
</style>
