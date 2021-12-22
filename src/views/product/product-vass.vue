/*
* @product-vass.vue
* @deprecated
* @author czh
* @update (czh 2021/12/17)
*/
<template>
    <div class="product-vass">
        <!--    头部介绍    -->
        <div class="page-head">
            <div class="header-text mr-1/2">
                <div class="header-text-big font-format">
                   {{$t('lang.product.vass.title')}}
                </div>
                <div class="header-text-small font-format">
                    {{$t('lang.product.vass.subTitle')}}
                </div>
<!--                <be-button customClass="try-out-btn h-btn-txt-black linear-l-r text-black text-xl">{{$t('lang.tryoutBtn') }}</be-button>-->
            </div>
        </div>
        <!--    文字介绍 & 走马灯   -->
        <div class="flex items-center justify-center bg-default text-center py-16 box-border w-full flex-col">
            <p class="w-1/2 text-lg font-format"> {{$t('lang.product.vass.desc')}}</p>
            <!--     走馬燈      -->
            <div class="mt-10 product-swiper w-1/2">
                <h-product-swiper></h-product-swiper>
            </div>
        </div>
        <!--    主要功能   -->
        <div class="func-container flex flex-col py-16 items-center justify-center bg-mainBlueGary box-border">
            <h2 class="text-4xl font-bold mb-16 font-format"> {{$t('lang.product.vass.funcTitle')}}</h2>
            <div class="flex w-full items-center justify-center">
                <div class="func-card  bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded">
                    <h3 class="text-lg font-bold mb-8 text-center h-12 font-format"> {{$t('lang.product.vass.funcSubTitle1')}}</h3>
                    <img class='mb-8' src="../../assets/img/func1.png" alt="">
                    <p class="font-format"> {{$t('lang.product.vass.funcDesc1')}}</p>
                </div>
                <div class="func-card  bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded">
                    <h3 class="text-lg font-bold mb-8 text-center h-12 font-format"> {{$t('lang.product.vass.funcSubTitle2')}}</h3>
                    <img class='mb-8' src="../../assets/img/func2.png" alt="">
                    <p class="font-format"> {{$t('lang.product.vass.funcDesc2')}}</p>
                </div>
                <div class="func-card  bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded">
                    <h3 class="text-lg font-bold mb-8 text-center h-12 font-format"> {{$t('lang.product.vass.funcSubTitle3')}}</h3>
                    <img class='mb-8' src="../../assets/img/func3.png" alt="">
                    <p class="font-format"> {{$t('lang.product.vass.funcDesc3')}}</p>
                </div>
                <div class="func-card  bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded">
                    <h3 class="text-lg font-bold mb-8 text-center h-12 font-format"> {{$t('lang.product.vass.funcSubTitle4')}}</h3>
                    <img class='mb-8' src="../../assets/img/func4.png" alt="">
                    <p class="font-format"> {{$t('lang.product.vass.funcDesc4')}}</p>
                </div>
            </div>

        </div>
        <!--    核心特色    -->
        <div class="advant-container flex  w-full py-16 px-80 flex-col justify-center relative" >
            <video class='absolute left-0 top-0 bottom-0 top-0'
                   style="z-index: -1;object-fit: fill;height: 100%;"
                   key="product-vass-video1"
                   src="../../assets/video/wave.webm" muted="muted" autoplay="autoplay" loop="loop" ></video>
            <h2 class="text-4xl font-bold mb-16 text-default text-center font-format"> {{$t('lang.product.vass.advantTitle')}}</h2>
            <div class="flex justify-center items-center w-full  mb-48">
                <div class="advant-circle flex justify-center items-center font-bold p-6 text-center text-lg font-format">
                    {{$t('lang.product.vass.advantSubTitle1')}}
                </div>
                <div class="flex-1 bg-mainG ml-6 justify-center items-center font-bold p-12 font-format"  style="height: min-content">
                    {{$t('lang.product.vass.advantDesc1')}}
                </div>
            </div>
            <div class="flex justify-center items-center w-full  mb-48">
                <div class="flex-1 bg-mainG mr-6 justify-center items-center font-bold p-12 font-format" style="height: min-content">
                    {{$t('lang.product.vass.advantDesc2')}}
                </div>
                <div class="advant-circle flex justify-center items-center font-bold p-6 text-center text-lg font-format">
                    {{$t('lang.product.vass.advantSubTitle2')}}
                </div>
            </div>
            <div class="flex justify-center items-center w-full mb-48">
                <div class="advant-circle flex justify-center items-center font-bold p-6 text-center text-lg font-format">
                    {{$t('lang.product.vass.advantSubTitle3')}}
                </div>
                <div class="flex-1 bg-mainG ml-6 justify-center items-center font-bold p-12 font-format"  style="height: min-content">
                    {{$t('lang.product.vass.advantDesc3')}}
                </div>
            </div>
            <div class="flex justify-center items-center w-full ">
                <div class="flex-1 bg-mainG mr-6 justify-center items-center font-bold p-12 font-format"  style="height: min-content">
                    {{$t('lang.product.vass.advantDesc4')}}
                </div>
                <div class="advant-circle flex justify-center items-center font-bold p-6 text-center text-lg font-format">
                    {{$t('lang.product.vass.advantSubTitle4')}}
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
export default defineComponent({
    name: "product-vass",
    components: {HProductSwiper, AboutHermit, ContactUs},
    setup(){
        const {t} = useI18n()
        const funcList = ref([
            {title:'',desc:''}
        ])
        return {

        }
    }
})
</script>

<style>
.product-vass .page-head{
    height: 570px;
    background-color: black;
    padding: 0 300px 110px 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-image:  url("../../assets/img/vass-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
}
.product-vass .header-text{
    display: flex;
    flex-direction: column;
}
.product-vass .header-text-big{
    padding-top: 0;
    margin-top: 112px;
    width: 670px;
    line-height: 80px;
    font-size: 60px;
    font-weight: bold;
    color: #FFFFFF;
    font-family: SourceHanSansBold sans-serif;
}
.product-vass .header-text-small{
    padding-top: 39px;
    width: 900px;
    font-size: 30px;
    color: #FFFFFF;
    line-height: 30px;
    font-family: SourceHanSansRegular sans-serif;
}
.product-vass .try-out-btn{
    @apply h-12 w-80 font-bold mt-32;
}
.product-vass .func-container .func-card{
    border-top: 5px solid transparent;
    width: 285px;
    height: 470px;
}
.product-vass .func-container .func-card:hover {
    box-shadow: 0 25px 50px -12px #02fbbb;
    border-top: 5px solid #02fbbb;
}
.product-vass .advant-container{
    /*background-image:  url("../../assets/img/wave.jpg");*/
}
.product-vass .advant-container .advant-circle{
    width: 200px;
    height: 200px;
    background-image:  url("../../assets/img/advant-circle.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>