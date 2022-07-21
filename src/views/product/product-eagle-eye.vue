/* * @product-eagle-eye.vue * @deprecated 产品介绍页面 - 态势感知 * @author czh * @update (czh
2021/12/17) */
<template>
  <div id="product_eagle" class="product-page">
    <!--    头部介绍    -->
    <div class="page-head relative">
      <div class="header-text">
        <div class="header-text-big font-format">
          <!-- {{ $t('lang.companyName') }} <span>{{ $t('lang.product.eagle.title') }}</span> -->
          {{ $t('lang.product.eagle.title') }}
        </div>
        <div class="header-text-small font-format leading-normal">
          {{ $t('lang.product.eagle.subTitle') }}
        </div>
        <n-button
          :bordered="false"
          style="font-weight: 700; --n-text-color-hover: #000"
          class="try-out-btn h-btn-txt-black linear-l-r text-black text-xl sm:absolute sm:bottom-8 sm:inset-x-0"
          @click="toEaglePage">
          <span class="font-format sm:text-base">{{ $t('lang.tryoutBtn') }}</span>
        </n-button>
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
        <!--     走馬燈   swiper-no-swiping    -->
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
    <!--    支持币种    -->

    <board-item :title="$t('lang.product.eagle.supportTitle')">
      <template #title>
        <span class="support-pc-title">{{ $t('lang.product.eagle.supportTitle') }}</span>
        <span class="support-mobile-title">{{ $t('lang.product.eagle.supportMobileTitle') }}</span>
      </template>
      <ul class="support-container w-full flex flex-wrap">
        <li class="item-bsc">
          <img src="@/assets/img/support-bg-etc.png" />
        </li>
        <li class="item-bsc">
          <img src="@/assets/img/support-bg-bsc.png" />
        </li>
        <li class="item-polygon">
          <img src="@/assets/img/support-bg-polygon.png" />
        </li>
        <li class="item-tron">
          <img src="@/assets/img/support-bg-tron.png" />
        </li>
        <li class="item-heco">
          <img src="@/assets/img/support-bg-heco.png" />
        </li>
      </ul>
    </board-item>
    <contact-us></contact-us>
    <about-hermit></about-hermit>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import ContactUs from '../../components/contact-us.vue'
  import AboutHermit from '../../components/about-hermit.vue'
  import HProductSwiper from '../../components/h-product-swiper.vue'
  // import CoreAdvantages from '../../components/core-advantages.vue'
  import BoardItem from './product-eagle-eye-components/board-item/index.vue'
  import FunctionCard from './product-eagle-eye-components/function-card/index.vue'
  // import { useI18n } from 'vue-i18n'
  import { productLinkList } from '@/enums/link'
  import { getStore } from '@/utils/common'
  import composition from '@/utils/mixin/common-func'

  import imgAssessmentUrl from '../../assets/img/func-logo-assessment.png'
  import imgSecurityUrl from '../../assets/img/func-logo-security.png'
  import imgMonitorUrl from '../../assets/img/func-logo-monitor.png'
  import imgNewsUrl from '../../assets/img/func-logo-news.png'
  import imgIdentificationUrl from '../../assets/img/func-logo-identification.png'
  import { NButton } from 'naive-ui'

  export default defineComponent({
    name: 'ProductEagleEye',
    components: {
      // CoreAdvantages,
      HProductSwiper,
      AboutHermit,
      ContactUs,
      BoardItem,
      FunctionCard,
      NButton,
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
            'Real-time notification about fund outflow from a monitored address.',
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
            'Alert users to avoid private key and asset loss.',
          ],
        },
      ]

      const base = ref<string>(productLinkList.eagleEye)
      const { openWin } = composition()

      const toEaglePage = (): void => {
        let url = `${base.value}?token=Bearer ${getStore('token')}&lang=${getStore('lang')}`
        openWin(url, 'vaas')
      }
      return {
        functionOptions,
        toEaglePage,
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
  }

  @media screen and (min-width: 0) and (max-width: 520px) {

    .support-container li{
      width: 49%;
      margin-right: 2%;
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
    text-align: center;
    white-space: nowrap;
  }
  .support-pc-title {
    display: block;
    text-align: center;
    white-space: nowrap;
  }

  @media screen and (min-width: 1280px) and (max-width: 1326px) {
    #product_eagle .header-text-small {
      width: 578px;
      font-size: 28px;
      line-height: 1.5;
    }
  }

  @media screen and (min-width: 0px) and (max-width: 1278px) {
    .support-mobile-title {
      display: block;
    }
    .support-pc-title {
      display: none;
    }
  }
</style>
