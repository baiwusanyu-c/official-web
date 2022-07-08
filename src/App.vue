<template>
  <div id="hermit_app_main" class="w-full h-full absolute inset-0">
    <router-view v-slot="{ Component }">
      <Suspense>
        <!-- 主要内容 -->
        <component :is="Component"></component>

        <!-- 加载中状态 -->
        <template #fallback> 正在加载... </template>
      </Suspense>
    </router-view>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'AppEnter',
  })
</script>
<!-- prettier-ignore -->
<style>
  @import 'assets/css/animate.css';
  @import 'assets/css/common.css';

  #hermit_app_main {
    min-width: 1220px;
  }

  @media screen and (min-width: 100px) and (max-width: 1278px) {

    #hermit_app_main {
      min-width: initial;
    }
  }
</style>
