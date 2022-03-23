/* * @blog-new.vue * @deprecated * @author czh * @update (czh 2022/3/18) */
<template>
  <div
    class="title-card text-black bg-default z-10 mr-3 flex flex-col p-6 box-border cursor-pointer sm:mr-0 sm:p-4"
    @click="openWin(data.url)">
    <img
      v-if="data.type === 1"
      alt=""
      src="../../src/assets/img/blob1.png"
      class="title-card-btn" />
    <img
      v-if="data.type === 2"
      alt=""
      src="../../src/assets/img/blob0.png"
      class="title-card-btn" />
    <h3 class="w-full text-2xl my-6 break-words font-format sm:my-4">
      <be-ellipsis
        disabled
        style="font-weight: bold"
        :elp-num="data.title.length > 10 ? data.title.length - 10 : 0"
        :text="data.title"
        :content="data.title">
      </be-ellipsis>
    </h3>
    <p class="w-full break-words font-format text-justify" style="height: 300px">
      <be-ellipsis
        disabled
        style="color: #666"
        :elp-num="data.content.length > 100 ? data.content.length - 100 : 0"
        :text="data.content"
        :content="data.content">
      </be-ellipsis>
    </p>
    <div
      class="text-base flex items-center justify-between w-11/12 mt-2 absolute left-4 bottom-4 sm:text-xs">
      {{ dateToMDY(data.pubTime) }}
      <be-icon icon="up2" color="black" custom-class="ml-4 mr-4 cursor-pointer icon-up2"> </be-icon>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import composition from '../utils/mixin/common-func'
  import { IBlobList } from '../views/home/home.vue'
  import { dateToMDY } from '../utils/common'
  export default defineComponent({
    name: 'BlogNew',
    props: {
      data: {
        type: Object as PropType<IBlobList>,
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
