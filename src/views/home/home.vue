/*
* @home.vue
* @deprecated
* @author czh
* @update (czh 2021/12/15)
*/
<template>
    <div class="hermit-main w-full bg-black-100">
        <!--   slogan & news     -->
        <div class="slogan-news w-full bg-mainBlueGary relative flex justify-center">
            <div class="slogan-news-bg w-full absolute ">
                <video class='absolute left-0 bottom-0 top-0 right-0' style="z-index: 0;height: 100%;object-fit: fill"
                       src="../../assets/video/home.mp4"
                       muted="muted"
                       autoplay="autoplay" loop="loop" width="1920"></video>

            </div>
            <div class="absolute z-10 flex justify-center flex-col w-1/2  h-full animate__animated animate__fadeInDown">
                <h2 class="text-mainG text-6xl text-center font-bold leading-normal">{{ $t('lang.home.title1') }}</h2>
                <h2 class="text-mainG text-6xl text-center font-bold leading-normal mb-20 slogan ">
                    {{ $t('lang.home.title2') }}</h2>
                <div class="flex flex-wrap w-2/3 justify-between self-center mb-16 slogan">
                    <div v-for="(item) in muguList"
                         @click="headerRouterPush(item.value)"
                         style="line-height: 1rem;cursor:pointer;"
                         class="text-default text-left w-1/2 mb-4 leading-6 flex items-center mogu-text"
                         :key="item.label">
                        <img alt="" src="../../assets/img/mogu.png" class="ml-4 mr-4"/>
                        <p>{{ item.label }}</p>
                    </div>
                </div>
                <be-button
                    @click="openDialog"
                    customClass="contact-btn h-btn-txt-black linear-l-r text-black mr-auto ml-auto text-2xl">
                    {{ $t('lang.contactBtn') }}
                </be-button>

                <!--                <div class="mt-30 flex title-card-container">
                                    <div v-for="(item) in titleCardList"
                                         class="title-card text-black mr-3 bg-default z-10 flex flex-col p-6 box-border"
                                         :key="item.label">
                                        <be-icon icon="search" color="black" customClass="title-card-btn"></be-icon>
                                        <h3 class="w-full break-words text-2xl mb-8">{{item.label}}</h3>
                                        <p class="w-full break-words mb-6">{{item.value}}</p>
                                        <div class="text-base flex items-center justify-between w-full">
                                            {{item.date}}
                                            <be-icon icon="up2" color="black" customClass="ml-4 mr-4 cursor-pointer icon-up2"></be-icon>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-right relative -right-40">{{ $t('lang.home.more') }} >></p>-->

            </div>

        </div>
        <!--   service     -->
        <div class="slogan-service w-full bg-default flex flex-col">
            <div class="slogan-service-item flex mb-44">
                <div class="w-1/2">
                    <div class="bar mb-8"></div>
                    <h3 class="font-bold text-3xl mb-8">{{ $t('lang.home.serviceTitle1') }}</h3>
                    <p class="mb-16">{{ $t('lang.home.serviceInfo1') }}</p>
                    <be-button
                        @click="routerPush('/index/service/contracts')"
                        customClass="learn-more-btn h-btn-txt-black linear-l-r text-black text-xl">
                        {{ $t('lang.LearnMoreBtn') }}
                    </be-button>
                </div>
                <div class="w-1/2 flex flex-wrap relative">
                    <hexagon class='absolute hexagon1' :index="0"></hexagon>
                    <hexagon class='absolute hexagon2' :index="1"></hexagon>
                    <hexagon class='absolute hexagon3' :index="2"></hexagon>
                    <hexagon class='absolute hexagon4' :index="3"></hexagon>
                    <hexagon class='absolute hexagon5' :index="4"></hexagon>
                    <hexagon class='absolute hexagon6' :index="5"></hexagon>
                    <hexagon class='absolute hexagon7' :index="6"></hexagon>
                </div>
            </div>
            <div class="slogan-service-item flex mt-20">
                <div class="w-1/2 flex flex-wrap relative">
                    <hexagon class='absolute hexagon8' :index="7"></hexagon>
                    <hexagon class='absolute hexagon9' :index="8"></hexagon>
                    <hexagon class='absolute hexagon10' :index="9"></hexagon>
                    <hexagon class='absolute hexagon11' :index="10"></hexagon>
                    <hexagon class='absolute hexagon12' :index="11"></hexagon>
                </div>
                <div class="w-1/2">
                    <div class="bar mb-8"></div>
                    <h3 class="font-bold text-3xl mb-8">{{ $t('lang.home.serviceTitle1') }}</h3>
                    <p class="mb-16">{{ $t('lang.home.serviceInfo1') }}</p>
                    <be-button
                        @click="routerPush('/index/service/security')"
                        customClass="learn-more-btn h-btn-txt-black linear-l-r text-black text-xl">
                        {{ $t('lang.LearnMoreBtn') }}
                    </be-button>
                </div>
            </div>
        </div>
        <!--   product     -->
        <div class="slogan-product  bg-mainBlueGary flex flex-col justify-center items-center w-full">
            <div class="flex-1 flex-col flex justify-center items-center w-full mb-14">
                <div class="bar mb-8"></div>
                <h3 class="text-2xl font-bold mb-8">{{ $t('lang.home.productName1') }}</h3>
                <p class="w-1/2 mb-8">{{ $t('lang.home.productDesc1') }}</p>
                <div class="slogan-product-circle1 w-full my-24 relative" style="height: 200px">
                    <div class="w-30 absolute circle1 flex justify-center flex-col items-center">
                        <img class='w-28' src="../../assets/img/prod-f1.png" alt="">
                        <p class="font-bold text-center" style="width: 10em;">{{ $t('lang.home.productFeature1') }}</p>
                    </div>
                    <div class="absolute circle2 flex justify-center flex-col items-center">
                        <img class='w-28' src="../../assets/img/prod-f2.png" alt="">
                        <p class="font-bold text-center" style="width: 10em;">{{ $t('lang.home.productFeature2') }}</p>
                    </div>
                    <div class="w-30 absolute circle3 flex justify-center flex-col items-center">
                        <img class='w-28' src="../../assets/img/prod-f3.png" alt="">
                        <p class="font-bold text-center" style="width: 10em;">{{ $t('lang.home.productFeature3') }}</p>
                    </div>
                    <div class="w-30 absolute circle4 flex justify-center flex-col items-center">
                        <img class='w-28' src="../../assets/img/prod-f4.png" alt="">
                        <p class="font-bold text-center" style="width: 10em;">{{ $t('lang.home.productFeature4') }}</p>
                    </div>
                </div>
                <be-button
                    @click="routerPush('/index/product/productVass')"
                    customClass="try-out-btn h-btn-txt-black linear-l-r text-black text-xl">{{
                        $t('lang.LearnMoreBtn')
                    }}
                </be-button>
            </div>
            <div class="flex-1 flex-col flex justify-center items-center w-full">
                <div class="bar mb-8"></div>
                <h3 class="text-2xl font-bold mb-8">{{ $t('lang.home.productName2') }}</h3>
                <p class="w-1/2 mb-8">{{ $t('lang.home.productDesc2') }}</p>
                <div class="slogan-product-circle2 w-full my-24 relative" style="height: 200px">
                    <div class="w-30 absolute circle5 flex justify-center flex-col items-center">
                        <img class='w-28' src="../../assets/img/prod-f5.png" alt="">
                        <p class="font-bold text-center" style="width: 10em;">{{ $t('lang.home.productFeature5') }}</p>
                    </div>
                    <div class="w-30 absolute circle6 flex justify-center flex-col items-center">
                        <img class='w-28' src="../../assets/img/prod-f6.png" alt="">
                        <p class="font-bold text-center" style="width: 10em;">{{ $t('lang.home.productFeature6') }}</p>
                    </div>
                    <div class="w-30 absolute circle7 flex justify-center flex-col items-center">
                        <img class='w-28' src="../../assets/img/prod-f7.png" alt="">
                        <p class="font-bold text-center" style="width: 10em;">{{ $t('lang.home.productFeature7') }}</p>
                    </div>
                    <div class="w-30 absolute circle8 flex justify-center flex-col items-center">
                        <img class='w-28' src="../../assets/img/prod-f8.png" alt="">
                        <p class="font-bold text-center" style="width: 10em;">{{ $t('lang.home.productFeature8') }}</p>
                    </div>
                </div>
                <be-button
                    @click="routerPush('/index/product/productEagle')"
                    customClass="try-out-btn h-btn-txt-black linear-l-r text-black text-xl">{{
                        $t('lang.LearnMoreBtn')
                    }}
                </be-button>
            </div>
        </div>

        <!--   serving global customer     -->
        <div class="slogan-customer bg-default flex flex-col justify-center items-center w-full">
            <div class="bar mb-8 mt-20"></div>
            <h3 class="text-2xl font-bold mb-8">{{ $t('lang.home.GlobalTitle') }}</h3>
            <div class="slogan-customer-logo flex flex-wrap px-36 h-3/5 justify-around mb-12 box-border">
                <div v-for="(item) in customerImgList"
                     :key='item.img'
                     class="shadow-lg mb-14 mr-6 hover:shadow-2xl">
                    <img :src="item.img" alt=""/>
                </div>
            </div>
            <div class="mb-10 home-swiper">
                <h-home-swiper :list="swiperList"></h-home-swiper>
            </div>
        </div>
        <contact-us></contact-us>
        <about-hermit></about-hermit>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, reactive, onMounted} from "vue";
