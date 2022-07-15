<template>
  <div class="resource-list-page">
    <ul class="list">
      <li v-for="resource in articles" :key="resource.id" @click="onPreview(resource)">
        <div class="banner">
          <img :src="resource.coverImg" />
        </div>
        <div class="content">
          <h4 class="line-clamp line-clamp-2">{{ resource.title }}</h4>
          <p class="line-clamp line-clamp-4">{{ resource.desc }}</p>
          <custom-button @click="onDownload(resource)">
            <be-icon :size="20" icon="iconDownload" style="margin-right: 5px" />
            <span class="download-text">Download</span>
          </custom-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useRouter } from 'vue-router'
// import mockResourceBanner from '@/assets/img/mock-resource-banner.png'
import CustomButton from '@/components/custom-button/index.vue'
import useGetArticle from '../bisiness-hooks/useGetArticle'
import downloadFile, { previewFile } from '@/utils/download-file'
import { combineLink } from '../util'

  export default defineComponent({
    name: 'CompanyResources',
    components: { CustomButton },
    props: {
      type: {
        type: Number,
      },
    },
    setup(props) {

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

    const onDownload = (resource:any) => {
      downloadFile(combineLink(resource.url))
    }

    const onPreview = (resource:any) => {
      previewFile((resource.url))
    }

    // const onUpdatePage = (page:number) => {
    //   setParams({ pageNum: page })
    // }

    const {
      data: articles
    } = useGetArticle({
      pageNum: 1,
      pageSize: 6,
      type: props.type,
    })

    return {
      articles,
      onDownload,
      onPreview,
      // params,
      // onUpdatePage,
      // pages,
      // resources
    }
  }
})
</script>

<style lang="less" scoped>
  .resource-list-page {
    ul.list {
      display: flex;
      flex-wrap: wrap;
      li{
        width: 30%;
        margin-right: 4.9%;
        border-radius: 8px;
        border: 1px solid #f2f2f4;
        margin-bottom: 33px;
        background-image: url('@/assets/img/resource-bg.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center 0;
        cursor: pointer;

        &:hover {
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
          transform: translateY(-8px);
          transition: transform 0.3s;
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
        }
      }
      li:nth-child(3n + 3) {
        margin-right: 0;
      }
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
