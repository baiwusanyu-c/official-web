<template>
  <div class="banner-card">
    <Swiper
      class="card-content card-content-max"
      :space-between="0"
      :loop="true"
      :slides-per-view="3"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      navigation
      :initial-slide="0">
      <SwiperSlide>
        <div class="card-1 card" @click="$router.push('/index/service/contracts')">
          <h2 class="title2">Blockchain Security Audit</h2>
          <p class="text2">
            Provide blockchain security auditing services in blockchains, smart contracts, and Web3
            apps using the formal verification and thorough cybersecurity techniques.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="card-2 card" @click="$router.push('/index/product/productVaaS')">
          <h2 class="title2">Beosin VaaS</h2>
          <p class="text2">Improve the security of smart contracts for developers</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="card-3 card" @click="$router.push('/index/product/productEagle')">
          <h2 class="title2">Beosin Eagle Eye</h2>
          <p class="text2">
            Provide Dapp operators with project intelligence and real-time risk alerts
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="card-4 card" @click="$router.push('/index/service/trace')">
          <h2 class="title2">Cryptocurrency Tracing</h2>
          <p class="text2">
            Help users track the flow of Crypto Assets, monitor suspicious addresses, and assist in
            recovering assets on the chain.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="card-content card-content-min">
      <div class="card-1 card" @click="$router.push('/index/service/contracts')">
        <h2 class="title2">Blockchain Security Audit</h2>
        <p class="text2">
          Provide blockchain security auditing services in blockchains, smart contracts, and Web3
          apps using the formal verification and thorough cybersecurity techniques.
        </p>
      </div>
      <div class="card-2 card" @click="$router.push('/index/product/productVaaS')">
        <h2 class="title2">Beosin VaaS</h2>
        <p class="text2">Improve the security of smart contracts for developers</p>
      </div>
      <div class="card-3 card" @click="$router.push('/index/product/productEagle')">
        <h2 class="title2">Beosin Eagle Eye</h2>
        <p class="text2">
          Provide Dapp operators with project intelligence and real-time risk alerts
        </p>
      </div>
      <div class="card-4 card" @click="$router.push('/index/service/trace')">
        <h2 class="title2">Cryptocurrency Tracing</h2>
        <p class="text2">
          Help users track the flow of Crypto Assets, monitor suspicious addresses, and assist in
          recovering assets on the chain.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  import SwiperCore, { Autoplay, Navigation } from 'swiper'
  SwiperCore.use([Autoplay, Navigation])
</script>

<style scoped>
  .title2 {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
  .text2 {
    color: #ffffffcc;
    font-size: 14px;
    margin-top: 10px;
  }
  .card-1 {
    background: url('@/assets/img/home/card/1.png') no-repeat center / cover;
  }
  .card-2 {
    background: url('@/assets/img/home/card/2.png') no-repeat center / cover;
  }
  .card-3 {
    background: url('@/assets/img/home/card/3.png') no-repeat center / cover;
  }
  .card-4 {
    background: url('@/assets/img/home/card/4.png') no-repeat center / cover;
  }
  .card-1 {
    background-color: #fff;
  }
  .card {
    height: 100%;
    justify-content: space-between;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
  }
  .card {
    cursor: pointer;
  }
  .card:hover {
    box-shadow: 0 0 0px 2px rgba(68, 215, 182, 0.5) inset;
  }
  :deep(.swiper-slide) {
    height: auto !important;
  }
  .banner-card {
    position: relative;
    background-color: #fff;
    display: flex;
    justify-content: center;
    margin-bottom: -140px;
  }

  .card-content {
    min-height: 260px;
    width: 1230px;
    margin: 0 40px;
    transform: translateY(-140px);
  }
  .card-content-min {
    display: none;
  }
  @media screen and (max-width: 952px) {
    .card-content-max {
      display: none;
    }

    .card {
      padding: 20px;
    }
    .title2 {
      font-size: 16px;
    }
    .text2 {
      font-size: 13px;
      height: auto;
      min-height: 60px;
    }
    .card-content-min {
      height: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 600px) {
    .card-1 {
      background: url('@/assets/img/home/card/s1.png') no-repeat center / cover;
    }
    .card-2 {
      background: url('@/assets/img/home/card/s2.png') no-repeat center / cover;
    }
    .card-3 {
      background: url('@/assets/img/home/card/s3.png') no-repeat center / cover;
    }
    .card-4 {
      background: url('@/assets/img/home/card/s4.png') no-repeat center / cover;
    }
    .card-content-min {
      margin: 0 20px;
    }
    .card {
      min-height: 210px;
    }
    .card-content-max {
      display: none;
    }

    .text2 {
      font-size: 12px;
    }
    .card {
      padding: 15px 10px;
    }
    .title2 {
      font-size: 14px;
    }
  }
</style>
<style>
  .banner-card .swiper-button-next:after,
  .banner-card .swiper-button-prev:after {
    font-size: 16px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.3);
    width: 25px;
    height: 25px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    padding-top: 6px;
    padding-left: 0px;
    color: #aaa;
    flex: 0 0 auto;
  }
</style>
