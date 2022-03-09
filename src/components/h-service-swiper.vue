/* * @h-service-swiper.vue * @deprecated * @author czh * @update (czh
2021/12/15) */
<template>
  <swiper
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :center-insufficient-slides="true"
    :initial-slide="0"
    :slides-per-group="1"
    :loop-fill-group-with-blank="true"
    :pagination="false"
    :navigation="true"
    class="myServiceSwiper"
  >
    <swiper-slide v-for="item in list" :key="item.name + item.info">
      <div class="service-swiper-slide">
        <div
          class="swiper-header cursor-pointer"
          @click="openWin(item.fileUrl)"
        >
          <p class="swiper-header-title font-format text-center">
            {{ item.name }}
          </p>
        </div>
        <div
          class="swiper-footer cursor-pointer"
          @click="openWin(item.fileUrl)"
        >
          <p
            class="break-words text-left font-format text-justify leading-normal"
          >
            {{ item.info }}
          </p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper'
import composition from '../utils/mixin/common-func'
SwiperCore.use([Pagination, Autoplay, Navigation])
export default defineComponent({
  name: 'HServiceSwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, ctx) {
    const { openWin } = composition(props, ctx)
    const slidesPerView = ref<number>(3)
    const spaceBetween = ref<number>(10)
    const screenWidth = window.screen.width
    if (screenWidth > 100 && screenWidth < 1278) {
      slidesPerView.value = 3
      spaceBetween.value = 10
    }
    return {
      slidesPerView,
      spaceBetween,
      openWin,
    }
  },
})
</script>

<style>
.myServiceSwiper {
  width: 1500px;
}

.swiper-header {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 258px;
  height: 193px;
  padding: 10px;
  background-image: url('../assets/img/service-contract/swiper-img.png');
}

.swiper-header p {
  font-size: 30px;
  font-weight: 400;
  line-height: 35px;
  color: black;
}

.swiper-footer {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 257px;
  height: 138px;
  padding: 30px;
  text-align: center;
  background: linear-gradient(-32deg, #19bcfc, #00ffba);
}

.swiper-footer p {
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  color: #0a0a0a;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.myServiceSwiper .service-swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.swiper {
  --swiper-navigation-color: #dfdfdf; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
}
@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {

  .myServiceSwiper {
    width: 1100px;
  }

  .myServiceSwiper .swiper-header {
    width: 200px;
    height: 150px;
  }

  .myServiceSwiper .swiper-header p {
    font-size: 20px;
  }

  .myServiceSwiper .swiper-footer {
    width: 200px;
    height: 150px;
  }

  .myServiceSwiper .swiper-footer p {
    font-size: 12px;
  }
}
@media screen and (min-width: 100px) and (max-width: 1278px) {

  .myServiceSwiper {
    width: 85vw;
  }

  .myServiceSwiper .swiper-header {
    width: 100px;
    height: 110px;
    background-repeat: round;
    background-size: 100%;
  }

  .myServiceSwiper .swiper-header p {
    font-size: 12px;
    line-height: 1.5;
  }

  .myServiceSwiper .swiper-footer {
    width: 100px;
    height: 100px;
  }

  .myServiceSwiper .swiper-footer p {
    font-size: 12px;
    line-height: 1.5;
  }
}
</style>
