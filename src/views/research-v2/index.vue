<template>
  <div class="research-v2-page">
    <div class="board-top">
      <div class="safe-area">
        <div class="left">
          <div class="title">Beosin’s Analysis of the Wiener Doge Flash Loan Attack</div>
          <div class="description">
            Our team have analyzed the latest exploits and vulnerabilities related to blockchain security. Technical details including hacking techniques, flow of funds, mitigation recommendations can be found in our research.
          </div>
          <div class="action">
            <custom-button>Learn More</custom-button>
          </div>
        </div>
        <div class="right">
          <img src="@/assets/img/research-top-banner.png" />
        </div>
      </div>
    </div>

    <div class="board-main">
      <n-tabs
        class="card-tabs"
        default-value="All"
        animated
      >
        <n-tab-pane name="All" tab="All">
           <All />
        </n-tab-pane>
        <n-tab-pane name="Incident Analysis" tab="Incident Analysis">
           <IncidentAnalysis />
        </n-tab-pane>
        <n-tab-pane name="Security Report" tab="Security Report">
           tt
        </n-tab-pane>
        <n-tab-pane name="Company News" tab="Company News">
           tt
        </n-tab-pane>
        <n-tab-pane name="Popular Science Articles" tab="Popular Science Articles">
           tt
        </n-tab-pane>
        <n-tab-pane name="Hot News" tab="Hot News">
           tt
        </n-tab-pane>
        <n-tab-pane name="Company Resources" tab="Company Resources">
           <CompanyResources />
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script>
import { NTabs, NTabPane } from 'naive-ui'
import CustomButton from '@/components/custom-button/index.vue'
import All from './All/index.vue'
import IncidentAnalysis from './IncidentAnalysis/index.vue'
import CompanyResources from './CompanyResources/index.vue'
import './media-screen-style/research.less'
export default {
  components:  {
    NTabs,
    NTabPane,
    CustomButton,
    All,
    IncidentAnalysis,
    CompanyResources
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
  
  .research-v2-page{
    background: #fff;
    .board-top{
      height: 566px;
      background-image: url('@/assets/img/blog-banner.jpg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      color: #ffffff;
      display: flex;
      .safe-area{
        max-width: 1358px;
        padding: 0 64px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        .left{
          margin-right: 80px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .title{
            font-size: 40px;
            font-weight: bold;
            color: #FFFFFF;
            margin-bottom: 24px;
          }
          .description{
            font-size: 16px;
            color: #FFFFFF;
            margin-bottom: 24px;
          }
          .action{
            margin-bottom: 64px;
          }
        }
        .right{
          width: 48%;
          img{
            width: 100%;
          }
        }
      }
    }

    .board-main{
      max-width: 1358px;
      padding: 64px;
      margin: 0 auto;
      /deep/ .n-tabs{
        .n-tabs-nav{
          border-bottom: 1px solid #F2F2F4;
          margin-bottom: 25px;
        }
        .n-tabs-tab .n-tabs-tab__label{
          font-size: 14px;
        }
      }
    }
  }
</style>