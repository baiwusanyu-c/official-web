<template>
  <div class="research-v2-page">
    <div class="board-top">
      <div class="safe-area">
        <div class="left">
          <div class="title">{{ currentArticle.title }}</div>
          <div class="description">
            {{ currentArticle.desc }}
          </div>
          <div class="action">
            <custom-button
              style="width: 148px; height: 48px; border-radius: 4px"
              @click.stop="() => goLearnMore()">
              Learn More</custom-button
            >
          </div>
        </div>
        <div class="right">
          <!-- <img src="@/assets/img/research-top-banner.png" /> -->
          <ArticleSwipper :items="articles" @onSlideChange="onSlideChange" />
        </div>
      </div>
    </div>

    <div class="board-main">
      <n-tabs
        class="card-tabs"
        default-value=""
        animated
        :value="currType"
        :on-update:value="handleChange">
        <n-tab-pane name="" tab="All">
          <All />
        </n-tab-pane>
        <!-- 突发安全事件分析 -->
        <n-tab-pane :name="3" tab="Security Incident">
          <NormalArticleList :type="3" />
        </n-tab-pane>
        <!-- 深度研究 -->
        <n-tab-pane :name="1" tab="Research Report">
          <NormalArticleList :type="1" />
        </n-tab-pane>
        <!-- AMA回顾&活动 -->
        <n-tab-pane :name="6" tab="Event Update">
          <NormalArticleList :type="6" />
        </n-tab-pane>
        <!-- 审计PR长文 -->
        <n-tab-pane :name="4" tab="Partnership Announcement">
          <NormalArticleList :type="4" />
        </n-tab-pane>
        <!-- Web3科普知识 -->
        <n-tab-pane :name="5" tab="Web3.0 Classroom">
          <NormalArticleList :type="5" />
        </n-tab-pane>
        <!-- 公司资源 -->
        <n-tab-pane :name="7" tab="Resources">
          <CompanyResources :type="7" />
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { NTabs, NTabPane } from 'naive-ui'
  import CustomButton from '@/components/custom-button/index.vue'
  import All from './All/index.vue'
  import NormalArticleList from './NormalArticleList/index.vue'
  import CompanyResources from './CompanyResources/index.vue'
  import './media-screen-style/research.less'
  import ArticleSwipper from './ArticleSwiper/index.vue'
  import useGetArticle from './bisiness-hooks/useGetArticle'
  import { openUrl } from './util'

  export default {
    name: 'RearchV2',
    components: {
      NTabs,
      NTabPane,
      CustomButton,
      All,
      NormalArticleList,
      CompanyResources,
      ArticleSwipper,
    },
    setup() {
      const route = useRoute()
      const { data: articles } = useGetArticle({
        pageNum: 1,
        pageSize: 9999,
        upFlag: true,
        type: null,
      })

      const currentArticle = ref({})
      const onSlideChange = article => {
        // console.log(article)
        currentArticle.value = article
      }

      const currType = ref('')
      onMounted(() => {
        currType.value = route.query ? route.query.type : ''
      })

      const handleChange = value => {
        currType.value = value
      }

      const goLearnMore = () => {
        const host = '/#/index/article-preview?id=' + currentArticle.value.id
        openUrl(host, { target: '_blank' })
      }

      return {
        articles,
        currentArticle,
        onSlideChange,
        currType,
        handleChange,
        goLearnMore,
      }
    },
    data() {
      return {}
    },
  }
</script>

<style lang="less" scoped>
  .research-v2-page {
    background: #fff;

    .board-top {
      height: 566px;
      background-image: url('@/assets/img/blog-banner.jpg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      color: #ffffff;
      display: flex;

      .safe-area {
        width: 1358px;
        padding: 0 64px;
        margin: 0 auto;
        display: flex;
        align-items: center;

        .left {
          margin-right: 6%;
          width: 46%;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .title {
            font-size: 48px;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 24px;
          }

          .description {
            font-size: 16px;
            color: #ffffff;
            margin-bottom: 24px;
          }

          .action {
            margin-bottom: 64px;
          }
        }

        .right {
          width: 48%;

          img {
            width: 100%;
          }
        }
      }
    }

    .board-main {
      max-width: 1358px;
      padding: 64px;
      padding-bottom: 240px;
      margin: 0 auto;

      /deep/ .n-tabs {
        .n-tabs-nav {
          border-bottom: 1px solid #f2f2f4;
          margin-bottom: 25px;
        }

        .n-tabs-tab .n-tabs-tab__label {
          font-size: 14px;
        }
      }
    }
  }
</style>
<style lang="less">
  .research-v2-page {
    .n-tabs-pane-wrapper {
      overflow: visible;
    }

    .card-tabs {
      .n-tabs-tab {
        font-size: 14px;
        font-family: Roboto-Bold, Roboto;
        font-weight: bold;
        color: #373b5f;

        &:hover {
          color: #050b37;
        }

        &.n-tabs-tab--active {
          font-family: Roboto-Bold, Roboto;
          font-weight: bold;
          color: #050b37;
        }
      }
    }

    .n-tabs {
      .n-tabs-bar {
        height: 3px;
        background: #1cd2a9;
        border-radius: 2px;
      }

      .n-tabs-nav-scroll-content {
        height: 48px;
      }
    }
  }
</style>
