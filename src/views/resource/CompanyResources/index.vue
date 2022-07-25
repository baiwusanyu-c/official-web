<template>
  <div class="resource-list-page">
    <ul class="list">
      <li v-for="resource in resources" :key="resource.id" @click="onPreview(resource)">
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
            @click.stop="onDownload(resource)">
            <be-icon :size="20" icon="iconDownload" style="margin-right: 5px" />
            <span class="download-text">Download</span>
          </n-button>
        </div>
      </li>
    </ul>
    <div v-if="pages > 1" class="pagination">
      <custom-pagination :page="params.pageNum" :on-update-page="onUpdatePage" :pages="pages" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  // import { useRouter } from 'vue-router'
  // import mockResourceBanner from '@/assets/img/mock-resource-banner.png'
  import useGetArticle from '../bisiness-hooks/useGetArticle'
  import downloadFile from '@/utils/download-file'
  import { combineLink, goPreviewPage } from '../util'
  import CustomPagination from '../components/custom-pagination/index.vue'
  import { NButton } from 'naive-ui'

  export default defineComponent({
    name: 'CompanyResources',
    components: { NButton, CustomPagination },
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
      // const articles = [
      //   {
      //     coverImg: mockResourceBanner,
      //     title: 'Company Profile',
      //     desc: 'Beosin is a leading global Web 3.0 blockchain security company co-founded by several professors from world-renowned universities. ',
      //     url: ''
      //   },
      //   {
      //     coverImg: mockResourceBanner,
      //     title: 'Company Profile',
      //     desc: 'Beosin is a leading global Web 3.0 blockchain security company co-founded by several professors from world-renowned universities. ',
      //     url: ''
      //   },
      //   {
      //     coverImg: mockResourceBanner,
      //     title: 'Company Profile',
      //     desc: 'Beosin is a leading global Web 3.0 blockchain security company co-founded by several professors from world-renowned universities. ',
      //     url: ''
      //   }
      // ]

      const onDownload = (resource: any) => {
        downloadFile(combineLink(resource.url))
      }

      const onPreview = (resource: any) => {
        // previewFile(combineLink(resource.url))
        goPreviewPage(resource)
      }

      const {
        data: resources,
        params,
        setParams,
        pages,
      } = await useGetArticle({
        pageNum: 1,
        pageSize: props.pageSize,
        type: props.type,
      })

      const onUpdatePage = (page: number) => {
        setParams({ pageNum: page })
      }

      return {
        onDownload,
        onPreview,
        params,
        onUpdatePage,
        pages,
        resources,
      }
    },
  })
</script>

<style lang="less" scoped>
  .resource-list-page {
    ul.list {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 31%;
        margin-right: 3.48%;
        border-radius: 8px;
        border: 1px solid #f2f2f4;
        margin-bottom: 33px;
        background-image: url('@/assets/img/resource-bg.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center 0;
        cursor: pointer;
        transition: all 0.3s;
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
      li:nth-child(3n + 3) {
        margin-right: 0;
      }
    }
    .pagination {
      display: flex;
      justify-content: center;
    }
  }

  .download-text {
    font-size: 14px;
    font-weight: bold;
    color: #18304e;
  }

  @media screen and (max-width: 750px) {
    .resource-list-page {
      ul.list {
        display: block;

        li {
          width: 100%;
        }
      }
    }
  }
</style>
