/* * @home.vue * @deprecated * @author czh * @update (czh 2021/12/15) */
<template>
  <div class="hermit-main w-full">
    <home-header></home-header>
    <banner-card></banner-card>
    <about-beosin></about-beosin>
    <dynamic-info></dynamic-info>
    <!--report-->
    <!-- <report-list> </report-list> -->
    <!--   blog     -->

    <!--   service     -->
    <div class="service-safe-area">
      <div class="slogan-service w-full bg-default flex flex-col">
        <div class="slogan-service-item flex justify-end items-center w-full sm:flex-col">
          <div
            style="box-sizing: border-box"
            class="mr-24 hexagon-desc lg125:mb-0 md:mb-0 sm:mb-0 sm:mr-0">
            <h3 class="font-bold border-top text-3xl mb-8 font-format sm:text-[20px] sm:mb-4">
              {{ $t('lang.home.serviceTitle1') }}
            </h3>
            <p class="mb-16 font-format text-justify leading-normal text-lg sm:text-xs sm:mb-6">
              {{ $t('lang.home.serviceInfo1') }}
            </p>

            <!--        pc 显示按钮            -->
            <div class="sm:hidden">
              <n-button
                :bordered="false"
                class="display-flex learn-more-btn h-btn-txt-black linear-l-r text-black text-xl"
                @click="routerPush('/service/audit')">
                <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
              </n-button>
            </div>
          </div>

          <div class="flex flex-wrap flex-col relative hexagon-container-body justify-center">
            <div class="flex justify-center">
              <hexagon class="font-format" :index="0"></hexagon>
              <hexagon class="font-format" :index="1"></hexagon>
              <hexagon class="font-format" :index="2"></hexagon>
            </div>
            <div class="flex justify-center relative hexagon-b1">
              <hexagon class="font-format" :index="3"></hexagon>
              <hexagon class="font-format" :index="4"></hexagon>
            </div>
            <!--        mobile 显示按钮            -->
            <div
              class="display-none sm:flex"
              style="position: absolute; right: 50%; bottom: 5%; transform: translateX(50%)">
              <n-button
                :bordered="false"
                class="learn-more-btn h-btn-txt-black linear-l-r text-black text-xl"
                @click="routerPush('/service/audit')">
                <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
              </n-button>
            </div>
          </div>
        </div>

        <div
          class="slogan-service-item flex mt-10 w-full justify-start items-center sm:flex-col sm:mt-10">
          <!--        pc 显示六边形         -->
          <div class="display-flex flex-wrap flex-col relative hexagon-container-body sm:hidden">
            <div class="flex justify-center">
              <hexagon class="font-format" :index="7"></hexagon>
              <hexagon class="font-format" :index="8"></hexagon>
            </div>
            <div class="flex justify-center relative hexagon-b1">
              <hexagon class="font-format" :index="9"></hexagon>
              <hexagon class="font-format" :index="10"></hexagon>
              <hexagon class="font-format" :index="11"></hexagon>
            </div>
          </div>

          <div class="hexagon-desc mb-48 ml-24 lg125:mb-0 md:mb-0 sm:mb-0 sm:mr-0 sm:ml-0">
            <h3
              class="font-bold text-3xl border-top mb-8 font-format text-right float-right sm:text-[20px] sm:float-none sm:mb-4 sm:text-left">
              {{ $t('lang.home.serviceTitle2') }}
            </h3>
            <p
              class="mb-16 font-format text-justify leading-normal float-right text-lg sm:text-xs sm:float-none sm:mb-6">
              {{ $t('lang.home.serviceInfo2') }}
            </p>
            <div class="sm:hidden">
              <n-button
                :bordered="false"
                class="float-right learn-more-btn h-btn-txt-black linear-l-r text-black text-xl"
                @click="routerPush('/service/chainsaudit')">
                <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
              </n-button>
            </div>
          </div>
          <!--        mobile 显示六边形         -->
          <div
            class="display-none flex-wrap flex-col relative hexagon-container-body mr-12 justify-center sm:flex sm:mr-0">
            <div class="flex justify-center">
              <hexagon class="font-format" :index="7"></hexagon>
              <hexagon class="font-format" :index="8"></hexagon>
            </div>
            <div class="flex justify-center relative hexagon-b1">
              <hexagon class="font-format" :index="9"></hexagon>
              <hexagon class="font-format" :index="10"></hexagon>
              <hexagon class="font-format" :index="11"></hexagon>
            </div>
            <!--        mobile 显示按钮            -->
            <div
              class="display-none sm:flex"
              style="position: absolute; right: 50%; bottom: 5%; transform: translateX(50%)">
              <n-button
                :bordered="false"
                class="float-right learn-more-btn h-btn-txt-black linear-l-r text-black text-xl"
                @click="routerPush('/service/chainsaudit')">
                <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
              </n-button>
            </div>
          </div>
        </div>

        <div class="slogan-service-item flex justify-end items-center w-full mt-10 sm:flex-col">
          <div
            style="box-sizing: border-box"
            class="mr-24 hexagon-desc lg125:mb-0 md:mb-0 sm:mb-0 sm:mr-0">
            <h3 class="font-bold border-top text-3xl mb-8 font-format sm:text-[20px] sm:mb-4">
              Cryptocurrency Tracing
            </h3>
            <p class="mb-16 font-format text-justify leading-normal text-lg sm:text-xs sm:mb-6">
              {{ $t('lang.home.serviceInfo3') }}
            </p>
            <div class="sm:hidden">
              <n-button
                :bordered="false"
                class="display-flex learn-more-btn h-btn-txt-black linear-l-r text-black text-xl"
                @click="routerPush('/service/tracing')">
                <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
              </n-button>
            </div>
          </div>

          <div class="flex flex-wrap flex-col relative hexagon-container-body justify-center">
            <div class="flex justify-center trace-trans">
              <hexagon class="font-format" :index="12"></hexagon>
              <hexagon class="font-format" :index="13"></hexagon>
            </div>
            <div class="flex justify-center trace-trans relative hexagon-b1">
              <hexagon class="font-format" :index="14"></hexagon>
              <hexagon class="font-format" :index="15"></hexagon>
              <hexagon class="font-format" :index="16"></hexagon>
            </div>
            <div
              class="display-none sm:flex"
              style="position: absolute; right: 50%; bottom: 5%; transform: translateX(50%)">
              <n-button
                :bordered="false"
                class="learn-more-btn h-btn-txt-black linear-l-r text-black text-xl"
                @click="routerPush('/service/tracing')">
                <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
              </n-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--   product     -->
    <div class="slogan-product bg-mainBlueGary flex flex-col justify-center items-center w-full">
      <div class="flex-1 flex-col flex justify-center items-center w-full mb-36 sm:mb-6">
        <div class="bar mb-8 sm:mb-2"></div>
        <h3 class="text-2xl font-bold mb-8 font-format text-center sm:text-[20px] sm:w-4/5 sm:mb-4">
          {{ $t('lang.home.productName1') }}
        </h3>
        <p
          class="w-3/5 mb-8 font-format text-justify leading-normal text-lg sm:text-xs sm:w-4/5 sm:mb-0">
          {{ $t('lang.home.productDesc1') }}
        </p>
        <div class="slogan-product-circle1 w-full my-24 relative sm:my-10">
          <home-product-circle :index="1"></home-product-circle>
          <home-product-circle :index="2"></home-product-circle>
          <home-product-circle :index="3"></home-product-circle>
          <home-product-circle :index="4"></home-product-circle>
        </div>
        <n-button
          :bordered="false"
          class="learn-more-btn h-btn-txt-black linear-l-r text-black text-xl sm:mb-10 sm:text-base"
          @click="routerPush('/product/vass')">
          <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
        </n-button>
      </div>
      <div class="flex-1 flex-col flex justify-center items-center w-full">
        <div class="bar mb-8 sm:mb-2"></div>
        <h3 class="text-2xl font-bold mb-8 font-format text-center sm:text-[20px] sm:w-4/5 sm:mb-4">
          {{ $t('lang.home.productName2') }}
        </h3>
        <p
          class="w-3/5 mb-8 font-format text-justify leading-normal text-lg sm:text-xs sm:w-4/5 sm:mb-0">
          {{ $t('lang.home.productDesc2') }}
        </p>
        <div class="slogan-product-circle2 w-full my-24 relative sm:my-10">
          <home-product-circle :index="5"></home-product-circle>
          <home-product-circle :index="6"></home-product-circle>
          <home-product-circle :index="7"></home-product-circle>
          <home-product-circle :index="8"></home-product-circle>
        </div>
        <n-button
          :bordered="false"
          class="learn-more-btn h-btn-txt-black linear-l-r text-black text-xl sm:text-base"
          @click="routerPush('/product/eagleeye')">
          <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
        </n-button>
      </div>
    </div>
    <!--   serving global customer     -->
    <div class="slogan-customer bg-default flex flex-col justify-center items-center w-full">
      <div class="bar mb-8 mt-20 sm:mb-2"></div>
      <h3 class="text-2xl font-bold mb-8 font-format sm:text-[20px]">
        {{ $t('lang.home.GlobalTitle') }}
      </h3>
      <div
        class="slogan-customer-logo flex flex-wrap px-36 h-3/5 justify-around mb-12 box-border sm:px-6">
        <div
          v-for="item in customerImgList"
          :key="item.img"
          class="shadow-lg mb-14 mr-6 bg-default sm:mb-4 sm:mr-0">
          <img :src="item.img" alt="" class="sm:w-20 sm:h-6" />
        </div>
      </div>
      <div class="mb-10 home-swiper">
        <h-home-swiper :list="swiperList"></h-home-swiper>
      </div>
    </div>

    <div
      v-if="titleCardList.length > 0"
      class="blog-new w-full bg-mainBlueGary flex items-center flex-col">
      <h2 class="security-research text-center !ph:text-[20px] !ph:pt-[16px]">Resources</h2>
      <div
        class="grid grid-cols-4 mt-18 ph:grid-cols-2 w-62vw ph:w-90vw pad:w-90vw gap-10px title-card-container relative h-[100%]">
        <blog-new v-for="item in titleCardList" :key="item.id" class="mr-0" :data="item">
        </blog-new>
        <p
          class="blog-more-btn cursor-pointer absolute hover:underline"
          @click="routerPush('/resources')">
          {{ $t('lang.home.more') }}
          <img alt="" src="../../assets/img/more.png" class="inline ml-2" style="height: 14px" />
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import Hexagon from '../../components/hexagon.vue'
  import HHomeSwiper from '../../components/h-home-swiper.vue'
  import { useEventBus } from '@vueuse/core'
  import composition from '../../utils/mixin/common-func'
  import HomeProductCircle from '../../components/home-product-circle.vue'
  import BlogNew from '../../components/blog-new.vue'
  import { getBlogNews } from '../../api/research'
  import HomeHeader from './includes/home-header.vue'
  import BannerCard from './includes/banner-card.vue'
  import AboutBeosin from './includes/about-beosin.vue'
  import DynamicInfo from './includes/dynamic-info.vue'
  import { NButton } from 'naive-ui'
  interface ISelect {
    label: string
    value: string
    isHover?: boolean
  }
  export interface IBlobList {
    title: string // 標題
    content: string // 内容
    pubTime?: string // 發佈時間
    type: number
    url?: string
    id: string
  }

  const customerList = [
    'eth',
    'polygon',
    'solrnr',
    'binance',
    'tron',
    'polkadot',
    'uniswap',
    'ZRX',
    'crust',
    'oneswap',
    'ankr',
    'ENJ',
    'binnace',
    'kucoin',
    'bitmart',
    'GEMINI',
    'OKEX',
    'huobi',
  ]
  const scienceDict = [
    'science01',
    'science02',
    'science03',
    'science04',
    'science01-hover',
    'science02-hover',
    'science03-hover',
    'science04-hover',
  ]

  export default defineComponent({
    name: 'HomePage',
    components: {
      BlogNew,
      HomeProductCircle,
      HHomeSwiper,
      Hexagon,
      HomeHeader,
      BannerCard,
      AboutBeosin,
      DynamicInfo,
      NButton,
    },
    async setup() {
      const router = useRouter()
      const { t } = useI18n()
      const titleCardList = ref<Array<IBlobList>>([])
      const res: any = await getBlogNews()
      if (res.code === 200 && res.rows) {
        titleCardList.value = res.rows
      }

      /*************************************** 一些动态、批量的img加载读取 ******************************/

      const customerImgList = reactive<any[]>([])
      const scienceList = reactive<any[]>([])
      const getImage = (): void => {
        customerList.map((val: string) => {
          const obj: { img: string } = { img: '' }
          import('../../assets/img/' + val + '.png').then(res => {
            obj.img = res.default
            customerImgList.push(obj)
          })
        })
        scienceDict.map((val: string) => {
          const obj: { img: string } = { img: '' }
          import('../../assets/img/' + val + '.png').then(res => {
            let path = res.default.split('/@fs')
            obj.img = res.default.indexOf('/@fs') >= 0 ? path[1] : path[0]
            scienceList.push(obj)
          })
        })
      }
      const scienceInfoList = ref<Array<ISelect>>([
        {
          isHover: false,
          label: t('lang.home.mgtitle1'),
          value: '/service/audit',
        },
        {
          isHover: false,
          label: t('lang.home.mgtitle2'),
          value: '/service/chainsaudit',
        },
        {
          isHover: false,
          label: t('lang.home.mgtitle3'),
          value: '/product/vass',
        },
        {
          isHover: false,
          label: t('lang.home.mgtitle4'),
          value: '/product/eagleeye',
        },
      ])

      // eventBus 开启预约弹窗
      const bus = useEventBus<string>('openQuote')
      const openDialog = (): void => {
        bus.emit('true')
      }
      // 路由跳转
      const routerPush = (value: string) => {
        router.push(value)
      }
      // swiperList 的文字、头像变量
      const swiperList = ref([
        {
          imgUrl: 'https://avatars.githubusercontent.com/u/29225966?v=4',
          info: t('lang.home.swiperInfo1'),
          name: t('lang.home.swiperUser1'),
        },
        {
          imgUrl: 'https://avatars.githubusercontent.com/u/2194624?s=60&v=4',
          info: t('lang.home.swiperInfo2'),
          name: t('lang.home.swiperUser2'),
        },
        {
          imgUrl: 'https://avatars.githubusercontent.com/u/74358?s=60&v=4',
          info: t('lang.home.swiperInfo3'),
          name: t('lang.home.swiperUser3'),
        },
        {
          imgUrl: 'https://avatars.githubusercontent.com/u/1357791?s=60&v=4',
          info: t('lang.home.swiperInfo4'),
          name: t('lang.home.swiperUser4'),
        },
        {
          imgUrl: 'https://avatars.githubusercontent.com/u/2259688?s=60&v=4',
          info: t('lang.home.swiperInfo5'),
          name: t('lang.home.swiperUser5'),
        },
      ])

      getImage()
      return {
        swiperList,
        routerPush,
        openDialog,
        scienceInfoList,
        titleCardList,
        customerImgList,
      }
    },
  })
