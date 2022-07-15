/* * @h-product-swiper.vue * @deprecated :autoplay='{ "delay": 2000, "disableOnInteraction": false
}' * @author czh * @update (czh 2021/12/15) */
<template>
  <swiper
    class="article-swiper"
    :centered-slides="true"
    :loop="true"
    autoplay
    :pagination="{ clickable: true }"
    @slideChange="onSlideChange">
    <swiper-slide v-for="(item, i) in items" :id="item.id" :key="item.id" :item="item">
      <div class="swiper-item" :data-idx="i">
        <img :src="item.coverImg" alt="" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  import SwiperCore, { Pagination, Autoplay } from 'swiper'
  SwiperCore.use([Pagination, Autoplay])
  // const mockList = [
  //   {
  //     id: 1,
  //     coverImg: 'https://swiperjs.com/demos/images/nature-1.jpg',
  //     info: 'wqdddddddddddedddddddddddddddddddddddddd',
  //     name: 'chen chen chen',
  //   },
  //   {
  //     id: 2,
  //     coverImg: 'https://swiperjs.com/demos/images/nature-3.jpg',
  //     info: 'wqddddddddddddwddsddddddddddddddddddddddd',
  //     name: 'chen chen chen',
  //   },
  //   {
  //     id: 3,
  //     coverImg: 'https://swiperjs.com/demos/images/nature-2.jpg',
  //     info: 'wqddddddddddddddddd12dddddddddddddddddddd',
  //     name: 'chen chen chen',
  //   },
  //   {
  //     id: 4,
  //     coverImg: 'https://swiperjs.com/demos/images/nature-1.jpg',
  //     info: 'wqdddddddddsddddddddddddddddddddddddddddd',
  //     name: 'chen chen chen',
  //   },
  //   {
  //     id: 5,
  //     coverImg: 'https://swiperjs.com/demos/images/nature-3.jpg',
  //     info: 'wqdddddddddcsdddddddddddddddddddddddddddd',
  //     name: 'chen chen chen',
  //   },
  // ]

  export default defineComponent({
    name: 'HProductSwiper',
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      items: {
        type: Array,
        default: () => {
          return []
        },
      },
    },
    setup(props, context) {
      const onSlideChange = async (swiper: any) => {
        await ''
        const idx = document.querySelector('.swiper-slide-active .swiper-item')?.dataset?.idx
        context.emit('onSlideChange', props.items[idx] || {})
      }

      return {
        onSlideChange,
        // mockList
      }
    },
  })
</script>

<!-- prettier-ignore -->
<style lang="less" scoped>
  .swiper-item{
    position: relative;
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      
    }
    &::before{
      display: block;
      width: 100%;
      content: '';
      padding-top: 64.2%;
    }
  }
</style>
>
