<template>
    <div class='user-center'>
        <div class="page-header">
            <!--{{$t('lang.HFooterBigger.contact.locationRoad')}}-->
            <div class="title-big font-format">{{ $t('lang.userCenter.titleBig') }}</div>
            <div class="title-small font-format">{{ $t('lang.userCenter.titleSmall') }}</div>
        </div>
        <div class="search">
            <div class="search-up">
                <span class="font-format">{{ $t('lang.userCenter.searchTitle') }}</span>
            </div>
            <div class="search-down">
                <div class="search-class">
                    <n-input class="search-input font-format" v-model:value='searchParams'
                             :placeholder="$t('lang.userCenter.searchInput')"/>
                    <n-button class="search-btn" @click="searchData">
                        <n-icon size="20px">
                            <search/>
                        </n-icon>
                    </n-button>
                    <n-button class="search-btn ml-2" @click="searchParams = '';getList('reset')">
                        <n-icon size="20px">
                            <Refresh/>
                        </n-icon>
                    </n-button>
                </div>
                <div>
                    <n-button class="download-btn" @click="downloadAll">
                        <span class="font-format">{{ $t('lang.userCenter.download') }}</span></n-button>
                </div>
            </div>
        </div>
        <div class="page-table bg-white">
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
import {Search, DownloadOutline, Refresh, DocumentOutline} from '@vicons/ionicons5'
import {h, defineComponent, getCurrentInstance, ref, onMounted, reactive} from "vue";
import {NInput, NButton, NIcon, NDataTable, DataTableProps, NPagination} from "naive-ui";
import {
    IReportList,
    IReportListRes,
    verifyCode
} from "../../api/personal";
import {downLoadZip} from "../../utils/zipdownload";
import {formatDate, getStore, setSession} from "../../utils/common";
import composition from "../../utils/mixin/common-func";

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
    setup(props, ctx) {
        const {message} = composition(props, ctx)
        const {t} = useI18n()
        const reportTypeDict = ref<Array<string>>([
            t('lang.report.reportName.reportName1'),
            t('lang.report.reportName.reportName2'),
            t('lang.report.reportName.reportName3'),
            t('lang.report.reportName.reportName4'),
            t('lang.report.reportName.reportName5'),
            t('lang.report.reportName.reportName6'),
        ])
        const openFlagDict = ref<Array<string>>([
            t('lang.private'),
            t('lang.public')
        ])

        // 創建表格配置
        const createColumns = (download: Function, openWin: Function) => {
            return [
                {
                    title: t('lang.userCenter.tableAudit'),
                    key: 'reportNum',
                    align: 'center'
                },
                {
                    title: t('lang.userCenter.tableName'),
                    key: 'reportName',
                    ellipsis: {
                        tooltip: true
                    }
                },
                {
                    title: t('lang.userCenter.tableType'),
                    key: 'reportTypeName',
                    ellipsis: {
                        tooltip: true
                    }

                },
                {
                    title: t('lang.userCenter.tableTime'),
                    key: 'updateTime',
                    ellipsis: {
                        tooltip: true
                    }
                },
                {
                    title: t('lang.userCenter.tableSetting'),
                    key: 'permission'
                },
                {
                    title: t('lang.userCenter.tableCertificate'),
                    key: 'viewCET',
                    render(row: any) {
                        if (row.viewCET === 'true') {
                            return h(
                                NIcon,
                                {
                                    style: {cursor: 'pointer'},
                                    onClick: openWin.bind(this, '#/report', 'view_window', () => setSession('CETInfo', JSON.stringify(row))),
                                    size: '20px'
                                },
                                [h(
                                    DocumentOutline,
                                )]
                            )
                        }
                        return h(
                            'span',
                            [row.viewCET]
                        )
                    }
                },
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
                message('warning', t('lang.userCenter.searchInput'), 'hermit-msg')
                return
            }
            getList('reset')
        }
        // 下載單個
        const downloadSingle = async (row: any) => {
            await downLoadZip(`/website/common/download/single?fileUuid=${row.uuid}&reportNum=${row.reportNum}`, row.reportNum + '.pdf');
        }
        // 下載全部
        const downloadAll = async () => {
            let userInfo: string = getStore('userInfo') as string
            let fileName = JSON.parse(userInfo).username + '_' + formatDate(new Date(), 'YmdHis') + '.zip';
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
                value: searchParams.value
            }
            verifyCode(params).then((res: any) => {
                if (res.code === 200) {
                    auditReport.value = handleList(res.rows)
                    paginationReactive.total = res.total
                }
            }).catch(err => {
                message('warning', err.message, 'hermit-msg')
                console.error(err)
            })
        }
        /**
         * 处理表格数据，将报告类型转化为文字
         * @param data
         */
        const handleList = <T>(data: T[]): T[] => {
            data.forEach((val: any) => {
                if (val.reportType == 0 || val.reportType == 1) {
                    val.viewCET = 'true'
                } else {
                    val.viewCET = '-'
                }
                val.reportTypeName = reportTypeDict.value[val.reportType]
                val.permission = openFlagDict.value[val.openFlag]
            })

            return data
        }
        onMounted(() => {
            getList()
        })
        const {openWin} = composition(props, ctx)
        return {
            getList,
            downloadAll,
            searchData,
            searchParams,
            builtinThemeOverrides,
            auditReport,
            updatePage,
            columns: createColumns(downloadSingle, openWin),
            paginationReactive
        }
    },

})
</script>

