/* * @blog-new.vue * @deprecated * @author czh * @update (czh 2022/3/18) */
<template>
  <div
    class="title-card text-black bg-default z-10 mr-6 flex flex-col p-6 box-border cursor-pointer sm:mr-0 sm:p-4"
    @click="openWin(data)">
    <img alt="" :src="icons[data.type]" class="title-card-btn" />
    <h3 class="w-full text-data text-2xl my-6 break-words font-format text-left sm:my-4">
      {{ data.title }}
      <!-- <be-ellipsis
        disabled
        style="font-weight: bold"
        :elp-num="data.title.length > 80 ? data.title.length - 80 : 0"
        :text="data.title"
        :content="data.title">
      </be-ellipsis> -->
    </h3>
    <!--    <p class="w-full break-words font-format text-justify" style="height: 300px">
      <be-ellipsis
        disabled
        style="color: #666"
        :elp-num="data.content.length > 100 ? data.content.length - 100 : 0"
        :text="data.content"
        :content="data.content">
      </be-ellipsis>
    </p>-->
    <div
      class="text-base flex items-center justify-between w-11/12 mt-2 absolute left-4 bottom-4 sm:text-xs">
      {{ dateToMDY(data.pubTime) }}
      <be-icon icon="up2" color="black" custom-class="ml-4 mr-4 cursor-pointer icon-up2"> </be-icon>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  // import composition from '../utils/mixin/common-func'
  import { IBlobList } from '../views/home/home.vue'
  import { dateToMDY } from '../utils/common'
  import { useRouter } from 'vue-router'
  import artiTypeEventUpdateIcon from '@/assets/img/arti-type-event-update.png'
  import artiTypePartnershipIcon from '@/assets/img/arti-type-partnership.png'
  import artiTypeResearchReportIcon from '@/assets/img/arti-type-research-report.png'
  import artiTypeResourceIcon from '@/assets/img/arti-type-resource.png'
  import artiTypeSecurityIncidentIcon from '@/assets/img/arti-type-security-incident.png'
  import artiTypeWeb3Icon from '@/assets/img/arti-type-web3.0.png'
  export const openUrl = (url: string, { target }: any) => {
    const aEl = document.createElement('a')
    aEl.href = url
    aEl.target = target
    aEl.click()
  }
  export default defineComponent({
    name: 'BlogNew',
    props: {
      data: {
        type: Object as PropType<IBlobList>,
      },
    },
    setup() {
      // const { openWin } = composition()
      const router = useRouter()
      const openWin = (item: any) => {
        // const host = window.location.host
        // openUrl(host + '/#/index/article-preview?id=' + item.id, { target: '_blank' })
        router.push({ path: '/index/article-preview', query: { id: item.id } })
      }
      const icons = {
        1: artiTypeResearchReportIcon,
        3: artiTypeSecurityIncidentIcon,
        4: artiTypePartnershipIcon,
        5: artiTypeWeb3Icon,
        6: artiTypeEventUpdateIcon,
        7: artiTypeResourceIcon,
      }
      return {
        dateToMDY,
        openWin,
        icons,
      }
    },
  })
</script>
<style scoped>
  .text-data {
    overflow: hidden;
    /* text-overflow: ellipsis; */
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
</style>
