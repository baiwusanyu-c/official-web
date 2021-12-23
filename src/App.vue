<template>
  <div class="w-full h-full absolute inset-0" id="hermit_app" style="min-width: 1220px">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
  import {defineComponent} from 'vue'
  export default defineComponent({})
</script>
<style>
  @import "assets/css/tailwind.css";
  @import "assets/css/animate.css";
  @import "assets/css/common.css";
</style>

