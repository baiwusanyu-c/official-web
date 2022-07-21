<template>
  <n-button class="bensin-button"></n-button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { NButton } from 'naive-ui'

  export default defineComponent({
    name: 'CustomButton',
    components: { NButton },
  })
</script>

<style lang="less" scoped>
  //   .bensin-button {
  //   }
</style>
