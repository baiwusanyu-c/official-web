<template>
  <div class="article-view">
    <div class="safe-area">
      <div class="article-area">
        <div class="top-action">
          <p>{{ preToText(information.pubTime) }}</p>
          <n-button text-color="#050B37" ghost @click="handleShare">
            <template #icon>
              <be-icon :size="20" icon="iconLink" />
            </template>
            Share
          </n-button>
        </div>
        <div class="ql-snow">
          <h1 class="blog-title">{{ information.title }}</h1>

          <iframe
            v-if="information.type === 1 && information.url"
            class="iframe-content"
            :src="pdfUrl"
            frameborder="0"></iframe>
          <!-- <iframe
            v-if="information.type === 1 && information.url"
            class="iframe-content"
            src="1.pdf"
            frameborder="0"></iframe> -->
          <!-- <n-button
            
            color="#1CD2A9"
            text-color="#18304E"
            @click="look"
            >查看资源</n-button
          > -->
          <div v-else class="article-preview-area ql-editor" v-html="information.content"></div>
        </div>
      </div>
      <div class="article-recommend">
        <h4>Related Project</h4>
        <div v-if="score" class="score-area">
          <!-- <p class="ve-chain-logo"><img src="@/assets/img/ve-chain-logo.png" /></p> -->
          <p class="ve-chain-logo score-title">{{ name }}</p>
          <div class="score-progress">
            <ScoreGaugeChart :value="score" style="width: 100%; height: 300px" />
          </div>
          <n-button color="#1CD2A9" text-color="#18304E" style="font-weight: 500">
            <a href="http://eagleeye.beosin.com" target="_blank">Learn More</a>
          </n-button>
        </div>
        <div v-else class="no-score">
          <div class="no-score-content">
            <h4>Related Project Secure Score</h4>
            <n-button color="#1CD2A9" text-color="#18304E" style="font-weight: 500"
              ><a href="http://eagleeye.beosin.com" target="_blank">Learn More</a></n-button
            >
          </div>
        </div>
        <div class="guess-you-like">
          <div class="title-row">
            <h5>Guess you like</h5>
            <div class="learn-more-right" @click="goMoreList(information.type)">
              Learn More
              <n-icon size="10">
                <ChevronForward />
              </n-icon>
            </div>
          </div>
          <ul class="list">
            <li v-for="item in likeList" :key="item.id" @click="goPriview(item)">
              <div class="list-image"><img :src="item.coverImg" /></div>
              <div class="list-item-right">
                <h5 class="line-clamp line-clamp-2">{{ item.title }}</h5>
                <p>{{ preToText(item.pubTime) }}</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="join-us">
          <h4>Join the community to discuss.</h4>
          <ul>
            <li>
              <a href="http://t.me/beosin" target="_blank">
                <be-icon icon="iconWhiteTelegram" color="#fff" />
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/B4QJxhStV4" target="_blank">
                <be-icon icon="iconWhiteDiscord" color="#fff" />
              </a>
            </li>
          </ul>
          <img src="@/assets/img/illustration-join.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { NButton, NIcon } from 'naive-ui'
  import { ChevronForward } from '@vicons/ionicons5'
  import ScoreGaugeChart from './ScoreGaugeChart/index.vue'
  import { hermitGetArticle, guessYouLikeList, getProjectDetail } from '@/api/research'
  import composition from '@/utils/mixin/common-func'
  import copy from '@/utils/copy'
  import { openUrl, preToText, combineLink } from '../util'
  import { previewFile } from '@/utils/download-file'
  import './cover-quill-text-style.css'
  import '../common.less'

  const { message } = composition()

  export default defineComponent({
    name: 'ArticleView',
    components: { NButton, NIcon, ScoreGaugeChart, ChevronForward },
    setup() {
      const route = useRoute()
      const information = ref<any>({})
      const likeList = ref([])
      const score = ref<any>(0)
      const name = ref('')
      onMounted(() => {
        hermitGetArticle({ id: route.query.id }).then(res => {
          information.value = res.data
          getPdfUrl(res.data.url)
          guessYouLikeList({ id: route.query.id, type: res.data.type }).then(res => {
            likeList.value = res.data
          })
          const relationProjectId = res.data.relationProjectId
          relationProjectId &&
            getProjectDetail(relationProjectId).then(res => {
              score.value = res.data.score
              name.value = res.data.name
            })
        })
      })

      const handleShare = () => {
        const link = window.location.href
        copy(link, () => {
          message('success', 'Copied to pasteboard', 'hermit-msg')
        })
      }

      const goPriview = (item: any) => {
        if (item.type === 1 && item.url) {
          window.open(item.url)
        } else {
          const host = '/#/index/article-preview?id=' + item.id
          openUrl(host, { target: '_blank' })
        }
      }
      const goMoreList = (type: number) => {
        const host = '/#/index/research?type=' + type
        openUrl(host, { target: '_blank' })
      }
      const look = () => {
        previewFile(combineLink(information.value.url))
      }
      const pdfUrl = ref('')
      const getPdfUrl = url => {
        pdfUrl.value = combineLink(url)
      }

      return {
        information,
        name,
        score,
        handleShare,
        likeList,
        goPriview,
        goMoreList,
        preToText,
        look,
        pdfUrl,
      }
    },
  })