<style scoped>
.page-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  background-image: url("../../assets/img/user-center.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.title-big {
  width: 1200px;
  margin-top: 180px;
  margin-bottom: 10px;
  font-size: 60px;
  font-weight: bold;
  line-height: 66px;
  color: #FFF;
}

.title-small {
  width: 1200px;
  font-size: 20px;
  font-weight: 400;
  line-height: 66px;
  color: #FFF;
}

.search {
  height: 400px;
  background: #EFF2F7;

}

.search-up {
  width: 1200px;
  height: 37px;
  padding-top: 148px;
  margin: auto;
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  color: #121214;
}

.search-class {
  display: flex;
  justify-content: space-between;
  width: 547px;
}

.search-input {
  display: flex;
  align-items: center;
  width: 465px;
  height: 60px;
  font-size: 20px;
}

.search-btn {
  width: 66px;
  height: 60px;
  background: linear-gradient(144deg, #00FFC4, #02A1F9);
  border-radius: 5px;
  box-shadow: 0 5px 8px 0 rgba(132, 141, 134, .55);
}

.download-btn {
  width: 160px;
  height: 60px;
  background: #FFF;
  border: 1px solid #00FFC4;
  border-radius: 5px;
}

.download-btn span {
  width: 120px;
  height: 16px;
  font-size: 20px;
  font-weight: 400;
  color: #000;
}

.search-down {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 60px;
  margin: 80px auto;
}

.page-table {
  width: 100%;
  height: 548px;
  margin-top: 0;
}

.table-body {
  width: 1500px;
  height: 360px;
  padding-top: 36px;
  margin: auto;
}

@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {

  .page-header {
    height: 264px;
    background-size: 100%;
  }

  .title-big {
    margin-top: 120px;
  }


}

@media screen and (min-width: 100px) and (max-width: 1278px) {

  .page-header {
    height: initial;
    padding: 30px;
    background-image: none;
  }

  .user-center .title-big {
    width: 100%;
    margin: 0;
    font-size: 35px;
    line-height: 1.5;
  }

  .user-center .title-small {
    width: 100%;
    height: initial;
    padding-top: 20px;
    font-size: 20px;
    line-height: 1.5;
  }

  .user-center .search {
    box-sizing: border-box;
    height: initial;
    padding: 30px;
  }


  .user-center .search .search-up {
    padding: 0;
    @apply text-lg w-full mb-4;

  }

  .user-center .search .search-down {
    height: initial;
    @apply m-0 flex-col w-full
    }

  .user-center .search .search-class {
    @apply w-full items-center
    }

  .user-center .search .search-input {
    height: 50px;
    margin-right: 10px;
    @apply w-full;
  }

  .user-center .search .search-btn {
    width: 50px;
    height: 50px;
  }

  .user-center .download-btn {
    height: 50px;
    @apply mt-4 w-full;
  }

  .user-center .page-table {
    box-sizing: border-box;
    height: initial;
    padding: 30px;
  }

  .user-center .table-body{
    width: 100%;
    height: initial;
  }
}
</style>