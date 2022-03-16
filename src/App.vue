<template>
  <div id="hermit_app" class="w-full h-full absolute inset-0">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({})
</script>
<!-- prettier-ignore -->
<style>
  @import 'assets/css/animate.css';
  @import 'assets/css/common.css';

  #hermit_app {
    min-width: 1220px;
  }

  @media screen and (min-width: 100px) and (max-width: 1278px) {

    #hermit_app {
      min-width: initial;
    }
  }
</style>
