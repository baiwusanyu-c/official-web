<template>
  <div class="menu-popover">
    <div class="popover-element"><slot></slot></div>
    <div class="popover-dropdown">
      <div class="popover-items">
        <slot name="trigger"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'MenuPopover',
    props: {},
  })
</script>

<style lang="less" scoped>
  .menu-popover {
    display: inline-block;
    position: relative;
    .popover-dropdown {
      display: none;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      padding-top: 6px;
      &::before {
        width: 0px;
        height: 0px;
        border-bottom: 6px solid #393939;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      .popover-items {
        white-space: nowrap;
        background: #393939;
      }
    }
    &:hover {
      .popover-dropdown {
        display: block;
      }
    }
  }
</style>
