/* * @home.vue * @deprecated * @author czh * @update (czh 2021/12/15) */
<template>
  <div class="hermit-main w-full bg-black-100">
    <!--   slogan & news     -->
    <div
      class="slogan-news w-full bg-mainBlueGary relative flex justify-center"
    >
      <div class="slogan-news-bg w-full absolute">
        <video
          class="absolute left-0 bottom-0 top-0 right-0"
          style="z-index: 0; width: 100%; height: 100%; object-fit: fill"
          src="../../assets/video/home.mp4"
          muted="muted"
          autoplay="autoplay"
          loop="loop"
          width="1920"
        ></video>
      </div>
      <div
        class="absolute z-10 flex justify-center flex-col w-3/5 h-full md:w-11/12 sm:w-4/5"
      >
        <h2
          class="text-mainG text-6xl text-center font-bold leading-normal font-format sm:text-2xl"
        >
          {{ $t('lang.home.title1') }}
        </h2>
        <h2
          class="text-mainG text-6xl text-center font-bold leading-normal mb-20 slogan font-format sm:text-2xl sm:mb-8"
        >
          {{ $t('lang.home.title2') }}
        </h2>
        <div
          class="flex justify-around self-center mb-16 slogan w-full lg125:w-full120 sm:flex-col sm:mb-8 sm:items-center"
        >
          <div
            v-for="(item, index) in scienceInfoList"
            :key="item.label"
            style="line-height: 1rem; cursor: pointer"
            class="science-dom text-default text-center mb-4 display-flex-col leading-6 flex items-center mogu-text sm:flex-row sm:mb-6"
            @mouseleave="item.isHover = false"
            @mouseenter="item.isHover = true"
            @click="headerRouterPush(item.value)"
          >
            <img alt="" :src="scienceImg(index)" class="ml-4 mr-4 sm:w-6" />
            <p
              :class="`mt-4 font-format ${
                item.isHover ? 'text-mainG' : ''
              } sm:mt-0 sm:text-xs`"
            >
              <span class="font-format text-lg">{{ item.label }}</span>
            </p>
          </div>
        </div>
        <be-button
          custom-class="contact-btn h-btn-txt-black linear-l-r text-black mr-auto ml-auto text-2xl sm:text-base"
          @click="openDialog"
        >
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
      <div
        class="slogan-service-item flex justify-end items-center w-full sm:flex-col"
      >
        <div
          style="box-sizing: border-box"
          class="mr-24 hexagon-desc lg125:mb-0 md:mb-0 sm:mb-0 sm:mr-0"
        >
          <h3 class="font-bold text-3xl mb-8 font-format sm:text-lg sm:mb-4">
            {{ $t('lang.home.serviceTitle1') }}
          </h3>
          <p
            class="mb-16 font-format text-justify leading-normal text-lg sm:text-xs sm:mb-6"
          >
            {{ $t('lang.home.serviceInfo1') }}
          </p>

          <!--        pc 显示按钮            -->
          <div class="sm:hidden">
            <be-button
              custom-class="display-flex learn-more-btn h-btn-txt-black linear-l-r text-black text-xl"
              @click="routerPush('/index/service/contracts')"
            >
              <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
            </be-button>
          </div>
        </div>

        <div
          class="flex flex-wrap flex-col relative hexagon-container-body justify-center"
        >
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
            style="
              position: absolute;
              right: 50%;
              bottom: 5%;
              transform: translateX(50%);
            "
          >
            <be-button
              custom-class="learn-more-btn h-btn-txt-black linear-l-r text-black text-xl"
              @click="routerPush('/index/service/contracts')"
            >
              <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
            </be-button>
          </div>
        </div>
      </div>

      <div
        class="slogan-service-item flex mt-10 w-full justify-start items-center sm:flex-col sm:mt-10"
      >
        <!--        pc 显示六边形         -->
        <div
          class="display-flex flex-wrap flex-col relative hexagon-container-body sm:hidden"
        >
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

        <div
          class="hexagon-desc mb-48 ml-24 lg125:mb-0 md:mb-0 sm:mb-0 sm:mr-0 sm:ml-0"
        >
          <h3
            class="font-bold text-3xl mb-8 font-format text-right float-right sm:text-lg sm:float-none sm:mb-4 sm:text-left"
          >
            {{ $t('lang.home.serviceTitle2') }}
          </h3>
          <p
            class="mb-16 font-format text-justify leading-normal float-right text-lg sm:text-xs sm:float-none sm:mb-6"
          >
            {{ $t('lang.home.serviceInfo2') }}
          </p>
          <div class="sm:hidden">
            <be-button
              custom-class="float-right learn-more-btn h-btn-txt-black linear-l-r text-black text-xl"
              @click="routerPush('/index/service/security')"
            >
              <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
            </be-button>
          </div>
        </div>
        <!--        mobile 显示六边形         -->
        <div
          class="display-none flex-wrap relative hexagon-container-body mr-12 justify-center sm:flex sm:mr-0"
        >
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
            style="
              position: absolute;
              right: 50%;
              bottom: 5%;
              transform: translateX(50%);
            "
          >
            <be-button
              custom-class="float-right learn-more-btn h-btn-txt-black linear-l-r text-black text-xl"
              @click="routerPush('/index/service/security')"
            >
              <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
            </be-button>
          </div>
        </div>
      </div>
    </div>
    <!--   product     -->
    <div
      class="slogan-product bg-mainBlueGary flex flex-col justify-center items-center w-full"
    >
      <div
        class="flex-1 flex-col flex justify-center items-center w-full mb-36 sm:mb-6"
      >
        <div class="bar mb-8 sm:mb-2"></div>
        <h3
          class="text-2xl font-bold mb-8 font-format text-center sm:text-lg sm:w-4/5 sm:mb-4"
        >
          {{ $t('lang.home.productName1') }}
        </h3>
        <p
          class="w-3/5 mb-8 font-format text-justify leading-normal text-lg sm:text-xs sm:w-4/5 sm:mb-0"
        >
          {{ $t('lang.home.productDesc1') }}
        </p>
        <div class="slogan-product-circle1 w-full my-24 relative sm:my-10">
          <home-product-circle :index="1"></home-product-circle>
          <home-product-circle :index="2"></home-product-circle>
          <home-product-circle :index="3"></home-product-circle>
          <home-product-circle :index="4"></home-product-circle>
        </div>
        <be-button
          custom-class="try-out-btn h-btn-txt-black linear-l-r text-black text-xl sm:text-base"
          @click="routerPush('/index/product/productVaaS')"
        >
          <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
        </be-button>
      </div>
      <div class="flex-1 flex-col flex justify-center items-center w-full">
        <div class="bar mb-8 sm:mb-2"></div>
        <h3
          class="text-2xl font-bold mb-8 font-format text-center sm:text-lg sm:w-4/5 sm:mb-4"
        >
          {{ $t('lang.home.productName2') }}
        </h3>
        <p
          class="w-3/5 mb-8 font-format text-justify leading-normal text-lg sm:text-xs sm:w-4/5 sm:mb-0"
        >
          {{ $t('lang.home.productDesc2') }}
        </p>
        <div class="slogan-product-circle2 w-full my-24 relative sm:my-10">
          <home-product-circle :index="5"></home-product-circle>
          <home-product-circle :index="6"></home-product-circle>
          <home-product-circle :index="7"></home-product-circle>
          <home-product-circle :index="8"></home-product-circle>
        </div>
        <be-button
          custom-class="try-out-btn h-btn-txt-black linear-l-r text-black text-xl sm:text-base"
          @click="routerPush('/index/product/productEagle')"
        >
          <span class="font-format">{{ $t('lang.LearnMoreBtn') }}</span>
        </be-button>
      </div>
    </div>
    <!--   serving global customer     -->
    <div
      class="slogan-customer bg-default flex flex-col justify-center items-center w-full"
    >
      <div class="bar mb-8 mt-20 sm:mb-2"></div>
      <h3 class="text-2xl font-bold mb-8 font-format sm:text-lg">
        {{ $t('lang.home.GlobalTitle') }}
      </h3>
      <div
        class="slogan-customer-logo flex flex-wrap px-36 h-3/5 justify-around mb-12 box-border sm:px-6"
      >
        <div
          v-for="item in customerImgList"
          :key="item.img"
          class="shadow-lg mb-14 mr-6 bg-default sm:mb-4 sm:mr-0"
        >
          <img :src="item.img" alt="" class="sm:w-20 sm:h-6" />
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
import { defineComponent, ref, reactive, onMounted, computed } from 'vue'
import ContactUs from '../../components/contact-us.vue'
import AboutHermit from '../../components/about-hermit.vue'
import { useI18n } from 'vue-i18n'
import Hexagon from '../../components/hexagon.vue'
import HHomeSwiper from '../../components/h-home-swiper.vue'
import { useEventBus } from '@vueuse/core'
import composition from '../../utils/mixin/common-func'
import HomeProductCircle from '../../components/home-product-circle.vue'

interface ISelect {
  label: string
  value: string
  isHover?: boolean
}

export default defineComponent({
  name: 'HomePage',
  components: {
    HomeProductCircle,
    HHomeSwiper,
    AboutHermit,
    ContactUs,
    Hexagon,
  },
  setup() {
    const { t } = useI18n()
    const titleCardList = ref<Array<any>>([
      {
        label: t('lang.home.mgtitle1'),
        value:
          'On November 30, Hermit detected that MonoX, an automatic market maker protocol, suffered a flash loan attack',
        date: '12/06/2021',
      },
      {
        label: t('lang.home.mgtitle2'),
        value:
          'On November 30, Hermit detected that MonoX, an automatic market maker protocol, suffered a flash loan attack',
        date: '12/06/2021',
      },
      {
        label: t('lang.home.mgtitle3'),
        value:
          'On November 30, Hermit detected that MonoX, an automatic market maker protocol, suffered a flash loan attack',
        date: '12/06/2021',
      },
      {
        label: t('lang.home.mgtitle4'),
        value:
          'On November 30, Hermit detected that MonoX, an automatic market maker protocol, suffered a flash loan attack',
        date: '12/06/2021',
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
    const scienceDict = ['science', 'science-hover']
    const customerImgList = reactive<object[]>([])
    const scienceList = reactive<object[]>([])
    const getImage = (): void => {
      customerList.map((val: string) => {
        const obj: { img: string } = { img: '' }
        import('../../assets/img/' + val + '.png').then((res) => {
          obj.img = res.default
          customerImgList.push(obj)
        })
      })
      scienceDict.map((val: string) => {
        const obj: { img: string } = { img: '' }
        import('../../assets/img/' + val + '.png').then((res) => {
          obj.img = res.default
          scienceList.push(obj)
        })
      })
    }
    const isScienceHover = ref<boolean>(false)
    const scienceImg = computed(() => {
      return function (index: number) {
        if (scienceInfoList.value[index].isHover) {
          return (scienceList[1] as { img: string })?.img
        } else {
          return (scienceList[0] as { img: string })?.img
        }
      }
    })
    const scienceInfoList = ref<Array<ISelect>>([
      {
        isHover: false,
        label: t('lang.home.mgtitle1'),
        value: '/index/service/contracts',
      },
      {
        isHover: false,
        label: t('lang.home.mgtitle2'),
        value: '/index/service/security',
      },
      {
        isHover: false,
        label: t('lang.home.mgtitle3'),
        value: '/index/product/productVaaS',
      },
      {
        isHover: false,
        label: t('lang.home.mgtitle4'),
        value: '/index/product/productEagle',
      },
    ])

    // eventBus 开启预约弹窗
    const bus = useEventBus<string>('openQuote')
    const openDialog = (): void => {
      bus.emit('true')
    }
    // 路由跳转
    const { routerPush } = composition()
    const headerRouterPush = (value: string): void => {
      routerPush(value)
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
    onMounted(() => {
      getImage()
    })
    return {
      isScienceHover,
      scienceImg,
      swiperList,
      routerPush,
      openDialog,
      scienceInfoList,
      titleCardList,
      customerImgList,
      headerRouterPush,
    }
  },
})
</script>

<style>
.science-dom {
  width: 178px;
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

.hermit-main .slogan-news {
  height: 100vh;
  padding: 0 200px;
  background-position-x: -2px;
  background-size: 101% 100%;
}

.hermit-main .slogan-news .slogan-news-bg {

  /* height: 58%; */
  height: 100%;
}

.hermit-main .slogan-news .contact-btn {

  /* margin-bottom: 20em; */
  @apply h-12 w-80 font-bold sm:w-60 sm:h-9;
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
  left: -150px;
}

.hermit-main .slogan-news .title-card-container .title-card:nth-child(2) {
  left: 180px;
}

.hermit-main .slogan-news .title-card-container .title-card:nth-child(3) {
  left: 510px;
}

.hermit-main .slogan-news .title-card-container .title-card:nth-child(4) {
  left: 840px;
}

.hermit-main .slogan-news .title-card-container .title-card:hover {
  height: 450px;
  background: linear-gradient(-32deg, #19bcfc, #00ffba);
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

.hermit-main
.slogan-news
.title-card-container
.title-card:hover
.icon-up2
.be-icon {
  width: 30px !important;
  height: 30px !important;
}

.hermit-main .slogan-service {
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 10px 200px;
}

.slogan-service-item {
  width: 78%;
  min-width: 1050px;
}

.slogan-service-item .hexagon-desc {
  width: 40%;
}

.bar {
  width: 360px;
  height: 5px;
  @apply bg-mainG rounded;
}

.hermit-main .slogan-service .learn-more-btn {
  @apply h-10 w-80 font-bold sm:w-60 sm:h-9;
}

.hermit-main .slogan-product {
  padding: 86px 0;
}

.hermit-main .slogan-product .try-out-btn {
  width: 320px;
  @apply h-10 font-bold sm:w-60 sm:h-9;
}

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

  .hexagon-container-body .hexagon-b1 {
    bottom: 50px;
  }

  .hexagon-container {
    height: 190px;
  }
}

/* 110% - 125% 适配 */
@media screen and (min-width: 1328px) and (max-width: 1538px) {

  .hermit-main .slogan-service {
    padding: 10px 116px;
  }

  .hexagon-container-body .hexagon-b1 {
    bottom: 40px;
  }

  .home-swiper {
    width: 106vw;
  }

  .slogan-service .hexagon3 {
    top: 42%;
  }

  .slogan-service .hexagon4 {
    top: 42%;
  }

  .slogan-service .hexagon5 {
    top: 42%;
  }

  .slogan-service .hexagon10 {
    top: 42%;
  }

  .slogan-service .hexagon11 {
    top: 42%;
  }

  .slogan-service .hexagon12 {
    top: 42%;
  }
}

/* 150% 适配 */
@media screen and (min-width: 1280px) and (max-width: 1326px) {

  .home-swiper {
    width: 126vw;
  }

  .hermit-main .slogan-service {
    box-sizing: border-box;
    padding: 30px 80px;
  }

  .slogan-news .slogan {
    @apply mb-4;
  }

  .slogan-service-item .hexagon-desc {
    width: 40%;
  }
}
@media screen and (min-width: 100px) and (max-width: 1278px) {

  .hermit-main .slogan-news {
    height: 70vh;
  }

  .science-dom {
    width: 80%;
    text-align: left;
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
    height: 120px;
    background-size: 150%;
  }

  .hermit-main .slogan-product {
    padding: 60px 0;
  }

  .slogan-service-item .hexagon-desc {
    width: 28%;
  }

  .hexagon-container-body {

    /* height: 332px;
    background-position: center;
    background-size: 80%; */
  }
}
@media screen and (min-width: 100px) and (max-width: 1278px) {

  .hexagon-container-body {
    width: 42%;
    padding: 3em 0;
  }

  .hexagon-container-body .hexagon-b1 {
    bottom: 34px;
  }

  .hermit-main .slogan-service {
    padding: 30px;
  }
}
@media screen and (min-width: 100px) and (max-width: 340px) {

  .science-dom {
    margin-bottom: 10px !important;
  }
}
</style>
