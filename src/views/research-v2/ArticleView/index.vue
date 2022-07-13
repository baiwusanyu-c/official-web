<template>
  <div class="article-view">
    <div class="safe-area">
      <div class="article-area">
        <div class="top-action">
          <p>On June 24, 2022</p>
          <n-button>
            <template #icon>
              <be-icon :size="20" icon="iconLink" />
            </template>
            Share
          </n-button>
        </div>
        <div class="article-render-area" v-html="content" style="height: 900px"></div>
      </div>
      <div class="article-recommend">
        <h4>Related Project</h4>
        <div class="score-area">
          <p class="ve-chain-logo"><img src="@/assets/img/ve-chain-logo.png" /></p>
          <div class="score-progress">
            <ScoreGaugeChart style="width: 100%; height: 300px" />
          </div>
          <n-button type="primary">Learn More</n-button>
        </div>
        <div class="guess-you-like">
          <div class="title-row">
            <h5>Guess you like</h5>
            <div class="learn-more-right">
              Learn More
              <n-icon size="10">
                <ChevronForward />
              </n-icon>
            </div>
          </div>
          <ul class="list">
            <li>
              <img src="@/assets/img/mock-resource-banner.png" />
              <div class="list-item-right">
                <h5>How to Add Text and Fonts in Photoshop</h5>
                <p>13th August, 2019</p>
              </div>
            </li>
            <li>
              <img src="@/assets/img/mock-resource-banner.png" />
              <div class="list-item-right">
                <h5>How to Add Text and Fonts in Photoshop</h5>
                <p>13th August, 2019</p>
              </div>
            </li>
            <li>
              <img src="@/assets/img/mock-resource-banner.png" />
              <div class="list-item-right">
                <h5>How to Add Text and Fonts in Photoshop</h5>
                <p>13th August, 2019</p>
              </div>
            </li>
            <li>
              <img src="@/assets/img/mock-resource-banner.png" />
              <div class="list-item-right">
                <h5>How to Add Text and Fonts in Photoshop</h5>
                <p>13th August, 2019</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="join-us">
          <h4>Join the community to discuss.</h4>
          <ul>
            <li><be-icon icon="iconWhiteTelegram" color="#fff" /></li>
            <li><be-icon icon="iconWhiteDiscord" color="#fff" /></li>
          </ul>
          <img src="@/assets/img/illustration-join.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NButton, NIcon, NProgress } from 'naive-ui'
import { ChevronForward } from '@vicons/ionicons5'
import ScoreGaugeChart from './ScoreGaugeChart/index.vue'

export default defineComponent({
  components: { NButton, NIcon, NProgress, ScoreGaugeChart, ChevronForward },
  setup() {
    const content = ''
    return {
      content
    }
  },
})
</script>


<style lang="less" scoped>
  .article-view{
    background: #fff;
    padding-bottom: 64px;
    .safe-area{
      max-width: 1358px;
      padding: 0 64px;
      margin: 0 auto;
      display: flex;
      .article-area{
        flex: 1;
        padding-top: 48px;
        .top-action{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 26px;
        }
        .article-render-area{
          padding-bottom: 40px;
        }
      }
      .article-recommend{
        padding-top: 48px;
        width: 316px;
        padding-left: 32px;
        margin-left: 113px;
        border-left: 1px solid #ECF3F9;
        h4{
          font-size: 20px;
          font-family: HelveticaNeue-Bold, HelveticaNeue;
          font-weight: bold;
          color: #050B37;
          line-height: 28px;
          margin-bottom: 16px;
        }
        .score-area{
          height: 268px;
          margin-bottom: 13px;
          background: linear-gradient(135deg, #D6E7EE, #EFF6FA);
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 33px;
          .ve-chain-logo{
            width: 106px;
            margin-bottom: 24px;
            img{
              width: 100%
            }
          }
          .score-progress{
            width: 283px;
            margin-bottom: 22px;
            margin-top: -44px;
            height: 150px
          }
        }
        .guess-you-like{
          .title-row{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;
            h5{
              font-size: 20px;
              font-family: HelveticaNeue-Bold, HelveticaNeue;
              font-weight: bold;
              color: #050B37;
              line-height: 28px;
            }
            .learn-more-right{
              font-size: 13px;
              font-family: HelveticaNeue-Medium, HelveticaNeue;
              font-weight: 500;
              color: #18304E;
              display: flex;
              align-items: center;
            }
          }
          ul.list{
            li{
              display: flex;
              align-items: center;
              margin-bottom: 16px;
              img{
                display: block;
                width: 80px;
                height: 80px;
                margin-right: 16px;
              }
              .list-item-right{
                flex: 1;
                h5{
                  font-size: 14px;
                  font-weight: bold;
                  color: #050B37;
                  line-height: 20px;
                  margin-bottom: 8px;
                }
                p{
                  font-size: 12px;
                  font-weight: 400;
                  color: #9B9DAF;
                  line-height: 16px;
                }
              }
            }
          }
        }

        .join-us{
          padding: 18px 32px;
          background: linear-gradient(90deg, #D6E7EE, #EFF6FA);
          border-radius: 6px;
          position: relative;
          h4{
            font-size: 20px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #050B37;
            line-height: 24px;
            margin-bottom: 24px;
          }
          ul{
            display: flex;
            li{
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              background: #050B37;
              border-radius: 4px;
              margin-right: 24px;
              cursor: pointer;
            }
          }
          img{
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
    .article-view{
      .safe-area{
        display: block;
        .article-recommend{
          width: 100%;
          padding-left: 0;
          margin-left: 0;
          border-left: none;
        }
      }
    }
  }

  @media screen and (max-width: 750px) {
    .article-view{
      .safe-area{
        padding: 0 24px;
      }
    }
  }
</style>