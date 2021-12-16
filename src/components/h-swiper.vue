/*
* @h-swiper.vue
* @deprecated
* @author czh
* @update (czh 2021/12/15)
*/
<template>
    <swiper
        :spaceBetween="30" :centeredSlides="true"
        :autoplay='{ "delay": 2500, "disableOnInteraction": false }'
        :pagination='{ "clickable": true }'
        :navigation="true"
        class="mySwiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
    </swiper>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
import {SwiperEvents} from "swiper/types/swiper-events";

export default defineComponent({
    name: "h-swiper",
    components: {
        Swiper,
        SwiperSlide,
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
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>