<template>
  <div
    :class="{
      'menu-popover': true,
      'menu-popover-hover': trigger === 'hover',
      'menu-popover-click': trigger === 'click',
    }">
    <div class="popover-element" @click="onShowDropdown">
      <span><slot></slot></span>
      <be-icon icon="under" :size="10" class="ml-2"></be-icon>
    </div>
    <div
      :style="popoverStyle"
      :class="{ 'popover-dropdown': true, 'is-click-show': show, [position]: true }">
      <div class="popover-items">
        <slot name="trigger"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'MenuPopover',
    props: {
      trigger: {
        type: String,
        default: 'hover',
      },
      placement: {
        type: String,
        default: 'bottom',
      },
      popoverStyle: {
        type: String,
      },
    },
    setup(props) {
      const position = {
        bottom: 'placement-bottom',
        right: 'placement-right',
      }[props.placement]

      const show = ref(false)
      const onShowDropdown = () => {
        if (props.trigger !== 'click') {
          return
        }
        show.value = !show.value
      }
      const closePopover = () => {
        show.value = false
      }
      return {
        show,
        onShowDropdown,
        position,
        closePopover,
      }
    },
  })
</script>

<style lang="less" scoped>
  .menu-popover {
    display: inline-block;
    position: relative;
    .popover-element {
      display: flex;
      align-items: center;
      :deep(svg) {
        width: 10px;
        height: 10px;
        fill: #898e9a;
      }
      &:hover {
        :deep(svg) {
          fill: #02fbbb;
        }
      }
    }
    .popover-dropdown {
      display: none;
      position: absolute;
      z-index: 100;
      &::before {
        width: 0px;
        height: 0px;
        content: '';
        position: absolute;
      }
      .popover-items {
        white-space: nowrap;
        background: #262525;
      }
    }
    .placement-bottom {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      padding-top: 6px;
      &::before {
        border-bottom: 6px solid #262525;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .placement-right {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      padding-left: 6px;
      &::before {
        border-bottom: 6px solid transparent;
        border-top: 6px solid transparent;
        border-right: 6px solid #262525;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .menu-popover-hover {
    &:hover {
      .popover-dropdown {
        display: block;
      }
    }
  }

  .menu-popover-click {
    .is-click-show {
      display: block;
    }
  }
</style>

<style lang="less">
  // 防止popover框在移动端时被部分截取隐藏
  .n-drawer .n-drawer-content .n-drawer-body {
    overflow: unset !important;
  }
  .n-drawer.n-drawer--native-scrollbar .n-drawer-content-wrapper {
    overflow: unset !important;
  }
  .n-drawer .n-drawer-content.n-drawer-content--native-scrollbar .n-drawer-body-content-wrapper {
    overflow: unset !important;
  }
</style>
