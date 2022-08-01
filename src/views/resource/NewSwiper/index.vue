<template>
  <div class="swiper-box">
    <div class="swiper" @click="clickHandle">
      <div class="swiper-wrapper">
        <div v-for="(item, i) in (items as any)" :key="item.id" class="swiper-slide">
          <div class="swiper-item" :data-idx="i">
            <img :src="item.coverImg" :alt="item.title" />
          </div>
        </div>
      </div>
    </div>
    <div id="article-pagination" class="swiper-pagination"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Swiper from 'swiper'
  export default defineComponent({
    name: 'NewSwiper',
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
        console.log(7777, document.querySelector('.swiper-slide-active .swiper-item')?.dataset?.idx)
        await ''
        const idx = document.querySelector('.swiper-slide-active .swiper-item')?.dataset?.idx
        context.emit('onSlideChange', props.items[idx] || {})
      }
      const swiper = new Swiper('.swiper', {
        autoplay: true, //可选选项，自动滑动
        loop: true,
        centeredSlides: true,
        initialSlide: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on: {
          slideChangeTransitionEnd: function (value) {
            console.log(props.items)
            console.log(this.activeIndex)

            // context.emit('onSlideChange', this.activeIndex )
            // console.log(this.activeIndex)
            // onSlideChange()
          },
        },
      })

      const clickHandle = () => {
        context.emit('goLearnMore')
      }

      return {
        clickHandle,
        onSlideChange,
        swiper,
      }
    },
  })
</script>

<style lang="less" scoped>
  .swiper-box {
    position: relative;
    .swiper {
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
    #article-pagination {
      bottom: -52px;
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
  }
</style>
