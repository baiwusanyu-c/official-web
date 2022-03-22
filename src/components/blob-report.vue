/* * @blob-report.vue * @deprecated * @author czh * @update (czh 2022/3/18) */
<template>
  <div
    class="blob-report p-6 w-full bg-default m-4 rounded flex cursor-pointer sm:flex-col sm:mx-0"
    @click="openWin(data.url)">
    <div :key="data.id + 'blob-report--img'" class="blob-report--img">
      <img v-if="!data.coverImg" src="../assets/img/empty-data.png" />
      <img v-if="data.coverImg" :src="data.coverImg" />
    </div>
    <div class="blob-report-info">
      <h3 class="blob-report--title">
        <be-ellipsis
          :key="data.id + 'blob-report--title'"
          disabled
          :elp-num="data.title.length > 80 ? data.title.length - 80 : 0"
          :text="data.title"
          :content="data.title">
        </be-ellipsis>
      </h3>
      <p class="blob-report--content" style="word-break: break-all">
        <be-ellipsis
          :key="data.id + 'blob-report--content'"
          disabled
          :elp-num="data.content.length > 160 ? data.content.length - 160 : 0"
          :text="data.content"
          :content="data.content">
        </be-ellipsis>
      </p>
      <p :key="data.id + 'blob-report--date'" class="blob-report--date">
        {{ dateToMDY(data.pubTime) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { IReport } from '../views/research/research.vue'
  import composition from '../utils/mixin/common-func'
  import { dateToMDY } from '../utils/common'
  export default defineComponent({
    name: 'BlobReport',
    props: {
      data: {
        type: Object as PropType<IReport>,
      },
    },
    setup() {
      const { openWin } = composition()
      return {
        dateToMDY,
        openWin,
      }
    },
  })
</script>

<style>
  .blob-report {
    height: 222px;
  }

  .blob-report:hover {
    box-shadow: 0 16px 30px 0 rgb(0 255 196 / 16%);
    transition: all .5s ease;
  }

  .blob-report--img {
    box-sizing: border-box;
    width: 25%;
    padding-right: 30px;
  }

  .blob-report--img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .blob-report-info {
    position: relative;
    width: 75%;
  }

  .blob-report-info .blob-report--title {
    font-family: SourceHanSansRegular, sans-serif;
    font-size: 22px;
    font-weight: bold;
    word-break: break-all;
  }

  .blob-report-info .blob-report--content span,
  .blob-report-info .blob-report--date {
    font-family: SourceHanSansRegular, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }

  .blob-report-info .blob-report--date {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  /* 100% - 110% 适配 */
  @media screen and (min-width: 1540px) and (max-width: 1750px) {

    .blob-report-info .blob-report--title {
      font-size: 20px;
    }

    .blob-report-info .blob-report--content p {
      font-size: 14px;
    }
  }

  /* 110% - 125% 适配 */
  @media screen and (min-width: 1328px) and (max-width: 1538px) {

    .blob-report-info .blob-report--title {
      font-size: 18px;
    }

    .blob-report-info .blob-report--content p {
      font-size: 14px;
    }
  }

  /* 150% 适配 */
  @media screen and (min-width: 1280px) and (max-width: 1326px) {

    .blob-report-info .blob-report--title {
      font-size: 14px;
    }

    .blob-report-info .blob-report--content p {
      font-size: 12px;
    }

    .blob-report-info {
      flex: 2;
    }
  }

  /* 移动端 适配 */
  @media screen and (min-width: 100px) and (max-width: 1278px) {

    .blob-report {
      height: auto;
      @apply p-4;
    }

    .blob-report--img {
      flex: 3;
      width: initial;
      padding-right: 0;
    }

    .blob-report-info {
      flex: 1;
      width: initial;
    }

    .blob-report--img img {
      width: 100%;
      height: 150px;
      object-fit: initial;
    }

    .blob-report .blob-report--title {
      font-size: 14px;
      line-height: 30px;
      word-break: break-all;
    }

    .blob-report .blob-report--content span {
      font-size: 12px;
      line-height: 14px;
    }

    .blob-report-info .blob-report--date {
      position: relative;
      bottom: 0;
      left: 0;
      margin-top: 30px;
      font-size: 12px;
      line-height: 12px;
    }
  }
</style>
