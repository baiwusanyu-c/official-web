/*
* @h-home-swiper.vue
* @deprecated
* @author czh
* @update (czh 2021/12/15)
*/
<template>
    <swiper
        :slidesPerView="4"
        :spaceBetween="10"
        :centerInsufficientSlides="true"
        :centeredSlides="false"
        :initialSlide="1"
        :loop="false"
        :slidesPerGroup="4"
        :loopFillGroupWithBlank="true"
        :pagination="false"
        :navigation="true"
        class="mySwiper">
        <swiper-slide v-for="item in list" :key="item.name + item.info">
            <div style="margin-left: 56px">
                <div class="swiper-header">
                    <p class="swiper-header-title">{{item.name}}</p>
                </div>
                <div class="swiper-footer">
                    <p class="break-words text-left">{{ item.info }}</p>
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
import SwiperCore, {Pagination, Autoplay, Navigation} from 'swiper';
SwiperCore.use([Pagination, Autoplay, Navigation]);
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
                    {imgUrl: '', info: 'SMART CONTRACT AUDIT REPORT', name: 'For xxxx'},
                    {imgUrl: '', info: 'SMART CONTRACT AUDIT REPORT', name: 'For xxxx'},
                    {imgUrl: '', info: 'SMART CONTRACT AUDIT REPORT', name: 'For xxxx'},
                    {imgUrl: '', info: 'SMART CONTRACT AUDIT REPORT', name: 'For xxxx'},
                    {imgUrl: '', info: 'SMART CONTRACT AUDIT REPORT', name: 'For xxxx'},
                    {imgUrl: '', info: 'SMART CONTRACT AUDIT REPORT', name: 'For xxxx'},
                    {imgUrl: '', info: 'SMART CONTRACT AUDIT REPORT', name: 'For xxxx'},
                    {imgUrl: '', info: 'SMART CONTRACT AUDIT REPORT', name: 'For xxxx'},
                    {imgUrl: '', info: 'SMART CONTRACT AUDIT REPORT', name: 'For xxxx'},
                    {imgUrl: '', info: 'SMART CONTRACT AUDIT REPORT', name: 'For xxxx'},
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
.swiper-main{
    width: 1200px;
}
.mySwiper{
    width: 1500px;
}
.swiper-header{
    height:193px;
    width:258px;
    background: url('../assets/img/service-contract/swiper-img.png');
    display: flex;
    justify-content: center;
    align-items: center;
}
.swiper-header p{
    width: 120px;
    height: 23px;
    font-size: 30px;
    font-weight: 400;
    color: #FBFAFA;
    line-height: 35px;
}
.swiper-footer{
    width: 257px;
    height: 138px;
    background: linear-gradient(-32deg, #19BCFC, #00FFBA);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.swiper-footer p{
    width: 150px;
    height: 45px;
    font-size: 16px;
    font-weight: 400;
    color: #0A0A0A;
    line-height: 32px;
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
    @apply text-8xl;
}
    .swiper{
        --swiper-navigation-color: #DFDFDF;/* 单独设置按钮颜色 */
        --swiper-navigation-size: 30px;/* 设置按钮大小 */
    }

</style>