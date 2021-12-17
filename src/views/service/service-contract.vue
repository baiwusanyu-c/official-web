<template>
    <div>
        <div class="page-head relative">
            <div class="header-text">
                <div class="header-text-big">
                    {{$t('lang.serviceContract.pageHead.textBig')}}
                </div>
                <div class="header-text-small">
                    {{$t('lang.serviceContract.pageHead.textSmall')}}
                </div>
            </div>
            <be-button customClass="reservation-btn h-btn-txt-black linear-l-r text-black text-xl">{{$t('lang.serviceContract.pageHead.button')}}</be-button>
            <img src="../../assets/img/header-img.png" class="header-img" style="visibility: hidden"/>
        </div>
        <div class="page-body-search">
            <div class="body-search-text">
                <span>{{$t('lang.serviceContract.search.text')}}</span>
            </div>
            <div class="body-search-num">
                <div class="search-num-box">
                    <div class="num-header">{{$t('lang.serviceContract.search.totalCustomers')}}</div>
                    <div class="num-main">{{'1000+'}}</div>
                    <div class="num-footer"></div>
                </div>
                <div class="search-num-box">
                    <div class="num-header">{{$t('lang.serviceContract.search.audited')}}</div>
                    <div class="num-main">{{'5000+'}}</div>
                    <div class="num-footer"></div>
                </div>
                <div class="search-num-box">
                    <div class="num-header">{{$t('lang.serviceContract.search.totalAudited')}}</div>
                    <div class="num-main">{{'$100B+'}}</div>
                    <div class="num-footer"></div>
                </div>
            </div>
            <div class="body-search-input">
                <div class="input-title">{{$t('lang.serviceContract.search.inputTitle')}}</div>
            </div>
            <div class="search-input">
                <n-input size="large"
                         :placeholder="$t('lang.serviceContract.search.input')"
                >
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
                    <div class="card-title">{{$t('lang.serviceContract.content.cardSecurity')}}</div>
                    <img src="../../assets/img/service-contract/asset.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title">{{$t('lang.serviceContract.content.cardLogic')}}</div>
                    <img src="../../assets/img/service-contract/logic.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title">{{$t('lang.serviceContract.content.cardBackdoor')}}</div>
                    <img src="../../assets/img/service-contract/backdoor.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title">{{$t('lang.serviceContract.content.cardFlashLoan')}}</div>
                    <img src="../../assets/img/service-contract/flash-loan.png" height="120" width="212"/>
                </div>
            </div>
            <div class="content-card-down">
                <div class="card">
                    <div class="card-title">{{$t('lang.serviceContract.content.cardThirdParty')}}</div>
                    <img src="../../assets/img/service-contract/third-party.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title">{{$t('lang.serviceContract.content.cardAttack')}}</div>
                    <img src="../../assets/img/service-contract/attack.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title">{{$t('lang.serviceContract.content.cardCode')}}</div>
                    <img src="../../assets/img/service-contract/code-specification.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title">{{$t('lang.serviceContract.content.cardFunction')}}</div>
                    <img src="../../assets/img/service-contract/call-audit.png" height="120" width="212"/>
                </div>
            </div>
        </div>
        <div class="page-body-process">
            <div class="body-title">{{$t('lang.serviceContract.process.title')}}</div>
            <div class="process-text">
                <div>{{$t('lang.serviceContract.process.textEvaluation')}}</div>
                <div>{{$t('lang.serviceContract.process.textImplementation')}}</div>
            </div>
            <img src="../../assets/img/process-small.png" style="margin-bottom: 19px" height="342" width="1200"/>
            <img src="../../assets/img/process-big.png" style="z-index: 1" height="1429" width="1200"/>
        </div>
        <div class="page-body-reports">
            <div  class="page-body-reports-head">
                <div class="reports-header">
                    <div class="reports-title-class">
                        <div class="reports-title-question">{{$t('lang.serviceContract.reports.title')}}</div>
                        <div class="reports-title-answer">{{$t('lang.serviceContract.reports.text')}}</div>
                    </div>
                    <img src="../../assets/img/pad.png" height="345" width="339"/>
                </div>
                <div class="reports-middle">
                    <div class="reports-middle-title">{{$t('lang.serviceContract.reports.middleTitle')}}</div>
                    <div class="reports-middle-text">{{$t('lang.serviceContract.reports.middleText')}}</div>
                </div>
            </div>

            <div style="margin-top: 76px">
                <hServiceSwiper/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import hServiceSwiper from '../../components/h-service-swiper.vue'
    import {defineComponent, getCurrentInstance} from "vue";
    import {NInput,NButton} from "naive-ui";
    import {useI18n} from "vue-i18n";

    export default defineComponent({
        name: "service-contract",
        components:{
            NInput,
            NButton,
            hServiceSwiper,
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
    .page-head{
        height: 570px;
        background-color: black;
        display: flex;
        align-items: center;
        padding-bottom: 110px;
        justify-content: space-evenly;
        background: url("../../assets/img/service-contract/contract-header.png");
    }

    .header-button-box{
        width: 360px;
        height: 300px;
        display: flex;
        flex-direction: column-reverse;
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
        width: 1200px;
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
        width: 1200px;
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
    }
    .page-body-reports-head{
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
        font-family: SourceHanSansCN;
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