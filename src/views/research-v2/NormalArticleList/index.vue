<template>
  <div class="tab-pane-container">
    <custom-card-list
      :data="data"
      :pagination="{ page: params.pageNum, pages: params.pages, onUpdatePage: onUpdatePage }"
      @onItemClick="onItemClick" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useRouter } from 'vue-router'
  import CustomCardList from '../components/custom-card-list/index.vue'
  import useGetArticle from '../bisiness-hooks/useGetArticle'

  export default defineComponent({
    components: { CustomCardList },
    props: {
      type: {
        type: Number,
      },
    },
    setup(props) {
      const { data, params, total, pages, setParams } = useGetArticle({
        pageNum: 1,
        pageSize: 12,
        type: props.type,
      })

      const onUpdatePage = (page: number) => {
        setParams({ pageNum: page })
      }

      const router = useRouter()
      const onItemClick = (item: any) => {
        router.push({ path: '/index/article-preview', query: { id: item.id } })
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
