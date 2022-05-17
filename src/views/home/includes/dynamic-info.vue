<template>
  <article class="dynamic-info">
    <div class="dynamic-info-content">
      <div class="left">
        <h3 class="d-alert">
          <span class="flex items-center">
            <img src="@/assets/img/home/dynamic/dynamic-info.png" alt="" />Beosin Alert
          </span>
          <span class="d-more" @click="open('https://twitter.com/BeosinAlert', 'alert')"
            >See more</span
          >
        </h3>
        <ul class="twitter-list">
          <li v-for="it in list" :key="it.pubTime" class="twitter" @click="open(it.url)">
            <span class="flex items-center twitter-text">
              {{ it.content }}
            </span>
            <span class="time">{{ getTime(it.pubTime) }}</span>
          </li>
        </ul>
      </div>
      <div class="right w-full">
        <report-info></report-info>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
  import ReportInfo from './report-info.vue'
  import { getBeosinAlert } from '@/api/service'
  import { ref } from 'vue'

  const getTime = (time: string) => {
    if (!time) return ''
    const diff = Date.now() / 1000 - +time
    if (diff > 24 * 3600) return `1 Day Ago`
    if (diff > 3600) return `${Math.floor(diff / 3600)} Hours Ago`
    return Math.floor(diff / 60) + ' Mins Ago'
  }

  const list = ref<Item[]>()

  type Item = {
    author: string
    category: string
    content: string
    link: string
    pubTime: string
    source: string
    title: string
    url: string
  }
  getBeosinAlert().then(res => {
    list.value = res.data
  })
  const open = (url: string, tab = 'twitter') => {
    window.open(url, tab)
  }
</script>

<style scoped>
  .dynamic-info {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 40px;
    background: url('@/assets/img/home/dynamic/dynamic-info-bg.png') no-repeat center / cover #fff;
  }

  .twitter {
    padding: 16px 32px;
    background-color: #fff;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    height: 90px;
    border: 1px solid transparent;
  }
  .twitter:hover {
    border: 1px solid #44d7b6;
    box-shadow: 0px 4px 8px 0px rgb(194 194 194 / 50%);
  }
  .twitter:not(:first-child) {
    margin-top: 20px;
  }
  .twitter-list {
    margin-top: 40px;
  }
  .d-alert img {
    width: 60px;
    height: 60px;
    margin-right: 16px;
  }
  .time {
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: #838fa2;
    line-height: 20px;
    margin-left: 20px;
    flex: 0 0 auto;
  }
  .twitter-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    flex: 1 1 auto;
  }

  .d-more {
    width: 92px;
    height: 34px;
    border-radius: 8px;
    border: 1px solid #1d263b;
    font-size: 16px;
    font-weight: 400;
    color: #1d263b;
    line-height: 34px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
  }
  .d-more:hover {
    color: #44d7b6;
    border-color: #44d7b6;
  }
  .d-alert {
    font-size: 30px;
    font-weight: bold;
    color: #1d263b;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dynamic-info-content {
    max-width: 1230px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 60px;
  }
  @media screen and (max-width: 1130px) {
    .d-alert {
      font-size: 24px;
    }
    .d-alert img {
      width: 50px;
      height: 50px;
    }
    .d-more {
      transform: scale(0.9);
    }
  }
  @media screen and (max-width: 800px) {
    .dynamic-info-content {
      grid-template-columns: 100%;
      row-gap: 20px;
    }
    .dynamic-info {
      background: url('@/assets/img/home/dynamic/dynamic-info-bg2.png') no-repeat center / cover
        #fff;
      padding: 0 20px;
    }
    .d-alert img {
      width: 40px;
      height: 40px;
    }
    .d-alert span {
      font-size: 18px;
    }
    .d-alert .d-more {
      transform: scale(0.8);
    }
    .twitter-text {
      font-size: 12px;
    }
    .twitter {
      padding: 12px 10px;
    }
  }
</style>
