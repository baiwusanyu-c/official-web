<template>
  <div class="tab-pane-container">
    <custom-card-list
      :data="data"
      :pagination="{ page: params.pageNum, pages: pages, onUpdatePage: onUpdatePage }"
      @on-item-click="onItemClick" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import CustomCardList from '../components/custom-card-list/index.vue'
  import useGetArticle from '../bisiness-hooks/useGetArticle'
  import { goPreviewPage } from '../util'

  export default defineComponent({
    name: 'NormalArticleList',
    components: { CustomCardList },
    props: {
      type: {
        type: Number,
      },
      pageSize: {
        type: Number,
        default: 12,
      },
    },
    async setup(props) {
      const { data, params, pages, setParams } = await useGetArticle({
        pageNum: 1,
        pageSize: props.pageSize,
        type: props.type,
      })

      const onUpdatePage = (page: number) => {
        setParams({ pageNum: page })
      }

      const onItemClick = (item: any) => {
        goPreviewPage(item)
      }

      return {
        data,
        params,
        onUpdatePage,
        pages,
        onItemClick,
      }
    },
  })
</script>

<style lang="less" scoped></style>