import ContactUs from "../../components/contact-us.vue";
import AboutHermit from "../../components/about-hermit.vue";
import {useI18n} from "vue-i18n";
import Hexagon from "../../components/hexagon.vue";
import HHomeSwiper from "../../components/h-home-swiper.vue";
import {useEventBus} from "@vueuse/core";
import {Router, useRouter} from "vue-router";

interface ISelect {
    label: string,
    value: string,
    active?: boolean,
}

export default defineComponent({
    name: "home",
    components: {HHomeSwiper, AboutHermit, ContactUs, Hexagon},
    setup() {
        const {t} = useI18n()
        const muguList = ref<Array<ISelect>>([
            {label: t('lang.home.mgtitle1'), value: '/index/service/contracts'},
            {label: t('lang.home.mgtitle2'), value: '/index/service/security'},
            {label: t('lang.home.mgtitle3'), value: '/index/product/productVass'},
            {label: t('lang.home.mgtitle4'), value: '/index/product/productEagle'},
        ])
        const titleCardList = ref<Array<any>>([
            {
                label: t('lang.home.mgtitle1'),
                value: 'On November 30, Hermit detected that MonoX, an automatic market maker protocol, suffered a flash loan attack',
                date: "12/06/2021"
            },
            {
                label: t('lang.home.mgtitle2'),
                value: 'On November 30, Hermit detected that MonoX, an automatic market maker protocol, suffered a flash loan attack',
                date: "12/06/2021"
            },
            {
                label: t('lang.home.mgtitle3'),
                value: 'On November 30, Hermit detected that MonoX, an automatic market maker protocol, suffered a flash loan attack',
                date: "12/06/2021"
            },
            {
                label: t('lang.home.mgtitle4'),
                value: 'On November 30, Hermit detected that MonoX, an automatic market maker protocol, suffered a flash loan attack',
                date: "12/06/2021"
            },
        ])
        const customerList = [
            'polygon',
            'solrnr',
            'bitcoin',
            'eth',
            'dog',
            'BSV',
            'ZRX',
            'crust',
            'tron',
            'oneswap',
            'ankr',
            'ENJ',
            'huobi',
            'kucoin',
            'bitmart',
            'binnace',
            'GEMINI',
            'OKEX',
        ]
        const customerImgList = reactive<object[]>([])
        const getImage = (): void => {
            customerList.map((val: string) => {
                const obj: { img: string } = {img: ''}
                import('../../assets/img/' + val + '.png').then(res => {
                    obj.img = res.default
                    customerImgList.push(obj)
                })
            })
        }
        const bus = useEventBus<string>('openQuote')
        const openDialog = (): void => {
            bus.emit('true')
        }
        const headerRouterPush = (value: string): void => {
            console.log(value)
            routerPush(value)
        }
        /**
         * 跳转方法
         * @param path 路由地址
         */
        const router: Router = useRouter()
        const routerPush = (path: string): void => {
            router.push(path)
        }
        const swiperList = ref(
            [
                {
                    imgUrl: 'https://avatars.githubusercontent.com/u/29225966?v=4',
                    info: t('lang.home.swiperInfo1'),
                    name: t('lang.home.swiperUser1')
                },
                {
                    imgUrl: 'https://avatars.githubusercontent.com/u/2194624?s=60&v=4',
                    info: t('lang.home.swiperInfo2'),
                    name: t('lang.home.swiperUser2')
                },
                {
                    imgUrl: 'https://avatars.githubusercontent.com/u/1357791?s=60&v=4',
                    info: t('lang.home.swiperInfo3'),
                    name: t('lang.home.swiperUser3')
                },
                {
                    imgUrl: 'https://avatars.githubusercontent.com/u/74358?s=60&v=4',
                    info: t('lang.home.swiperInfo4'),
                    name: t('lang.home.swiperUser4')
                },
                {
                    imgUrl: 'https://avatars.githubusercontent.com/u/2259688?s=60&v=4',
                    info: t('lang.home.swiperInfo5'),
                    name: t('lang.home.swiperUser5')
                },
            ]
        )
        onMounted(() => {
            getImage()
        })
        return {
            swiperList,
            routerPush,
            openDialog,
            muguList,
            titleCardList,
            customerImgList,
            headerRouterPush,
        }
    }
})
</script>

