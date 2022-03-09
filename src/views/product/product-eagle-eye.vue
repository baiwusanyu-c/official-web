/* * @product-eagle-eye.vue * @deprecated 产品介绍页面 - 态势感知 * @author czh
* @update (czh 2021/12/17) */
<template>
  <div id="product_eagle" class="product-page">
    <!--    头部介绍    -->
    <div class="page-head">
      <div class="header-text">
        <div class="header-text-big font-format">
          {{ $t('lang.product.eagle.title') }}
        </div>
        <div class="header-text-small font-format leading-normal">
          {{ $t('lang.product.eagle.subTitle') }}
        </div>
        <img
          alt=""
          src="../../assets/img/eagle-logo.png"
          class="display-none w-36 h-36 mt-10 mx-auto sm:flex"
        />
        <!--                <be-button customClass="try-out-btn h-btn-txt-black linear-l-r text-black text-xl">{{$t('lang.tryoutBtn') }}</be-button>-->
      </div>
    </div>
    <!--    文字介绍 & 走马灯   -->
    <div
      class="flex items-center justify-center bg-default text-center py-16 box-border w-full flex-col sm:py-8"
    >
      <p
        class="product-desc text-lg font-format text-justify leading-normal sm:text-xs"
      >
        {{ $t('lang.product.eagle.desc') }}
      </p>
      <!--     走馬燈      -->
      <div class="product-desc mt-10 product-swiper w-full h-full">
        <h-product-swiper></h-product-swiper>
      </div>
    </div>
    <!--    主要功能   -->
    <div
      class="func-container flex flex-col py-16 items-center justify-center bg-mainBlueGary box-border sm:py-8"
    >
      <h2
        class="text-4xl font-bold m/index/product/productVaaS16 font-format sm:text-lg sm:mb-8"
      >
        {{ $t('lang.product.eagle.funcTitle') }}
      </h2>
      <div class="flex w-full items-center justify-center sm:flex-wrap">
        <div
          class="func-card bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded sm:mx-2 sm:p-2"
        >
          <h3
            class="text-lg font-bold mb-8 text-center h-12 font-format sm:text-xs sm:mb-4"
          >
            {{ $t('lang.product.eagle.funcSubTitle1') }}
          </h3>
          <img
            class="mb-8 sm:mb-4"
            src="../../assets/img/eagle-func1.png"
            alt=""
          />
          <p class="font-format text-center leading-normal sm:text-xs">
            {{ $t('lang.product.eagle.funcDesc1') }}
          </p>
        </div>
        <div
          class="func-card bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded sm:mx-2 sm:p-2"
        >
          <h3
            class="text-lg font-bold mb-8 text-center h-12 font-format sm:text-xs sm:mb-2"
          >
            {{ $t('lang.product.eagle.funcSubTitle2') }}
          </h3>
          <img
            class="mb-8 sm:mb-4"
            src="../../assets/img/eagle-func2.png"
            alt=""
          />
          <p class="font-format text-center leading-normal sm:text-xs">
            {{ $t('lang.product.eagle.funcDesc2') }}
          </p>
        </div>
        <div
          class="func-card bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded sm:mx-2 sm:p-2 sm:mt-4"
        >
          <h3
            class="text-lg font-bold mb-8 text-center h-12 font-format sm:text-xs sm:mb-4"
          >
            {{ $t('lang.product.eagle.funcSubTitle3') }}
          </h3>
          <img
            class="mb-8 sm:mb-4"
            src="../../assets/img/eagle-func3.png"
            alt=""
          />
          <p class="font-format text-center leading-normal sm:text-xs">
            {{ $t('lang.product.eagle.funcDesc3') }}
          </p>
        </div>
        <div
          class="func-card bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded sm:mx-2 sm:p-2 sm:mt-4"
        >
          <h3
            class="text-lg font-bold mb-8 text-center h-12 font-format sm:text-xs sm:mb-4"
          >
            {{ $t('lang.product.eagle.funcSubTitle4') }}
          </h3>
          <img
            class="mb-8 sm:mb-4"
            src="../../assets/img/eagle-func4.png"
            alt=""
          />
          <p class="font-format text-center leading-normal sm:text-xs">
            {{ $t('lang.product.eagle.funcDesc4') }}
          </p>
        </div>
      </div>
    </div>
    <!--    核心特色    -->
    <div
      class="advant-container flex w-full py-16 flex-col justify-center relative px-20b sm:px-4 sm:py-10"
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
        class="text-4xl font-bold mb-16 text-default text-center font-format sm:text-lg sm:mb-2"
        style="z-index: 1"
      >
        {{ $t('lang.product.eagle.advantTitle') }}
      </h2>
      <core-advantages :index="1" type="eagle"></core-advantages>
      <core-advantages :index="2" type="eagle"></core-advantages>
      <core-advantages :index="3" type="eagle"></core-advantages>
      <core-advantages :index="4" type="eagle"></core-advantages>
    </div>
    <!--    支持币种    -->
    <div
      class="support-c-container flex bg-mainBlueGary w-full py-32 px-80 flex-col justify-center items-center sm:py-10 sm:px-10"
    >
      <h2
        class="text-4xl font-bold mb-16 text-black text-center font-format sm:text-lg sm:mx-2 sm:mb-8"
      >
        {{ $t('lang.product.eagle.supportTitle') }}
      </h2>
      <div class="flex justify-center sm:flex-wrap">
        <div
          class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b hover:shadow-shadowG sm:w-20 sm:mx-2 sm:pt-0 sm:pb-0 sm:mb-8"
        >
          <div
            class="flex justify-center items-center mb-4 border-b w-full pb-6 sm:mb-0 sm:pb-2 sm:pt-2"
          >
            <img
              src="../../assets/img/eth-logo.png"
              alt=""
              class="sm:w-12 sm:h-12"
            />
          </div>
          <span class="font-format">ETH</span>
        </div>
        <div
          class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b hover:shadow-shadowG sm:w-20 sm:mx-2 sm:pt-0 sm:pb-0 sm:mb-8"
        >
          <div
            class="flex justify-center items-center mb-4 border-b w-full pb-6 sm:mb-0 sm:pb-2 sm:pt-2"
          >
            <img
              src="../../assets/img/polygon-logo.png"
              alt=""
              class="sm:w-12 sm:h-12"
            />
          </div>
          <span class="font-format">POLYGON</span>
        </div>
        <div
          class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b hover:shadow-shadowG sm:w-20 sm:mx-2 sm:pt-0 sm:pb-0 sm:mb-8"
        >
          <div
            class="flex justify-center items-center mb-4 border-b w-full pb-6 sm:mb-0 sm:pb-2 sm:pt-2"
          >
            <img
              src="../../assets/img/bsc-logo.png"
              alt=""
              class="sm:w-12 sm:h-12"
            />
          </div>
          <span class="font-format">BSC</span>
        </div>
        <div
          class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b hover:shadow-shadowG sm:w-20 sm:mx-2 sm:pt-0 sm:pb-0"
        >
          <div
            class="flex justify-center items-center mb-4 border-b w-full pb-6 sm:mb-0 sm:pb-2 sm:pt-2"
          >
            <img
              src="../../assets/img/tron-logo.png"
              alt=""
              class="sm:w-12 sm:h-12"
            />
          </div>
          <span class="font-format">TRON</span>
        </div>
        <div
          class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b hover:shadow-shadowG sm:w-20 sm:mx-2 sm:pt-0 sm:pb-0"
        >
          <div
            class="flex justify-center items-center mb-4 border-b w-full pb-6 sm:mb-0 sm:pb-2 sm:pt-2"
          >
            <img
              src="../../assets/img/huobi-logo.png"
              alt=""
              class="sm:w-12 sm:h-12"
            />
          </div>
          <span class="font-format">HECO</span>
        </div>
      </div>
      <!--            <h3 class="text-xl mb-6 mt-16 text-black text-center"> {{$t('lang.product.eagle.supportDesc')}}</h3>-->
      <!--            <be-button customClass="h-btn-txt-black linear-l-r text-black text-xl w-1/4" size="large">{{$t('lang.contactBtnMore') }}</be-button>-->
    </div>
    <contact-us></contact-us>
    <about-hermit></about-hermit>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactUs from '../../components/contact-us.vue'
import AboutHermit from '../../components/about-hermit.vue'
import HProductSwiper from '../../components/h-product-swiper.vue'
import CoreAdvantages from '../../components/core-advantages.vue'

export default defineComponent({
  name: 'ProductEagleEye',
  components: { CoreAdvantages, HProductSwiper, AboutHermit, ContactUs },
  setup() {
    return {}
  },
})
</script>

<style>
@import '../../assets/css/product-page.css';

#product_eagle .page-head {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 570px;
  padding: 0 300px 110px 300px;
  background-color: #121214;
  background-image: url('../../assets/img/eagle-bg.png');
  background-repeat: no-repeat;
  background-size: 100%;
}

@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {
  #product_eagle .header-text-small {
    width: 768px;
    font-size: 28px;
    line-height: 1.5;
  }
}

@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {
  #product_eagle .header-text-small {
    width: 790px;
    font-size: 28px;
    line-height: 1.5;
  }
}
</style>
