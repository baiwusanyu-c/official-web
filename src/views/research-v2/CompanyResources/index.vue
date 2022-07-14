<template>
  <div class="resource-list-page">
    <ul class="list">
      <li v-for="(resource, index) in articles" :key="index">
        <div class="banner">
          <img :src="resource.coverImg" />
        </div>
        <div class="content">
          <h4>{{ resource.title }}</h4>
          <p>{{ resource.desc }}</p>
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

export default defineComponent({
  components: { CustomButton },
  props: {
    type: {
      type: Number
    }
  },
  setup(props) {

    // const articles = [
    //   {
    //     banner: mockResourceBanner,
    //     title: 'Company Profile',
    //     description: 'Beosin is a leading global Web 3.0 blockchain security company co-founded by several professors from world-renowned universities. ',
    //     url: ''
    //   },
    //   {
    //     banner: mockResourceBanner,
    //     title: 'Company Profile',
    //     description: 'Beosin is a leading global Web 3.0 blockchain security company co-founded by several professors from world-renowned universities. ',
    //     url: ''
    //   },
    //   {
    //     banner: mockResourceBanner,
    //     title: 'Company Profile',
    //     description: 'Beosin is a leading global Web 3.0 blockchain security company co-founded by several professors from world-renowned universities. ',
    //     url: ''
    //   }
    // ]

    const { data: articles } = useGetArticle({
      pageNum: 1,
      pageSize: 6,
      type: props.type
    })

    const onDownload = (resource:any) => {
      previewFile(resource.url)
    }

    // const onUpdatePage = (page:number) => {
    //   setParams({ pageNum: page })
    // }

    return {
      articles,
      onDownload
      // params,
      // onUpdatePage,
      // pages,
      // resources
    }
  }
})
</script>

<style lang="less" scoped>
  .resource-list-page{
    ul.list{
      display: flex;
      justify-content: space-between;
      li{
        width: 30%;
        margin-right: 0;
        border-radius: 8px;
        border: 1px solid #F2F2F4;
        margin-bottom: 33px;
        background-image: url('@/assets/img/resource-bg.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center 0;
        .banner{
          
          height: 127px;
          padding-top: 32px;
          padding-left: 23px;
          img{
            width: 118px;
          }
        }
        .content{
          padding: 0 24px 32px 24px;
          h4{
            font-size: 16px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #18304E;
            line-height: 24px;
            margin-bottom: 16px;
          }
          p{
            margin-bottom: 16px;
          }
        }
      }
    }
  }

  .download-text{
    font-size: 14px;
    font-weight: bold;
    color: #18304E;
  }

  @media screen and (max-width: 750px) {
    .resource-list-page{
      ul.list{
      display: block;
      li{
        width: 100%;
      }
    }
    }
  }
</style>