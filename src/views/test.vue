/* * @test.vue * @deprecated * @author czh * @update (czh 2021/12/24) */
<template>
  <div class="test" @click="asd.foo = 2">
    {{ asd.foo }}
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'

  export default defineComponent({
    name: 'TestComp',
    setup() {
      const asd = reactive({ foo: 1 })
      return {
        asd,
      }
    },
  })
</script>

<style>
  .test {
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
    width: 300px;
    height: 300px;
    background-color: #f0f9eb;
    @apply self-center;
  }
</style>
