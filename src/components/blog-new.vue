/* * @blog-new.vue * @deprecated * @author czh * @update (czh 2022/3/18) */
<template>
  <div
    class="title-card text-black bg-default z-10 mr-6 flex flex-col p-6 box-border cursor-pointer sm:mr-0 sm:p-4"
    @click="openWin(data)">
    <img alt="" :src="icons[data.type]" class="title-card-btn" />
    <h3 class="w-full text-data text-2xl my-6 break-words font-format text-left sm:my-4">
      {{ data.title }}
    </h3>
    <div
      class="text-base flex items-center justify-between w-11/12 mt-2 absolute left-4 bottom-4 sm:text-xs">
      {{ !ssr && dateToMDY(data.pubTime) }}
      <be-icon icon="up2" color="black" custom-class="ml-4 mr-4 cursor-pointer icon-up2"> </be-icon>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { IBlobList } from '../views/home/home.vue'
  import { dateToMDY } from '../utils/common'
  import artiTypeEventUpdateIcon from '@/assets/img/arti-type-event-update.png'
  import artiTypePartnershipIcon from '@/assets/img/arti-type-partnership.png'
  import artiTypeResearchReportIcon from '@/assets/img/arti-type-research-report.png'
  import artiTypeResourceIcon from '@/assets/img/arti-type-resource.png'
  import artiTypeSecurityIncidentIcon from '@/assets/img/arti-type-security-incident.png'
  import artiTypeWeb3Icon from '@/assets/img/arti-type-web3.0.png'
  import { goPreviewPage } from '../views/resource/util'
  export default defineComponent({
    name: 'BlogNew',
    props: {
      data: {
        type: Object as PropType<IBlobList>,
      },
    },
    setup() {
      const openWin = (item: any) => {
        goPreviewPage(item)
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
        ssr: import.meta.env.SSR,
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
