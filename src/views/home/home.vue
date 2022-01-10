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
                <video class='absolute left-0 bottom-0 top-0 right-0'
                       style="z-index: 0;width:100%;height: 100%;object-fit: fill"
                       src="../../assets/video/home.mp4"
                       muted="muted"
                       autoplay="autoplay" loop="loop" width="1920"></video>
            </div>
            <div class="absolute z-10 flex justify-center flex-col w-1/2  h-full animate__animated animate__fadeInDown md:w-2/3">
                <h2 class="text-mainG text-6xl text-center font-bold leading-normal font-format">
                    {{ $t('lang.home.title1') }}</h2>
                <h2 class="text-mainG text-6xl text-center font-bold leading-normal mb-20 slogan font-format">
                    {{ $t('lang.home.title2') }}</h2>
                <div class="flex justify-between self-center mb-16 slogan w-full lg125:w-full120%">
                    <div v-for="(item,index) in muguList"
                         @mouseleave="item.isHover = false"
                         @mouseenter="item.isHover = true"
                         @click="headerRouterPush(item.value)"
                         style="width: 152px;;line-height: 1rem;cursor:pointer"
                         class="text-default text-center mb-4 flex-col leading-6 flex items-center mogu-text"
                         :key="item.label">
                        <img alt="" :src="scienceImg(index)" class="ml-4 mr-4"/>
                        <p :class="`mt-4 font-format ${item.isHover ? 'text-mainG' :''}`">{{ item.label }}</p>
                    </div>
                </div>
                <be-button
                    @click="openDialog"
                    customClass="contact-btn h-btn-txt-black linear-l-r text-black mr-auto ml-auto text-2xl">
                    <span class="font-format">{{ $t('lang.contactBtn') }}</span>
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
            <div class="slogan-service-item flex justify-center items-center w-full">
                <div style="box-sizing: border-box;" class="mb-56 mr-12 hexagon-desc lg125:mb-48 md:mb-0">
                    <div class="bar mb-8"></div>
                    <h3 class="font-bold text-3xl mb-8 font-format">{{ $t('lang.home.serviceTitle1') }}</h3>
                    <p class="mb-16 font-format text-justify leading-normal text-lg">{{
                            $t('lang.home.serviceInfo1')
                        }}</p>
                    <be-button
                        @click="routerPush('/index/service/contracts')"
                        customClass="learn-more-btn h-btn-txt-black linear-l-r text-black text-xl ">
                        <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
                    </be-button>
                </div>
                <div class="flex flex-wrap relative hexagon-container-body" style="width: 42%">
                    <hexagon class='absolute hexagon1 font-format' :index="0"></hexagon>
                    <hexagon class='absolute hexagon2 font-format' :index="1"></hexagon>
                    <hexagon class='absolute hexagon3 font-format' :index="2"></hexagon>
                    <hexagon class='absolute hexagon4 font-format' :index="3"></hexagon>
                    <hexagon class='absolute hexagon5 font-format' :index="4"></hexagon>
                </div>
            </div>
            <div class="slogan-service-item flex mt-20 w-full justify-center items-center">
                <div class="flex flex-wrap relative hexagon-container-body mr-12" style="width: 42%">
                    <hexagon class='absolute font-format hexagon8' :index="7"></hexagon>
                    <hexagon class='absolute font-format hexagon9' :index="8"></hexagon>
                    <hexagon class='absolute font-format hexagon10' :index="9"></hexagon>
                    <hexagon class='absolute font-format hexagon11' :index="10"></hexagon>
                    <hexagon class='absolute font-format hexagon12' :index="11"></hexagon>
                </div>
                <div class="mb-56 hexagon-desc lg125:mb-48  md:mb-0">
                    <div class="bar mb-8 float-right"></div>
                    <h3 class="font-bold text-3xl mb-8 font-format text-right float-right">
                        {{ $t('lang.home.serviceTitle2') }}</h3>
                    <p class="mb-16 font-format text-justify leading-normal float-right text-lg">
                        {{ $t('lang.home.serviceInfo2') }}</p>
                    <be-button
                        @click="routerPush('/index/service/security')"
                        customClass="float-right learn-more-btn h-btn-txt-black linear-l-r text-black text-xl">
                        <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
                    </be-button>
                </div>
            </div>
        </div>
        <!--   product     -->
        <div class="slogan-product  bg-mainBlueGary flex flex-col justify-center items-center w-full">
            <div class="flex-1 flex-col flex justify-center items-center w-full mb-36">
                <div class="bar mb-8"></div>
                <h3 class="text-2xl font-bold mb-8 font-format ">{{ $t('lang.home.productName1') }}</h3>
                <p class="w-3/5 mb-8 font-format text-justify leading-normal text-lg">{{
                        $t('lang.home.productDesc1')
                    }}</p>
                <div class="slogan-product-circle1 w-full my-24 relative" style="height: 200px">
                    <home-product-circle :index="1"></home-product-circle>
                    <home-product-circle :index="2"></home-product-circle>
                    <home-product-circle :index="3"></home-product-circle>
                    <home-product-circle :index="4"></home-product-circle>
                </div>
                <be-button
                    @click="routerPush('/index/product/productVass')"
                    customClass="try-out-btn h-btn-txt-black linear-l-r text-black text-xl">
                    <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
                </be-button>
            </div>
            <div class="flex-1 flex-col flex justify-center items-center w-full">
                <div class="bar mb-8"></div>
                <h3 class="text-2xl font-bold mb-8 font-format">{{ $t('lang.home.productName2') }}</h3>
                <p class="w-3/5 mb-8 font-format text-justify leading-normal text-lg">{{
                        $t('lang.home.productDesc2')
                    }}</p>
                <div class="slogan-product-circle2 w-full my-24 relative" style="height: 200px">
                    <home-product-circle :index="5"></home-product-circle>
                    <home-product-circle :index="6"></home-product-circle>
                    <home-product-circle :index="7"></home-product-circle>
                    <home-product-circle :index="8"></home-product-circle>
                </div>
                <be-button
                    @click="routerPush('/index/product/productEagle')"
                    customClass="try-out-btn h-btn-txt-black linear-l-r text-black text-xl">
                    <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
                </be-button>
            </div>
        </div>

        <!--   serving global customer     -->
        <div class="slogan-customer bg-default flex flex-col justify-center items-center w-full">
            <div class="bar mb-8 mt-20"></div>
            <h3 class="text-2xl font-bold mb-8 font-format">{{ $t('lang.home.GlobalTitle') }}</h3>
            <div class="slogan-customer-logo flex flex-wrap px-36 h-3/5 justify-around mb-12 box-border">
                <div v-for="(item) in customerImgList"
                     :key='item.img'
                     class="shadow-lg mb-14 mr-6 bg-default hover:shadow-2xl">
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
import {defineComponent, ref, reactive, onMounted, computed} from "vue";
import ContactUs from "../../components/contact-us.vue";
import AboutHermit from "../../components/about-hermit.vue";
import {useI18n} from "vue-i18n";
import Hexagon from "../../components/hexagon.vue";
import HHomeSwiper from "../../components/h-home-swiper.vue";
import {useEventBus} from "@vueuse/core";
import {Router, useRouter} from "vue-router";
import composition from "../../utils/mixin/common-func";
import HomeProductCircle from "../../components/home-product-circle.vue";

