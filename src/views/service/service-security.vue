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
                    {{ $t('lang.serviceSecurity.pageHead.textBig') }}
                </div>
                <div class="header-text-small font-format leading-normal">
                    {{ $t('lang.serviceSecurity.pageHead.textSmall') }}
                </div>
            </div>
            <!--            <be-button customClass="reservation-btn h-btn-txt-black linear-l-r text-black text-xl">{{$t('lang.ReservationBtn') }}</be-button>-->
            <img alt="" src="../../assets/img/header-img.png" class="header-img sm:hidden"/>
        </div>
        <div class="page-body-search">
            <div class="body-search-text">
                <span class="leading-normal font-format">{{ $t('lang.serviceSecurity.search.text') }}</span>
            </div>
            <div class="body-search-num">
                <div class="search-num-box">
                    <div class="num-header font-format">{{ $t('lang.serviceSecurity.search.totalCustomers') }}</div>
                    <div class="num-main">
                        <roll-num :value="customersNum" :time="1"></roll-num>
                        +
                    </div>
                    <div class="num-footer"></div>
                </div>
                <div class="search-num-box">
                    <div class="num-header font-format  sm:mb-4">{{ $t('lang.serviceSecurity.search.audited') }}</div>
                    <div class="num-main">
                        <roll-num :value="contractsNum" :time="1"></roll-num>
                        +
                    </div>
                    <div class="num-footer"></div>
                </div>
                <div class="search-num-box">
                    <div class="num-header font-format">{{ $t('lang.serviceSecurity.search.totalAudited') }}</div>
                    <div class="num-main">
                        $
                        <roll-num :value="auditedNum" :time="1"></roll-num>
                        +
                    </div>
                    <div class="num-footer"></div>
                </div>
            </div>
            <div class="body-search-input">
                <div class="input-title font-format sm:text-lg">{{ $t('lang.serviceSecurity.search.inputTitle') }}</div>
            </div>
            <div class="search-input shadow-lg">
                <n-input size="large"
                         :theme-overrides="inputThemeOverrides"
                         v-model:value="searchPrams"
                         @Input="searchPrams=searchPrams.replace(/[^\d]/g,'')"
                         :placeholder="$t('lang.serviceSecurity.search.input')">
                    <template #suffix>
                        <be-icon class="search-input-icon" @click="search" icon="search"></be-icon>
                    </template>
                </n-input>
            </div>
        </div>
        <div class="page-body-content">
            <div class="body-title font-format">{{ $t('lang.serviceSecurity.content.title') }}</div>
            <div class="content-card-up">
                <div class="card">
                    <div class="card-title font-format">{{ $t('lang.serviceSecurity.content.cardCoding') }}</div>
                    <img alt="" src="../../assets/img/language-coding.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{ $t('lang.serviceSecurity.content.cardBlock') }}</div>
                    <img alt="" src="../../assets/img/block-production.png" height="120" width="212"/>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{ $t('lang.serviceSecurity.content.cardSystem') }}</div>
                    <img alt="" src="../../assets/img/accounts-system.png" height="120" width="212"/>
                </div>
                <div class="display-none sm:block">
                    <div class="card">
                        <div class="card-title font-format">{{ $t('lang.serviceSecurity.content.cardAudit') }}</div>
                        <img alt="" src="../../assets/img/assets-security.png" height="120" width="212"/>
                    </div>
                </div>

            </div>
            <div class="content-card-down">
                <div class="sm:hidden">
                    <div class="card">
                        <div class="card-title font-format">{{ $t('lang.serviceSecurity.content.cardAudit') }}</div>
                        <img alt="" src="../../assets/img/assets-security.png" height="120" width="212"/>
                    </div>
                </div>
                <div class="card">
                    <div class="card-title font-format">{{ $t('lang.serviceSecurity.content.cardLayer') }}</div>
                    <img alt="" src="../../assets/img/application-layer.png" height="120" width="212"/>
                </div>
            </div>
        </div>
        <div class="page-body-process-security">
            <div class="body-title font-format sm:mb-8">{{ $t('lang.serviceContract.process.title') }}</div>
            <div class="sm:hidden">
                <div class="process-text">
                    <div class="font-format">{{ $t('lang.serviceContract.process.textEvaluation') }}</div>
                    <div class="font-format">{{ $t('lang.serviceContract.process.textImplementation') }}</div>
                </div>
            </div>
            <img class="display-none sm:flex" alt="" src="../../assets/img/z18.png" style="margin-bottom: 19px" height="342" width="1200"/>
            <img class="sm:hidden" alt="" src="../../assets/img/process-small.png" style="margin-bottom: 19px" height="342" width="1200"/>
        </div>
                <div class="page-body-table">
                    <div class="table-title-big sm:mb-8">{{ $t('lang.serviceContract.table.titleBig') }}</div>
                    <div class="table-title-class">
                        <div class="table-title" @click="tableChoseBox = 1" @mouseenter="tableChoseBoxHover = 1"
                             @mouseleave="tableChoseBoxHover = 0">
                            <div v-show="tableChoseBox===1" class="font-format">
                                {{ $t('lang.serviceContract.table.titleWhite') }}
                            </div>
                            <div class="table-title-chick font-format" v-show="tableChoseBox!==1">
                                {{ $t('lang.serviceContract.table.titleWhite') }}
                            </div>
                            <transition name="fade">
                                <div class="table-title-footer" v-show="tableChoseBox===1 || tableChoseBoxHover === 1"></div>
                            </transition>
                        </div>
                        <div class="table-title font-format" @click="tableChoseBox = 2" @mouseenter="tableChoseBoxHover = 2"
                             @mouseleave="tableChoseBoxHover = 0">
                            <div v-show="tableChoseBox===2" class="font-format">
                                {{ $t('lang.serviceContract.table.titleGrey') }}
                            </div>
                            <div class="table-title-chick font-format" v-show="tableChoseBox!==2">
                                {{ $t('lang.serviceContract.table.titleGrey') }}
                            </div>
                            <transition name="fade">
                                <div class="table-title-footer" v-show="tableChoseBox===2 || tableChoseBoxHover === 2"></div>
                            </transition>
                        </div>
                        <div class="table-title font-format" @click="tableChoseBox = 3" @mouseenter="tableChoseBoxHover = 3"
                             @mouseleave="tableChoseBoxHover = 0">
                            <div v-show="tableChoseBox===3" class="font-format">
                                {{ $t('lang.serviceContract.table.titleBlack') }}
                            </div>
                            <div class="table-title-chick font-format" v-show="tableChoseBox!==3">
                                {{ $t('lang.serviceContract.table.titleBlack') }}
                            </div>
                            <transition name="fade">
                                <div class="table-title-footer" v-show="tableChoseBox===3 || tableChoseBoxHover === 3"></div>
                            </transition>
                        </div>
                    </div>
                    <div class="table-text">
                        <img alt="" v-show="tableChoseBox === 1" src="../../assets/img/white-box.png" height="241" width="420"/>
                        <img alt="" v-show="tableChoseBox === 2" src="../../assets/img/gary-box.png" height="241" width="420"/>
                        <img alt="" v-show="tableChoseBox === 3" src="../../assets/img/black-box.png" height="241" width="420"/>
                        <div class="table-introduce text-justify">
                            <span class="leading-normal font-format">
                                {{ boxText }}
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
        <contact-us></contact-us>
        <about-hermit></about-hermit>
    </div>
    <ver-code-dialog ref="verCodeDialog" :num="searchPrams"></ver-code-dialog>
