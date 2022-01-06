/*
* @test.vue
* @deprecated
* @author czh
* @update (czh 2021/12/24)
*/
<template>
    <div class="test">
        <roll-num :value="1000"  :time="2"></roll-num>
    </div>
</template>

<script lang="ts">
import {defineComponent,ref} from "vue";
import RollNum from "../components/roll-num.vue";
export default defineComponent({
    name: "test",
    components: {RollNum},
    setup() {

        return {

        }
    }
})
</script>

<style >
.test{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2077;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.container {
  width:300px;
  height: 300px;
  background-color: #f0f9eb;
  @apply self-center;
}
</style>