interface ISelect {
    label: string,
    value: string,
    isHover?: boolean,
}

export default defineComponent({
    name: "home",
    components: {HomeProductCircle, HHomeSwiper, AboutHermit, ContactUs, Hexagon},
    setup(props, ctx) {
        const {t} = useI18n()
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
        /*************************************** 一些动态、批量的img加载读取 ******************************/
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
        const scienceDict = ['science','science-hover']
        const customerImgList = reactive<object[]>([])
        const scienceList = reactive<object[]>([])
        const getImage = (): void => {
            customerList.map((val: string) => {
                const obj: { img: string } = {img: ''}
                import('../../assets/img/' + val + '.png').then(res => {
                    obj.img = res.default
                    customerImgList.push(obj)
                })
            })
            scienceDict.map((val: string) => {
                const obj: { img: string } = {img: ''}
                import('../../assets/img/' + val + '.png').then(res => {
                    obj.img = res.default
                    scienceList.push(obj)
                })
            })
        }
        const isScienceHover = ref<boolean>(false)
        const scienceImg = computed(()=>{
            return function (index:number){
                if(muguList.value[index].isHover){
                    return (scienceList[1] as { img: string })?.img
                }else{
                    return (scienceList[0] as { img: string })?.img
                }
            }

        })
        const muguList = ref<Array<ISelect>>([
            {isHover:false,label: t('lang.home.mgtitle1'), value: '/index/service/contracts'},
            {isHover:false,label: t('lang.home.mgtitle2'), value: '/index/service/security'},
            {isHover:false,label: t('lang.home.mgtitle3'), value: '/index/product/productVass'},
            {isHover:false,label: t('lang.home.mgtitle4'), value: '/index/product/productEagle'},
        ])

        // eventBus 开启预约弹窗
        const bus = useEventBus<string>('openQuote')
        const openDialog = (): void => {
            bus.emit('true')
        }
        // 路由跳转
        const {routerPush} = composition(props, ctx)
        const headerRouterPush = (value: string): void => {
            routerPush(value)
        }
        // swiperList 的文字、头像变量
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
                    imgUrl: 'https://avatars.githubusercontent.com/u/74358?s=60&v=4',
                    info: t('lang.home.swiperInfo3'),
                    name: t('lang.home.swiperUser3')
                },
                {
                    imgUrl: 'https://avatars.githubusercontent.com/u/1357791?s=60&v=4',
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
            isScienceHover,
            scienceImg,
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

.hexagon-container-body {
  height: 800px;
  background-image: url("../../assets/img/hexagon-texture.png");
  background-repeat: no-repeat;
  background-size: 100%;
}

.hermit-main .slogan-news {
  height: 100vh;
  background-position-x: -2px;
  background-size: 101% 100%;
}

.hermit-main .slogan-news .slogan-news-bg {

  /* height: 58%; */
  height: 100%
}

.hermit-main .slogan-news .contact-btn {

  /* margin-bottom: 20em; */
  @apply h-12 w-80 font-bold;

}

.hermit-main .slogan-news .title-card-container {
  position: relative;
  top: -32%;
  left: 0;
}

.hermit-main .slogan-news .title-card-container .title-card {
  position: absolute;
  top: 0;
  width: 291px;
  height: 378px;
  transition: all .3s;

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
  width: 50px;
  height: 50px;
  transition: all .3s;
}

.hermit-main .slogan-news .title-card-container .title-card:hover .be-icon {
  width: 64px;
  height: 64px;
}

.hermit-main .slogan-news .title-card-container .title-card .icon-up2 {
  display: none;

}

.hermit-main .slogan-news .title-card-container .title-card:hover .icon-up2 {
  display: initial;
  transform: rotate(90deg);
}

.hermit-main .slogan-news .title-card-container .title-card:hover .icon-up2 .be-icon {
  width: 30px !important;
  height: 30px !important;

}

.hermit-main .slogan-service {
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
}

.slogan-service-item {
  width: 600px;
  min-width: 1050px;
}

.slogan-service-item .hexagon-desc{
  width: 22%;
}

.slogan-service .hexagon1 {
  top: 20%;
  left: 22%
}

.slogan-service .hexagon2 {
  top: 20%;
  left: 46%
}

.slogan-service .hexagon3 {
  top: 42%;
  left: 10%;
}

.slogan-service .hexagon4 {
  top: 42%;
  left: 34%;
}

.slogan-service .hexagon5 {
  top: 42%;
  left: 58.5%
}

.slogan-service .hexagon6 {
  top: 94%;
  left: 20%;
}

.slogan-service .hexagon7 {
  top: 94%;
  left: 50%;
}

.slogan-service .hexagon8 {
  top: 20%;
  left: 22%;
}

.slogan-service .hexagon9 {
  top: 20%;
  left: 46%;
}

.slogan-service .hexagon10 {
  top: 42%;
  left: 10%;
}

.slogan-service .hexagon11 {
  top: 42%;
  left: 34%;
}

.slogan-service .hexagon12 {
  top: 42%;
  left: 58%;
}

.bar {
  width: 360px;
  height: 5px;
  @apply bg-mainG rounded;
}

.hermit-main .slogan-service .learn-more-btn {
  @apply h-10 w-80 font-bold;
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
  top: 44%;
  left: 24%;
}

.slogan-product-circle1 .circle2 {
  top: -8%;
  left: 42%;
}

.slogan-product-circle1 .circle3 {
  top: 44%;
  left: 60%;
}

.slogan-product-circle1 .circle4 {
  top: -8%;
  right: 17%;
}

.slogan-product-circle2 {
  background-image: url("../../assets/img/product-bg2.png");
  background-repeat: no-repeat;
  background-size: 100%;
}

.slogan-product-circle2 .circle5 {
  top: 0;
  left: 24%;
}

.slogan-product-circle2 .circle6 {
  top: 46%;
  left: 42%;
}

.slogan-product-circle2 .circle7 {
  top: 0;
  left: 60%;
}

.slogan-product-circle2 .circle8 {
  top: 46%;
  right: 17%;
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
  width: 99vw;
  height: 460px;
}

/* 110% - 125% 适配 */
@media screen and (min-width: 1536px) and (max-height: 840px) and (max-width: 1750px) {

  .home-swiper {
    width: 106vw;
  }

  .slogan-service .hexagon3 {
    top: 37%
  }

  .slogan-service .hexagon4 {
    top: 37%
  }

  .slogan-service .hexagon5 {
    top: 37%
  }

  .slogan-service .hexagon10 {
    top: 37%
  }

  .slogan-service .hexagon11 {
    top: 37%
  }

  .slogan-service .hexagon12 {
    top: 37%
  }
}

/* 150% 适配 */
@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {

  .home-swiper {
    width: 126vw;
  }

  .hermit-main .slogan-service {
    box-sizing: border-box;
    padding: 150px 80px;
  }

  .hexagon-container-body {
    height: 464px;
  }

  .slogan-news .slogan {
    @apply mb-4
    }

  .slogan-service-item .hexagon-desc{
    width: 40%;
  }

  .slogan-service .hexagon1 {
    left: 20%
  }

  .slogan-service .hexagon2 {
    left: 48%
  }

  .slogan-service .hexagon3 {
    top: 45%;
    left: 6%;
  }

  .slogan-service .hexagon4 {
    top: 45%;
  }

  .slogan-service .hexagon5 {
    top: 45%;
    left: 62%;
  }

  .slogan-service .hexagon8{
    left: 20%;
  }

  .slogan-service .hexagon9{
    left: 48%;
  }

  .slogan-service .hexagon10 {
    top: 45%;
    left: 6%;
  }

  .slogan-service .hexagon11 {
    top: 45%;
  }

  .slogan-service .hexagon12 {
    top: 45%;
    left: 62%;
  }

}
</style>