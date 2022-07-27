<template>
  <div class="pagination">
    <n-pagination :page="page" :on-update:page="updatePage" :page-count="pages" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { NPagination } from 'naive-ui'

  export default defineComponent({
    name: 'CustomPagination',
    components: { NPagination },
    props: {
      page: {
        type: Number,
        default: 1,
      },
      onUpdatePage: {
        type: Function,
      },
      pages: {
        type: Number,
        default: 0,
      },
    },
    setup(props) {
      const updatePage = (value: any) => {
        props.onUpdatePage && props.onUpdatePage(value)
        window.scrollTo(0, 0)
      }
      return {
        ssr: import.meta.env.SSR,
        updatePage,
      }
    },
  })
</script>

<style lang="less" scoped>
  .pagination {
    :deep(.n-pagination) {
      .n-pagination-item {
        color: #050b37;
        &.n-pagination-item--button {
          border: none;
        }
        &:not(.n-pagination-item--disabled).n-pagination-item--active {
          background: #1cd2a9;
          border: none;
          color: #050b37;
          &:hover {
            background: #1cd2a9;
          }
        }
        &.n-pagination-item--clickable {
          &:hover {
            background: #edfdf9;
          }
        }
      }
    }
  }
</style>
