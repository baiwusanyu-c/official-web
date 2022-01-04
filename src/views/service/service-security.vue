/*
* @service-security.vue
* @deprecated 安全服务页面
* @author czh
* @update (czh 2021/12/23)
*/
<template>
    <div class="service-page" id="service_security">
        <div class="page-head relative">
            <div class="header-text">
                <div class="header-text-big font-format">
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
                    <div class="num-main">{{'2000+'}}</div>
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
            <div class="search-input shadow-2xl">
                <n-input size="large"
                         :theme-overrides="inputThemeOverrides"
                         v-model:value="searchPrams"
                         @Input = "searchPrams=searchPrams.replace(/[^\d]/g,'')"
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
                <hServiceSwiper :list="reportList"/>
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
import {InputProps, NInput} from "naive-ui";
import {useI18n} from "vue-i18n";
import AboutHermit from "../../components/about-hermit.vue";
import ContactUs from "../../components/contact-us.vue";
import VerCodeDialog from "../../components/ver-code-dialog.vue";
import {IDialog} from "../../utils/types";
import composition from "../../utils/mixin/common-func";
import {serviceContract} from "../../enums/link";
type InputThemeOverrides = NonNullable<InputProps['themeOverrides']>
const inputThemeOverrides: InputThemeOverrides = {
    border:'1px solid black'
}
export default defineComponent({
    name: "service-security",
    components:{
        AboutHermit, ContactUs,
        hServiceSwiper,
        VerCodeDialog,
        NInput
    },

    setup(props, ctx){
        const {t} = useI18n()
        const {message} = composition(props, ctx)
        const curInst = getCurrentInstance()
        const searchPrams = ref<string>('')
        const search = ():void =>{
            if(!searchPrams.value){
                message('warning',t('lang.serviceSecurity.search.input'),'hermit-msg')
                return
            }
            (curInst?.refs.verCodeDialog as IDialog).isShow = true
        }
        const reportList = [
            { fileUrl:serviceContract.report1,info: 'SMART CONTRACT AUDIT REPORT', name: 'For CrossYield-stake'},
            { fileUrl:serviceContract.report2,info: 'SMART CONTRACT AUDIT REPORT', name: 'For Huckleberry'},
            { fileUrl:serviceContract.report3,info: 'SMART CONTRACT AUDIT REPORT', name: 'For NFT'},
            { fileUrl:serviceContract.report1,info: 'SMART CONTRACT AUDIT REPORT', name: 'For CrossYield-stake'},
            { fileUrl:serviceContract.report2,info: 'SMART CONTRACT AUDIT REPORT', name: 'For Huckleberry'},
        ]
        return {
            search,
            searchPrams,
            reportList,
            inputThemeOverrides
        }
    },
})
</script>

<style scoped>
@import "../../assets/css/service-page.css";

#service_security .content-card-up{
  display: flex;
  justify-content: space-between;
  width: 941px;
  margin-top: 71px;
}

#service_security .content-card-down{
  display: flex;
  justify-content: space-between;
  width: 608px;
  margin-top: 79px;
}

#service_security .page-head{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 570px;
  padding-bottom: 110px;
  background-color: black;
}

#service_security .page-body-reports{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1227px;
  background-color: #000;
}
</style>