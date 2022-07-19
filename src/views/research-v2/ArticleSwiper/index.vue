/* * @h-product-swiper.vue * @deprecated :autoplay='{ "delay": 2000, "disableOnInteraction": false
}' * @author czh * @update (czh 2021/12/15) */
<template>
  <div class="article-swiper-box">
    <swiper
      class="article-swiper"
      :centered-slides="true"
      :loop="true"
      :autoplay="{ disableOnInteraction: false }"
      :initial-slide="1"
      :pagination="{ clickable: true, el: '#article-pagination' }"
      @slide-change="onSlideChange"
      @click="clickHandle">
      <swiper-slide v-for="(item, i) in items" :id="item.id" :key="item.id" :item="item">
        <div class="swiper-item" :data-idx="i">
          <img :src="item.coverImg" alt="" />
        </div>
      </swiper-slide>
    </swiper>
    <div id="article-pagination"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  import SwiperCore, { Pagination, Autoplay } from 'swiper'
  SwiperCore.use([Pagination, Autoplay])

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
    emits: ['onSlideChange', 'goLearnMore'],
    setup(props, context) {
      const onSlideChange = async () => {
        await ''
        const idx = document.querySelector('.swiper-slide-active .swiper-item')?.dataset?.idx
        context.emit('onSlideChange', props.items[idx] || {})
      }
      const clickHandle = () => {
        context.emit('goLearnMore')
      }

      return {
        onSlideChange,
        clickHandle,
        // mockList
      }
    },
  })
</script>

<!-- prettier-ignore -->
<style lang="less" scoped>
.article-swiper {
  cursor: pointer;
}

.swiper-item {
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;

  }

  &::before {
    display: block;
    width: 100%;
    content: '';
    padding-top: 64.2%;
  }
}
</style>
<style lang="less">
  #article-pagination {
    bottom: 0px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    .swiper-pagination-bullet {
      width: 32px;
      height: 4px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 3px;
    }

    .swiper-pagination-bullet-active {
      background: #1cd2a9;
    }
  }
</style>
