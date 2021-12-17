/*
* @h-product-swiper.vue
* @deprecated
* @author czh
* @update (czh 2021/12/15)
*/
<template>
    <swiper
        :centeredSlides="true"
        :initialSlide="3"
        :loop="true"
        :autoplay='{ "delay": 2000, "disableOnInteraction": false }'
        :pagination='{ "clickable": true }'
        class="mySwiper">
        <swiper-slide v-for="item in list" :key="item.name + item.info">
            <img :src="item.imgUrl" alt=""/>
        </swiper-slide>
    </swiper>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, {Pagination,Autoplay} from 'swiper';
SwiperCore.use([Pagination,Autoplay]);
import {SwiperEvents} from "swiper/types/swiper-events";
import {NAvatar} from 'naive-ui'
export default defineComponent({
    name: "h-product-swiper",
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
                    {imgUrl: 'https://swiperjs.com/demos/images/nature-1.jpg', info: 'wqdddddddddddedddddddddddddddddddddddddd', name: 'chen chen chen'},
                    {imgUrl: 'https://swiperjs.com/demos/images/nature-3.jpg', info: 'wqddddddddddddwddsddddddddddddddddddddddd', name: 'chen chen chen'},
                    {imgUrl: 'https://swiperjs.com/demos/images/nature-2.jpg', info: 'wqddddddddddddddddd12dddddddddddddddddddd', name: 'chen chen chen'},
                    {imgUrl: 'https://swiperjs.com/demos/images/nature-1.jpg', info: 'wqdddddddddsddddddddddddddddddddddddddddd', name: 'chen chen chen'},
                    {imgUrl: 'https://swiperjs.com/demos/images/nature-3.jpg', info: 'wqdddddddddcsdddddddddddddddddddddddddddd', name: 'chen chen chen'},
                ]
            }
        }
    },
    setup() {
        const onSwiper = (swiper: SwiperEvents): void => {
            console.log(swiper);
        }
        const onSlideChange = (): void => {
            console.log('slide change');
        }
        return {
            onSwiper,
            onSlideChange,
        };
    }
})
</script>

<style>
.product-swiper{
    height: 600px;
}
.product-swiper .swiper {
    width: 100%;
    height: 100%;
}
.product-swiper .swiper-wrapper{
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
.swiper-pagination-bullet-active{
    @apply bg-mainG;
}
</style>