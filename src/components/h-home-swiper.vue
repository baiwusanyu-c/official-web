/* * @h-home-swiper.vue * @deprecated * @author czh * @update (czh 2021/12/15)
*/
<template>
  <swiper
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :centered-slides="centeredSlides"
    :loop="true"
    :autoplay="{ delay: 5000, disableOnInteraction: false }"
    :initial-slide="3"
    :pagination="{ clickable: true }"
    class="mySwiper"
  >
    <swiper-slide v-for="item in list" :key="item.name + item.info">
      <div class="swiper-item flex flex-col">
        <div
          class="h-72 px-4 text-container sm:h-52"
          style="border-bottom: 1px solid #dcdcdc"
        >
          <h2 class="text-left">“</h2>
          <p
            class="break-words text-left font-format text-justify leading-normal sm:text-left"
          >
            {{ item.info }}
          </p>
        </div>
        <div class="flex p-6 items-center sm:p-2">
          <n-avatar
            round
            class="avatar"
            :src="item.imgUrl || `../assets/img/avatar.png`"
          />
          <p class="ml-8 font-format">{{ item.name }}</p>
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
import SwiperCore, { Pagination, Autoplay } from 'swiper'

SwiperCore.use([Pagination, Autoplay])
import { SwiperEvents } from 'swiper/types/swiper-events'
import { NAvatar } from 'naive-ui'

export default defineComponent({
  name: 'HHomeSwiper',
  components: {
    Swiper,
    SwiperSlide,
    NAvatar,
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return [
          {
            imgUrl: '',
            info: 'wqdddddddddddedddddddddddddddddddddddddd',
            name: 'chen chen chen',
          },
          {
            imgUrl: '',
            info: 'wqddddddddddddwddsddddddddddddddddddddddd',
            name: 'chen chen chen',
          },
          {
            imgUrl: '',
            info: 'wqddddddddddddddddd12dddddddddddddddddddd',
            name: 'chen chen chen',
          },
          {
            imgUrl: '',
            info: 'wqdddddddddsddddddddddddddddddddddddddddd',
            name: 'chen chen chen',
          },
          {
            imgUrl: '',
            info: 'wqdddddddddcsdddddddddddddddddddddddddddd',
            name: 'chen chen chen',
          },
        ]
      },
    },
  },
  setup() {
    const onSwiper = (swiper: SwiperEvents): void => {
      console.log(swiper)
    }
    const onSlideChange = (): void => {
      console.log('slide change')
    }
    const slidesPerView = ref<number>(5)
    const spaceBetween = ref<number>(30)
    const centeredSlides = ref<boolean>(true)
    const screenWidth = window.screen.width
    if (100 < screenWidth && screenWidth < 1278) {
      slidesPerView.value = 2
      spaceBetween.value = 10
      centeredSlides.value = false
    }
    return {
      spaceBetween,
      centeredSlides,
      slidesPerView,
      onSwiper,
      onSlideChange,
    }
  },
})
</script>

<style>
.home-swiper .swiper {
  width: 100%;
  height: 100%;
}

.home-swiper .swiper-slide {
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 360px;
  min-width: 300px;
  height: 355px;
  font-size: 18px;
  text-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  @apply shadow-xl;
}

.home-swiper .swiper-slide-active {
  width: 380px;
  height: 386px;
  @apply shadow-2xl;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-swiper .swiper-item {
  width: 300px;
}

.home-swiper .swiper-slide-active .swiper-item h2 {
  @apply text-mainG;
}

.home-swiper .swiper-item h2 {
  font-size: 42px;
}

.home-swiper .swiper-item p {
  font-size: 16px;
}

.avatar {
  width: 48px;
  height: 48px;
}

/* 110% - 125% 适配 */
@media screen and (min-width: 1536px) and (max-height: 840px) and (max-width: 1750px) {
  .home-swiper .swiper-item h2 {
    font-size: 32px;
  }

  .home-swiper .text-container {
    @apply p-4;
  }
}

/* 150% 适配 */
@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {
  .home-swiper .swiper-item p {
    font-size: 12px;
  }

  .home-swiper .text-container {
    @apply p-4;
  }
}

/* 移动端 适配 */
@media screen and (min-width: 100px) and (max-width: 1278px) {
  .home-swiper .swiper-item {
    width: 300px;
  }

  .home-swiper .swiper-slide {
    width: 300px;
    min-width: 200px;
    height: 260px;
  }

  .home-swiper .swiper-item p {
    font-size: 12px;
  }

  .home-swiper .swiper-slide-active {
    width: 300px;
    height: 260px;
  }

  .avatar {
    width: 30px;
    height: 30px;
  }
}
</style>
