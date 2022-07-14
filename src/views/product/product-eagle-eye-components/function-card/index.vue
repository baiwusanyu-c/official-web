<template>
  <div
    class="func-item-card bg-default flex items-center justify-start p-8 box-border rounded sm:p-8">
    <img class="func-img-bg" src="@/assets/img/func-card-bg.png" />
    <div class="img-logo">
      <img :src="imgUrl" />
    </div>
    <div class="content flex-1 h-full">
      <h3 class="text-lg font-bold mb-6 font-format sm:mb-4">
        {{ title }}
      </h3>
      <ul class="content-item">
        <li v-for="content in contents" :key="content" class="mb-2">
          {{ content }}
        </li>
      </ul>
    </div>
    <!-- <h3 class="text-lg font-bold mb-8 text-center h-12 font-format sm:text-xs sm:mb-4">
      {{ title }}
    </h3>
    <img class="mb-8 sm:mb-4" :src="imgUrl" alt="" />
    <p class="font-format text-center leading-normal sm:text-xs">
      {{ $t('lang.product.eagle.funcDesc1') }}
    </p> -->
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'FunctionCard',
    props: {
      imgUrl: {
        type: String,
      },
      title: {
        type: String,
      },
      contents: {
        type: Array,
        default: () => [],
      },
    },
  })
</script>

<style scoped>
  .func-item-card {
    width: 49%;
    margin-bottom: 30px;
    height: 320px;
    position: relative;
  }
  .func-item-card .func-img-bg{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    max-height: 80%;
    display: none;
  }
  .func-item-card:nth-child(2n + 2) {
    margin-right: 0;
  }
  .func-item-card:last-child {
    width: 100%;
    margin-right: 0;
    margin-bottom: 0;
  }
  .func-item-card:last-child .func-img-bg{
    display: block;
  }

  .func-item-card .img-logo {
    width: 140px;
    margin-right: 20px;
  }
  .func-item-card .img-logo img {
    display: block;
    width: 100%;
  }
  .func-item-card .content .content-item li {
    padding-left: 20px;
    position: relative;
    color: #444444
  }
  .func-item-card .content .content-item li::before {
    content: '';
    width: 10px;
    height: 10px;
    background: #1cd2a9;
    position: absolute;
    top: 5px;
    left: 0;
  }

  @media screen and (max-width: 1520px) {
    .func-item-card {
      height: 410px;
    }
  }

  @media screen and (max-width: 1278px) {
    .func-item-card {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (min-width: 100px) and (max-width: 520px) {
    .func-item-card .img-logo {
      width: 70px;
      margin-right: 10px;
    }
  }
</style>
