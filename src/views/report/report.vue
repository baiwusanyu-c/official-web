/*
* @report.vue
* @deprecated
* @author czh
* @update (czh 2021/12/20)
*/
<template>
    <div class="report-detail-container">
        <div>
            <be-button class="" @click="downloadReport">{{$t('lang.report.cet.downloadReport')}}</be-button>
            <be-button class="" @click="downloadCET">{{$t('lang.report.cet.downloadCET')}}</be-button>
        </div>
        <div class="report-body" ref="CET" :class="$root.language == 'en_US' ? 'CET-area-en' : 'CET-area-ch'">
            <div class="CET-header">
                <img class="logo" src="../../../assets/image/logo.png"/>
                <div class="name">{{ CETInfo.projectName }}</div>
                <div class="desc">{{ $t("lang.report.cet.resultTitle") }}:</div>
                <img v-if="$root.language == 'en_US'" class="result" src="../../../assets/image/pass_en.png"/>
                <img v-else class="result" src="../../../assets/image/pass.png"/>
            </div>
            <div class="CET-content">
                <div class="content-item"><span class="label" :class="$root.language == 'en_US' ? 'en' : ''">{{
                        $t("lang.report.cet.reportNum")
                    }}：</span>
                    <span class="num">{{ CETInfo.num }}</span>
                </div>
                <div class="content-item">
                    <span class="label" :class="$root.language == 'en_US' ? 'en' : ''">{{ $t("lang.report.cet.addr") }}：</span>
                    <span>{{ CETInfo.addr }}</span>
                </div>
                <div class="content-item">
                    <span class="label" :class="$root.language == 'en_US' ? 'en' : ''">{{
                            $t("lang.report.cet.linkAddr")
                        }}：</span>
                    <span>{{ CETInfo.link }}</span>
                </div>
                <div class="content-item">
                    <span class="label" :class="$root.language == 'en_US' ? 'en' : ''" >{{ $t("lang.report.cet.items") }}：</span >
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
                <img class="code" src="../../../assets/image/code.png"/>
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
import {downLoadZip} from "../../utils/zipdownload.js";
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
            const safeAuditItem = (locale.value === 'en_US' && CETInfoSession.value.safeAuditItemEn) ? CETInfoSession.value.safeAuditItemEn.split(",") : CETInfoSession.value.safeAuditItem.split(",")
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
            html2canvas(curInst?.refs.CET).then(function (canvas) {
                if (navigator.msSaveBlob) {
                    // IE10+
                    let blob = canvas.msToBlob();
                    return navigator.msSaveBlob(blob, CETInfo.value.num + ".jpg");
                } else {
                    let imgUrl = canvas
                        .toDataURL("image/png")
                        .replace("image/png", "image/octet-stream"); // 获取生成的图片的url
                    let eleLink = document.createElement("a");
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
    background: url(../../assets/img/cet.png) no-repeat center;
    padding: 336px 150px 290px;
    box-sizing: border-box;
    font-family: Microsoft YaHei sans-serif;
    position: relative;
    margin-bottom: 80px;
}
</style>