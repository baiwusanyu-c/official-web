<template>
  <div class="header">
    <div class="auto-content header-content">
      <img src="@/assets/img/report/ss.png" class="header-img" alt="" />
      <div class="header-right">
        <div>Find a Audit Report</div>
        <div class="search-content">
          <input type="text" />
          <n-button
            attr-type="button"
            class="bg-mainG trace-btn text-black hover:bg-mainGHover;"
            @click="submit">
            Search
          </n-button>
        </div>
      </div>
    </div>
  </div>
  <div class=""></div>
</template>
<script setup>
  import { scale } from '@/utils/scale'
</script>
<style scoped>
  .header {
    height: 232px;
    background: #15263a;
  }
  .auto-content {
    width: 1230px;
  }
</style>
