/* * @research.vue * @deprecated * @author czh * @update (czh 2022/3/17) */
<template>
  <div class="research-page">
    <!--    头部介绍    -->
    <div class="page-head">
      <div class="header-text">
        <div class="header-text-big font-format">
          {{ $t('lang.researchPage.title') }}
        </div>
        <div class="header-text-small font-format leading-normal">
          {{ $t('lang.researchPage.titleDesc') }}
        </div>
      </div>
    </div>
    <div
      class="research-body flex flex-col py-16 items-center justify-center box-border w-full bg-mainBlueGary sm:p-6">
      <!--    tab    -->
      <div
        class="h-16 border-b-6 border-mainG w-2/3 flex items-end sm:w-full sm:border-b-0 sm:items-start sm:justify-center md:w-3/4">
        <div
          class="tab rounded-t-lg bg-default cursor-pointer"
          :class="activeTab === 1 ? 'tab__active ' : ''"
          @click="handleClickTab(1)">
          {{ $t('lang.researchPage.tabSecurityAnalysis') }}
        </div>
        <div
          class="tab rounded-t-lg bg-default cursor-pointer"
          :class="activeTab === 2 ? 'tab__active ' : ''"
          @click="handleClickTab(2)">
          {{ $t('lang.researchPage.tabOtherReport') }}
        </div>
      </div>
      <div
        class="research-body--list w-2/3 flex flex-col py-4 box-content sm:w-full sm:py-0 md:w-3/4">
        <!--    列表缺省   -->
        <div v-if="reportList.length === 0" class="empty-data">
          <img class="img" src="../../assets/img/empty-data.png" alt="" />
          <p style="line-height: 25px">{{ $t('lang.emptyData') }}</p>
        </div>
        <div v-if="reportList.length > 0" class="w-full">
          <blob-report v-for="item in reportList" :key="item.url" :data="item"> </blob-report>
        </div>
      </div>
      <!--    分页    -->
      <div
        v-if="reportList.length > 0"
        class="research-body--pager w-2/3 items-center justify-center flex mt-12 sm:mt-4 sm:3/4">
        <be-pagination
          is-ordianry
          :layout="['prev', 'page', 'next']"
          :page-size="pageParams.pageSize"
          :page-count="pageParams.total"
          :current-page="pageParams.currentPage"
          :pager-show-count="pagerShowCount"
          @change-page="pageChange">
          <template #next>
            <span class="text-sm text-info ml-8 sm:hidden"
              >{{ Math.ceil(pageParams.total / pageParams.pageSize) }} {{ $t('lang.page') }}</span
            >
          </template>
        </be-pagination>
      </div>
    </div>
    <!--    footer    -->
    <p class="h-14 flex justify-center items-center font-format bg-footer text-default">
      ©2021 by Beosin. All Rights Reserved.
    </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { IPageParam } from '../../utils/types'
  import BlobReport from '../../components/blob-report.vue'
  import { getBlogNewsList, IBlogListParam } from '../../api/research'
  import composition from '../../utils/mixin/common-func'
  import { useRoute } from 'vue-router'
  export declare interface IReport {
    title: string
    content: string
    pubTime?: string
    type: string
    url?: string
    coverImg?: string
  }

  export default defineComponent({
    name: 'ResearchPage',
    components: { BlobReport },
    setup() {
      const { message } = composition()
      const route = useRoute()
      // 處理tab點擊
      const activeTab = ref<number>(+route.query.tab || 1)
      const handleClickTab = (type: number): void => {
        activeTab.value = type
        pageParams.value.currentPage = 1
        pageParams.value.total = 1
        getReportData()
      }
      // 分页参数
      const pageParams = ref<IPageParam>({
        currentPage: 1,
        pageSize: 5,
        total: 0,
      })
      const reportList = ref<Array<IReport>>([])
      // 獲取數據
      const getReportData = (): void => {
        const params: IBlogListParam = {
          pageNum: pageParams.value.currentPage,
          pageSize: pageParams.value.pageSize,
          type: activeTab.value,
          total: 0, //這個參數沒用只是爲了接口不暴紅
        }
        getBlogNewsList(params)
          .then((res: any) => {
            if (res.code === 200 && res.rows) {
              reportList.value = res.rows
              pageParams.value.total = res.total
            }
          })
          .catch(err => {
            message('warning', err.message, 'hermit-msg')
            console.error(err)
          })
      }

      /**
       * 分頁方法
       * @param data
       */
      const pageChange = (data: IPageParam): void => {
        pageParams.value.currentPage = data.currentPage
        getReportData()
      }
      /**
       * 動態設置分頁顯示數量
       */
      let pagerShowCount = ref<number>(5)
      const getScreenWidth = (): void => {
        if (100 < window.screen.width && window.screen.width < 1278) {
          pagerShowCount.value = 3
        }
      }
      getScreenWidth()
      getReportData()
      return {
        pagerShowCount,
        pageChange,
        pageParams,
        activeTab,
        reportList,
        handleClickTab,
      }
    },
  })
