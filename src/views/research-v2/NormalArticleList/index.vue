<template>
  <div class="tab-pane-container">
    <custom-card-list :data="articles" :pagination="{ page: params.pageNum, pages: params.pages, onUpdatePage: onUpdatePage }" />
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
      type: Number
    }
  },
  setup(props) {
    const { data: articles, params, total, pages, setParams } = useGetArticle({
      pageNum: 1,
      pageSize: 6,
      type: props.type
    })

    const onUpdatePage = (page:number) => {
      setParams({ pageNum: page })
    }

    const router = useRouter()

    const goDetail = () => {
      router.push('/index/article-preview')
    }
    console.log(total)

    return {
      articles,
      params,
      goDetail,
      onUpdatePage,
      pages
    }
  }
})
</script>


<style lang="less" scoped>
</style>