<template>
  <div class="card-list">
    <ul class="list-page">
      <li v-for="(article, index) in articles" :key="index">
        <div class="card-item">
          <div class="card-img-banner"><img :src="article.banner" /></div>
          <div class="card-information">
            <h4>{{ article.title }}</h4>
            <p>{{ article.description }}</p>
            <i>{{ article.date }}</i>
          </div>
        </div>
      </li>
    </ul>
    <div class="pagination"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import mockBanner from '@/assets/img/mock-banner.png'

export default defineComponent({
  props: {

  },
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
    return {
      articles
    }
  },
})
</script>

<style lang="less" scoped>
  .card-list{
    ul.list-page{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 31%;
        margin-right: 3.48%;
        border: 1px solid #F2F2F4;
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 32px;
        .card-item{
          .card-img-banner{
            width: 100%;
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
          .card-information{
            padding: 24px;
            h4{
              font-size: 20px;
              font-weight: bold;
              color: #050B37;
              line-height: 28px;
              margin-bottom: 16px;
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
      li:nth-child(3n + 3){
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .card-list{
      ul.list-page{
        li{
          width: 48%;
          margin-right: 3.6%;
        }
        li:nth-child(2n + 2){
          margin-right: 0;
        }
        li:nth-child(3n + 3){
          margin-right: auto;
        }
      }
    }
  }

  @media screen and (max-width: 750px) {
    .card-list{
      ul.list-page{
        display: block;
        li{
          width: 100%;
          margin-right: 0;
          .card-item{
            .card-information{
              h4{
                font-size: 16px;
              }
            }
          }
        }
        li:nth-child(2n + 2){
          margin-right: auto;
        }
      }
    }
  }
</style>
