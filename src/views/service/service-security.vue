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
<!--            <be-button customClass="reservation-btn h-btn-txt-black linear-l-r text-black text-xl">{{$t('lang.ReservationBtn') }}</be-button>-->
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
                         v-model:value="searchPrams"
                         :onInput = "searchPrams=searchPrams.replace(/[^\d]/g,'')"
                         :placeholder="$t('lang.serviceSecurity.search.input')">
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
                    <div class="reports-title-answer">{{$t('lang.serviceSecurity.reports.text')}}</div>
                </div>
                <img src="../../assets/img/pad.png" height="345" width="339"/>
            </div>
            <div class="reports-middle">
                <div class="reports-middle-title">{{$t('lang.serviceSecurity.reports.middleTitle')}}</div>
                <div class="reports-middle-text">{{$t('lang.serviceSecurity.reports.middleText')}}</div>
            </div>
            <div style="margin-top: 76px">
                <hServiceSwiper/>
            </div>
        </div>
        <contact-us></contact-us>
        <about-hermit></about-hermit>
    </div>
    <ver-code-dialog ref="verCodeDialog" :num="searchPrams"></ver-code-dialog>
</template>

<script lang="ts">

import hServiceSwiper from '../../components/h-service-swiper.vue'
import {defineComponent, getCurrentInstance, ref} from "vue";
import {NInput} from "naive-ui";
import {useI18n} from "vue-i18n";
import AboutHermit from "../../components/about-hermit.vue";
import ContactUs from "../../components/contact-us.vue";
import VerCodeDialog from "../../components/ver-code-dialog.vue";
import {BeMessage} from "../../../public/be-ui/be-ui.es";
import {IDialog} from "../../utils/types";

export default defineComponent({
    name: "service-security",
    components:{
        AboutHermit, ContactUs,
        hServiceSwiper,
        VerCodeDialog,
        NInput
    },

    setup(){
        const {t} = useI18n()
        const message = BeMessage.service
        const curInst = getCurrentInstance()
        const searchPrams = ref<string>('')
        const search = ():void =>{
            if(!searchPrams.value){
                message({
                    customClass:'hermit-msg',
                    titles: t('lang.serviceSecurity.search.input'),
                    msgType: 'warning',
                    duration: 1500,
                    offsetTop:80,
                    close: true,
                })
                return
            }
            (curInst?.refs.verCodeDialog as IDialog).isShow = true
        }
        return {
            search,
            searchPrams,
        }
    },
})
</script>

<style scoped>
.page-head{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 570px;
  padding-bottom: 110px;
  background-color: black;
}

.header-text{
  display: flex;
  flex-direction: column;
}

.header-text-big{
   max-width: 1000px;
  padding-top: 0;
  margin-top: 77px;
  font-family: SourceHanSansBold, sans-serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 80px;
  color: #FFF;
}

.header-text-small{
  width: 645px;
  height: 72px;
  padding-top: 39px;
  font-family: SourceHanSansRegular ,sans-serif;
  font-size: 30px;
  line-height: 40px;
  color: #FFF;
}

.page-body-search{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 744px;
  background-color: #fff;
}

.body-search-text{
  width: 1201px;
  height: 157px;
  margin-top: 65px;
  font-size: 24px;
  line-height: 44px;
  text-align: center;
}

.body-search-num{
  display: flex;
  justify-content: space-between;
  width: 834px;
  margin-top: 73px;
}

.search-input{
    width: 834px;
  height: 84px;
  margin-top: 39px;
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
  border-radius: 5px 5px 0 0;
}

.body-search-input{
  margin-top: 94px;
}

.input-title{
  font-size: 30px;
  font-weight: bold;
  color: #6D6D6E;
}

.page-body-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 969px;
  background-color: #EFF2F7;
}

.body-title{
  margin-top: 101px;
  font-size: 36px;
  font-weight: bold;
}

.content-card-up{
  display: flex;
  justify-content: space-between;
  width: 941px;
  margin-top: 71px;
}

.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 255px;
  height: 282px;
  background-color: #FFF;
  border-radius: 5px;
  box-shadow: 0 6px 5px 0 rgba(0, 0, 0, .16);
  transition: all .5s ease;
}

.card:hover{
  box-shadow: 0 16px 30px 0 rgba(0, 255, 196, .16);
  transition: all .5s ease;
}

.card-title{
  width: 210px;
  height: 40px;
  margin-top: 43px;
  margin-bottom: 47px;
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  color: #121214;
  text-align: center;
}

.content-card-down{
  display: flex;
  justify-content: space-between;
  width: 608px;
  margin-top: 79px;
}

.page-body-process{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 2009px;
  background-color: #FFF;
}

.process-text{
  display: flex;
  justify-content: space-between;
  width: 616px;
  margin-top: 88px;
  margin-bottom: 54px;
  font-size: 22px;
}

.page-body-reports{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1227px;
  background-color: #000;
}

.reports-header{
  display: flex;
  justify-content: space-between;
  width: 1195px;
  height: 345px;
  margin-top: 151px;
}

.reports-title-class{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 710px;
  height: 247px;
  font-family: SourceHanSansNormal, sans-serif;
  color: #FFF;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 680px;
  height: 91px;
  margin-top: 97px;
  color: #FFF;
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
  top: 58%;
  right: 18%;
  @apply h-12 w-80 font-bold absolute ;
}
</style>