<template>
  <header class="home-header flex justify-center items-center">
    <div class="home-header-data flex items-center">
      <h1 style="font-weight: bold">
        Securing the <span class="text-[#44D7B6]">Web3.0</span> <br />Blockchain Ecosystem
      </h1>
      <ul class="flex show-list">
        <li v-for="(it, i) in list" :key="it.title" class="one-block">
          <img :src="getImageUrl(i)" alt="" />
          <h3>{{ it.title }}</h3>
          <p>{{ it.text }}</p>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
  const list = [
    {
      text: 'Smart Contracts Audited',
      title: '2329',
    },
    {
      text: 'Ecosystem Users',
      title: '1,000,330',
    },
    {
      text: 'Protected Assets',
      title: '$501B',
    },
  ]
  const getImageUrl = i => {
    return new URL(`../../../assets/img/home/00${i + 1}.svg`, import.meta.url).href
  }
</script>

<style scoped>
  .home-header {
    height: 600px;
    background: url('@/assets/img/home/header-bg.png') no-repeat;
    background-size: contain;
    background-position: center -64px;
    background-color: #0f1627;
    padding: 0 40px 150px;
  }
  .home-header-data {
    max-width: 1230px;
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-start;
  }
  .show-list {
    margin-top: 40px;
  }
  .one-block {
    width: 172px;
    height: 116px;
    border-radius: 8px;
    border: 1px solid #0b4a66;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .one-block:not(:first-child) {
    margin-left: 24px;
  }
  .one-block img {
    width: 30px;
    height: 30px;
  }
  .one-block h3 {
    color: #44d7b6;
    font-size: 20px;
    margin-top: 14px;
  }
  .one-block p {
    font-size: 12px;
    color: #ccc;
  }
  h1 {
    font-size: 64px;
    color: #fff;
    line-height: 1.2;
  }

  @media screen and (max-width: 1278px) {
    h1 {
      font-size: 48px;
    }
    .one-block h3 {
      font-size: 16px;
      margin-top: 12px;
    }
    .one-block img {
      width: 24px;
      height: 24px;
    }
    .one-block:not(:first-child) {
      margin-left: 18px;
    }
    .one-block {
      width: 172px;
      height: 116px;
    }

    .home-header {
      height: 520px;
      background-position: center -30px;
    }
  }

  @media screen and (max-width: 600px) {
    .home-header {
      height: 420px;
      padding: 0 20px 150px;
      background-position: center 0;
    }
    h1 {
      font-size: 24px;
    }

    .one-block h3 {
      margin-top: 6px;
      font-size: 12px;
    }
    .one-block img {
      width: 20px;
      height: 20px;
    }
    .one-block:not(:first-child) {
      margin-left: 5px;
    }
    .one-block {
      width: 100px;
      height: 90px;
    }
    .one-block p {
      text-align: center;
      font-size: 12px;
    }
  }
</style>
