<template>
  <div class="tab-pane-container">
    <div class="article">
      <ul class="list">
        <li v-for="(article, index) in articles" :key="index" @click="goDetail">
          <div class="img-banner">
            <img :src="article.coverImg" />
          </div>
          <div class="information">
            <h4>{{ article.title }}</h4>
            <p>{{ article.desc }}</p>
            <i>{{ article.updateTime }}</i>
          </div>
        </li>
      </ul>
      <div class="pagination">
        <n-pagination :page="params.pageNum" :on-update:page="onPageUpdate" :page-count="pages" />
      </div>
    </div>
    <div class="resource">
      <ul class="list">
        <li v-for="(resource, index) in resources" :key="index">
          <div class="banner">
            <img :src="resource.banner" />
          </div>
          <div class="content">
            <h4>{{ resource.title }}</h4>
            <p>{{ resource.description }}</p>
            <custom-button>Download</custom-button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { NPagination } from 'naive-ui'
import mockBanner from '@/assets/img/mock-banner.png'
import mockResourceBanner from '@/assets/img/mock-resource-banner.png'
import CustomButton from '@/components/custom-button/index.vue'
import useGetArticle from '../bisiness-hooks/useGetArticle'

export default defineComponent({
  components: { CustomButton, NPagination },
  setup() {
    const articles = [
      {
        banner: mockBanner,
        title: 'H4-How to Steal User’s Signature in NFT Phishing Attacks',
        description: 'On February 21, 2022, Opensea suffered a phishing attack, and some users have had their NFTs stolen due to the approval they signed to the',
        date: 'March 25, 2019'
      },
      {
        banner: mockBanner,
        title: 'H4-How to Steal User’s Signature in NFT Phishing Attacks',
        description: 'On February 21, 2022, Opensea suffered a phishing attack, and some users have had their NFTs stolen due to the approval they signed to the',
        date: 'March 25, 2019'
      },
      {
        banner: mockBanner,
        title: 'H4-How to Steal User’s Signature in NFT Phishing Attacks',
        description: 'On February 21, 2022, Opensea suffered a phishing attack, and some users have had their NFTs stolen due to the approval they signed to the',
        date: 'March 25, 2019'
      },
      {
        banner: mockBanner,
        title: 'H4-How to Steal User’s Signature in NFT Phishing Attacks',
        description: 'On February 21, 2022, Opensea suffered a phishing attack, and some users have had their NFTs stolen due to the approval they signed to the',
        date: 'March 25, 2019'
      },
      {
        banner: mockBanner,
        title: 'H4-How to Steal User’s Signature in NFT Phishing Attacks',
        description: 'On February 21, 2022, Opensea suffered a phishing attack, and some users have had their NFTs stolen due to the approval they signed to the',
        date: 'March 25, 2019'
      },
      {
        banner: mockBanner,
        title: 'H4-How to Steal User’s Signature in NFT Phishing Attacks',
        description: 'On February 21, 2022, Opensea suffered a phishing attack, and some users have had their NFTs stolen due to the approval they signed to the',
        date: 'March 25, 2019'
      }
    ]

    const resources = [
      {
        banner: mockResourceBanner,
        title: 'Company Profile',
        description: 'Beosin is a leading global Web 3.0 blockchain security company co-founded by several professors from world-renowned universities. ',
        url: ''
      },
      {
        banner: mockResourceBanner,
        title: 'Company Profile',
        description: 'Beosin is a leading global Web 3.0 blockchain security company co-founded by several professors from world-renowned universities. ',
        url: ''
      },
      {
        banner: mockResourceBanner,
        title: 'Company Profile',
        description: 'Beosin is a leading global Web 3.0 blockchain security company co-founded by several professors from world-renowned universities. ',
        url: ''
      }
    ]
    const { params, pages, setParams } = useGetArticle({
      pageNum: 1,
      pageSize: 6,
      type: null,
      total: 0, //這個參數沒用只是爲了接口不暴紅 })
    })

    const onPageUpdate = (page:number) => {
      console.log(page)
      setParams({ pageNum: page })
    }

    const router = useRouter()

    const goDetail = () => {
      router.push('/index/article-preview')
    }

    return {
      articles,
      params,
      resources,
      goDetail,
      onPageUpdate,
      pages
    }
  },
})
</script>


<style lang="less" scoped>
  .tab-pane-container{
    display: flex;
    .article{
      width: 65%;
      margin-right: 8%;
      margin-bottom: 32px;
      ul.list{
        li{
          display: flex;
          align-items: center;
          margin-bottom: 32px;
          .img-banner{
            width: 284px;
            margin-right: 3%;
            position: relative;
            img{
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
            &::before{
              display: block;
              width: 100%;
              content: '';
              padding-top: 64%;
            }
          }
          .information{
            flex: 1;
            h4{
              font-size: 20px;
              font-weight: bold;
              color: #050B37;
              line-height: 28px;
              margin-bottom: 8px;
            }
            p{
              font-size: 14px;
              font-weight: 400;
              color: #373B5F;
              line-height: 22px;
              margin-bottom: 16px;
            }
            i{
              display: block;
              font-size: 14px;
              font-weight: 400;
              color: #9B9DAF;
              line-height: 24px;
              font-style: normal;
            }
          }
        }
      }
    }
    .resource{
      flex: 1;
      ul.list{
        li{
          border-radius: 8px;
          border: 1px solid #F2F2F4;
          margin-bottom: 33px;
          .banner{
            background-image: url('@/assets/img/resource-bg.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center 0;
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
  }
</style>