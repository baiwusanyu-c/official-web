<template>
  <div class="report-list pb-45px">
    <ul class="flex-col flex items">
      <li
        v-for="it in props.list"
        :key="it.id"
        class="row flex items-center ph:text-sm text-xl h-60px justify-between rounded-10px px-20px hover:cursor-pointer hover:bg-[#EFF2F7]"
        @click="toReport(it)">
        <span class="row-left flex overflow-hidden items-center">
          <img src="@/assets/img/file.png" class="w-24px" alt="" />
          <span class="ml-20px ell"> {{ getProjectName(it.reportName) }} </span>
        </span>
        <span class="text-[#909294] flex-none ml-10px">{{
          dayjs(it.createTime).format('MMM YYYY')
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'
  import config from '../enums/config'
  import dayjs from 'dayjs'
  type Row = { createTime: string; reportNum: string; id: string; reportName: string }
  const props = defineProps<{
    list: Row[]
  }>()
  const getProjectName = (v: string) => {
    return v.match(/[^-—]+$/)[0].trim()
  }

  const toReport = (row: Row) => {
    window.open(
      `${config.baseURL}/audit/${getProjectName(row.reportName)}_${row.reportNum}.pdf`,
      `preview${row.reportNum}`
    )
  }
</script>
<style scoped>
  .ell {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .ell {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .report-list {
    overflow: auto;
    max-height: 70vh;
  }
  .report-list :deep(.n-pagination-item--button) {
    border: none !important;
    background-color: transparent !important;
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
</style>
