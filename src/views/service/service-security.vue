/*
* @service-security.vue
* @deprecated
* @author czh
* @update (czh 2021/12/16)
*/
<template>
    <div>
        <div class="page-head relative">
            <div class="header-text">
                <div class="header-text-big">
                    {{$t('lang.serviceSecurity.pageHead.textBig')}}
                </div>
                <div class="header-text-small">
                    {{$t('lang.serviceSecurity.pageHead.textSmall')}}
                </div>
            </div>
            <be-button customClass="reservation-btn h-btn-txt-black linear-l-r text-black text-xl">{{$t('lang.ReservationBtn') }}</be-button>
            <img src="../../assets/img/header-img.png" class="header-img"/>
        </div>
        <div class="page-body-search">
            <div class="body-search-text">
                <span>{{$t('lang.serviceSecurity.search.text')}}</span>
            </div>
            <div class="body-search-num">
                <div class="search-num-box">
                    <div class="num-header">{{$t('lang.serviceSecurity.search.totalCustomers')}}</div>
                    <div class="num-main">{{'1000+'}}</div>
                    <div class="num-footer"></div>
                </div>
                <div class="search-num-box">
                    <div class="num-header">{{$t('lang.serviceSecurity.search.audited')}}</div>
                    <div class="num-main">{{'5000+'}}</div>
                    <div class="num-footer"></div>
                </div>
                <div class="search-num-box">
                    <div class="num-header">{{$t('lang.serviceSecurity.search.totalAudited')}}</div>
                    <div class="num-main">{{'$100B+'}}</div>
                    <div class="num-footer"></div>
                </div>
            </div>
            <div class="body-search-input">
                <div class="input-title">{{$t('lang.serviceSecurity.search.inputTitle')}}</div>
            </div>
            <div class="search-input">
                <n-input size="large"
                         :placeholder="$t('lang.serviceSecurity.search.input')"
                >
                    <template #suffix>
                        <be-icon class="search-input-icon" @click="search" icon="search"></be-icon>
                    </template>
                </n-input>
            </div>
        </div>
        <div class="page-body-content">
            <div class="body-title">{{$t('lang.serviceSecurity.content.title')}}</div>
            <div class="content-card-up">
                <div class="card">
                    <div class="card-title">{{$t('lang.serviceSecurity.content.cardCoding')}}</div>
                    <img src="../../assets/img/language-coding.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title">{{$t('lang.serviceSecurity.content.cardBlock')}}</div>
                    <img src="../../assets/img/block-production.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title">{{$t('lang.serviceSecurity.content.cardSystem')}}</div>
                    <img src="../../assets/img/accounts-system.png" height="120" width="212"/>
                </div>
            </div>
            <div class="content-card-down">
                <div class="card">
                    <div class="card-title">{{$t('lang.serviceSecurity.content.cardAudit')}}</div>
                    <img src="../../assets/img/application-layer.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title">{{$t('lang.serviceSecurity.content.cardLayer')}}</div>
                    <img src="../../assets/img/application-layer.png" height="120" width="212"/>
                </div>
            </div>
        </div>
        <div class="page-body-process">
            <div class="body-title">{{$t('lang.serviceSecurity.process.title')}}</div>
            <div class="process-text">
                <div>{{$t('lang.serviceSecurity.process.textEvaluation')}}</div>
                <div>{{$t('lang.serviceSecurity.process.textImplementation')}}</div>
            </div>
            <img src="../../assets/img/process-small.png" style="margin-bottom: 19px" height="342" width="1200"/>
            <img src="../../assets/img/process-big.png" style="z-index: 1" height="1429" width="1200"/>
        </div>
        <div class="page-body-reports">
            <div class="reports-header">
                <div class="reports-title-class">
                    <div class="reports-title-question">{{$t('lang.serviceSecurity.reports.title')}}</div>
                    <div class="reports-title-answer">{{$t('lang.serviceSecurity.reports.answer')}}</div>
                </div>
                <img src="../../assets/img/pad.png" height="345" width="339"/>
            </div>
            <div class="reports-middle">
                <div class="reports-middle-title">{{$t('lang.serviceSecurity.reports.middleTitle')}}</div>
                <div class="reports-middle-text">{{$t('lang.serviceSecurity.reports.middleText')}}</div>
            </div>
        </div>
        <contact-us></contact-us>
        <about-hermit></about-hermit>
    </div>
