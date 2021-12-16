/*
* @home.vue
* @deprecated
* @author czh
* @update (czh 2021/12/15)
*/
<template>
    <div class="hermit-main w-full bg-green-100">
        <!--   slogan & news     -->
        <div class="slogan-news w-full bg-mainBlueGary relative flex justify-center">
            <div class="slogan-news-bg w-full bg-black absolute "></div>
            <div class="absolute z-10 flex justify-center flex-col w-1/2 h-full">
                <h2 class="text-mainG text-6xl text-center font-bold leading-normal">{{$t('lang.home.title1')}}</h2>
                <h2 class="text-mainG text-6xl text-center font-bold leading-normal mb-20">{{$t('lang.home.title2')}}</h2>
                <div class="flex flex-wrap w-2/3 justify-between self-center mb-16">
                    <div v-for="(item) in muguList"
                         class="text-default text-left w-1/2 mb-4"
                         :key="item.label">
                        <be-icon icon="deleteIc" color="white" customClass="ml-4"></be-icon>
                        {{item.label}}
                    </div>
                </div>
                <be-button customClass="contact-btn h-btn-txt-black linear-l-r text-black mr-auto ml-auto">{{$t('lang.contactBtn') }}</be-button>
                <div class="mt-30 flex title-card-container">
                    <div v-for="(item) in muguList"
                         class="title-card text-default mr-3 bg-default z-10"
                         :key="item.label">
                        {{item.label}}
                    </div>
                </div>
                <p class="text-right relative -right-40">{{ $t('lang.home.more') }} >></p>

            </div>

        </div>
        <!--   service     -->
        <div>

        </div>
        <!--   product     -->
        <div>

        </div>
        <!--   serving global customer     -->
        <div>

        </div>
        <contact-us></contact-us>
        <about-hermit></about-hermit>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import ContactUs from "../../components/contact-us.vue";
import AboutHermit from "../../components/about-hermit.vue";
import {useI18n} from "vue-i18n";
interface ISelect {
    label: string,
    value: string,
    active?:boolean,
}
export default defineComponent({
    name: "home",
    components: {AboutHermit, ContactUs},
    setup(){
        const {t} = useI18n()
        const muguList = ref<Array<ISelect>>([
            {label:t('lang.home.mgtitle1'),value:'url1'},
            {label:t('lang.home.mgtitle2'),value:'url1'},
            {label:t('lang.home.mgtitle3'),value:'url1'},
            {label:t('lang.home.mgtitle4'),value:'url1'},
        ])
        const titleCardList = ref<Array<ISelect>>([
            {label:t('lang.home.mgtitle1'),value:'url1'},
            {label:t('lang.home.mgtitle2'),value:'url1'},
            {label:t('lang.home.mgtitle3'),value:'url1'},
            {label:t('lang.home.mgtitle4'),value:'url1'},
        ])
        return {
            muguList,
            titleCardList,
        }
    }
})
</script>

<style>
.hermit-main{
    height: 7315px;
}
.hermit-main .slogan-news{
    height: 134vh;
}
.hermit-main .slogan-news .slogan-news-bg{
    height: 58%;
}
.hermit-main .slogan-news .contact-btn{
    margin-bottom: 30em;
    @apply h-12 w-80;
}
.hermit-main .slogan-news .title-card-container{
    position: relative;
    left: 0;
    top: -32%;
}
.hermit-main .slogan-news .title-card-container .title-card{
    width: 291px;
    height: 378px;
    transition: all .3s;
    position: absolute;
    top: 0;

}
.hermit-main .slogan-news .title-card-container .title-card:nth-child(1){
    left:-150px
}
.hermit-main .slogan-news .title-card-container .title-card:nth-child(2){
    left:180px
}
.hermit-main .slogan-news .title-card-container .title-card:nth-child(3){
    left:510px
}
.hermit-main .slogan-news .title-card-container .title-card:nth-child(4){
    left:840px
}
.hermit-main .slogan-news .title-card-container .title-card:hover{
    height:450px;
    background: linear-gradient(-32deg, #19BCFC, #00FFBA);

}
</style>