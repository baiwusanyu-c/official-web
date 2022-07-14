<template>
  <div class="header">
    <div class="auto-content header-content">
      <img src="@/assets/img/report/ss.png" class="header-img" alt="" />
      <div class="header-right">
        <div class="search-text">Find a Audit Report</div>
        <div class="search-content">
          <n-input
            v-model:value="keyword"
            class="n-input"
            maxlength="200"
            placeholder="Search for a project" />
          <n-button
            class="bg-mainG r-btn cursor-pointer text-black hover:bg-mainGHover;"
            @click="submit">
            Search
          </n-button>
        </div>
      </div>
    </div>
  </div>
  <div class="report">
    <div class="r-content">
      <h1 class="r-h1">View Public Reports</h1>
      <ul class="items">
        <li class="grid grid-cols-3 gap-x-20px row1">
          <span>Project Name</span>
          <span>Date</span>
        </li>
        <li v-for="it in rows" :key="it.id" class="row grid gap-x-20px grid-cols-3">
          <span class="row-left flex items-center overflow-hidden">
            <span class="ell break-all">
              {{ it.projectName }}
            </span>
          </span>
          <span class="flex-none">{{ dayjs(it.createTime).format('MMM DD, YYYY') }}</span>
          <span class="review" @click="toReport(it)">View</span>
        </li>
      </ul>
      <div class="pagi">
        <n-pagination
          v-model:page="page"
          class="report-pagination"
          :item-count="total"
          :page-slot="5"
          :page-size="pageSize"
          :on-update:page="query" />
      </div>
    </div>
  </div>
  <n-modal
    v-model:show="showReport"
    preset="dialog"
    :title="$t('lang.header.requestUs')"
    to="#request_quote_dialog">
    <ReportResult :list="resultList"></ReportResult>
  </n-modal>
  <VerifyCodeDialog ref="verifyRef" @submit="toGetReport"></VerifyCodeDialog>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { getReportForOtherCompany } from '@/api/service'
  import { NPagination } from 'naive-ui'
  import config from '@/enums/config'
  import dayjs from 'dayjs'
  import composition from '@/utils/mixin/common-func'
  import VerifyCodeDialog from '@/components/verify-code-dialog-only.vue'
  import ReportResult from '@/components/report-result.vue'
  import { NInput, NModal } from 'naive-ui'
  import { useI18n } from 'vue-i18n'
  const { message } = composition()
  const keyword = ref('')
  const verifyRef = ref()
  const showReport = ref<boolean>(false)
  type Row = { createTime: string; reportNum: string; id: string; projectName: string }
  const page = ref(1)
  const rows = ref<Row[]>([])
  const total = ref(0)
  const pageSize = 30
  const submit = () => {
    if (!keyword.value) {
      message('warning', 'Please enter keyword', 'hermit-msg')
      return
    }
    verifyRef.value.show()
  }
  const { t } = useI18n()
  type VerifyData = { uuid: string; code: string }
  const resultList = ref<Row[]>([])
  const toGetReport = (v: VerifyData) => {
    verifyRef.value.hidden()
    return getReportForOtherCompany({
      pageNum: 1,
      pageSize: 100000,
      langType: 1, // 取英文报告
      ...v,
      keyword: keyword.value,
    })
      .then((res: any) => {
        if (!res.data.rows?.length) {
          message('warning', t('lang.noResults'), 'hermit-msg')
          return
        }

        showReport.value = true
        resultList.value = res.data.rows as Row[]
      })
      .catch(err => {
        message('warning', err.message, 'hermit-msg')
      })
  }
  const query = (v = 1) => {
    page.value = v
    return getReportForOtherCompany({
      pageNum: page.value,
      langType: 1, // 取英文报告
      pageSize,
    })
      .then((res: any) => {
        rows.value = res.data.rows as Row[]
        total.value = res.data.total
      })
      .catch(err => {
        message('warning', err.message, 'hermit-msg')
      })
  }
  const toReport = (row: Row) => {
    window.open(
      `${config.baseURL}/audits/${row.projectName}_${row.reportNum}.pdf`,
      `preview${row.reportNum}`
    )
  }
  query(1)
</script>
<style scoped>
  .header {
    height: 232px;
    background: #15263a;
  }
  .pagi {
    display: flex;
    justify-content: flex-end;
  }
  .r-btn {
    width: 120px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    justify-content: center;
    height: 48px;
    background: #1cd2a9;
    border-radius: 4px;
  }
  .report {
    background: #f5f8fb;
    min-height: 750px;
  }
  .row,
  .row1 {
    font-size: 16px;
    font-weight: bold;
    color: #15263a;
    height: 60px;
    align-items: center;
    padding: 0 24px;
    border: 4px;
  }
  .row1 {
    color: #15263a;
    font-weight: normal;
  }
  li:nth-child(2n + 1) {
    background: #f5f8fb;
  }
  .r-h1 {
    font-size: 24px;
    font-weight: bold;
    color: #15263a;
    padding: 0 20px;
  }
  .n-pagination {
    margin-top: 20px;
  }
  .review {
    max-width: 263px;
    min-width: 80px;
    width: 100%;
    height: 36px;
    border-radius: 1px;
    border: 1px solid #1cd2a9;
    color: #1cd2a9;
    text-align: center;
    line-height: 36px;
    cursor: pointer;
  }
  .review:hover {
    color: #fff;
    background-color: #1cd2a9 !important;
  }
  .r-content {
    max-width: 1230px;
    margin: 0 auto;
    padding-top: 40px;
    border-radius: 1px;
    min-height: 576px;
    padding-bottom: 80px;
  }
  .search-text {
    font-size: 24px;
    font-weight: bold;
    color: #1cd2a9;
  }
  .header-right {
    width: 100%;
    margin-left: 5%;
  }
  .search-content {
    display: flex;
    margin-top: 10px;
  }
  .auto-content {
    max-width: 1230px;
    width: 100%;
    margin: 0 auto;
  }
  .header-content {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
  }
  .header-img {
    align-self: flex-end;
  }
  .ell {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .report :deep(.n-pagination-item--button) {
    border: none !important;
    background-color: transparent !important;
  }

  .items {
    margin-top: 20px;
    background: #ffffff;
    padding: 20px 24px;
  }
  .search-content :deep(input) {
    height: 48px;
  }
  .search-content .bg-mainG {
    width: 180px;
  }
  @media screen and (max-width: 750px) {
    .r-content {
      padding-bottom: 30px;
    }
    .r-h1 {
      font-size: 16px;
    }
    .items {
      padding: 0;
    }
    .header-right {
      margin-left: 0;
    }
    .header-img {
      display: none !important;
    }
  }
</style>
