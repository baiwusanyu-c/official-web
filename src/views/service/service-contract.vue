<template>
    <div>
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
            <img src="../../assets/img/header-img.png" class="header-img" style="visibility: hidden"/>
        </div>
        <div class="page-body-search">
            <div class="body-search-text">
                <span class="font-format">{{$t('lang.serviceContract.search.text')}}</span>
            </div>
            <div class="body-search-num">
                <div class="search-num-box">
                    <div class="num-header font-format">{{$t('lang.serviceContract.search.totalCustomers')}}</div>
                    <div class="num-main">{{'1000+'}}</div>
                    <div class="num-footer"></div>
                </div>
                <div class="search-num-box">
                    <div class="num-header font-format">{{$t('lang.serviceContract.search.audited')}}</div>
                    <div class="num-main">{{'5000+'}}</div>
                    <div class="num-footer"></div>
                </div>
                <div class="search-num-box">
                    <div class="num-header font-format">{{$t('lang.serviceContract.search.totalAudited')}}</div>
                    <div class="num-main">{{'$100B+'}}</div>
                    <div class="num-footer"></div>
                </div>
            </div>
            <div class="body-search-input">
                <div class="input-title font-format">{{$t('lang.serviceContract.search.inputTitle')}}</div>
            </div>
            <div class="search-input">
                <n-input size="large"
                         v-model:value="searchPrams"
                         :onInput = "searchPrams=searchPrams.replace(/[^\d]/g,'')"
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
                    <img src="../../assets/img/service-contract/asset.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardLogic')}}</div>
                    <img src="../../assets/img/service-contract/logic.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardBackdoor')}}</div>
                    <img src="../../assets/img/service-contract/backdoor.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardFlashLoan')}}</div>
                    <img src="../../assets/img/service-contract/flash-loan.png" height="120" width="212"/>
                </div>
            </div>
            <div class="content-card-down">
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardThirdParty')}}</div>
                    <img src="../../assets/img/service-contract/third-party.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardAttack')}}</div>
                    <img src="../../assets/img/service-contract/attack.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardCode')}}</div>
                    <img src="../../assets/img/service-contract/code-specification.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{$t('lang.serviceContract.content.cardFunction')}}</div>
                    <img src="../../assets/img/service-contract/call-audit.png" height="120" width="212"/>
                </div>
            </div>
        </div>
        <div class="page-body-process">
            <div class="body-title font-format">{{$t('lang.serviceContract.process.title')}}</div>
            <div class="process-text">
                <div class="font-format">{{$t('lang.serviceContract.process.textEvaluation')}}</div>
                <div class="font-format">{{$t('lang.serviceContract.process.textImplementation')}}</div>
            </div>
            <img src="../../assets/img/process-small.png" style="margin-bottom: 19px" height="342" width="1200"/>
            <img src="../../assets/img/process-big.png" style="z-index: 1" height="1429" width="1200"/>
        </div>
        <div class="page-body-reports">
            <div  class="page-body-reports-head">
                <div class="reports-header">
                    <div class="reports-title-class">
                        <div class="reports-title-question font-format">{{$t('lang.serviceContract.reports.title')}}</div>
                        <div class="reports-title-answer font-format">{{$t('lang.serviceContract.reports.text')}}</div>
                    </div>
                    <img src="../../assets/img/pad.png" height="345" width="339"/>
                </div>
                <div class="reports-middle">
                    <div class="reports-middle-title font-format">{{$t('lang.serviceContract.reports.middleTitle')}}</div>
                    <div class="reports-middle-text font-format">{{$t('lang.serviceContract.reports.middleText')}}</div>
                </div>
            </div>

            <div style="margin-top: 76px">
                <hServiceSwiper/>
            </div>
        </div>
    </div>
    <ver-code-dialog ref="verCodeDialog" :num="searchPrams"></ver-code-dialog>
</template>

<script lang="ts">
    import hServiceSwiper from '../../components/h-service-swiper.vue'
    import {defineComponent, getCurrentInstance, ref} from "vue";
    import {NInput,NButton} from "naive-ui";
    import {useI18n} from "vue-i18n";
    import {BeMessage} from '../../../public/be-ui/be-ui.es.js'
    import VerCodeDialog from "../../components/ver-code-dialog.vue";
    import {IDialog} from "../../utils/types";

    export default defineComponent({
        name: "service-contract",
        components:{
            VerCodeDialog,
            NInput,
            NButton,
            hServiceSwiper,
        },

        setup(){
            const message = BeMessage.service
            const {t} = useI18n()
            const curInst = getCurrentInstance()
            const searchPrams = ref<string>('')
            const search = ():void =>{
                if(!searchPrams.value){
                    message({
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
                searchPrams
            }
        },
    })
</script>

<style scoped>

.header-text{
  display: flex;
  flex-direction: column;
}

.header-text-big{
  width: 670px;
  height: 210px;
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
  font-family: SourceHanSansRegular, sans-serif;
  font-size: 30px;
  line-height: 30px;
  color: #FFF;
}

.page-head{
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

.header-button-box{
  display: flex;
  flex-direction: column-reverse;
  width: 360px;
  height: 300px;
}

.header-button-box span{
  font-size: 24px;
  font-weight: 400;
}

.header-button{
  width: 360px;
  height: 60px;
  background: linear-gradient(-73deg, #19BDFB, #00FFBA);
  border-radius: 5px;
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
  width: 656px;
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
  width: 1200px;
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
  width: 1200px;
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
  height: 1227px;
  background-color: #000;
}

.page-body-reports-head{
  display: flex;
  flex-direction: column;
  align-items: center;
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