/* * @service-contract.vue * @deprecated 合约服务页面 * @author djd * @update (czh 2022/01/05 ) */
<template>
  <div id="service_contract" class="service-page">
    <div class="page-head relative">
      <div class="header-text">
        <div class="header-text-big font-format">
          {{ $t('lang.serviceContract.pageHead.textBig') }}
        </div>
        <div class="header-text-small font-format leading-normal">
          {{ $t('lang.serviceContract.pageHead.textSmall') }}
        </div>
      </div>
      <!--            <be-button customClass="reservation-btn h-btn-txt-black linear-l-r text-black text-xl">{{$t('lang.ReservationBtn')}}</be-button>-->
      <!--     占位用      -->
      <img
        alt=""
        src="../../assets/img/header-img.png"
        class="header-img sm:hidden"
        style="visibility: hidden" />
    </div>
    <div class="page-body-search">
      <div class="body-search-text">
        <span class="font-format leading-normal">{{ $t('lang.serviceContract.search.text') }}</span>
      </div>
      <div class="body-search-num">
        <div class="search-num-box">
          <div class="num-header font-format">
            {{ $t('lang.serviceContract.search.totalCustomers') }}
          </div>
          <div>
            <div class="num-main">
              <roll-num v-if="!isM" :value="customersNum" :time="1"></roll-num>
              <span v-if="isM">1,0 0 0</span>
              +
            </div>
            <div class="num-footer"></div>
          </div>
        </div>
        <div class="search-num-box">
          <div class="num-header font-format sm:mb-4">
            {{ $t('lang.serviceContract.search.audited') }}
          </div>
          <div>
            <div class="num-main">
              <roll-num v-if="!isM" :value="contractsNum" :time="1"></roll-num>
              <span v-if="isM">2,0 0 0</span>
              +
            </div>
            <div class="num-footer"></div>
          </div>
        </div>
        <div class="search-num-box">
          <div class="num-header font-format">
            {{ $t('lang.serviceContract.search.totalAudited') }}
          </div>
          <div>
            <div class="num-main">
              <roll-num v-if="!isM" :value="auditedNum" :time="1"></roll-num>
              <span v-if="isM">1,0 0 0</span>
              <span style="margin-left: 3px">Million+</span>
            </div>
            <div class="num-footer num-footer-plus"></div>
          </div>
        </div>
      </div>
      <div class="body-search-input">
        <div class="input-title font-format sm:text-lg">
          {{ $t('lang.serviceContract.search.inputTitle') }}
        </div>
      </div>
      <div class="search-input shadow-lg">
        <n-input
          v-model:value="searchPrams"
          size="large"
          :theme-overrides="inputThemeOverrides"
          :placeholder="$t('lang.serviceContract.search.input')"
          @keyup.enter="search"
          @input="searchPrams = searchPrams.replace(/[^\d]/g, '')">
          <template #suffix>
            <be-icon class="search-input-icon" icon="search" @click="search"></be-icon>
          </template>
        </n-input>
      </div>
    </div>
    <div class="page-body-content">
      <div class="body-title font-format sm:text-lg">
        {{ $t('lang.serviceContract.content.title') }}
      </div>
      <div class="content-card-up">
        <div class="card">
          <div class="card-title font-format">
            {{ $t('lang.serviceContract.content.cardSecurity') }}
          </div>
          <img alt="" src="../../assets/img/service-contract/asset.png" height="120" width="212" />
        </div>
        <div class="card">
          <div class="card-title font-format">
            {{ $t('lang.serviceContract.content.cardLogic') }}
          </div>
          <img alt="" src="../../assets/img/service-contract/logic.png" height="120" width="212" />
        </div>
        <div class="card">
          <div class="card-title font-format">
            {{ $t('lang.serviceContract.content.cardBackdoor') }}
          </div>
          <img
            alt=""
            src="../../assets/img/service-contract/backdoor.png"
            height="120"
            width="212" />
        </div>
        <div class="card">
          <div class="card-title font-format">
            {{ $t('lang.serviceContract.content.cardFlashLoan') }}
          </div>
          <img
            alt=""
            src="../../assets/img/service-contract/flash-loan.png"
            height="120"
            width="212" />
        </div>
      </div>
      <div class="content-card-down">
        <div class="card">
          <div class="card-title font-format">
            {{ $t('lang.serviceContract.content.cardThirdParty') }}
          </div>
          <img
            alt=""
            src="../../assets/img/service-contract/third-party.png"
            height="120"
            width="212" />
        </div>
        <div class="card">
          <div class="card-title font-format">
            {{ $t('lang.serviceContract.content.cardAttack') }}
          </div>
          <img alt="" src="../../assets/img/service-contract/attack.png" height="120" width="212" />
        </div>
        <div class="card">
          <div class="card-title font-format">
            {{ $t('lang.serviceContract.content.cardCode') }}
          </div>
          <img
            alt=""
            src="../../assets/img/service-contract/code-specification.png"
            height="120"
            width="212" />
        </div>
        <div class="card">
          <div class="card-title font-format">
            {{ $t('lang.serviceContract.content.cardFunction') }}
          </div>
          <img
            alt=""
            src="../../assets/img/service-contract/call-audit.png"
            height="120"
            width="212" />
        </div>
      </div>
    </div>
    <div class="page-body-process">
      <div class="body-title font-format sm:mb-8">
        {{ $t('lang.serviceContract.process.title') }}
      </div>
      <div class="sm:hidden">
        <div class="process-text">
          <div class="font-format font-bold">
            {{ $t('lang.serviceContract.process.textEvaluation') }}
          </div>
          <div class="font-format font-bold">
            {{ $t('lang.serviceContract.process.textImplementation') }}
          </div>
        </div>
      </div>
      <img
        class="display-none sm:flex"
        alt=""
        src="../../assets/img/z18.png"
        style="margin-bottom: 19px"
        height="342"
        width="1200" />
      <img
        class="sm:hidden"
        alt=""
        src="../../assets/img/process-small2.png"
        style="margin-bottom: 19px"
        height="342"
        width="1200" />
      <img
        class="display-none sm:flex"
        alt=""
        src="../../assets/img/z18-big.png"
        style="z-index: 1"
        height="1429"
        width="1200" />
      <img
        class="sm:hidden"
        alt=""
        src="../../assets/img/process-big.png"
        style="z-index: 1"
        height="1429"
        width="1200" />
    </div>

    <div class="page-body-reports">
      <div class="page-body-reports-head">
        <div class="reports-header">
          <div class="reports-title-class">
            <div class="reports-title-question font-format text-justify">
              {{ $t('lang.serviceContract.reports.title') }}
            </div>
            <div class="reports-title-answer font-format text-justify leading-normal">
              {{ $t('lang.serviceContract.reports.text') }}
            </div>
          </div>
          <img
            alt=""
            src="../../assets/img/pad.png"
            height="345"
            width="339"
            class="sm:w-56 sm:h-56 sm:mt-4 sm:mx-auto" />
        </div>
        <div class="reports-middle">
          <div class="reports-middle-title font-format">
            {{ $t('lang.serviceContract.reports.middleTitle') }}
          </div>
          <div class="reports-middle-text font-format">
            {{ $t('lang.serviceContract.reports.middleText') }}
          </div>
        </div>
      </div>

      <div class="reports-swiper">
        <hServiceSwiper :list="reportList" />
      </div>
    </div>
    <contact-us></contact-us>
    <about-hermit></about-hermit>
  </div>
  <ver-code-dialog ref="verCodeDialog" :num="searchPrams"></ver-code-dialog>
