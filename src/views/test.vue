/* * @test.vue * @deprecated * @author czh * @update (czh 2021/12/24) */
<template>
  <div>
    <h-header></h-header>
    <h-footer-bigger></h-footer-bigger>
  </div>

  <!--    <be-popover trigger="manual" width="300" customClass="asdwq" placement="bottom">
      <template #trigger>
        <be-icon icon="deleteIc" style="position: absolute;left: 20%;top: 300px;"></be-icon>
      </template>
      <be-button type='success'>test</be-button>
    </be-popover>
    <be-dialog
      ref="moreNodeDialog"
      v-model:is-show="asdwqd"
      :titles="''"
      layout="right"
      custom-class="font-format"
      esc-exit
      :is-drag="false"
      :is-open-modal="true">
       asdwqdwqdwqd
    </be-dialog>-->
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue'

  import HFooterBigger from '../components/h-footer-bigger.vue'
  import HHeader from '../components/h-header.vue'

  export default defineComponent({
    name: 'TestComp',
    components: {
      HHeader,
      HFooterBigger,
    },
    setup() {
      const asd = reactive({ foo: 1 })
      const asdwqd = ref<boolean>(true)

      return {
        asdwqd,
        asd,
      }
    },
  })
</script>

<!-- prettier-ignore -->
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
