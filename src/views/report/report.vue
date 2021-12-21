/*
* @report.vue
* @deprecated
* @author czh
* @update (czh 2021/12/20)
*/
<template>
    <div class="report-detail-container p-6">
        <div class="flex  justify-end">
            <be-button :round="3" bordered class="mr-6 downloadReport" @click="downloadReport" size="large">{{$t('lang.report.cet.downloadReport')}}</be-button>
            <be-button :round="3" type='primary' bordered class="downloadCET" @click="downloadCET" size="large">{{$t('lang.report.cet.downloadCET')}}</be-button>
        </div>
        <div class="report-body" ref="CET" :class="locale === 'en_US' ? 'CET-area-en' : 'CET-area-ch'">
            <div class="CET-header">
                <img class="logo" src="../../assets/img/logo-black.png"/>
                <div class="name">{{ CETInfo.projectName }}</div>
                <div class="desc">{{ $t("lang.report.cet.resultTitle") }}:</div>
                <img v-if="locale === 'en_US'" class="result" src="../../assets/img/pass_en.png"/>
                <img v-else class="result" src="../../assets/img/pass.png"/>
            </div>
            <div class="CET-content">
                <div class="content-item"><span class="label" :class="locale === 'en_US' ? 'en' : ''">{{
                        $t("lang.report.cet.reportNum")
                    }}：</span>
                    <span class="num">{{ CETInfo.num }}</span>
                </div>
                <div class="content-item">
                    <span class="label" :class="locale === 'en_US' ? 'en' : ''">{{ $t("lang.report.cet.addr") }}：</span>
                    <span>{{ CETInfo.addr }}</span>
                </div>
                <div class="content-item">
                    <span class="label" :class="locale === 'en_US' ? 'en' : ''">{{
                            $t("lang.report.cet.linkAddr")
                        }}：</span>
                    <span>{{ CETInfo.link }}</span>
                </div>
                <div class="content-item">
                    <span class="label" :class="locale === 'en_US' ? 'en' : ''" >{{ $t("lang.report.cet.items") }}：</span >
                    <div class="audit-item">
                        <ul class="item-list">
                            <li v-for="(item, index) in CETInfo.items" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="CET-other" :style="{'bottom': '700px' }">
<!--                <img class="code" src="../../../assets/image/code.png"/>-->
                <div class="other-company">
                    <div>{{ $t("lang.report.cet.company") }}</div>
                    <div>{{ CETInfo.time }}</div>
                </div>
            </div>
            <div class="CET-footer" :style="{'bottom': '320px'}">
                <div class="footer-title">{{ $t("lang.report.cet.agreementName") }}</div>
                <div class="footer-content">
                    {{ $t("lang.report.cet.agreement") }}
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import {defineComponent, getCurrentInstance, onMounted, ref} from "vue";
import {formatDate, getSession} from "../../utils/common";
import {useI18n} from "vue-i18n";
import {downLoadZip} from "../../utils/zipdownload";
import html2canvas from "html2canvas";
interface ICETInfo {
    projectName?:string
    num?:string
    addr?:string
    link?:string
    items?:string
    time?:string
    fileId?:string
    openFlag?:string
}
export default defineComponent({
    name: "report",
    setup(){
        const CETInfoSession = ref(JSON.parse(getSession('CETInfo') as string))
        const CETInfo = ref<ICETInfo>({})
        const {locale} = useI18n()
        const curInst = getCurrentInstance()
        const initData = ()=>{
            const safeAuditItem = (locale.value === 'en_US' && CETInfoSession.value.safeAuditItemEn)
                ? CETInfoSession.value.safeAuditItemEn.split(",") : CETInfoSession.value.safeAuditItem.split(",")
            CETInfo.value = {
                projectName: CETInfoSession.value.projectName,
                num: CETInfoSession.value.reportNum,
                addr: CETInfoSession.value.contractAddress,
                link: CETInfoSession.value.linkAddress,
                items: safeAuditItem,
                time: formatDate(
                    new Date(CETInfoSession.value.createTime.replace(/-/g, "/")),
                    "Y/m/d"
                ),
                fileId: CETInfoSession.value.uuid,
                openFlag: CETInfoSession.value.openFlag,
            };
        }
        const downloadReport = async ()=> {
            await downLoadZip(
                `/website/common/download/single?fileUuid=${CETInfo.value.fileId}&reportNum=${CETInfo.value.num}`,
                CETInfo.value.num + ".pdf"
            );
        }
        const downloadCET = ():void => {
            html2canvas(curInst?.refs.CET as HTMLElement).then(function (canvas) {
                if (navigator.msSaveBlob) {
                    // IE10+
                    let blob = canvas.msToBlob();
                    return navigator.msSaveBlob(blob, CETInfo.value.num + ".jpg");
                } else {
                    let imgUrl:string= canvas
                        .toDataURL("image/png")
                        .replace("image/png", "image/octet-stream"); // 获取生成的图片的url
                    let eleLink:HTMLAnchorElement = document.createElement("a");
                    eleLink.href = imgUrl; // 转换后的图片地址
                    eleLink.download = CETInfo.value.num + ".jpg";
                    document.body.appendChild(eleLink);
                    // 触发点击
                    eleLink.click();
                    // 然后移除
                    document.body.removeChild(eleLink);
                }
            });
        }
        onMounted(()=>{
            initData()
        })
        return{
            CETInfo,
            locale,
            downloadReport,
            downloadCET
        }
    }
})
</script>

