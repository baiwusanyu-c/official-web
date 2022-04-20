<template>
  <div class="report-list bg-mainBlueGary pb-45px">
    <div class="report-content flex relative bg-[#fff] w-62vw ph:w-90vw mx-auto mt-[-50px]">
      <div class="report-left relative max-w-400px top-[-70px] sm:hidden">
        <img src="@/assets/img/report-list-left.png" class="w-full" alt="" />
        <h3 class="h3 absolute top-5vw left-3vw">VERIFICATION REPORTS</h3>
      </div>
      <div class="report-right ph:w-[100%] flex-1 flex flex-col">
        <ul class="flex-col flex items">
          <li
            v-for="it in rows"
            :key="it.id"
            class="row flex items-center ph:text-sm text-xl h-60px justify-between rounded-10px px-20px hover:cursor-pointer hover:bg-[#EFF2F7]"
            @click="toReport(it)">
            <span class="row-left flex items-center">
              <img src="@/assets/img/file.png" class="w-24px" alt="" />
              <span class="ml-20px"> {{ getProjectName(it.reportName) }} </span>
            </span>
            <span class="text-[#909294] flex-none">{{
              dayjs(it.updateTime).format('MMM YYYY')
            }}</span>
          </li>
        </ul>
        <n-pagination
          v-model:page="page"
          class="result-pagination"
          :item-count="total"
          :page-slot="5"
          :on-update:page="query" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { getReportList } from '../../../api/research'
  import { NPagination } from 'naive-ui'
  import config from '../../../enums/config'
  import dayjs from 'dayjs'
  type Row = { updateTime: string; reportNum: string; id: string; reportName: string }
  const page = ref(1)
  const rows = ref<Row[]>([])
  const total = ref(0)
  const getProjectName = (v: string) => {
    return v.match(/[^-—]+$/)[0].trim()
  }

  const query = v => {
    page.value = v
    getReportList({
      pageSize: 7,
      pageNum: page.value,
    }).then((res: any) => {
      rows.value = res.rows as Row[]
      total.value = res.total
    })
  }
  const toReport = (row: Row) => {
    window.open(
      `${config.baseURL}/audit/${getProjectName(row.reportName)}_${row.reportNum}.pdf`,
      `preview${row.reportNum}`
    )
  }
  query(1)
</script>
<style scoped>
  .ell {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .report-list :deep(.n-pagination-item--button) {
    border: none !important;
    background-color: transparent !important;
  }
  .report-list {
  }
  .report-right {
    padding: 3vw;
    flex: 1 1 auto;
  }
  .report-left {
    flex: 1 1 auto;
  }

  .items {
    min-height: calc(100% - 120px);
  }
  .h3 {
    font-size: min(48px, 3vw);
  }
  .row {
  }
  .result-pagination {
    margin: 80px auto 0;
  }
</style>
