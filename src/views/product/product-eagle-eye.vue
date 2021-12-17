/*
* @product-eagle-eye.vue
* @deprecated
* @author czh
* @update (czh 2021/12/17)
*/
<template>
    <div class="product-eagle">
        <!--    头部介绍    -->
        <div class="page-head">
            <div class="header-text mr-1/2">
                <div class="header-text-big">
                   {{$t('lang.product.eagle.title')}}
                </div>
                <div class="header-text-small">
                    {{$t('lang.product.eagle.subTitle')}}
                </div>
                <be-button customClass="try-out-btn h-btn-txt-black linear-l-r text-black text-xl">{{$t('lang.tryoutBtn') }}</be-button>
            </div>
        </div>
        <!--    文字介绍 & 走马灯   -->
        <div class="flex items-center justify-center bg-default text-center py-16 box-border w-full flex-col">
            <p class="w-1/2 text-lg"> {{$t('lang.product.eagle.desc')}}</p>
            <!--     走馬燈      -->
            <div class="mt-10 product-swiper w-1/2">
                <h-product-swiper></h-product-swiper>
            </div>
        </div>
        <!--    主要功能   -->
        <div class="func-container flex flex-col py-16 items-center justify-center bg-mainBlueGary box-border">
            <h2 class="text-4xl font-bold mb-16"> {{$t('lang.product.eagle.funcTitle')}}</h2>
            <div class="flex w-full items-center justify-center">
                <div class="func-card  bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded">
                    <h3 class="text-lg font-bold mb-8 text-center h-12"> {{$t('lang.product.eagle.funcSubTitle1')}}</h3>
                    <img class='mb-8' src="../../assets/img/eagle-func1.png" alt="">
                    <p> {{$t('lang.product.eagle.funcDesc1')}}</p>
                </div>
                <div class="func-card  bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded">
                    <h3 class="text-lg font-bold mb-8 text-center h-12"> {{$t('lang.product.eagle.funcSubTitle2')}}</h3>
                    <img class='mb-8' src="../../assets/img/eagle-func2.png" alt="">
                    <p> {{$t('lang.product.eagle.funcDesc2')}}</p>
                </div>
                <div class="func-card  bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded">
                    <h3 class="text-lg font-bold mb-8 text-center h-12"> {{$t('lang.product.eagle.funcSubTitle3')}}</h3>
                    <img class='mb-8' src="../../assets/img/eagle-func3.png" alt="">
                    <p> {{$t('lang.product.eagle.funcDesc3')}}</p>
                </div>
                <div class="func-card  bg-default flex flex-col items-center justify-start shadow-2xl mx-8 p-8 box-border rounded">
                    <h3 class="text-lg font-bold mb-8 text-center h-12"> {{$t('lang.product.eagle.funcSubTitle4')}}</h3>
                    <img class='mb-8' src="../../assets/img/eagle-func4.png" alt="">
                    <p> {{$t('lang.product.eagle.funcDesc4')}}</p>
                </div>
            </div>

        </div>
        <!--    核心特色    -->
        <div class="advant-container flex bg-black w-full py-16 px-80 flex-col justify-center">
            <h2 class="text-4xl font-bold mb-16 text-default text-center"> {{$t('lang.product.eagle.advantTitle')}}</h2>
            <div class="flex justify-center items-center w-full  mb-48">
                <div class="advant-circle flex justify-center items-center font-bold p-6 text-center text-lg">
                    {{$t('lang.product.eagle.advantSubTitle1')}}
                </div>
                <div class="flex-1 bg-mainG ml-6 justify-center items-center font-bold p-12"  style="height: min-content">
                    {{$t('lang.product.eagle.advantDesc1')}}
                </div>
            </div>
            <div class="flex justify-center items-center w-full  mb-48">
                <div class="flex-1 bg-mainG mr-6 justify-center items-center font-bold p-12" style="height: min-content">
                    {{$t('lang.product.eagle.advantDesc2')}}
                </div>
                <div class="advant-circle flex justify-center items-center font-bold p-6 text-center text-lg">
                    {{$t('lang.product.eagle.advantSubTitle2')}}
                </div>
            </div>
            <div class="flex justify-center items-center w-full mb-48">
                <div class="advant-circle flex justify-center items-center font-bold p-6 text-center text-lg">
                    {{$t('lang.product.eagle.advantSubTitle3')}}
                </div>
                <div class="flex-1 bg-mainG ml-6 justify-center items-center font-bold p-12"  style="height: min-content">
                    {{$t('lang.product.eagle.advantDesc3')}}
                </div>
            </div>
            <div class="flex justify-center items-center w-full ">
                <div class="flex-1 bg-mainG mr-6 justify-center items-center font-bold p-12"  style="height: min-content">
                    {{$t('lang.product.eagle.advantDesc4')}}
                </div>
                <div class="advant-circle flex justify-center items-center font-bold p-6 text-center text-lg">
                    {{$t('lang.product.eagle.advantSubTitle4')}}
                </div>
            </div>
        </div>
        <!--    支持币种    -->
        <div class="support-c-container flex bg-mainBlueGary w-full py-16 px-80 flex-col justify-center items-center">
            <h2 class="text-4xl font-bold mb-16 text-black text-center"> {{$t('lang.product.eagle.supportTitle')}}</h2>
            <div class="flex justify-center">
                <div class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b">
                    <div class="flex justify-center items-center mb-4 border-b w-full pb-6">
                        <img src="../../assets/img/eth-logo.png" alt="">
                    </div>
                    <span>ETH</span>
                </div>
                <div class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b">
                    <div class="flex justify-center items-center mb-4 border-b w-full pb-6">
                        <img src="../../assets/img/polygon-logo.png" alt="">
                    </div>
                    <span>POLYGON</span>
                </div>
                <div class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b">
                    <div class="flex justify-center items-center mb-4 border-b w-full pb-6">
                        <img src="../../assets/img/bsc-logo.png" alt="">
                    </div>
                    <span>BSC</span>
                </div>
                <div class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b">
                    <div class="flex justify-center items-center mb-4 border-b w-full pb-6">
                        <img src="../../assets/img/tron-logo.png" alt="">
                    </div>
                    <span>TRON</span>
                </div>
                <div class="rounded flex flex-col justify-center items-center bg-default w-52 pt-6 pb-4 mx-6 border-b">
                    <div class="flex justify-center items-center mb-4 border-b w-full pb-6">
                        <img src="../../assets/img/huobi-logo.png" alt="">
                    </div>
                    <span>HECO</span>
                </div>
            </div>
            <h3 class="text-xl mb-6 mt-16 text-black text-center"> {{$t('lang.product.eagle.supportDesc')}}</h3>
            <be-button customClass="h-btn-txt-black linear-l-r text-black text-xl w-1/4" size="large">{{$t('lang.contactBtnMore') }}</be-button>
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
    name: "product-eagle-eye",
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
.product-eagle .page-head{
    height: 570px;
    background-color: black;
    padding: 0 300px 110px 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-image:  url("../../assets/img/eagle-bg.png");
}
.product-eagle .header-text{
    display: flex;
    flex-direction: column;
}
.product-eagle .header-text-big{
    padding-top: 0;
    margin-top: 112px;
    width: 670px;
    line-height: 80px;
    font-size: 60px;
    font-weight: bold;
    color: #FFFFFF;
    font-family: SourceHanSansCN-Bold sans-serif;
}
.product-eagle .header-text-small{
    padding-top: 39px;
    width: 900px;
    font-size: 30px;
    color: #FFFFFF;
    line-height: 30px;
    font-family: SourceHanSansCN-Regular sans-serif;
}
.product-eagle .try-out-btn{
    @apply h-12 w-80 font-bold mt-32;
}
.product-eagle .func-container .func-card{
    border-top: 5px solid transparent;
    width: 285px;
    height: 470px;
}
.product-eagle .func-container .func-card:hover {
    box-shadow: 0 25px 50px -12px #02fbbb;
    border-top: 5px solid #02fbbb;
}
.product-eagle .advant-container .advant-circle{
    width: 200px;
    height: 200px;
    background-image:  url("../../assets/img/advant-circle.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>