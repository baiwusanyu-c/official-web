<template>
  <be-button :custom-class="'custom-button ' + customClass" @click="onClick">
    <span class="font-format span-container"><slot></slot></span>
  </be-button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'CustomButton',
    props: {
      customClass: {
        type: String,
      },
    },
  })
</script>

<style lang="less" scoped>
  .custom-button {
    background-color: #1cd2a9;
    color: rgba(0, 0, 0, var(--tw-text-opacity));
    border-radius: 4px;
    font-size: 16px;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    color: #050b37;
    transition: all 0.3s;
    &:hover {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  }
  .span-container {
    display: flex;
    align-items: center;
  }
</style>
