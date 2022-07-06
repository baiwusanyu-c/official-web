/* * @product-eagle-eye.vue * @deprecated 产品介绍页面 - 态势感知 * @author czh * @update (czh
2021/12/17) */
<template>
  <div id="product_eagle" class="product-page">
    <!--    头部介绍    -->
    <div class="page-head relative">
      <div class="header-text">
        <div class="header-text-big font-format">
          {{ $t('lang.companyName') }} <span>{{ $t('lang.product.eagle.title') }}</span>
        </div>
        <div class="header-text-small font-format leading-normal">
          {{ $t('lang.product.eagle.subTitle') }}
        </div>
        <!--        <be-button
          custom-class="try-out-btn h-btn-txt-black linear-l-r text-black text-xl sm:absolute sm:bottom-8 sm:inset-x-0"
        >{{ $t('lang.tryoutBtn') }}
        </be-button>-->
      </div>
      <div class="eagle-header-logo sm:hidden"></div>
    </div>

    <!--    文字介绍 & 走马灯   -->
    <div
      class="relative flex items-center justify-center text-center box-border product-desc-body bg-mainBlueGary w-full flex-col">
      <!--   mobile   -->
      <h2 class="display-none text-4xl font-bold font-format sm:text-lg sm:mb-4 sm:flex title-box">
        {{ $t('lang.product.eagle.funcDisplay') }}
      </h2>
      <div class="p-8 w-2/3 rounded-md product-desc sm:w-full sm:relative">
        <h2 class="text-4xl font-bold font-format sm:hidden">
          {{ $t('lang.product.eagle.funcDisplay') }}
        </h2>
        <!--     走馬燈      -->
        <div
          class="mt-10 product-swiper w-full h-full md:mt-8 sm:mt-4 sm:bg-default sm:p-2 sm:rounded">
          <h-product-swiper></h-product-swiper>
        </div>
        <p
          class="text-lg font-format text-justify leading-normal px-12 mt-12 sm:text-xs sm:mt-4 sm:px-0">
          {{ $t('lang.product.eagle.desc') }}
        </p>
      </div>
    </div>
    <!--    主要功能   -->
    <board-item :title="$t('lang.product.eagle.funcTitle')">
      <function-card
        v-for="option in functionOptions"
        :key="option.title"
        :img-url="option.imgUrl"
        :title="option.title"
        :contents="option.contents" />
    </board-item>
    <!-- <div
      class="func-container flex flex-col pb-16 items-center justify-center bg-mainBlueGary box-border sm:pt-0 sm:pb-8">
      <h2 class="text-4xl font-bold m-16 font-format sm:text-lg sm:m-6 title-box">
        {{ $t('lang.product.eagle.funcTitle') }}
      </h2>
      <div class="flex w-full items-center justify-center sm:flex-wrap">
        <function-card
          v-for="option in functionOptions"
          :key="option.title"
          :imgUrl="option.imgUrl"
          :title="option.title"
          :contents="[]"
        />
        <div
          class="func-card bg-default flex flex-col items-center justify-start shadow-2xl mx-6 p-8 box-border rounded sm:m-2 sm:p-2">
          <h3 class="text-lg font-bold mb-8 text-center h-12 font-format sm:text-xs sm:mb-4">
            {{ $t('lang.product.eagle.funcSubTitle1') }}
          </h3>
          <img class="mb-8 sm:mb-4" src="../../assets/img/eagle-func1.png" alt="" />
          <p class="font-format text-center leading-normal sm:text-xs">
            {{ $t('lang.product.eagle.funcDesc1') }}
          </p>
        </div>
        <div
          class="func-card bg-default flex flex-col items-center justify-start shadow-2xl mx-6 p-8 box-border rounded sm:m-2 sm:p-2">
          <h3 class="text-lg font-bold mb-8 text-center h-12 font-format sm:text-xs sm:mb-2">
            {{ $t('lang.product.eagle.funcSubTitle2') }}
          </h3>
          <img class="mb-8 sm:mb-4" src="../../assets/img/eagle-func2.png" alt="" />
          <p class="font-format text-center leading-normal sm:text-xs">
            {{ $t('lang.product.eagle.funcDesc2') }}
          </p>
        </div>
        <div
          class="func-card bg-default flex flex-col items-center justify-start shadow-2xl mx-6 p-8 box-border rounded sm:mx-2 sm:p-2">
          <h3 class="text-lg font-bold mb-8 text-center h-12 font-format sm:text-xs sm:mb-4">
            {{ $t('lang.product.eagle.funcSubTitle3') }}
          </h3>
          <img class="mb-8 sm:mb-4" src="../../assets/img/eagle-func3.png" alt="" />
          <p class="font-format text-center leading-normal sm:text-xs">
            {{ $t('lang.product.eagle.funcDesc3') }}
          </p>
        </div>
        <div
          class="func-card bg-default flex flex-col items-center justify-start shadow-2xl mx-6 p-8 box-border rounded sm:mx-2 sm:p-2">
          <h3 class="text-lg font-bold mb-8 text-center h-12 font-format sm:text-xs sm:mb-4">
            {{ $t('lang.product.eagle.funcSubTitle4') }}
          </h3>
          <img class="mb-8 sm:mb-4" src="../../assets/img/eagle-func4.png" alt="" />
          <p class="font-format text-center leading-normal sm:text-xs">
            {{ $t('lang.product.eagle.funcDesc4') }}
          </p>
        </div>
      </div>
    </div> -->
    <!--    核心特色    -->
    <!-- <div
      class="advant-container flex w-full py-16 flex-col justify-center relative px-20b sm:px-4 sm:py-10">
      <video
        key="product-vass-video1"
        class="absolute left-0 top-0 bottom-0 top-0"
        style="z-index: 0; width: 100%; height: 100%; object-fit: fill"
        src="../../assets/video/wave.webm"
        muted="muted"
        autoplay="autoplay"
        loop="loop"></video>
      <h2
        class="text-4xl font-bold mb-16 text-default text-center font-format sm:text-lg sm:mb-2"
        style="z-index: 1">
        {{ $t('lang.product.eagle.advantTitle') }}
      </h2>
      <core-advantages :index="1" type="eagle"></core-advantages>
      <core-advantages :index="2" type="eagle"></core-advantages>
      <core-advantages :index="3" type="eagle"></core-advantages>
      <core-advantages :index="4" type="eagle"></core-advantages>
    </div> -->
    <!--    支持币种    -->

    <board-item :title="$t('lang.product.eagle.supportTitle')">
      <template #title>
        <span class="support-pc-title">{{ $t('lang.product.eagle.supportTitle') }}</span>
        <span class="support-mobile-title">{{ $t('lang.product.eagle.supportMobileTitle') }}</span>
      </template>
      <ul class="support-container w-full flex flex-wrap">
        <li class="item-bsc">
          <img src="@/assets/img/support-bg-etc.png" />
          <div class="flex items-center justify-center">
            <img src="@/assets/img/support-icon-etc.png" />ETC
          </div>
        </li>
        <li class="item-bsc">
          <img src="@/assets/img/support-bg-bsc.png" />
          <div class="flex items-center justify-center">
            <img src="@/assets/img/support-icon-bsc.png" />BSC
          </div>
        </li>
        <li class="item-polygon">
          <img src="@/assets/img/support-bg-polygon.png" />
          <div class="flex items-center justify-center">
            <img src="@/assets/img/support-icon-polygon.png" />POLYGON
          </div>
        </li>
        <li class="item-tron">
          <img src="@/assets/img/support-bg-tron.png" />
          <div class="flex items-center justify-center">
            <img src="@/assets/img/support-icon-tron.png" />TRON
          </div>
        </li>
        <li class="item-heco">
          <img src="@/assets/img/support-bg-heco.png" />
          <div class="flex items-center justify-center">
            <img src="@/assets/img/support-icon-heco.png" />HECO
          </div>
        </li>
      </ul>
    </board-item>
    <!-- <div
      class="support-c-container flex bg-mainBlueGary w-full py-32 px-80 flex-col justify-center items-center sm:py-10 sm:px-10">
      <h2
        class="text-4xl font-bold mb-16 text-black text-center font-format sm:text-lg sm:mx-2 sm:mb-8">
        {{ $t('lang.product.eagle.supportTitle') }}
      </h2>
      <div class="flex justify-center sm:flex-wrap">
        <div
          class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b md:mx-4 hover:shadow-shadowG sm:w-20 sm:mx-2 sm:pt-0 sm:pb-0 sm:mb-8">
          <div
            class="flex justify-center items-center mb-4 border-b w-full pb-6 sm:mb-0 sm:pb-2 sm:pt-2">
            <img src="../../assets/img/eth-logo.png" alt="" class="sm:w-12 sm:h-12" />
          </div>
          <span class="font-format">ETH</span>
        </div>
        <div
          class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b md:mx-4 hover:shadow-shadowG sm:w-20 sm:mx-2 sm:pt-0 sm:pb-0 sm:mb-8">
          <div
            class="flex justify-center items-center mb-4 border-b w-full pb-6 sm:mb-0 sm:pb-2 sm:pt-2">
            <img src="../../assets/img/polygon-logo.png" alt="" class="sm:w-12 sm:h-12" />
          </div>
          <span class="font-format">POLYGON</span>
        </div>
        <div
          class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b md:mx-4 hover:shadow-shadowG sm:w-20 sm:mx-2 sm:pt-0 sm:pb-0 sm:mb-8">
          <div
            class="flex justify-center items-center mb-4 border-b w-full pb-6 sm:mb-0 sm:pb-2 sm:pt-2">
            <img src="../../assets/img/bsc-logo.png" alt="" class="sm:w-12 sm:h-12" />
          </div>
          <span class="font-format">BSC</span>
        </div>
        <div
          class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b md:mx-4 hover:shadow-shadowG sm:w-20 sm:mx-2 sm:pt-0 sm:pb-0 sm:mb-8">
          <div
            class="flex justify-center items-center mb-4 border-b w-full pb-6 sm:mb-0 sm:pb-2 sm:pt-2">
            <img src="../../assets/img/tron-logo.png" alt="" class="sm:w-12 sm:h-12" />
          </div>
          <span class="font-format">TRON</span>
        </div>
        <div
          class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b md:mx-4 hover:shadow-shadowG sm:w-20 sm:mx-2 sm:pt-0 sm:pb-0 sm:mb-8">
          <div
            class="flex justify-center items-center mb-4 border-b w-full pb-6 sm:mb-0 sm:pb-2 sm:pt-2">
            <img src="../../assets/img/huobi-logo.png" alt="" class="sm:w-12 sm:h-12" />
          </div>
          <span class="font-format">HECO</span>
        </div>
      </div>
    </div> -->
    <contact-us></contact-us>
    <about-hermit></about-hermit>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import ContactUs from '../../components/contact-us.vue'
  import AboutHermit from '../../components/about-hermit.vue'
  import HProductSwiper from '../../components/h-product-swiper.vue'
  // import CoreAdvantages from '../../components/core-advantages.vue'
  import BoardItem from './product-eagle-eye-components/board-item/index.vue'
  import FunctionCard from './product-eagle-eye-components/function-card/index.vue'
  // import { useI18n } from 'vue-i18n'

  import imgAssessmentUrl from '../../assets/img/func-logo-assessment.png'
  import imgSecurityUrl from '../../assets/img/func-logo-security.png'
  import imgMonitorUrl from '../../assets/img/func-logo-monitor.png'
  import imgNewsUrl from '../../assets/img/func-logo-news.png'
  import imgIdentificationUrl from '../../assets/img/func-logo-identification.png'
  export default defineComponent({
    name: 'ProductEagleEye',
    components: {
      // CoreAdvantages,
      HProductSwiper,
      AboutHermit,
      ContactUs,
      BoardItem,
      FunctionCard,
    },
    setup() {
      // const { t } = useI18n()
      const functionOptions = [
        {
          imgUrl: imgAssessmentUrl,
          title: 'DApps Assessment',
          contents: [
            'Monitor token market cap, token pricing, number of users, Twitter followers, market changes, audit report, social media contacts, etc.',
            'Provide quantitative security assessment and display security posture.',
            'Help project parties understand the status DApps operations in real-time.',
          ],
        },
        {
          imgUrl: imgSecurityUrl,
          title: 'Transaction Security',
          contents: [
            'Provide real-time on-chain data analysis.',
            'Detect abnormal transactions with“large outflow”, “slippage”, or “ownership change”.',
          ],
        },
        {
          imgUrl: imgMonitorUrl,
          title: 'Address Monitor',
          contents: [
            'Add any crypto addresses to be monitored.',
            'Real-time notification about fund outflow from a monitored address',
          ],
        },
        {
          imgUrl: imgNewsUrl,
          title: 'Security News',
          contents: [
            'Display the latest information on major blockchain news media and relevant Twitter messages.',
            "Help customers learn the blockchain ecosystem's latest development trends and security dynamics.",
            'Help customers learn media opinions and user sentiment.',
          ],
        },
        {
          imgUrl: imgIdentificationUrl,
          title: 'Malicious Websites Identification',
          contents: [
            'Identify the security vulnerabilities of Web3 websites.',
            'Detect phishing, fraud, fake or other types of malicious websites risks.',
            'Alert users to avoid private key and asset loss',
          ],
        },
      ]
      return {
        functionOptions,
      }
    },
  })
