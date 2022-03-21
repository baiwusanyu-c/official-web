/* * @blob-report.vue * @deprecated * @author czh * @update (czh 2022/3/18) */
<template>
  <div
    class="blob-report p-6 w-full bg-default m-4 rounded flex cursor-pointer sm:flex-col sm:mx-0"
    @click="openWin(data.url)">
    <div class="blob-report--img"  :key='data.id + "blob-report--img"'>
      <img v-if="!data.coverImg" src="../assets/img/empty-data.png" />
      <img v-if="data.coverImg" :src="data.coverImg" />
    </div>
    <div class="blob-report-info">
      <h3 class="blob-report--title">
        <be-ellipsis
          disabled
          :key='data.id + "blob-report--title"'
          :elp-num="data.title.length > 80 ? data.title.length - 80 : 0"
          :text="data.title"
          :content="data.title">
        </be-ellipsis>
      </h3>
      <p class="blob-report--content " style='word-break: break-all'>
        <be-ellipsis
          disabled
          :key='data.id + "blob-report--content"'
          :elp-num="data.content.length > 160 ? data.content.length - 160 : 0"
          :text="data.content"
          :content="data.content">
        </be-ellipsis>
      </p>
      <p class="blob-report--date" :key='data.id + "blob-report--date"'>{{ dateToMDY(data.pubTime) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
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
    setup(props) {
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
    flex: 1;
    padding-right: 30px;
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
    font-family: SourceHanSansRegular, sans-serif;
    font-size: 22px;
    font-weight: bold;
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
      line-height: 30px;
      font-size: 14px;
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
