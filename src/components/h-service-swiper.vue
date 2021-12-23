/*
* @h-service-swiper.vue
* @deprecated
* @author czh
* @update (czh 2021/12/15)
*/
<template>
    <swiper
        :slidesPerView="4"
        :spaceBetween="10"
        :centerInsufficientSlides="true"
        :initialSlide="1"
        :slidesPerGroup="1"
        :loopFillGroupWithBlank="true"
        :pagination="false"
        :navigation="true"
        class="myServiceSwiper">
        <swiper-slide v-for="item in list" :key="item.name + item.info">
            <div class="service-swiper-slide">
                <div class="swiper-header">
                    <p class="swiper-header-title font-format">{{item.name}}</p>
                </div>
                <div class="swiper-footer">
                    <p class="break-words text-left font-format">{{ item.info }}</p>
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
    name: "h-service-swiper",
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


.myServiceSwiper{
  width: 1500px;
}

.swiper-header{
  display: flex;
  align-items: center;
  justify-content: center;
  width:258px;
  height:193px;
  background: url('../assets/img/service-contract/swiper-img.png');
}

.swiper-header p{
  font-size: 30px;
  font-weight: 400;
  line-height: 35px;
  color: black;
}

.swiper-footer{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 257px;
  height: 138px;
  padding: 30px;
  box-sizing:border-box;
  text-align: center;
  background: linear-gradient(-32deg, #19BCFC, #00FFBA);
}

.swiper-footer p{
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  color: #0A0A0A;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.myServiceSwiper .service-swiper-slide{
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
}
.swiper{
  --swiper-navigation-color: #DFDFDF;/* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px;/* 设置按钮大小 */
}
@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {
    .myServiceSwiper{
        width: 1100px;
    }
    .myServiceSwiper .swiper-header{
        width:200px;
        height:150px;
    }
    .myServiceSwiper .swiper-header p{
        font-size: 20px;
    }
    .myServiceSwiper .swiper-footer{
        width:200px;
        height:150px;
    }
    .myServiceSwiper .swiper-footer p{
        font-size: 12px;
    }

}
</style>