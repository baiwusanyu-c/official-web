/* * @h-product-swiper.vue * @deprecated :autoplay='{ "delay": 2000,
"disableOnInteraction": false }' * @author czh * @update (czh 2021/12/15) */
<template>
  <swiper
    :centered-slides="true"
    :initial-slide="3"
    :loop="true"
    :pagination="{ clickable: true }"
    class="mySwiper"
  >
    <swiper-slide v-for="(item, index) in imgList" :key="index">
      <img :src="item.img" alt="" />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
SwiperCore.use([Pagination, Autoplay])
import { SwiperEvents } from 'swiper/types/swiper-events'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'

export default defineComponent({
  name: 'HProductSwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    /*list: {
            type: Array,
            default: () => {
                return [
                    {imgUrl: 'https://swiperjs.com/demos/images/nature-1.jpg', info: 'wqdddddddddddedddddddddddddddddddddddddd', name: 'chen chen chen'},
                    {imgUrl: 'https://swiperjs.com/demos/images/nature-3.jpg', info: 'wqddddddddddddwddsddddddddddddddddddddddd', name: 'chen chen chen'},
                    {imgUrl: 'https://swiperjs.com/demos/images/nature-2.jpg', info: 'wqddddddddddddddddd12dddddddddddddddddddd', name: 'chen chen chen'},
                    {imgUrl: 'https://swiperjs.com/demos/images/nature-1.jpg', info: 'wqdddddddddsddddddddddddddddddddddddddddd', name: 'chen chen chen'},
                    {imgUrl: 'https://swiperjs.com/demos/images/nature-3.jpg', info: 'wqdddddddddcsdddddddddddddddddddddddddddd', name: 'chen chen chen'},
                ]
            }
        }*/
  },
  setup() {
    const list = ref<Array<string>>(['first'])
    const route: RouteLocationNormalizedLoaded = useRoute()
    const imgList = reactive<object[]>([])
    const imgImport = import.meta.globEager('../assets/img/*.png')
    const getImage = (): void => {
      list.value.map((val: string, index: number) => {
        const objImg = { img: '' }
        if (route.path === '/index/product/productVaaS') {
          objImg.img =
            imgImport[
              '../assets/img/beosin-vaas' + (index + 1) + '.png'
            ].default
          imgList.push(objImg)
        } else if (route.path === '/index/product/productEagle') {
          objImg.img =
            imgImport['../assets/img/eagle-eye' + (index + 1) + '.png'].default
          imgList.push(objImg)
        }
      })
    }
    const onSwiper = (swiper: SwiperEvents): void => {
      console.log(swiper)
    }
    const onSlideChange = (): void => {
      console.log('slide change')
    }
    onMounted(() => {
      getImage()
    })
    return {
      onSwiper,
      onSlideChange,
      getImage,
      imgList,
      route,
    }
  },
})
</script>

<style>
/* .product-swiper {
  height: 600px;
} */

.product-swiper .swiper {
  width: 100%;
}

.product-swiper .swiper-wrapper {
  height: 90%;
}

.product-swiper .swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet-active {
  @apply bg-mainG;
}
</style>