</template>

<script lang="ts">

import hServiceSwiper from '../../components/h-service-swiper.vue'
import {computed, defineComponent, getCurrentInstance, ref, watch} from "vue";
import {InputProps, NInput, NDataTable} from "naive-ui";
import {useI18n} from "vue-i18n";
import AboutHermit from "../../components/about-hermit.vue";
import ContactUs from "../../components/contact-us.vue";
import VerCodeDialog from "../../components/ver-code-dialog.vue";
import {IDialog} from "../../utils/types";
import composition from "../../utils/mixin/common-func";
import {serviceContract} from "../../enums/link";
import {boxChoose, TBoxType} from "../../utils/table-date-service";
import RollNum from "../../components/roll-num.vue";

type InputThemeOverrides = NonNullable<InputProps['themeOverrides']>
const inputThemeOverrides: InputThemeOverrides = {
    border: '1px solid black'
}
export default defineComponent({
    name: "service-security",
    components: {
        RollNum,
        AboutHermit, ContactUs,
        hServiceSwiper,
        VerCodeDialog,
        NDataTable,
        NInput
    },

    setup(props, ctx) {
        const {t} = useI18n()
        const {message} = composition(props, ctx)
        const curInst = getCurrentInstance()
        const searchPrams = ref<string>('')
        const search = (): void => {
            if (!searchPrams.value) {
                message('warning', t('lang.serviceSecurity.search.input'), 'hermit-msg')
                return
            }
            (curInst?.refs.verCodeDialog as IDialog).isShow = true
        }
        const screenWidth = window.screen.width
        const createColumns = () => {
            let noW:number = 86
            if( 100 < screenWidth && screenWidth < 1278){
                noW = 50
            }
            return [
                {
                    title: 'No.',
                    key: 'num',
                    align: 'center',
                    rowSpan: (rowData: Object, rowIndex: Number) => {
                        if (tableChoseBox.value === 1) {
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
                            if (rowIndex === 25) {
                                return 9
                            }
                            if (rowIndex === 34) {
                                return 1
                            }
                            if (rowIndex === 35) {
                                return 1
                            }
                        }
                        if (tableChoseBox.value === 2) {
                            if (rowIndex === 0) {
                                return 1
                            }
                            if (rowIndex === 1) {
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
                        if (tableChoseBox.value === 3) {
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
                            if (rowIndex === 6) {
                                return 5
                            }
                            if (rowIndex === 17) {
                                return 1
                            }
                        }
                    },
                    className: 'title',
                    width:noW
                },
                {
                    title: 'Audit Categories',
                    key: 'categories',
                    align: 'center',
                    rowSpan: (rowData: Object, rowIndex: Number) => {
                        if (tableChoseBox.value === 1) {
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
                            if (rowIndex === 25) {
                                return 9
                            }
                            if (rowIndex === 34) {
                                return 1
                            }
                            if (rowIndex === 35) {
                                return 1
                            }
                        }
                        if (tableChoseBox.value === 2) {
                            if (rowIndex === 0) {
                                return 1
                            }
                            if (rowIndex === 1) {
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
                        if (tableChoseBox.value === 3) {
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
                            if (rowIndex === 6) {
                                return 5
                            }
                            if (rowIndex === 17) {
                                return 1
                            }
                        }
                    },
                    className: 'categories',

                },
                {
                    title: 'Audit Sub-items',
                    key: 'items',
                    align: 'center',
                    className: 'title',

                },
            ]
        }

        function rowClassName(row: TBoxType) {
            if (Number(row.num) % 2 === 0) {
                return 'change-color'
            }
            return null
        }

        let boxText = computed<String>(() => {
            if (tableChoseBox.value === 1) {
                return t('lang.serviceContract.table.textWhite')
            }
            if (tableChoseBox.value === 2) {
                return t('lang.serviceContract.table.textGrey')
            }
            return t('lang.serviceContract.table.textBlack')
        })
        let tableChoseBox = ref<number>(1)
        let data = ref<Array<TBoxType>>(boxChoose(tableChoseBox.value, t))
        watch(tableChoseBox, (nVal) => {
            data.value = boxChoose(nVal, t)
        })
        const customersNum = ref<number>(0)
        const contractsNum = ref<number>(0)
        const auditedNum = ref<number>(0)
        const {startTimer} = composition(props, ctx)
        startTimer(customersNum, 1000, 200)
        startTimer(contractsNum, 2000, 300)
        startTimer(auditedNum, 100, 20)
        const tableChoseBoxHover = ref<number>(0)

        return {
            customersNum,
            contractsNum,
            auditedNum,
            tableChoseBoxHover,
            data,
            columns: createColumns(),
            search,
            searchPrams,
            boxText,
            inputThemeOverrides,
            tableChoseBox,
            rowClassName
        }
    },
})
</script>

<style>
@import "../../assets/css/service-page.css";

#service_security /deep/ .n-data-table-th {
  background-color: #F1F1F1 !important;
}

#service_security /deep/ .change-color .categories {
  background-color: #F8F8F8 !important;
}

#service_security .content-card-up {
  display: flex;
  justify-content: space-between;
  width: 941px;
  margin-top: 71px;
}

#service_security .content-card-down {
  display: flex;
  justify-content: space-between;
  width: 608px;
  margin-top: 79px;
}

#service_security .page-head {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 570px;
  padding-bottom: 110px;
  background-color: #121214;
}

#service_security .page-body-reports {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1227px;
  background-color: #000;
}

.page-body-process-security {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;
}

@media screen and (min-width: 100px) and (max-width: 1278px) {

  #service_security .page-head {
    flex-direction: column;
    height: initial;
    padding: 0 30px 30px 30px;
    background-image: none;
  }
}
</style>