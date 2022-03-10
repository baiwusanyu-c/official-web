/* * @product-vass.vue * @deprecated 产品介绍页面 - vass * @author czh * @update
(czh 2021/12/17) */
<template>
  <div id="product_vass" class="product-page">
    <!--    头部介绍    -->
    <div class="page-head relative">
      <div class="header-text">
        <div class="header-text-big font-format">
          {{ $t('lang.product.vass.title') }}
        </div>
        <div class="header-text-small font-format leading-normal">
          {{ $t('lang.product.vass.subTitle') }}
        </div>
        <be-button
          custom-class="try-out-btn h-btn-txt-black linear-l-r text-black text-xl sm:absolute sm:bottom-8 sm:inset-x-0"
          @click="toVaaSPage"
        >
          <span class="font-format sm:text-base">{{
            $t('lang.tryoutBtn')
          }}</span>
        </be-button>
      </div>
      <div class="vass-header-logo sm:hidden"></div>
    </div>

    <!--    文字介绍 & 走马灯   -->
    <div
      class="relative flex items-center justify-center text-center box-border product-desc-body bg-mainBlueGary w-full flex-col"
    >
      <!--   mobile   -->
      <h2 class="display-none text-4xl font-bold font-format sm:text-lg sm:mb-4 sm:flex">
        {{ $t('lang.product.eagle.funcDisplay') }}
      </h2>
      <div class="p-8 w-2/3 rounded-md product-desc sm:w-full sm:relative">
        <h2 class="text-4xl font-bold font-format sm:hidden">
          {{ $t('lang.product.eagle.funcDisplay') }}
        </h2>
        <!--     走馬燈      -->
        <div class="mt-10 product-swiper w-full h-full md:mt-8 sm:mt-4 sm:bg-default sm:p-2 sm:rounded">
          <h-product-swiper></h-product-swiper>
        </div>
        <p
          class="text-lg font-format text-justify leading-normal px-12 mt-12 sm:text-xs sm:mt-4 sm:px-0"
        >
          {{ $t('lang.product.vass.desc') }}
        </p>
      </div>
    </div>

    <!--    主要功能   -->
    <div
      class="func-container flex flex-col pb-16 items-center justify-center bg-mainBlueGary box-border sm:pt-0 sm:pb-8"
    >
      <h2 class="text-4xl font-bold m-16 font-format sm:text-lg sm:m-6">
        {{ $t('lang.product.vass.funcTitle') }}
      </h2>
      <div class="flex w-full items-center justify-center sm:flex-wrap">
        <div
          class="func-card bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded sm:mx-2 sm:p-2"
        >
          <h3
            class="text-lg font-bold mb-8 text-center h-12 font-format sm:text-xs sm:mb-4"
          >
            {{ $t('lang.product.vass.funcSubTitle1') }}
          </h3>
          <img class="mb-8 sm:mb-4" src="../../assets/img/func1.png" alt="" />
          <p class="font-format text-center leading-normal sm:text-xs">
            {{ $t('lang.product.vass.funcDesc1') }}
          </p>
        </div>
        <div
          class="func-card bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded sm:mx-2 sm:p-2"
        >
          <h3
            class="text-lg font-bold mb-8 text-center h-12 font-format sm:text-xs sm:mb-4"
          >
            {{ $t('lang.product.vass.funcSubTitle2') }}
          </h3>
          <img class="mb-8 sm:mb-4" src="../../assets/img/func2.png" alt="" />
          <p class="font-format text-center leading-normal sm:text-xs">
            {{ $t('lang.product.vass.funcDesc2') }}
          </p>
        </div>
        <div
          class="func-card bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded sm:mx-2 sm:p-2 sm:mt-4"
        >
          <h3
            class="text-lg font-bold mb-8 text-center h-12 font-format sm:text-xs sm:mb-4"
          >
            {{ $t('lang.product.vass.funcSubTitle3') }}
          </h3>
          <img class="mb-8 sm:mb-4" src="../../assets/img/func3.png" alt="" />
          <p class="font-format text-center leading-normal sm:text-xs">
            {{ $t('lang.product.vass.funcDesc3') }}
          </p>
        </div>
        <div
          class="func-card bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded sm:mx-2 sm:p-2 sm:mt-4"
        >
          <h3
            class="text-lg font-bold mb-8 text-center h-12 font-format sm:text-xs sm:mb-4"
          >
            {{ $t('lang.product.vass.funcSubTitle4') }}
          </h3>
          <img class="mb-8 sm:mb-4" src="../../assets/img/func4.png" alt="" />
          <p class="font-format text-center leading-normal sm:text-xs">
            {{ $t('lang.product.vass.funcDesc4') }}
          </p>
        </div>
      </div>
    </div>
    <!--    核心特色    -->
    <div
      class="advant-container flex w-full py-16 flex-col justify-center relative px-20b md:px-40 sm:px-4 sm:py-10"
    >
      <video
        key="product-vass-video1"
        class="absolute left-0 top-0 bottom-0 top-0"
        style="z-index: 0; width: 100%; height: 100%; object-fit: fill"
        src="../../assets/video/wave.webm"
        muted="muted"
        autoplay="autoplay"
        loop="loop"
      ></video>
      <h2
        class="text-4xl font-bold mb-12 text-default text-center font-format sm:text-lg sm:mb-2"
        style="z-index: 1"
      >
        {{ $t('lang.product.vass.advantTitle') }}
      </h2>
      <core-advantages :index="1" type="vass"></core-advantages>
      <core-advantages :index="2" type="vass"></core-advantages>
      <core-advantages :index="3" type="vass"></core-advantages>
      <core-advantages :index="4" type="vass"></core-advantages>
    </div>
    <contact-us></contact-us>
    <about-hermit></about-hermit>
  </div>
</template>

<script lang="ts">
import ContactUs from '../../components/contact-us.vue'
import AboutHermit from '../../components/about-hermit.vue'
import { defineComponent } from 'vue'
import HProductSwiper from '../../components/h-product-swiper.vue'
import composition from '../../utils/mixin/common-func'
import { getStore } from '../../utils/common'
import CoreAdvantages from '../../components/core-advantages.vue'
export default defineComponent({
  name: 'ProductVass',
  components: { CoreAdvantages, HProductSwiper, AboutHermit, ContactUs },
  setup() {
    const { openWin } = composition()
    const toVaaSPage = (): void => {
      let base =
        import.meta.env.VITE_PROJECT_ENV === 'staging'
          ? 'http://124.71.193.230:17070/#/login'
          : 'https://vaas.beosin.com/#/login'
      let url = `${base}?token=Bearer ${getStore('token')}&lang=${getStore(
        'lang'
      )}`
      openWin(url, 'vaas')
    }
    // https://vaas.lianantech.com/#/login?token=undefined
    return { getStore, toVaaSPage }
  },
})
</script>

<style>
@import '../../assets/css/product-page.css';

#product_vass .page-head {
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

#product_vass .product-desc-body {
  box-sizing: border-box;
  height: 700px;
  padding: 0 300px;
}

.product-page .vass-header-logo {
  position: absolute;
  top: 80px;
  right: 154px;
  width: 840px;
  height: 700px;
  background: url('../../assets/img/vass-new-logo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {

  #product_vass .header-text-small {
    width: 420px;
    font-size: 28px;
    line-height: 1.5;
  }
}
</style>
