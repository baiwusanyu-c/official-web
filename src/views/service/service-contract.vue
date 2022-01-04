/*
* @service-contract.vue
* @deprecated 合约服务页面
* @author djd
* @update (czh 2021/12/16)
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
                    <div class="num-main">{{'2000+'}}</div>
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
        <div class="page-body-process-contract">
            <div class="body-title font-format">{{$t('lang.serviceContract.process.title')}}</div>
            <div class="process-text">
                <div class="font-format">{{$t('lang.serviceContract.process.textEvaluation')}}</div>
                <div class="font-format">{{$t('lang.serviceContract.process.textImplementation')}}</div>
            </div>
            <img src="../../assets/img/process-small.png" style="margin-bottom: 104px" height="342" width="1200"/>
        </div>
        <div class="page-body-table">
            <!--
            <img src="../../assets/img/contect-table-head.png" style="z-index:1" height="929" width="1920"/>
            <img src="../../assets/img/contect-table-body.png" style="z-index:1" height="817" width="2413"/>
            -->
            <div class="table-title-big">{{$t('lang.serviceContract.table.titleBig')}}</div>
            <div class="table-title-class">
                <div class="table-title" @click="tableChoseBox = 1">
                    <div v-show="tableChoseBox===1">{{$t('lang.serviceContract.table.titleWhite')}}</div>
                    <div class="table-title-chick" v-show="tableChoseBox!==1">{{$t('lang.serviceContract.table.titleWhite')}}</div>
                    <transition  name="fade">
                        <div class="table-title-footer" v-show="tableChoseBox===1"></div>
                    </transition>
                </div>
                <div class="table-title" @click="tableChoseBox = 2">
                    <div v-show="tableChoseBox===2">{{$t('lang.serviceContract.table.titleGrey')}}</div>
                    <div class="table-title-chick" v-show="tableChoseBox!==2">{{$t('lang.serviceContract.table.titleGrey')}}</div>
                    <transition  name="fade">
                        <div class="table-title-footer" v-show="tableChoseBox===2"></div>
                    </transition>
                </div>
                <div class="table-title" @click="tableChoseBox = 3">
                    <div v-show="tableChoseBox===3">{{$t('lang.serviceContract.table.titleBlack')}}</div>
                    <div class="table-title-chick" v-show="tableChoseBox!==3">{{$t('lang.serviceContract.table.titleBlack')}}</div>
                    <transition  name="fade">
                        <div class="table-title-footer" v-show="tableChoseBox===3"></div>
                    </transition>
                </div>
            </div>
            <div class="table-text">
                <img src="../../assets/img/white-box.png" height="241" width="420"/>
                <div class="table-introduce">
                    <span>
                        {{boxText}}
                    </span>
                </div>
            </div>
            <div class="table-body">
                <n-data-table
                        :data="data"
                        :columns="columns"
                        :row-class-name="rowClassName"
                        :single-line="false"
                />
            </div>
        </div>
        <!--
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
                <hServiceSwiper :list="reportList"/>
            </div>
        </div>-->
    </div>
    <ver-code-dialog ref="verCodeDialog" :num="searchPrams"></ver-code-dialog>
</template>

<script lang="ts">
    import hServiceSwiper from '../../components/h-service-swiper.vue'
    import {defineComponent, getCurrentInstance, h, ref,reactive,computed} from "vue";
    import {NInput, NButton, InputProps, NDataTable} from "naive-ui";
    import {useI18n} from "vue-i18n";
    import VerCodeDialog from "../../components/ver-code-dialog.vue";
    import {IDialog} from "../../utils/types";
    import composition from "../../utils/mixin/common-func";
    import {serviceContract} from "../../enums/link";
    import {setSession} from "../../utils/common";
    import {DocumentOutline, DownloadOutline} from "@vicons/ionicons5";
    import {boxChoose} from "../../utils/table-date-service";
    type InputThemeOverrides = NonNullable<InputProps['themeOverrides']>
    const inputThemeOverrides: InputThemeOverrides = {
        border:'1px solid black'
    }
    export default defineComponent({
        name: "service-contract",
        components:{
            VerCodeDialog,
            NInput,
            NButton,
            NDataTable,
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
            const createColumns = () => {
                return [
                    {
                        title: 'No.',
                        key: 'num',
                        align: 'center',
                        rowSpan: (rowData:Object, rowIndex:Number) => {
                            if(tableChoseBox.value === 1){
                                if (rowIndex === 0) {
                                    return 7
                                }
                                if (rowIndex === 7) {
                                    return 3
                                }
                                if (rowIndex === 10) {
                                    return 3
                                }
                                if (rowIndex === 13) {
                                    return 6
                                }
                                if (rowIndex === 19) {
                                    return 3
                                }
                                if (rowIndex === 22) {
                                    return 3
                                }
                                if (rowIndex === 25){
                                    return 9
                                }
                                if (rowIndex === 34){
                                    return 1
                                }
                                if (rowIndex === 35){
                                    return 1
                                }
                            }
                            if(tableChoseBox.value === 2){
                                if(rowIndex === 0 ){
                                    return 1
                                }
                                if (rowIndex === 1 ) {
                                    return 3
                                }
                                if (rowIndex === 4) {
                                    return 3
                                }
                                if (rowIndex === 12) {
                                    return 3
                                }
                                if (rowIndex === 7) {
                                    return 5
                                }
                                if (rowIndex === 15) {
                                    return 4
                                }
                                if (rowIndex === 19) {
                                    return 1
                                }
                            }
                            if(tableChoseBox.value === 3){
                                if (rowIndex === 0) {
                                    return 3
                                }
                                if (rowIndex === 3) {
                                    return 3
                                }
                                if (rowIndex === 11) {
                                    return 3
                                }
                                if (rowIndex === 14) {
                                    return 3
                                }
                                if (rowIndex === 6 ) {
                                    return 5
                                }
                                if (rowIndex === 17) {
                                    return 1
                                }
                            }
                        },
                        className:'title',
                        width:86,
                    },
                    {
                        title: 'Audit Categories',
                        key: 'categories',
                        align: 'center',
                        rowSpan: (rowData:Object, rowIndex:Number) => {
                            if(tableChoseBox.value === 1){
                                if (rowIndex === 0) {
                                    return 7
                                }
                                if (rowIndex === 7 || rowIndex === 10||rowIndex === 19||rowIndex === 22) {
                                    return 3
                                }
                                if (rowIndex === 13) {
                                    return 6
                                }
                                if (rowIndex === 25){
                                    return 9
                                }
                                if (rowIndex === 34||rowIndex === 35){
                                    return 1
                                }
                            }
                            if(tableChoseBox.value === 2){
                                if(rowIndex === 0 ||rowIndex === 19){
                                    return 1
                                }
                                if (rowIndex === 1||rowIndex === 4||rowIndex === 12) {
                                    return 3
                                }
                                if (rowIndex === 7) {
                                    return 5
                                }
                                if (rowIndex === 15) {
                                    return 4
                                }
                            }
                            if(tableChoseBox.value === 3){
                                if (rowIndex === 0||rowIndex === 3||rowIndex === 11||rowIndex === 14) {
                                    return 3
                                }
                                if (rowIndex === 6 ) {
                                    return 5
                                }
                                if (rowIndex === 17) {
                                    return 1
                                }
                            }
                        },
                        className:'categories',
                        width:623,
                    },
                    {
                        title: 'Audit Sub-items',
                        key: 'items',
                        align: 'center',
                        className:'title',
                        width:495
                    },
                ]
            }
            function rowClassName (row:object,index:number) {
                if(row.num%2 === 0){
                    return 'change-color'
                }
                return null
            }
            /*const whiteBox = <Array<Object>>[
                {num:'01',categories:t('lang.serviceContract.table.white.categories01'),items:t('lang.serviceContract.table.white.item01.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item01.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item01.text03')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item01.text04')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item01.text05')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item01.text06')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item01.text07')},
                {num:'02',categories:t('lang.serviceContract.table.white.categories02'),items:t('lang.serviceContract.table.white.item02.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item02.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item02.text03')},
                {num:'03',categories:t('lang.serviceContract.table.white.categories03'),items:t('lang.serviceContract.table.white.item03.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item03.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item03.text03')},
                {num:'04',categories:t('lang.serviceContract.table.white.categories04'),items:t('lang.serviceContract.table.white.item04.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item04.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item04.text03')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item04.text04')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item04.text05')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item04.text06')},
                {num:'05',categories:t('lang.serviceContract.table.white.categories05'),items:t('lang.serviceContract.table.white.item05.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item05.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item05.text03')},
                {num:'06',categories:t('lang.serviceContract.table.white.categories06'),items:t('lang.serviceContract.table.white.item06.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item06.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item06.text03')},
                {num:'07',categories:t('lang.serviceContract.table.white.categories07'),items:t('lang.serviceContract.table.white.item07.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text03')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text04')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text05')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text06')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text07')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text08')},
                {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text09')},
                {num:'08',categories:t('lang.serviceContract.table.white.categories08'),items:t('lang.serviceContract.table.white.item08')},
                {num:'09',categories:t('lang.serviceContract.table.white.categories09'),items:t('lang.serviceContract.table.white.item09')},
            ]*/
            const greyBox = <Array<Object>>[
                {num:'01',categories:t('lang.serviceContract.table.grey.categories01'),items:t('lang.serviceContract.table.grey.item01')},
                {num:'02',categories:t('lang.serviceContract.table.grey.categories02'),items:t('lang.serviceContract.table.grey.item02.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.grey.item02.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.grey.item02.text03')},
                {num:'03',categories:t('lang.serviceContract.table.grey.categories03'),items:t('lang.serviceContract.table.grey.item03.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.grey.item03.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.grey.item03.text03')},
                {num:'04',categories:t('lang.serviceContract.table.grey.categories04'),items:t('lang.serviceContract.table.grey.item04.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.grey.item04.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.grey.item04.text03')},
                {num:'',categories:'',items:t('lang.serviceContract.table.grey.item04.text04')},
                {num:'',categories:'',items:t('lang.serviceContract.table.grey.item04.text05')},
                {num:'05',categories:t('lang.serviceContract.table.grey.categories05'),items:t('lang.serviceContract.table.grey.item05.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.grey.item05.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.grey.item05.text03')},
                {num:'06',categories:t('lang.serviceContract.table.grey.categories06'),items:t('lang.serviceContract.table.grey.item06.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.grey.item06.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.grey.item06.text03')},
                {num:'',categories:'',items:t('lang.serviceContract.table.grey.item06.text04')},
                {num:'07',categories:t('lang.serviceContract.table.grey.categories07'),items:t('lang.serviceContract.table.grey.item07')},
            ]
            const blackBox = <Array<Object>>[
                {num:'01',categories:t('lang.serviceContract.table.black.categories01'),items:t('lang.serviceContract.table.black.item01.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.black.item01.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.black.item01.text03')},
                {num:'02',categories:t('lang.serviceContract.table.black.categories02'),items:t('lang.serviceContract.table.black.item02.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.black.item02.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.black.item02.text03')},
                {num:'03',categories:t('lang.serviceContract.table.black.categories03'),items:t('lang.serviceContract.table.black.item03.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.black.item03.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.black.item03.text03')},
                {num:'',categories:'',items:t('lang.serviceContract.table.black.item03.text04')},
                {num:'',categories:'',items:t('lang.serviceContract.table.black.item03.text05')},
                {num:'04',categories:t('lang.serviceContract.table.black.categories04'),items:t('lang.serviceContract.table.black.item04.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.black.item04.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.black.item04.text03')},
                {num:'04',categories:t('lang.serviceContract.table.black.categories05'),items:t('lang.serviceContract.table.black.item05.text01')},
                {num:'',categories:'',items:t('lang.serviceContract.table.black.item05.text02')},
                {num:'',categories:'',items:t('lang.serviceContract.table.black.item05.text03')},
                {num:'06',categories:t('lang.serviceContract.table.black.categories06'),items:t('lang.serviceContract.table.black.item06')},
            ]
            let boxText = computed<String>(()=>{
                if(tableChoseBox.value === 1){
                    return t('lang.serviceContract.table.textWhite')
                }
                if(tableChoseBox.value === 2){
                    return t('lang.serviceContract.table.textGrey')
                }
                return t('lang.serviceContract.table.textBlack')
            })
            let tableChoseBox = ref<number>(1)
            let data = boxChoose(tableChoseBox.value,t)
            return {
                data,
                columns: createColumns(),
                search,
                searchPrams,
                reportList,
                boxText,
                inputThemeOverrides,
                tableChoseBox,
                rowClassName
            }
        },
    })
</script>

<style scoped>
@import "../../assets/css/service-page.css";

:deep(.title) {
  background-color: #FFF !important;
}

:deep(.title) :hover {
  background-color: rgba(248, 248, 248, 0);
}

:deep(.categories) {
  background-color: #FFF !important;
}

:deep(.categories) :hover {
  background-color: #FFF !important;
}

/deep/.n-data-table-th{
  background-color: #F1F1F1 !important;
}

/deep/.change-color .categories {
  background-color: #F8F8F8 !important;
}

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