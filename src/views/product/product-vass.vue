/*
* @product-vass.vue
* @deprecated 产品介绍页面 - vass
* @author czh
* @update (czh 2021/12/17)
*/
<template>
    <div class="product-page" id="product_vass">
        <!--    头部介绍    -->
        <div class="page-head">
            <div class="header-text mr-1/2">
                <div class="header-text-big font-format">
                    {{ $t('lang.product.vass.title') }}
                </div>
                <div class="header-text-small font-format">
                    {{ $t('lang.product.vass.subTitle') }}
                </div>
                <be-button customClass="try-out-btn h-btn-txt-black linear-l-r text-black text-xl"
                           @click="openWin(`https://vaas.lianantech.com/#/login?token=${getStore('token')}&lang=${getStore('lang')}`,'vaas')">
                    {{ $t('lang.tryoutBtn') }}
                </be-button>
            </div>
        </div>
        <!--    文字介绍 & 走马灯   -->
        <div class="flex items-center justify-center bg-default text-center py-16 box-border w-full flex-col">
            <p class="w-1/2 text-lg font-format md:w-3/4"> {{ $t('lang.product.vass.desc') }}</p>
            <!--     走馬燈      -->
            <div class="mt-10 product-swiper w-1/2 md:w-3/4">
                <h-product-swiper></h-product-swiper>
            </div>
        </div>
        <!--    主要功能   -->
        <div class="func-container flex flex-col py-16 items-center justify-center bg-mainBlueGary box-border">
            <h2 class="text-4xl font-bold mb-16 font-format"> {{ $t('lang.product.vass.funcTitle') }}</h2>
            <div class="flex w-full items-center justify-center">
                <div
                    class="func-card  bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded">
                    <h3 class="text-lg font-bold mb-8 text-center h-12 font-format">
                        {{ $t('lang.product.vass.funcSubTitle1') }}</h3>
                    <img class='mb-8' src="../../assets/img/func1.png" alt="">
                    <p class="font-format"> {{ $t('lang.product.vass.funcDesc1') }}</p>
                </div>
                <div
                    class="func-card  bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded">
                    <h3 class="text-lg font-bold mb-8 text-center h-12 font-format">
                        {{ $t('lang.product.vass.funcSubTitle2') }}</h3>
                    <img class='mb-8' src="../../assets/img/func2.png" alt="">
                    <p class="font-format"> {{ $t('lang.product.vass.funcDesc2') }}</p>
                </div>
                <div
                    class="func-card  bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded">
                    <h3 class="text-lg font-bold mb-8 text-center h-12 font-format">
                        {{ $t('lang.product.vass.funcSubTitle3') }}</h3>
                    <img class='mb-8' src="../../assets/img/func3.png" alt="">
                    <p class="font-format"> {{ $t('lang.product.vass.funcDesc3') }}</p>
                </div>
                <div
                    class="func-card  bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded">
                    <h3 class="text-lg font-bold mb-8 text-center h-12 font-format">
                        {{ $t('lang.product.vass.funcSubTitle4') }}</h3>
                    <img class='mb-8' src="../../assets/img/func4.png" alt="">
                    <p class="font-format"> {{ $t('lang.product.vass.funcDesc4') }}</p>
                </div>
            </div>

        </div>
        <!--    核心特色    -->
        <div class="advant-container flex  w-full py-16 flex-col justify-center relative md:px-60">
            <video class='absolute left-0 top-0 bottom-0 top-0'
                   style="z-index: 0;width: 100%;height: 100%;object-fit: fill"
                   key="product-vass-video1"
                   src="../../assets/video/wave.webm" muted="muted" autoplay="autoplay" loop="loop"></video>
            <h2 class="text-4xl font-bold mb-12 text-default text-center font-format">
                {{ $t('lang.product.vass.advantTitle') }}</h2>
            <div class="flex justify-center items-center w-full mb-2" style="z-index: 1">
                <div
                    class="advant-circle flex justify-center items-center font-bold p-6 text-center text-lg font-format md:p-4">
                    {{ $t('lang.product.vass.advantSubTitle1') }}
                </div>
                <div class="flex-1 bg-mainG ml-6 justify-center items-center font-bold p-12 font-format md:p-6"
                     style="height: min-content">
                    {{ $t('lang.product.vass.advantDesc1') }}
                </div>
            </div>
            <div class="flex justify-center items-center w-full  mb-2" style="z-index: 1">
                <div class="flex-1 bg-mainG mr-6 justify-center items-center font-bold p-12 font-format md:p-6"
                     style="height: min-content">
                    {{ $t('lang.product.vass.advantDesc2') }}
                </div>
                <div
                    class="advant-circle flex justify-center items-center font-bold p-6 text-center text-lg font-format md:p-4">
                    {{ $t('lang.product.vass.advantSubTitle2') }}
                </div>
            </div>
            <div class="flex justify-center items-center w-full mb-6" style="z-index: 1">
                <div
                    class="advant-circle flex justify-center items-center font-bold p-6 text-center text-lg font-format md:p-4">
                    {{ $t('lang.product.vass.advantSubTitle3') }}
                </div>
                <div class="flex-1 bg-mainG ml-6 justify-center items-center font-bold p-12 font-format md:p-6"
                     style="height: min-content">
                    {{ $t('lang.product.vass.advantDesc3') }}
                </div>
            </div>
            <div class="flex justify-center items-center w-full " style="z-index: 1">
                <div class="flex-1 bg-mainG mr-6 justify-center items-center font-bold p-12 font-format md:p-6"
                     style="height: min-content">
                    {{ $t('lang.product.vass.advantDesc4') }}
                </div>
                <div
                    class="advant-circle flex justify-center items-center font-bold p-6 text-center text-lg font-format md:p-4">
                    {{ $t('lang.product.vass.advantSubTitle4') }}
                </div>
            </div>
        </div>
        <contact-us></contact-us>
        <about-hermit></about-hermit>
    </div>
</template>

<script lang="ts">
import ContactUs from "../../components/contact-us.vue";
import AboutHermit from "../../components/about-hermit.vue";
import {defineComponent, ref} from "vue";
import {useI18n} from "vue-i18n";
import HProductSwiper from "../../components/h-product-swiper.vue";
import composition from "../../utils/mixin/common-func";
import {getStore} from "../../utils/common";
export default defineComponent({
    name: "product-vass",
    components: {HProductSwiper, AboutHermit, ContactUs},
    setup(props, ctx) {
        const {t} = useI18n()
        const funcList = ref([
            {title: '', desc: ''}
        ])
        const {openWin} = composition(props, ctx)

        // https://vaas.lianantech.com/#/login?token=undefined
        return {openWin,getStore}
    }
})
</script>

<style>
@import "../../assets/css/product-page.css";

#product_vass .page-head {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 570px;
  padding: 0 300px 110px 300px;
  background-color: #121214;
  background-image: url("../../assets/img/vass-bg.png");
  background-repeat: no-repeat;
  background-size: 100%;
}

@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {

  #product_vass .header-text-small {
    width: 790px;
    font-size: 28px;
    line-height: 32px;
  }
}
</style>