</script>

<!-- prettier-ignore -->
<style scoped>
  .support-container li{
    display: block;
    width: 32%;
    position: relative;
    margin-right: 2%;
    margin-bottom: 23px;
  }
  .support-container li:nth-child(3n + 3) {
    margin-right: 0;
  }
  .support-container li > img{
    width: 100%
  }
  .support-container li > div{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 32px;
  }
  .support-container li > div img{
    display: block;
    height: 48px;
    margin-right: 30px
  }

  @media screen and (max-width: 1000px) {

    .support-container li{
      width: 49%;
      margin-right: 2%;
    }

    .support-container li:nth-child(2n + 2) {
      margin-right: 0;

    }

    .support-container li:nth-child(3n + 3) {
      margin-right: auto;

    }

    .support-container li > div{
      font-size: 28px;
    }
    .support-container li > div img{
      height: 40px;
      margin-right: 15px
    }
  }

  @media screen and (min-width: 0) and (max-width: 520px) {

    .support-container li{
      width: 49%;
      margin-right: 2%;
    }

    .support-container li > div{
      font-size: 16px;
    }
    .support-container li > div img{
      height: 30px;
      margin-right: 8px
    }
  }
</style>
<style>
  @import '../../assets/css/product-page.css';

  #product_eagle .page-head {
    display: flex;
    align-items: start;
    justify-content: flex-start;
    height: 880px;
    padding: 0 300px 110px 320px;
    background-color: #121214;
    background-image: url('../../assets/img/product-bg.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }

  #product_eagle .product-desc-body {
    box-sizing: border-box;
    height: 1028px;
    padding: 0 300px;
  }

  .product-page .eagle-header-logo {
    position: absolute;
    top: 80px;
    right: 154px;
    width: 840px;
    height: 700px;
    background: url('../../assets/img/eagle-new-logo.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }

  .support-mobile-title {
    display: none;
  }

  @media screen and (min-width: 1280px) and (max-width: 1326px) {
    #product_eagle .header-text-small {
      width: 578px;
      font-size: 28px;
      line-height: 1.5;
    }
  }

  @media screen and (max-width: 1278px) {
    .support-mobile-title {
      display: inline;
    }
    .support-pc-title {
      display: none;
    }
  }
</style>
