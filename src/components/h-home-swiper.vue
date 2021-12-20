/*
* @h-home-swiper.vue
* @deprecated
* @author czh
* @update (czh 2021/12/15)
*/
<template>
    <swiper
        :slidesPerView="5"
        :spaceBetween="30"
        :centeredSlides="true"
        :initialSlide="3"
        :loop="true"
        :autoplay='{ "delay": 5000, "disableOnInteraction": false }'
        :pagination='{ "clickable": true }'
        class="mySwiper">
        <swiper-slide v-for="item in list" :key="item.name + item.info">
            <div class="swiper-item flex flex-col">
                <div class="h-60" style="border-bottom: 1px solid #dcdcdc">
                    <h2 class="text-left">“</h2>
                    <p class="break-words text-left">{{ item.info }}</p>
                </div>
                <div class="flex p-6 items-center">
                    <n-avatar
                        round
                        :size="48"
                        :src="item.imgUrl || `../assets/img/avatar.png`"/>
                    <p class="ml-8">{{ item.name }}</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, {Pagination, Autoplay} from 'swiper';
SwiperCore.use([Pagination, Autoplay]);
import {SwiperEvents} from "swiper/types/swiper-events";
import {NAvatar} from 'naive-ui'
export default defineComponent({
    name: "h-home-swiper",
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
                    {imgUrl: '', info: 'wqdddddddddddedddddddddddddddddddddddddd', name: 'chen chen chen'},
                    {imgUrl: '', info: 'wqddddddddddddwddsddddddddddddddddddddddd', name: 'chen chen chen'},
                    {imgUrl: '', info: 'wqddddddddddddddddd12dddddddddddddddddddd', name: 'chen chen chen'},
                    {imgUrl: '', info: 'wqdddddddddsddddddddddddddddddddddddddddd', name: 'chen chen chen'},
                    {imgUrl: '', info: 'wqdddddddddcsdddddddddddddddddddddddddddd', name: 'chen chen chen'},
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
.home-swiper .swiper {
    width: 100%;
    height: 100%;
}

.home-swiper .swiper-slide {
    width: 360px;
    height: 355px;
    text-align: center;
    font-size: 18px;
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
    font-size: 65px;
}
.home-swiper .swiper-item p {
    font-size: 16px;
}
</style>