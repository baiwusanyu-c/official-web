/* * @report.vue * @deprecated * @author czh * @update (czh 2021/12/20) */
<template>
  <div class="report-detail-container p-6">
    <div class="flex justify-end">
      <be-button
        :round="3"
        bordered
        class="mr-6 downloadReport"
        size="large"
        @click="previewReport"
      >
        <span class="font-format">{{
          $t('lang.report.cet.viewReport')
        }}</span></be-button
      >
      <be-button
        :round="3"
        type="primary"
        bordered
        class="downloadCET"
        size="large"
        @click="downloadCET"
      >
        <span class="font-format">
          {{ $t('lang.report.cet.downloadCET') }}</span
        >
      </be-button>
    </div>
    <div
      ref="CET"
      class="report-body"
      :class="locale === 'en_US' ? 'CET-area-en' : 'CET-area-ch'"
    >
      <div class="CET-header">
        <img alt="" class="logo" src="../../assets/img/logo-black.png" />
        <div class="name font-format">{{ CETInfo.projectName }}</div>
        <!--<div class="desc font-format">{{ $t("lang.report.cet.resultTitle") }}:</div>
                <img alt="" v-if="locale === 'en_US'" class="result" src="../../assets/img/pass_en.png"/>
                <img alt=""  v-else class="result" src="../../assets/img/pass.png"/>-->
      </div>
      <div class="CET-content">
        <div class="content-item">
          <span
            class="label font-format"
            :class="locale === 'en_US' ? 'en' : ''"
            >{{ $t('lang.report.cet.reportNum') }}：</span
          >
          <span class="num font-format">{{ CETInfo.num }}</span>
        </div>
        <div class="content-item">
          <span
            class="label font-format"
            :class="locale === 'en_US' ? 'en' : ''"
            >{{ $t('lang.report.cet.addr') }}：</span
          >
          <span class="font-format">{{ CETInfo.addr }}</span>
        </div>
        <div class="content-item">
          <span
            class="label font-format"
            :class="locale === 'en_US' ? 'en' : ''"
            >{{ $t('lang.report.cet.linkAddr') }}：</span
          >
          <span class="font-format">{{ CETInfo.link }}</span>
        </div>
        <div class="content-item">
          <span
            class="label font-format"
            :class="locale === 'en_US' ? 'en' : ''"
            >{{ $t('lang.report.cet.items') }}：</span
          >
          <div class="audit-item">
            <ul class="item-list">
              <li
                v-for="(item, index) in CETInfo.items"
                :key="index"
                class="font-format"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="CET-other" :style="{ bottom: '700px' }">
        <!--                <img class="code" src="../../../assets/image/code.png"/>-->
        <div class="other-company">
          <!--                    <div class="font-format">{{ $t("lang.report.cet.company") }}</div>-->
          <div class="font-format">{{ CETInfo.time }}</div>
        </div>
      </div>
      <div class="CET-footer" :style="{ bottom: '320px' }">
        <div class="footer-title font-format">
          {{ $t('lang.report.cet.agreementName') }}
        </div>
        <div class="footer-content font-format">
          {{ $t('lang.report.cet.agreement') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue'
import { formatDate, getSession } from '../../utils/common'
import { useI18n } from 'vue-i18n'
import { downLoadZip } from '../../utils/zipdownload'
import html2canvas from 'html2canvas'
import composition from '../../utils/mixin/common-func'
import config from '../../enums/config'
interface ICETInfo {
  projectName?: string
  num?: string
  addr?: string
  link?: string
  items?: string
  time?: string
  fileId?: string
  openFlag?: string
}
export default defineComponent({
  name: 'ReportPage',
  setup(props, ctx) {
    const CETInfoSession = ref(JSON.parse(getSession('CETInfo') as string))
    const CETInfo = ref<ICETInfo>({})
    const { locale } = useI18n()
    const curInst = getCurrentInstance()
    const initData = () => {
      const safeAuditItem =
        locale.value === 'en_US' && CETInfoSession.value.safeAuditItemEn
          ? CETInfoSession.value.safeAuditItemEn.split(',')
          : CETInfoSession.value.safeAuditItem.split(',')
      CETInfo.value = {
        projectName: CETInfoSession.value.projectName,
        num: CETInfoSession.value.reportNum,
        addr: CETInfoSession.value.contractAddress,
        link: CETInfoSession.value.linkAddress,
        items: safeAuditItem,
        time: formatDate(
          new Date(CETInfoSession.value.createTime.replace(/-/g, '/')),
          'Y/m/d'
        ),
        fileId: CETInfoSession.value.uuid,
        openFlag: CETInfoSession.value.openFlag,
      }
    }
    const downloadReport = async () => {
      const prevUrl =
        String(import.meta.env.VITE_PROJECT_ENV) === 'production'
          ? '/hermit/back'
          : ''
      await downLoadZip(
        `${prevUrl}/website/common/download/single?fileUuid=${CETInfo.value.fileId}&reportNum=${CETInfo.value.num}`,
        CETInfo.value.num + '.pdf'
      )
    }
    const { openWin } = composition()
    const previewReport = () => {
      const prevUrl =
        String(import.meta.env.VITE_PROJECT_ENV) === 'production'
          ? '/hermit/back'
          : ''
      let baseURL = config.baseURL
      openWin(
        `${baseURL}${prevUrl}/website/common/preview/single?fileUuid=${CETInfo.value.fileId}&reportNum=${CETInfo.value.num}`,
        `preview${CETInfo.value.num}`
      )
    }
    const downloadCET = (): void => {
      html2canvas(curInst?.refs.CET as HTMLElement).then(function (canvas) {
        if (navigator.msSaveBlob) {
          // IE10+
          let blob = canvas.msToBlob()
          return navigator.msSaveBlob(blob, CETInfo.value.num + '.jpg')
        } else {
          let imgUrl: string = canvas
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream') // 获取生成的图片的url
          let eleLink: HTMLAnchorElement = document.createElement('a')
          eleLink.href = imgUrl // 转换后的图片地址
          eleLink.download = CETInfo.value.num + '.jpg'
          document.body.appendChild(eleLink)
          // 触发点击
          eleLink.click()
          // 然后移除
          document.body.removeChild(eleLink)
        }
      })
    }
    onMounted(() => {
      initData()
    })
    return {
      CETInfo,
      locale,
      previewReport,
      downloadReport,
      downloadCET,
    }
  },
})
</script>

<style scoped>
.report-detail-container .report-body {
  position: relative;
  box-sizing: border-box;
  width: 1382px;
  height: 1958px;
  padding: 336px 150px 290px;
  margin: 0 auto;
  margin-bottom: 80px;
  font-family: SourceHanSansNormal, sans-serif;
  background: url(../../assets/img/cet.jpg) no-repeat center;
}

.report-detail-container .report-body .CET-header {
  position: relative;
  font-size: 28px;
  font-weight: bold;
  line-height: 36px;
  text-align: center;
}

.report-detail-container .report-body .CET-header .logo {
  width: 200px;
  height: 70px;
  margin: 0 auto;
}

.report-detail-container .report-body .CET-header .name {
  color: #2563bc;
  word-break: break-all;
}

.report-detail-container .report-body .CET-header .desc {
  margin-top: 10px;
  color: #43425b;
}

.report-detail-container .report-body .CET-header .result {
  position: absolute;
  right: 130px;
  bottom: -100px;
}

.report-detail-container .report-body .CET-content {
  margin-top: 50px;
  color: #5a5a5a;
}

.report-detail-container .report-body .CET-content .content-item {
  display: flex;
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 30px;
}

.report-detail-container .report-body .CET-content .content-item .label {
  display: block;
  width: 180px;
  min-width: 180px;
  max-width: 180px;
  font-size: 16px;
  font-weight: bold;
  color: #43425b;
  text-align: right;
}

.report-detail-container .report-body .CET-content .content-item .label.en {
  width: 300px;
  min-width: 300px;
  max-width: 300px;
}

.report-detail-container .report-body .CET-content .content-item span {
  word-break: break-all;
}

.report-detail-container .report-body .CET-content .content-item .num {
  color: #2563bc;
}

.report-detail-container .report-body .CET-content .content-item .audit-item {
  width: calc(100% - 200px);
}

.report-detail-container .report-body .CET-content .content-item .item-list {
  display: flex;
  flex-wrap: wrap;
}

.report-detail-container .report-body .CET-content .content-item .item-list li {
  padding: 2px 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.report-detail-container .report-body .CET-other {
  position: absolute;
  bottom: 510px;
  width: calc(100% - 300px);
  font-size: 20px;
  line-height: 36px;
  text-align: right;
}

.report-detail-container .report-body .CET-other .code {
  width: 110px;
  height: 110px;
}

.report-detail-container .report-body .CET-other .other-desc {
  width: 610px;
  margin: 10px auto 40px;
}

.report-detail-container .report-body .CET-other .other-desc a {
  color: #2563bc;
}

.report-detail-container .report-body .CET-other .other-company {
  float: none;
}

.report-detail-container .report-body .CET-footer {
  position: absolute;
  bottom: 290px;
  width: calc(100% - 300px);
}

.report-detail-container .report-body .CET-footer .footer-title {
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: bold;
  color: #808080;
}

.report-detail-container .report-body .CET-footer .footer-content {
  font-size: 16px;
  line-height: 22px;
  color: #b5b5b5;
}

.report-detail-container
.report-body
.CET-area-ch
.CET-content
.content-item
.label {
  -moz-text-align-last: justify;
  -webkit-text-align-last: justify;
  text-align-last: justify;
  text-justify: inter-ideograph; /* ie中必须有这个 */
}

.downloadCET {
  color: #fff;
  background: #2563bc;
}

.downloadReport {
  color: #2563bc;
  border: 1px solid #2563bc;
}
</style>