</script>
<style>
  .research-page .page-head {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    background-color: #121214;
    background-image: url('../../assets/img/research-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .research-page .header-text {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  .research-page .header-text-big {
    width: 670px;
    font-family: SourceHanSansBold, sans-serif;
    font-size: 60px;
    font-weight: bold;
    line-height: 66px;
    color: #fff;
  }

  .research-page .header-text-small {
    width: 900px;
    margin-top: 26px;
    font-family: SourceHanSansRegular, sans-serif;
    font-size: 20px;
    line-height: 1.5;
    color: #fff;
  }

  .research-body .tab {
    width: 260px;
    height: 60px;
    font-family: SourceHanSansRegular, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 60px;
    text-align: center;
  }

  .research-body .tab__active {
    height: 68px;
    line-height: 74px;
    @apply bg-mainG rounded-t-lg;
  }

  .research-body--list {
    min-height: 500px;
  }

  .research-body--pager .be-pager li {
    width: 40px;
    height: 40px;
  }

  .research-body--pager .be-pager li .be-icon {
    width: 14px;
    height: 14px;
  }

  .research-body--pager .be-pager li.active,
  .research-body--pager .be-pager li:hover {
    @apply bg-mainG text-black;
  }

  .research-body--pager .be-pager li .be-icon use {
    fill: black;
  }

  .research-body--pager .be-pager li.more .be-icon,
  .research-body--pager .be-pager li.pageFirst .be-icon,
  .research-body--pager .be-pager li.pageLast .be-icon {
    width: 18px;
    height: 18px;
  }

  /* 100% - 110% 适配 */
  @media screen and (min-width: 1540px) and (max-width: 1750px) {
    .research-page .page-head {
      height: 380px;
    }

    .research-page .header-text-big {
      font-size: 56px;
    }

    .research-page .header-text-small {
      width: 840px;
      margin-top: 16px;
    }
  }

  /* 110% - 125% 适配 */
  @media screen and (min-width: 1328px) and (max-width: 1538px) {
    .research-page .page-head {
      height: 300px;
    }

    .research-page .header-text-big {
      font-size: 45px;
    }

    .research-page .header-text-small {
      width: 700px;
      margin-top: 16px;
    }
  }

  /* 150% 适配 */
  @media screen and (min-width: 1280px) and (max-width: 1326px) {
    .research-page .page-head {
      height: 270px;
    }

    .research-page .header-text-big {
      font-size: 30px;
    }

    .research-page .header-text-small {
      width: 580px;
      margin-top: 0;
      font-size: 16px;
    }
  }

  /* 移动端 适配 */
  @media screen and (min-width: 100px) and (max-width: 1278px) {
    .research-page .page-head {
      height: 230px;
      padding: 0 35px 30px 35px;
      background-image: url('../../assets/img/research-bg-m.png');
      background-repeat: round;
      background-size: cover;
    }

    .research-page .header-text {
      @apply w-full;
    }

    .research-page .header-text-big {
      @apply text-4xl w-full mt-6;
    }

    .research-page .header-text-small {
      font-size: 12px;
      @apply w-full mt-0 pt-2;
    }

    .research-body .tab {
      width: 140px;
      height: 45px;
      font-size: 14px;
      line-height: 45px;
    }

    .research-body--list {
      height: auto;
    }

    .research-body--pager .be-pager li {
      width: 25px;
      height: 25px;
    }
  }
</style>