</script>

<style lang="less" scoped>
  .article-view {
    background: #fff;
    padding-bottom: 64px;
    .iframe-content {
      width: 100%;
      height: 700px;
    }

    .safe-area {
      max-width: 1358px;
      padding: 0 64px;
      margin: 0 auto;
      display: flex;

      .article-area {
        flex: 1;
        padding-top: 48px;

        .top-action {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 26px;
          p {
            font-size: 14px;
            font-family: Roboto-Regular, Roboto;
            font-weight: 400;
            color: #050b37;
            line-height: 16px;
          }
        }

        .article-preview-area {
          padding-bottom: 40px;
          padding: 0;
        }

        .blog-title {
          font-size: 32px;
          font-weight: bold;
          color: #050b37;
          line-height: 40px;
          margin-bottom: 30px;
        }
      }

      .article-recommend {
        padding-top: 48px;
        width: 316px;
        padding-left: 32px;
        margin-left: 113px;
        border-left: 1px solid #ecf3f9;

        h4 {
          font-size: 20px;
          font-family: HelveticaNeue-Bold, HelveticaNeue;
          font-weight: bold;
          color: #050b37;
          line-height: 28px;
          margin-bottom: 16px;
        }

        .score-area {
          margin-bottom: 24px;
          background: linear-gradient(135deg, #e7f2f7, #ffffff);
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 33px;

          .ve-chain-logo {
            width: 106px;
            margin-bottom: 24px;

            img {
              width: 100%;
            }
          }

          .score-title {
            width: auto !important;
            text-align: center;
          }

          .score-progress {
            width: 283px;
            margin-bottom: 22px;
            margin-top: -44px;
            height: 160px;
            overflow: hidden;
          }
        }

        .no-score {
          background: linear-gradient(135deg, #d6e7ee, #eff6fa);
          height: 200px;
          margin-bottom: 24px;
          position: relative;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          align-items: center;

          &::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: url('@/assets/img/illustration-ad.png') no-repeat;
            background-size: contain;
            background-position: right bottom;
            z-index: 0;
          }

          .no-score-content {
            position: absolute;
            left: 32px;
            top: 49px;

            h4 {
              font-size: 20px;
              font-weight: bold;
              color: #050b37;
              line-height: 28px;
              margin-bottom: 15px;
            }
          }
        }

        .guess-you-like {
          margin-bottom: 34px;
          .title-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;

            h5 {
              font-size: 20px;
              font-family: HelveticaNeue-Bold, HelveticaNeue;
              font-weight: bold;
              color: #050b37;
              line-height: 28px;
            }

            .learn-more-right {
              font-size: 13px;
              font-family: HelveticaNeue-Medium, HelveticaNeue;
              font-weight: 500;
              color: #18304e;
              display: flex;
              align-items: center;
              cursor: pointer;
            }
          }

          ul.list {
            li {
              display: flex;
              align-items: center;
              margin-bottom: 16px;
              cursor: pointer;
              .list-image {
                display: block;
                width: 80px;
                height: 80px;
                margin-right: 16px;
                position: relative;
                overflow: hidden;
                border-radius: 4px;
                img {
                  //width: auto;
                  max-height: 80px;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translateX(-50%) translateY(-50%);
                  max-width: initial;
                  height: initial;
                }
              }

              .list-item-right {
                flex: 1;

                h5 {
                  font-size: 14px;
                  font-weight: bold;
                  color: #050b37;
                  line-height: 20px;
                  margin-bottom: 8px;
                }

                p {
                  font-size: 12px;
                  font-weight: 400;
                  color: #9b9daf;
                  line-height: 16px;
                }
              }
            }
          }
        }

        .join-us {
          padding: 18px 32px;
          background: linear-gradient(90deg, #d6e7ee, #eff6fa);
          border-radius: 6px;
          position: relative;

          h4 {
            font-size: 20px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #050b37;
            line-height: 24px;
            margin-bottom: 24px;
          }

          ul {
            display: flex;

            li {
              width: 32px;
              height: 32px;
              background: #050b37;
              border-radius: 4px;
              margin-right: 24px;
              cursor: pointer;

              a {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;
              }
            }
          }

          img {
            height: 80px;
            position: absolute;
            right: 20px;
            bottom: 0;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .article-view {
      .safe-area {
        display: block;

        .article-recommend {
          width: 100%;
          padding-left: 0;
          margin-left: 0;
          border-left: none;
        }
      }
    }
  }

  @media screen and (max-width: 750px) {
    .article-view {
      .safe-area {
        padding: 0 24px;
      }
    }
  }
</style>