<style scoped>
.report-detail-container {

}

.report-detail-container .report-body {
    width: 1382px;
    height: 1958px;
    margin: 0 auto;
    background: url(../../assets/img/cet.jpg) no-repeat center;
    padding: 336px 150px 290px;
    box-sizing: border-box;
    font-family: SourceHanSansNormal sans-serif;
    position: relative;
    margin-bottom: 80px;
}
.report-detail-container .report-body .CET-header {
    text-align: center;
    position: relative;
    font-size: 28px;
    font-weight: bold;
    line-height: 36px;
}
.report-detail-container .report-body .CET-header .logo {
    width: 200px;
    height: 70px;
    margin: 0 auto;
}
.report-detail-container .report-body .CET-header  .name {
    color: #2563bc;
    word-break: break-all;
}
.report-detail-container .report-body .CET-header  .desc {
    color: #43425b;
    margin-top: 10px;
}
.report-detail-container .report-body .CET-header  .result {
    position: absolute;
    right: 130px;
    bottom: -100px;
}
.report-detail-container .report-body .CET-content {
    color: #5a5a5a;
    margin-top: 50px;
}
.report-detail-container .report-body .CET-content .content-item {
    font-size: 16px;
    margin-bottom: 40px;
    display: flex;
    line-height: 30px;
}
.report-detail-container .report-body .CET-content .content-item .label {
    font-size: 16px;
    color: #43425b;
    font-weight: bold;
    width: 180px;
    min-width: 180px;
    max-width: 180px;
    text-align: right;
    display: block;
}
.report-detail-container .report-body .CET-content .content-item .label.en {
     width: 300px;
     min-width: 300px;
     max-width: 300px;
 }

.report-detail-container .report-body .CET-content .content-item  span {
    word-break: break-all;
}
.report-detail-container .report-body .CET-content .content-item  .num {
    color: #2563bc;
}
.report-detail-container .report-body .CET-content .content-item  .audit-item {
    width: calc(100% - 200px);
}
.report-detail-container .report-body .CET-content .content-item .item-list {
    display: flex;
    flex-wrap: wrap;
}
.report-detail-container .report-body .CET-content .content-item .item-list li {
    margin-right: 10px;
    padding: 2px 15px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    margin-bottom: 10px;
}
.report-detail-container .report-body .CET-other {
    text-align: right;
    line-height: 36px;
    font-size: 20px;
    width: calc(100% - 300px);
    position: absolute;
    bottom: 510px;
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
    width: calc(100% - 300px);
    position: absolute;
    bottom: 290px;}
.report-detail-container .report-body .CET-footer .footer-title {
    font-size: 24px;
    color: #808080;
    margin-bottom: 15px;
    font-weight: bold;
}
.report-detail-container .report-body .CET-footer .footer-content {
    font-size: 16px;
    color: #b5b5b5;
    line-height: 22px;
}
.report-detail-container .report-body .CET-area-ch .CET-content .content-item .label{
    text-align-last: justify;
    -moz-text-align-last: justify;
    -webkit-text-align-last: justify;
    text-justify: inter-ideograph; /*ie中必须有这个*/
    text-align-last: justify;
}
.downloadCET{
    background: #2563BC;
    color: #FFF;
}
.downloadReport{
    border: 1px solid #2563BC;
    color: #2563BC;
}
</style>