<style>
.hermit-main {

}

.hermit-main .slogan-news {

    background-size: 101% 100%;
    height: 100vh;
    background-position-x: -2px;
}

.hermit-main .slogan-news .slogan-news-bg {
    /* height: 58%;*/
    height: 100%
}

.hermit-main .slogan-news .contact-btn {
    /* margin-bottom: 20em;*/
    @apply h-12 w-80 font-bold;

}

.hermit-main .slogan-news .title-card-container {
    position: relative;
    left: 0;
    top: -32%;
}

.hermit-main .slogan-news .title-card-container .title-card {
    width: 291px;
    height: 378px;
    transition: all .3s;
    position: absolute;
    top: 0;

}

.hermit-main .slogan-news .title-card-container .title-card:nth-child(1) {
    left: -150px
}

.hermit-main .slogan-news .title-card-container .title-card:nth-child(2) {
    left: 180px
}

.hermit-main .slogan-news .title-card-container .title-card:nth-child(3) {
    left: 510px
}

.hermit-main .slogan-news .title-card-container .title-card:nth-child(4) {
    left: 840px
}

.hermit-main .slogan-news .title-card-container .title-card:hover {
    height: 450px;
    background: linear-gradient(-32deg, #19BCFC, #00FFBA);

}

.hermit-main .slogan-news .title-card-container .title-card .be-icon {
    height: 50px;
    width: 50px;
    transition: all .3s;
}

.hermit-main .slogan-news .title-card-container .title-card:hover .be-icon {
    height: 64px;
    width: 64px;
}

.hermit-main .slogan-news .title-card-container .title-card .icon-up2 {
    display: none;

}

.hermit-main .slogan-news .title-card-container .title-card:hover .icon-up2 {
    display: initial;
    transform: rotate(90deg);
}

.hermit-main .slogan-news .title-card-container .title-card:hover .icon-up2 .be-icon {
    height: 30px !important;
    width: 30px !important;

}

.hermit-main .slogan-service {
    padding: 150px 400px;
    box-sizing: border-box;
}

.slogan-service .hexagon1 {
    left: 20%;
    top: -10%
}

.slogan-service .hexagon2 {
    left: 50%;
    top: -10%
}

.slogan-service .hexagon3 {
    top: 38%;
    left: 5%;
}

.slogan-service .hexagon4 {
    top: 38%;
    left: 35%;
}

.slogan-service .hexagon5 {
    top: 38%;
    left: 65%;
}

.slogan-service .hexagon6 {
    top: 86%;
    left: 20%;
}

.slogan-service .hexagon7 {
    top: 86%;
    left: 50%;
}

.slogan-service .hexagon8 {
    top: -22%;
    left: -5%;
}

.slogan-service .hexagon9 {
    top: -22%;
    left: 25%;
}

.slogan-service .hexagon10 {
    top: -22%;
    left: 55%;
}

.slogan-service .hexagon11 {
    top: 25%;
    left: 10%;
}

.slogan-service .hexagon12 {
    top: 25%;
    left: 40%;
}

.bar {
    height: 5px;
    width: 360px;
    @apply bg-mainG rounded;
}

.hermit-main .slogan-service .learn-more-btn {
    @apply h-10 w-80 font-bold;;
}

.hermit-main .slogan-product {
    padding: 86px 0;
}

.hermit-main .slogan-product .try-out-btn {
    width: 320px;
    @apply h-10 font-bold;
}

.slogan-product-circle1 {
    background-image: url("../../assets/img/product-bg1.png");
    background-repeat: no-repeat;
    background-size: 100%;

}

.slogan-product-circle1 .circle1 {
    left: 24%;
    top: 44%;
}

.slogan-product-circle1 .circle2 {
    left: 44%;
    top: -8%;
}

.slogan-product-circle1 .circle3 {
    left: 60%;
    top: 44%;
}

.slogan-product-circle1 .circle4 {
    right: 14%;
    top: -8%;
}

.slogan-product-circle2 {
    background-image: url("../../assets/img/product-bg2.png");
    background-repeat: no-repeat;
    background-size: 100%;
}

.slogan-product-circle2 .circle5 {
    left: 24%;
    top: 0;
}

.slogan-product-circle2 .circle6 {
    left: 44%;
    top: 46%;
}

.slogan-product-circle2 .circle7 {
    left: 60%;
    top: 0;
}

.slogan-product-circle2 .circle8 {
    right: 14%;
    top: 46%;
}

.slogan-customer {
    background-image: url("../../assets/img/customer-earth.png");
    background-repeat: no-repeat;
    background-size: 100%;
}

.slogan-customer-logo div {
    border: 1px solid transparent;
}

.slogan-customer-logo div:hover {
    border-width: 1px;
    @apply border-mainG;
}

.home-swiper {
    height: 460px;
    width: 99vw;
}

.mogu-text p:hover {
    text-decoration: underline;
}

@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {
    .hermit-main .slogan-service {
        padding: 150px 80px;
        box-sizing: border-box;
    }
    .slogan-news .slogan{
        @apply mb-4
    }

}
</style>