</script>

<style lang="less">
  .security-research {
    font-size: 30px;
    font-weight: bold;
    color: #1d263b;
    line-height: 60px;
    padding-top: 36px;
    border-top: 6px solid #44d7b6;
    width: fit-content;
  }
  .border-top {
    padding-top: 10px;
    border-top: 6px solid rgb(2, 251, 187);
    width: fit-content;
  }
  .science-dom {
    width: 220px;
  }
  .header-content {
    padding: 40px 0;
  }

  .hexagon-container-body {
    width: 68%;
    padding: 6em 0;
    background-image: url('../../assets/img/hexagon-texture.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .hexagon-container-body .hexagon-b1 {
    bottom: 60px;
  }

  .hermit-main .blog-new {
    box-sizing: border-box;
    padding: 80px 0 50px;
    /* height: 518px; */
  }

  .hermit-main .blog-more-btn {
    display: flex;
    align-items: flex-start;
    justify-content: end;
    line-height: 16px;
    text-align: right;
    right: -10px;
    bottom: -30px;
    position: absolute;
  }

  .hermit-main .title-card-container {
    position: relative;
  }

  .hermit-main .title-card-container .title-card {
    position: relative;
    /* width: 280px; */
    height: 400px;
    transition: all 0.3s;
  }

  .title-card-container h3 {
    font-size: 24px;
    font-weight: 400;
    line-height: 35px;
  }

  .title-card-container p {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
  }

  .hermit-main .title-card-container .title-card:hover {
    height: 450px;
    background: linear-gradient(-32deg, #19bcfc, #00ffba);
  }

  .hermit-main .title-card-container .title-card .title-card-btn {
    width: 50px;
    height: 50px;
    transition: all 0.3s;
  }

  .hermit-main .title-card-container .title-card:hover .title-card-btn {
    width: 64px;
    height: 64px;
  }

  .hermit-main .title-card-container .title-card .icon-up2 {
    display: none;
  }

  .hermit-main .title-card-container .title-card:hover .icon-up2 {
    display: initial;
    transform: rotate(90deg);
  }

  .hermit-main .title-card-container .title-card:hover .icon-up2 .be-icon {
    width: 30px !important;
    height: 30px !important;
  }

  .service-safe-area {
    width: 100%;
    background-color: #fff;
  }

  .hermit-main .slogan-service {
    margin: auto;
    box-sizing: border-box;
    padding: 10px 0;
    max-width: 1230px;
  }

  // .slogan-service-item {
  //   min-width: 1050px;
  // }

  .slogan-service-item .hexagon-desc {
    width: 42%;
    min-width: 330px;
  }

  .bar {
    width: 360px;
    height: 5px;

    @apply bg-mainG rounded;
  }

  .hermit-main {
    .learn-more-btn {
      @apply h-10 w-80 sm:w-60 sm:h-9;
      font-weight: 700 !important;
      --n-text-color-hover: #000 !important;
    }
  }

  .hermit-main .slogan-product {
    padding: 86px 0;
  }

  // .hermit-main .slogan-product .try-out-btn {
  //   width: 320px;
  //   font-weight: 700 !important;
  //   --n-text-color-hover: #000 !important;
  //   @apply h-10 font-bold sm:w-60 sm:h-9;
  // }

  .slogan-product-circle1 {
    height: 200px;
    background-image: url('../../assets/img/product-bg1.png');
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
    height: 200px;
    background-image: url('../../assets/img/product-bg2.png');
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
    background-image: url('../../assets/img/customer-earth.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .slogan-customer-logo div {
    border: 1px solid transparent;
    img {
      width: 220px;
    }
  }

  .slogan-customer-logo div:hover {
    border-width: 1px;
  }

  .home-swiper {
    width: 99vw;
    height: 460px;
  }

  /* 100% - 110% 适配 */
  @media screen and (min-width: 1540px) and (max-width: 1750px) {
    .hermit-main .title-card-container .title-card {
      /* width: 236px; */
    }

    .hexagon-container {
      height: 190px;
    }

    .title-card-container h3 {
      font-size: 22px;
      font-weight: 400;
      line-height: 35px;
    }

    .title-card-container p {
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
    }
  }

  /* 110% - 125% 适配 */
  @media screen and (min-width: 1328px) and (max-width: 1538px) {
    .hermit-main .slogan-service {
      padding: 10px 0;
    }

    .home-swiper {
      width: 106vw;
    }

    .title-card-container h3 {
      font-size: 20px;
    }

    .title-card-container p {
      font-size: 14px;
    }
  }

  /* 150% 适配 */
  @media screen and (min-width: 1280px) and (max-width: 1326px) {
    .home-swiper {
      width: 126vw;
    }

    .hermit-main .slogan-service {
      box-sizing: border-box;
      padding: 30px 0;
    }

    .slogan-service-item .hexagon-desc {
      width: 40%;
    }
  }

  @media screen and (min-width: 100px) and (max-width: 1278px) {
    .slogan-customer-logo div {
      img {
        width: auto;
      }
    }
    .science-dom p {
      text-align: left;
    }

    .bar {
      width: 160px;
    }

    .home-swiper {
      width: 100vw;
      height: 300px;
    }

    .home-swiper .swiper-item h2 {
      height: 40px;
    }

    .slogan-product-circle1 .circle1 {
      top: -10%;
      left: 0;
    }

    .slogan-product-circle1 .circle2 {
      top: 12%;
      left: 23%;
    }

    .slogan-product-circle1 .circle3 {
      top: -10%;
      left: 45%;
    }

    .slogan-product-circle1 .circle4 {
      top: 12%;
      right: -3%;
    }

    .slogan-product-circle2 .circle5 {
      top: 20%;
      left: 1%;
    }

    .slogan-product-circle2 .circle6 {
      top: -10%;
      left: 24%;
    }

    .slogan-product-circle2 .circle7 {
      top: 20%;
      left: 45%;
    }

    .slogan-product-circle2 .circle8 {
      top: -10%;
      right: -3%;
    }

    .slogan-product-circle1,
    .slogan-product-circle2 {
      height: 160px;
      background-size: 150%;
    }

    .hermit-main .slogan-product {
      padding: 60px 0;
    }

    .slogan-service-item .hexagon-desc {
      width: 28%;
    }

    .slogan-service-item {
      width: 78%;
      min-width: 1050px;
    }

    .hexagon-container-body {
      width: 42%;
      min-width: 345px;
      padding: 3em 0;
    }

    .hexagon-container-body .hexagon-b1 {
      bottom: 34px;
    }

    .hermit-main .slogan-service {
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      padding: 30px;
    }
  }

  @media screen and (min-width: 100px) and (max-width: 768px) {
    .science-dom {
      width: 92%;
      text-align: left;
    }

    .hermit-main .title-card-container .title-card {
      position: relative;
      /* top: -80px; */
      /* width: 48%; */
      height: 270px;
      margin-bottom: 10px;
      transition: all 0.3s;
    }

    .title-card-container h3 {
      font-size: 14px;
      font-weight: bold;
      line-height: 20px;
    }

    .title-card-container p {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
    }

    .hermit-main .title-card-container .title-card:hover {
      height: 270px;
      background: linear-gradient(-32deg, #19bcfc, #00ffba);
    }

    .hermit-main .title-card-container .title-card .title-card-btn {
      width: 30px;
      height: 30px;
      transition: all 0.3s;
    }

    .hermit-main .title-card-container .title-card:hover .title-card-btn {
      width: 30px;
      height: 30px;
    }

    .hermit-main .title-card-container .title-card:hover .icon-up2 .be-icon {
      width: 20px !important;
      height: 20px !important;
    }

    .hermit-main .blog-more-btn {
      justify-content: center;
      width: 100%;
    }
  }

  @media screen and (min-width: 100px) and (max-width: 340px) {
    .science-dom {
      margin-bottom: 10px !important;
    }
  }

  /* pad */
  @media screen and (min-width: 768px) and (max-width: 1278px) {
    .science-dom {
      width: 46%;
    }

    .slogan-product-circle1 .circle1 {
      top: -10%;
      left: 10%;
    }

    .slogan-product-circle1 .circle2 {
      top: 40%;
      left: 34%;
    }

    .slogan-product-circle1 .circle3 {
      top: -10%;
      left: 56%;
    }

    .slogan-product-circle1 .circle4 {
      top: 40%;
      right: 4%;
    }

    .slogan-product-circle2 .circle5 {
      top: 48%;
      left: 10%;
    }

    .slogan-product-circle2 .circle6 {
      top: -10%;
      left: 34%;
    }

    .slogan-product-circle2 .circle7 {
      top: 48%;
      left: 56%;
    }

    .slogan-product-circle2 .circle8 {
      top: -10%;
      right: 4%;
    }
  }
</style>
