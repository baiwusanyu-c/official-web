/*
* @service-contract.vue
* @deprecated 合约服务页面
* @author djd
* @update (czh 2022/01/05   )
*/
<template>
    <div class="service-page" id="service_contract">
        <div class="page-head relative">
            <div class="header-text">
                <div class="header-text-big font-format">
                    {{$t('lang.serviceContract.pageHead.textBig')}}
                </div>
                <div class="header-text-small font-format">
                    {{$t('lang.serviceContract.pageHead.textSmall')}}
                </div>
            </div>
            <!--            <be-button customClass="reservation-btn h-btn-txt-black linear-l-r text-black text-xl">{{$t('lang.ReservationBtn')}}</be-button>-->
            <img alt=""  src="../../assets/img/header-img.png" class="header-img" style="visibility: hidden"/>
        </div>
        <div class="page-body-search">
            <div class="body-search-text">
                <span class="font-format">{{$t('lang.serviceContract.search.text')}}</span>
            </div>
            <div class="body-search-num">
                <div class="search-num-box">
                    <div class="num-header font-format">{{$t('lang.serviceContract.search.totalCustomers')}}</div>
                    <div class="num-main">
                        <roll-num :value="customersNum" :time="1"></roll-num>
                        +
                    </div>
                    <div class="num-footer"></div>
                </div>
                <div class="search-num-box">
                    <div class="num-header font-format">{{$t('lang.serviceContract.search.audited')}}</div>
                    <div class="num-main">
                        <roll-num :value="contractsNum" :time="1"></roll-num>
                        +
                    </div>
                    <div class="num-footer"></div>
                </div>
                <div class="search-num-box">
                    <div class="num-header font-format">{{$t('lang.serviceContract.search.totalAudited')}}</div>
                    <div class="num-main">
                        $
                        <roll-num :value="auditedNum" :time="1"></roll-num>
                        +
                    </div>
                    <div class="num-footer"></div>
                </div>
            </div>
            <div class="body-search-input">
                <div class="input-title font-format">{{$t('lang.serviceContract.search.inputTitle')}}</div>
            </div>
            <div class="search-input shadow-2xl">
                <n-input size="large"
                         :theme-overrides="inputThemeOverrides"
                         v-model:value="searchPrams"
                         @Input = "searchPrams=searchPrams.replace(/[^\d]/g,'')"
                         :placeholder="$t('lang.serviceContract.search.input')">
                    <template #suffix>
                        <be-icon class="search-input-icon" @click="search" icon="search"></be-icon>
                    </template>
                </n-input>
            </div>
        </div>
        <div class="page-body-content">
            <div class="body-title">{{$t('lang.serviceContract.content.title')}}</div>
            <div class="content-card-up">
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardSecurity')}}</div>
                    <img alt="" src="../../assets/img/service-contract/asset.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardLogic')}}</div>
                    <img alt="" src="../../assets/img/service-contract/logic.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardBackdoor')}}</div>
                    <img alt="" src="../../assets/img/service-contract/backdoor.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardFlashLoan')}}</div>
                    <img alt="" src="../../assets/img/service-contract/flash-loan.png" height="120" width="212"/>
                </div>
            </div>
            <div class="content-card-down">
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardThirdParty')}}</div>
                    <img alt="" src="../../assets/img/service-contract/third-party.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardAttack')}}</div>
                    <img alt="" src="../../assets/img/service-contract/attack.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardCode')}}</div>
                    <img alt="" src="../../assets/img/service-contract/code-specification.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardFunction')}}</div>
                    <img alt="" src="../../assets/img/service-contract/call-audit.png" height="120" width="212"/>
                </div>
            </div>
        </div>
        <div class="page-body-process">
            <div class="body-title font-format">{{$t('lang.serviceContract.process.title')}}</div>
            <div class="process-text">
                <div class="font-format">{{$t('lang.serviceContract.process.textEvaluation')}}</div>
                <div class="font-format">{{$t('lang.serviceContract.process.textImplementation')}}</div>
            </div>
            <img alt="" src="../../assets/img/process-small.png" style="margin-bottom: 19px" height="342" width="1200"/>
            <img alt="" src="../../assets/img/process-big.png" style="z-index: 1" height="1429" width="1200"/>
        </div>
        <div class="page-body-reports">
            <div  class="page-body-reports-head">
                <div class="reports-header">
                    <div class="reports-title-class">
                        <div class="reports-title-question font-format">{{$t('lang.serviceContract.reports.title')}}</div>
                        <div class="reports-title-answer font-format">{{$t('lang.serviceContract.reports.text')}}</div>
                    </div>
                    <img alt="" src="../../assets/img/pad.png" height="345" width="339"/>
                </div>
                <div class="reports-middle">
                    <div class="reports-middle-title font-format">{{$t('lang.serviceContract.reports.middleTitle')}}</div>
                    <div class="reports-middle-text font-format">{{$t('lang.serviceContract.reports.middleText')}}</div>
                </div>
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
import {NInput,NButton,InputProps} from "naive-ui";
import {useI18n} from "vue-i18n";
import VerCodeDialog from "../../components/ver-code-dialog.vue";
import {IDialog} from "../../utils/types";
import composition from "../../utils/mixin/common-func";
import {serviceContract} from "../../enums/link";
import ContactUs from "../../components/contact-us.vue";
import AboutHermit from "../../components/about-hermit.vue";
import RollNum from "../../components/roll-num.vue";
import {Ref} from "@vue/reactivity";
type InputThemeOverrides = NonNullable<InputProps['themeOverrides']>
const inputThemeOverrides: InputThemeOverrides = {
    border:'1px solid black'
}
export default defineComponent({
    name: "service-contract",
    components:{
        RollNum,
        AboutHermit,
        ContactUs,
        VerCodeDialog,
        NInput,
        NButton,
        hServiceSwiper,
    },

    setup(props, ctx){
        const {message} = composition(props, ctx)
        const {t} = useI18n()
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
        const customersNum = ref<number>(0)
        const contractsNum = ref<number>(0)
        const auditedNum = ref<number>(0)
        const {startTimer} = composition(props, ctx)
        startTimer(customersNum,1000,200)
        startTimer(contractsNum,2000,300)
        startTimer(auditedNum,100,20)
        return {
            customersNum,
            contractsNum,
            auditedNum,
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

#service_contract .page-head{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 570px;
  padding-bottom: 110px;
  background: url("../../assets/img/service-contract/contract-header.png");
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
}

#service_contract .content-card-down{
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin-top: 79px;
}

#service_contract .page-body-reports{
  height: 1227px;
  background-color: #000;
}

#service_contract .content-card-up{
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin-top: 71px;
}


</style>