</template>

<script lang="ts">
  import hServiceSwiper from '../../components/h-service-swiper.vue'
  import { defineComponent, getCurrentInstance, ref } from 'vue'
  import { NInput, InputProps } from 'naive-ui'
  import { useI18n } from 'vue-i18n'
  import VerCodeDialog from '../../components/ver-code-dialog.vue'
  import { IDialog } from '../../utils/types'
  import composition from '../../utils/mixin/common-func'
  import { serviceContract } from '../../enums/link'
  import ContactUs from '../../components/contact-us.vue'
  import AboutHermit from '../../components/about-hermit.vue'
  import RollNum from '../../components/roll-num.vue'
  type InputThemeOverrides = NonNullable<InputProps['themeOverrides']>
  const inputThemeOverrides: InputThemeOverrides = {
    border: '1px solid black',
  }
  export default defineComponent({
    name: 'ServiceContract',
    components: {
      RollNum,
      AboutHermit,
      ContactUs,
      VerCodeDialog,
      NInput,
      hServiceSwiper,
    },

    setup() {
      const { message } = composition()
      const { t } = useI18n()
      const curInst = getCurrentInstance()
      const searchPrams = ref<string>('')
      const search = (): void => {
        if (!searchPrams.value) {
          message('warning', t('lang.serviceSecurity.search.input'), 'hermit-msg')
          return
        }
        ;(curInst?.refs.verCodeDialog as IDialog).isShow = true
      }
      const reportList = [
        {
          fileUrl: serviceContract.report1,
          info: 'SMART CONTRACT AUDIT REPORT',
          name: 'For Huckleberry',
        },
        {
          fileUrl: serviceContract.report2,
          info: 'SMART CONTRACT AUDIT REPORT',
          name: 'For CrossYield-stake',
        },
        {
          fileUrl: serviceContract.report3,
          info: 'SMART CONTRACT AUDIT REPORT',
          name: 'For NFT',
        },
      ]
      const customersNum = ref<number>(0)
      const contractsNum = ref<number>(0)
      const auditedNum = ref<number>(0)
      const { startTimer } = composition()
      startTimer(customersNum, 1000, 200)
      startTimer(contractsNum, 2000, 300)
      startTimer(auditedNum, 1000, 200)

      let isM = ref<boolean>(false)
      const getScreenWidth = (): void => {
        if (100 < window.screen.width && window.screen.width < 1278) {
          isM.value = true
        }
      }
      getScreenWidth()

      return {
        isM,
        customersNum,
        contractsNum,
        auditedNum,
        search,
        searchPrams,
        reportList,
        inputThemeOverrides,
      }
    },
  })
</script>
<!-- prettier-ignore -->
<style>
  @import '../../assets/css/service-page.css';

  #service_contract .page-head {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 570px;
    padding-bottom: 110px;
    background-color: #121214;
    background-image: url('../../assets/img/service-contract/contract-header.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  #service_contract .content-card-down {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin-top: 79px;
  }

  #service_contract .page-body-reports {
    height: 1227px;
    background-color: #000;
  }

  #service_contract .content-card-up {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin-top: 71px;
  }

  .reports-swiper {
    margin-top: 76px;
  }

  @media screen and (min-width: 100px) and (max-width: 1278px) {

    #service_contract .page-head {
      flex-direction: column;
      height: initial;
      padding: 0 30px 0 30px;
      background-image: none;
    }

    .reports-swiper {
      margin-top: 30px;
    }

    #service_contract .page-body-reports {
      height: initial;
    }
  }
</style>
