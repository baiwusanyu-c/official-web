<template>
    <div>
        <div class="page-header">
            <!--{{$t('lang.HFooterBigger.contact.locationRoad')}}-->
            <div class="title-big">{{ $t('lang.userCenter.titleBig') }}</div>
            <div class="title-small">{{ $t('lang.userCenter.titleSmall') }}</div>
        </div>
        <div class="search">
            <div class="search-up">
                <span>{{ $t('lang.userCenter.searchTitle') }}</span>
            </div>
            <div class="search-down">
                <div class="search-class">
                    <n-input class="search-input" v-model:value='searchParams'
                             :placeholder="$t('lang.userCenter.searchInput')"/>
                    <n-button class="search-btn" @click="searchData">
                        <n-icon size="20px">
                            <search/>
                        </n-icon>
                    </n-button>
                    <n-button class="search-btn ml-2" @click="getList('reset')">
                        <n-icon size="20px">
                            <Refresh/>
                        </n-icon>
                    </n-button>
                </div>
                <div>
                    <n-button class="download-btn" @click="downloadAll">
                        <span>{{ $t('lang.userCenter.download') }}</span></n-button>
                </div>
            </div>
        </div>
        <div class="page-table">
            <div class="table-body">
                <n-data-table :theme-overrides="builtinThemeOverrides" :columns="columns" :data="auditReport"/>
                <div class="flex justify-center mt-6">
                    <n-pagination
                        :onUpdatePage="updatePage"
                        v-model:page="paginationReactive.page" :item-count="paginationReactive.total"
                        :page-size="paginationReactive.pageSize"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {useI18n} from "vue-i18n";
import {Search, DownloadOutline, Refresh} from '@vicons/ionicons5'
import {h, defineComponent, getCurrentInstance, ref, onMounted, reactive} from "vue";
import {NInput, NButton, NIcon, NDataTable, DataTableProps, NPagination} from "naive-ui";
import {
    IReportList,
    IReportListRes, ISearchReport, searchReport,
    verifyCode
} from "../../api/personal";
import {BeMessage} from '../../../public/be-ui/be-ui.es.js'
import {downLoadZip} from "../../utils/zipdownload.js";
import {formatDate, getStore} from "../../utils/common";

