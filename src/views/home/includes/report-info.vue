<template>
  <h3 class="d-project h-12 w-full relative pl-5.5">
    Audited projects
    <input
      v-model="keyword"
      type="text"
      class="home-search-input"
      :placeholder="placeholder"
      @focus="changePlaceholder(`Enter the report number/name`)"
      @blur="changePlaceholder('Search')"
      @keypress.enter="showDialog" />
    <img
      src="@/assets/img/home/search.png"
      class="h-5 w-5 cursor-pointer d-project-img"
      @click="showDialog" />
  </h3>
  <ul class="flex-col flex items mt-11.5 list">
    <li
      v-for="it in list"
      :key="it.url"
      class="row flex items-center text-xl px-5.5 h-13 justify-between rounded-6px cursor-pointer hover:bg-[#fff]"
      @click="toReport(it)">
      <span class="row-left flex items-center overflow-hidden">
        <img :src="it.img" class="w-8 h-8" alt="" />
        <span class="ell break-all ml-4.25 text-[#1D263B]"> {{ it.name }} </span>
      </span>
      <span class="text-[#1D263B] flex-none ml-10px row-right">{{ it.time }}</span>
    </li>
  </ul>
  <VerifyCodeDialog ref="verifyRef" :keyword="keyword"></VerifyCodeDialog>
</template>

<script setup lang="ts">
  import VerifyCodeDialog from '../../../components/ver-code-dialog.vue'
  import { ref } from 'vue'
  import composition from '@/utils/mixin/common-func'
  const { message } = composition()
  type Row = { name: string; time: string; url: string }
  function getImageUrl(name) {
    return new URL(`../../../assets/img/home/dynamic/${name}.png`, import.meta.url).href
  }
  const placeholder = ref('Search')
  const changePlaceholder = v => {
    placeholder.value = v
  }
  const list = ref([
    {
      name: 'ANKR',
      time: '2022',
      url: 'https://beosin.com/audits/Ankr_202203091900.pdf',
      img: getImageUrl('r-1'),
    },
    {
      name: 'CakePool',
      time: '2022',
      url: 'https://beosin.com/audits/cake-pool_202204211617.pdf',
      img: getImageUrl('r-3'),
    },
    {
      name: 'JGN',
      time: '2022',
      url: 'https://beosin.com/audits/JGN_202111161121.pdf',
      img: getImageUrl('r-4'),
    },
    {
      name: 'SpaceRunners',
      time: '2022',
      url: 'https://beosin.com/audits/Space%20Runners_202205091054.pdf',
      img: getImageUrl('r-6'),
    },
    {
      name: 'Froyo',
      time: '2022',
      url: 'https://beosin.com/audits/Froyo_202204252037.pdf',
      img: getImageUrl('r-5'),
    },
    {
      name: 'Hotcross',
      time: '2021',
      img: getImageUrl('r-2'),
      url: 'https://beosin.com/audits/hotcross_202109031805.pdf',
    },
    {
      name: 'Clover',
      time: '2021',
      url: 'https://beosin.com/audits/Clover_202104301835.pdf',
      img: getImageUrl('r-7'),
    },
    {
      name: 'Aelf',
      time: '2021',
      url: 'https://beosin.com/audits/AElf%20Quadratic%20Fundi_202112312134.pdf',
      img: getImageUrl('r-8'),
    },
  ])
  const toReport = (row: Row) => {
    window.open(row.url, `preview-report`)
  }
  const keyword = ref('')
  const verifyRef = ref()
  const showDialog = () => {
    keyword.value = keyword.value.trim()
    if (!keyword.value) {
      message('warning', 'Please enter keyword', 'hermit-msg')
      return
    }
    verifyRef.value.isShow = true
  }
</script>

<style scoped>
  .d-project img {
    position: absolute;
    right: 6px;
  }

  .home-search-input {
    height: 44px;
    line-height: 44px;
    position: absolute;
    border-radius: 8px;
    right: 0;
    padding: 0 40px 0 16px;
    height: 40px;
    font-size: 18px;
    font-weight: 400;
    color: #1d263b;
    line-height: 40px;
    width: 130px;
    transition: all 0.3s;
    border: 1px solid #1d263b;
    background-color: #fff;
  }
  .home-search-input:focus {
    width: 100%;
    box-shadow: 0px 4px 8px 0px rgba(194, 194, 194, 0.5);
    border-radius: 8px;
    border: 1px solid #1cd2a9;
  }

  .row {
    margin-top: 13px;
  }

  .d-project {
    font-size: 30px;
    font-weight: bold;
    color: #1d263b;
    line-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 1130px) {
    .d-project {
      font-size: 24px;
      height: 40px;
    }
    .home-search-input {
      height: 34px;
      font-size: 16px;
    }
    .d-project-img {
      height: 16px;
      width: 16px;
    }
  }
  @media screen and (max-width: 800px) {
    .d-project {
      font-size: 20px;
      padding-left: 0;
    }
    .row {
      padding: 0 10px;
    }
    .list {
      margin-top: 0px;
      padding-bottom: 10px;
    }
    .home-search-input {
      height: 30px;
      font-size: 14px;
    }
    .d-project-img {
      height: 15px;
      width: 15px;
    }
    .row-left {
      font-size: 14px;
    }
    .row-right {
      font-size: 14px;
    }
  }
</style>
