<template>
  <div
    class="func-container-box flex flex-col pb-16 items-center justify-center bg-mainBlueGary box-border sm:pt-0 sm:pb-8">
    <h2 class="text-4xl font-bold m-16 font-format sm:text-lg sm:m-6 title-box">
      <slot name="title">{{ title }}</slot>
    </h2>
    <div class="func-container-content flex w-2/3 items-center justify-between flex-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'BoardItem',
    props: {
      title: {
        type: String,
      },
    },
  })
</script>

<style scoped>
  /* .func-container-box h2{
    white-space: nowrap;
    display: flex;
    justify-content: center;
  } */

  @media screen and (max-width: 1278px) {
    .func-container-box {
      padding: 0 30px;
    }
    .func-container-content {
      width: 100%;
    }
  }
</style>
