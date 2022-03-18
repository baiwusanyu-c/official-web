/* * @blob-report.vue * @deprecated * @author czh * @update (czh 2022/3/18) */
<template>
  <div class="blob-report p-6 w-full bg-default m-4 rounded flex sm:flex-col">
    <div class="blob-report--img">
      <img v-if="!data.img" src="../assets/img/empty-data.png" />
      <img v-if="data.img" :src="data.img" />
    </div>
    <div class="blob-report-info">
      <h3 class="blob-report--title">
        <be-ellipsis
          disabled
          :elp-num="data.title.length > 80 ? data.title.length - 80 : 0"
          :text="data.title"
          :content="data.title">
        </be-ellipsis>
      </h3>
      <p class="blob-report--content">
        <be-ellipsis
          disabled
          :elp-num="data.content.length > 430 ? data.content.length - 430 : 0"
          :text="data.content"
          :content="data.content">
        </be-ellipsis>
      </p>
      <p class="blob-report--date">{{ data.date }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { IReport } from '../views/research/research.vue'
  export default defineComponent({
    name: 'BlobReport',
    props: {
      data: {
        type: Object as PropType<IReport>,
      },
    },
  })
</script>

<style>
  .blob-report {
    height: 222px;
  }
  .blob-report--img {
    flex: 1;
    padding-right: 30px;
    box-sizing: border-box;
  }
  .blob-report--img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .blob-report-info {
    position: relative;
    flex: 3;
  }
  .blob-report-info .blob-report--title {
    font-size: 22px;
    font-family: SourceHanSansRegular, sans-serif;
    font-weight: bold;
  }
  .blob-report-info .blob-report--content span,
  .blob-report-info .blob-report--date {
    font-size: 16px;
    font-family: SourceHanSansRegular, sans-serif;
    font-weight: 400;
    line-height: 26px;
  }
  .blob-report-info .blob-report--date {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  /* 移动端 适配 */
  @media screen and (min-width: 100px) and (max-width: 1278px) {
    .blob-report {
      height: auto;
      @apply p-4;
    }
    .blob-report--img {
      padding-right: 0;
    }
    .blob-report-info {
      flex: 1;
    }
    .blob-report--img img {
      width: 100%;
      height: 150px;
      object-fit: initial;
    }
    .blob-report .blob-report--title {
      font-size: 14px;
    }
    .blob-report .blob-report--content span {
      font-size: 12px;
      line-height: 14px;
    }
    .blob-report-info .blob-report--date {
      font-size: 12px;
      line-height: 12px;
      position: relative;
      margin-top: 30px;
      left: 0;
      bottom: 0;
    }
  }
</style>
