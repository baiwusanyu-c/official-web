<template>
  <be-button :custom-class="'custom-button ' + customClass" @click="onClick">
    <span class="font-format span-container"><slot></slot></span>
  </be-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    customClass: {
      type: String
    }
  }
})
</script>

<style lang="less" scoped>
  .custom-button{
    background-color: rgba(2, 251, 187, var(--tw-bg-opacity));
    color: rgba(0, 0, 0, var(--tw-text-opacity));
    font-size: 16px;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    color: #050B37;
  }
  .span-container{
    display: flex;
    align-items: center;
  }
</style>