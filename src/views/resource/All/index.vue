<template>
  <div class="tab-pane-container">
    <div class="article">
      <ul class="list">
        <li v-for="article in articles" :key="article.id" @click="goDetail(article)">
          <div class="img-banner">
            <img :src="article.coverImg" />
          </div>
          <div class="information">
            <h4 class="line-clamp line-clamp-2">{{ article.title }}</h4>
            <p class="line-clamp line-clamp-3">{{ article.desc }}</p>
            <i>{{ preToText(article.pubTime) }}</i>
          </div>
        </li>
      </ul>
      <div v-if="pages > 1" class="pagination">
        <custom-pagination :page="params.pageNum" :on-update-page="onUpdatePage" :pages="pages" />
      </div>
    </div>
    <div class="resource">
      <ul class="list">
        <li v-for="resource in resources" :key="resource.id" @click="handlePreview(resource)">
          <div class="banner">
            <img :src="resource.coverImg" />
          </div>
          <div class="content">
            <h4 class="line-clamp line-clamp-2">{{ resource.title }}</h4>
            <p class="line-clamp line-clamp-4">{{ resource.desc }}</p>
            <n-button
              class="btn-hover-transtion"
              :bordered="false"
              color="#1CD2A9"
              @click.stop="handleDownload(resource)">
              <template #icon>
                <be-icon :size="20" icon="iconDownload" />
              </template>
              <span class="download-text">Download</span>
            </n-button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useRouter } from 'vue-router'
  // import mockBanner from '@/assets/img/mock-banner.png'
  // import mockResourceBanner from '@/assets/img/mock-resource-banner.png'
  import CustomPagination from '../components/custom-pagination/index.vue'
  import useGetArticle from '../bisiness-hooks/useGetArticle'
  import downloadFile, { previewFile } from '@/utils/download-file'
  import { combineLink, preToText } from '../util'
  import { NButton } from 'naive-ui'
  import { getBlogNewsList } from '../../../api/research'

  export default defineComponent({
    name: 'SearchAll',
    components: { NButton, CustomPagination },
    async setup() {
      // const {
      //   data: articles,
      //   params,
      //   pages,
      //   setParams,
      // } = useGetArticle({
      //   pageNum: 1,
      //   pageSize: 6,
      //   type: null,
      // })
      const params = ref({
        pageNum: 1,
        pageSize: 6,
        type: null,
      })

      const articles = ref([])
      const total = ref(false)
      const res: any = await getBlogNewsList(params.value as any)
      if (res.code === 200 && res.rows) {
        articles.value = res.rows
        total.value = res.total
      }
      console.log(articles.value)

      // const { data: resources } = useGetArticle({
      //   pageNum: 1,
      //   pageSize: 3,
      //   type: 7,
      // })

      const onUpdatePage = (page: number) => {
        // setParams({ pageNum: page })
      }

      const router = useRouter()

      const goDetail = (item: any) => {
        if (item.type === 1 && item.url) {
          window.open(item.url)
        } else {
          router.push({ path: '/index/article-preview', query: { id: item.id } })
        }
        // router.push({ path: '/index/article-preview', query: { id: article.id } })
      }

      const handleDownload = (resource: any) => {
        downloadFile(combineLink(resource.url))
        // downloadFile('http://192.168.0.2:8527/' + resource.url)
      }
      const handlePreview = (resource: any) => {
        previewFile(combineLink(resource.url))
        // window.open(resource.url)
        // previewFile('http://192.168.0.2:8527/' + resource.url)
      }

      return {
        articles,
        params,
        resources: [],
        goDetail,
        onUpdatePage,
        pages: 3,
        handlePreview,
        handleDownload,
        preToText,
      }
    },
  })
</script>

<style lang="less" scoped>
  .tab-pane-container {
    display: flex;

    .article {
      width: 65%;
      margin-right: 8%;
      margin-bottom: 32px;

      ul.list {
        li {
          display: flex;
          align-items: center;
          margin-bottom: 32px;
          cursor: pointer;

          &:hover {
            .information {
              h4 {
                text-decoration: underline;
              }
            }
          }

          .img-banner {
            width: 284px;
            margin-right: 3%;
            position: relative;

            img {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 8px;
            }

            &::before {
              display: block;
              width: 100%;
              content: '';
              padding-top: 64%;
            }
          }

          .information {
            flex: 1;

            h4 {
              font-size: 20px;
              font-weight: bold;
              color: #050b37;
              line-height: 28px;
              margin-bottom: 8px;
            }

            p {
              font-size: 14px;
              font-weight: 400;
              color: #373b5f;
              line-height: 22px;
              margin-bottom: 16px;
            }

            i {
              display: block;
              font-size: 14px;
              font-weight: 400;
              color: #9b9daf;
              line-height: 24px;
              font-style: normal;
            }
          }
        }
      }

      .pagination {
        display: flex;
        justify-content: center;
      }
    }

    .resource {
      flex: 1;

      ul.list {
        li {
          border-radius: 8px;
          border: 1px solid #f2f2f4;
          margin-bottom: 33px;
          cursor: pointer;
          transition: all 0.3s;
          background-image: url('@/assets/img/resource-bg.png');
          background-repeat: no-repeat;
          background-size: 100% auto;
          background-position: center 0;
          &:hover {
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            transform: translateY(-3px);
          }

          .banner {
            height: 127px;
            padding-top: 32px;
            padding-left: 23px;

            img {
              width: 118px;
            }
          }

          .content {
            padding: 0 24px 32px 24px;

            h4 {
              font-size: 16px;
              font-family: Roboto-Bold, Roboto;
              font-weight: bold;
              color: #18304e;
              line-height: 24px;
              margin-bottom: 16px;
            }

            p {
              margin-bottom: 16px;
            }
            .btn-hover-transtion {
              transition: all 0.3s;
              &:hover {
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                transform: translateY(-2px);
              }
            }
          }
        }
      }
    }
  }

  .download-text {
    font-size: 14px;
    font-weight: bold;
    color: #18304e;
  }
</style>