</template>

<script lang="ts">

import {defineComponent, getCurrentInstance} from "vue";
import {NInput} from "naive-ui";
import {useI18n} from "vue-i18n";
import AboutHermit from "../../components/about-hermit.vue";
import ContactUs from "../../components/contact-us.vue";

export default defineComponent({
    name: "service-security",
    components:{
        AboutHermit, ContactUs,
        NInput
    },

    setup(){
        const {t} = useI18n()
        const curInst = getCurrentInstance()
        return {
        }
    },
    methods:{
        search(){
            console.log('搜索触发')
        },
    },
})
</script>

<style scoped>
.page-head{
    height: 570px;
    background-color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 110px;
}
.header-text{
    display: flex;
    flex-direction: column;
}
.header-text-big{
    padding-top: 0px;
    margin-top: 77px;
    width: 670px;
    height: 210px;
    line-height: 80px;
    font-size: 60px;
    font-weight: bold;
    color: #FFFFFF;
    font-family: SourceHanSansCN-Bold sans-serif;
}
.header-text-small{
    padding-top: 39px;
    width: 645px;
    height: 72px;
    font-size: 30px;
    color: #FFFFFF;
    line-height: 30px;
    font-family: SourceHanSansCN-Regular sans-serif;
}
.page-body-search{
    height: 744px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.body-search-text{
    margin-top: 65px;
    width: 1201px;
    height: 157px;
    font-size: 24px;
    line-height: 44px;
    text-align: center;
}
.body-search-num{
    width: 834px;
    margin-top: 73px;
    display: flex;
    justify-content: space-between;
}
.search-input{
    margin-top: 39px;
    width: 656px;
    height: 84px;
}
.search-input-icon{
    cursor:pointer
}
.search-num-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 102px;
}
.num-header{
    font-size: 20px;
}
.num-main{
    font-size: 36px;
    font-weight: bold;
}
.num-footer{
    width: 180px;
    height: 7px;
    background: #00FFC4;
    border-radius: 5px 5px 0px 0px;
}
.body-search-input{
    margin-top: 94px;
}
.input-title{
    font-weight: bold;
    font-size: 30px;
    color: #6D6D6E;
}
.page-body-content{
    height: 969px;
    background-color: #EFF2F7;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.body-title{
    margin-top: 101px;
    font-size: 36px;
    font-weight: bold;
}
.content-card-up{
    margin-top: 71px;
    width: 941px;
    display: flex;
    justify-content: space-between;
}
.card{
    width: 255px;
    height: 282px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.16);
    transition: all 0.5s ease;
}
.card:hover{
    box-shadow: 0px 16px 30px 0px rgba(0, 255, 196, 0.16);
    transition: all 0.5s ease;
}
.card-title{
    margin-top: 43px;
    margin-bottom: 47px;
    width: 210px;
    height: 40px;
    font-size: 20px;
    font-weight: 500;
    color: #121214;
    line-height: 23px;
    text-align: center;
}
.content-card-down{
    margin-top: 79px;
    width: 608px;
    display: flex;
    justify-content: space-between;
}
.page-body-process{
    height: 2009px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.process-text{
    margin-top: 88px;
    margin-bottom: 54px;
    width: 616px;
    display: flex;
    justify-content: space-between;
    font-size: 22px;
}
.page-body-reports{
    height: 1227px;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.reports-header{
    margin-top: 151px;
    height: 345px;
    width: 1195px;
    display: flex;
    justify-content: space-between;
}
.reports-title-class{
    height: 247px;
    width: 710px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: SourceHanSansCN sans-serif;
    color: #FFFFFF;
}
.reports-title-question{
    height: 32px;
    font-size: 30px;
    font-weight: bold;
}
.reports-title-answer{
    width: 710px;
    height: 172px;
    font-size: 20px;
    line-height: 30px;
}
.reports-middle{
    margin-top: 97px;
    height: 91px;
    width: 680px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
}
.reports-middle-title{
    width: 410px;
    height: 37px;
    font-size: 36px;
    font-weight: bold;
}
.reports-middle-text{
    width: 680px;
    height: 21px;
    font-size: 20px;
}
.reservation-btn{
    right: 18%;
    top: 58%;
    @apply h-12 w-80 font-bold absolute ;
}
</style>