type BuiltinThemeOverrides = NonNullable<DataTableProps['builtinThemeOverrides']>
const builtinThemeOverrides: BuiltinThemeOverrides = {
    thColor: '#02fbbb',
    borderRadius: '5px',
}
export default defineComponent({
    name: "user-center",
    components: {
        NPagination,
        Refresh,
        NInput,
        NIcon,
        NButton,
        NDataTable,
        Search,
        DownloadOutline,
    },
    setup() {
        const message = BeMessage.service
        const {t} = useI18n()
        // 創建表格配置
        const createColumns = (download: Function) => {
            return [
                {
                    title: t('lang.userCenter.tableAudit'),
                    key: 'reportNum',
                    align: 'center'
                },
                {
                    title: t('lang.userCenter.tableName'),
                    key: 'reportName'
                },
                {
                    title: t('lang.userCenter.tableType'),
                    key: 'reportType'
                },
                {
                    title: t('lang.userCenter.tableTime'),
                    key: 'updateTime'
                },
                {
                    title: t('lang.userCenter.tableSetting'),
                    key: 'openFlag'
                },
                /* {
                     title: t('lang.userCenter.tableCertificate'),
                     key: ''
                 },*/
                {
                    title: t('lang.userCenter.tableAction'),
                    key: 'actions',
                    render(row: any) {
                        return h(
                            NIcon,
                            {
                                style: {cursor: 'pointer'},
                                onClick: download.bind(this, row),
                                size: '20px'
                            },
                            [h(
                                DownloadOutline,
                            )]
                        )
                    }
                }
            ]
        }
        // 分頁參數
        const paginationReactive = reactive({
            page: 1,
            pageSize: 5,
            total: 0
        })
        // 更新分頁
        const updatePage = (page: number): void => {
            paginationReactive.page = page
            getList()
        }
        // 搜索參數
        const searchParams = ref<string>('')
        // 搜索方法
        const searchData = (): void => {
            if (!searchParams.value) {
                message({
                    titles: t('lang.userCenter.searchInput'),
                    msgType: 'warning',
                    duration: 1500,
                    offsetTop: 80,
                    close: true,
                })
                return
            }
            const params: ISearchReport = {
                num: Number(searchParams.value)
            }
            searchReport(params).then((res: any) => {
                if (res.code === 200 && res.data) {
                    message({
                        titles: t('lang.opSuccess'),
                        msgType: 'success',
                        duration: 1500,
                        offsetTop: 80,
                        close: true,
                    })
                    auditReport.value = [res.data]
                    paginationReactive.total = res.total
                } else {
                    auditReport.value = []
                    message({
                        titles: t('lang.opFailed'),
                        msgType: 'warning',
                        duration: 1500,
                        offsetTop: 80,
                        close: true,
                    })
                }
            }).catch(err => {
                message({
                    titles: t('lang.opFailed'),
                    msgType: 'warning',
                    duration: 1500,
                    offsetTop: 80,
                    close: true,
                })
                console.error(err)
            })
        }
        // 下載單個
        const downloadSingle = async (row: any) => {
            await downLoadZip(`/website/common/download/single?fileUuid=${row.uuid}&reportNum=${row.reportNum}`, row.reportNum + '.pdf');
        }
        // 下載全部
        const downloadAll = async () => {
            let userInfo: string = getStore('userInfo') as string
            let fileName = JSON.parse(userInfo).userName + '_' + formatDate(new Date(), 'YmdHis') + '.zip';
            await downLoadZip(`/website/common/download/batch?belongUser=true`, fileName);

        }
        /**
         * 參數重置
         */
        const reset = (): void => {
            paginationReactive.page = 1
            paginationReactive.pageSize = 5
        }
        // 表格數據
        const auditReport = ref<Array<IReportListRes>>([])
        // 獲取列表數據
        const getList = (type?: string): void => {
            auditReport.value = []
            if (type === 'reset') {
                reset()
            }
            const params: IReportList = {
                pageSize: paginationReactive.pageSize,
                pageNum: paginationReactive.page,
            }
            verifyCode(params).then((res: any) => {
                if (res.code === 200) {
                    auditReport.value = res.rows
                    paginationReactive.total = res.total
                }
            }).catch(err => {
                message({
                    titles: t('lang.sendFailed'),
                    msgType: 'warning',
                    duration: 1500,
                    offsetTop: 80,
                    close: true,
                })
                console.error(err)
            })
        }
        onMounted(() => {
            getList()
        })
        return {
            getList,
            downloadAll,
            searchData,
            searchParams,
            builtinThemeOverrides,
            auditReport,
            updatePage,
            columns: createColumns(downloadSingle),
            paginationReactive
        }
    },

})
</script>

<style scoped>
.page-header {
    margin-top: -80px;
    height: 400px;
    background: url("../../assets/img/user-center.png");
    display: flex;
    flex-direction: column;
}

.title-big {
    margin-top: 223px;
    margin-left: 361px;
    margin-bottom: 42px;
    width: 480px;
    height: 49px;
    font-size: 60px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 66px;
}

.title-small {
    margin-left: 361px;
    width: 500px;
    height: 21px;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 66px;
}

.search {
    height: 400px;
    background: #EFF2F7;

}

.search-up {
    margin: auto;
    padding-top: 148px;
    width: 1200px;
    height: 37px;
    font-size: 36px;
    font-weight: bold;
    color: #121214;
    line-height: 42px;
}

.search-class {
    width: 547px;
    display: flex;
    justify-content: space-between;
}

.search-input {
    width: 465px;
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 20px;
}

.search-btn {
    width: 66px;
    height: 60px;
    background: linear-gradient(144deg, #00FFC4, #02A1F9);
    box-shadow: 0px 5px 8px 0px rgba(132, 141, 134, 0.55);
    border-radius: 5px;
}

.download-btn {
    width: 160px;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid #00FFC4;
    border-radius: 5px;
}

.download-btn span {
    width: 120px;
    height: 16px;
    font-size: 20px;
    font-weight: 400;
    color: #000000;
}

.search-down {
    margin: 80px auto;
    width: 1200px;
    height: 60px;
    display: flex;
    justify-content: space-between;
}

.page-table {
    margin-top: 0px;
    height: 548px;
    width: 100%;
}

.table-body {
    margin: auto;
    padding-top: 36px;
    width: 1200px;
    height: 360px;
}
</style>