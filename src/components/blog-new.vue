/* * @blog-new.vue * @deprecated * @author czh * @update (czh 2022/3/18) */
<template>
  <div
    class="title-card text-black mr-3 bg-default z-10 flex flex-col p-6 box-border cursor-pointer sm:mr-0 sm:p-4"
    @click="openWin('loc')">
    <img
      v-if="data.type === '0'"
      alt=""
      src="../../src/assets/img/blob0.png"
      class="title-card-btn" />
    <img
      v-if="data.type === '1'"
      alt=""
      src="../../src/assets/img/blob1.png"
      class="title-card-btn" />
    <h3 class="w-full break-words text-2xl my-6 font-format sm:my-4">{{ data.label }}</h3>
    <p class="w-full break-words font-format">
      <be-ellipsis
        disabled
        :elp-num="data.value.length > 30 ? 15 : 0"
        :text="data.value"
        :content="data.value">
      </be-ellipsis>
    </p>
    <div class="text-base flex items-center justify-between w-full mt-2 font-bold sm:text-xs">
      {{ data.date }}
      <be-icon icon="up2" color="black" custom-class="ml-4 mr-4 cursor-pointer icon-up2"> </be-icon>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import composition from '../utils/mixin/common-func'
  import { IBlobList } from '../views/home/home.vue'
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
        openWin,
      }
    },
  })
</script>
