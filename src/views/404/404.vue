/* * @404.vue * @deprecated * @author czh * @update (czh 2021/12/20) */
<template>
  <div class="notfound">
    <div class="content-area flex items-center justify-center">
      <img src="../../../src/assets/img/404.png" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: '404Page',
  })
</script>
<style scoped>
  .notfound .content-area {
    width: 100vw;
    height: calc(100vh - 200px);
  }
</style>
