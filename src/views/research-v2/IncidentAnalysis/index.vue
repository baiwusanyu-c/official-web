<template>
  <div class="tab-pane-container">
    <custom-card-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomCardList from '../components/custom-card-list/index.vue'

export default defineComponent({
  components: { CustomCardList }, 
  data() {
    return {
    }
  },
  setup() {
    
  },
})
</script>


<style lang="less" scoped>
</style>