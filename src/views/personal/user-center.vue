<template>
    <div>
        <div class="page-header">
            <!--{{$t('lang.HFooterBigger.contact.locationRoad')}}-->
            <div class="title-big">{{$t('lang.userCenter.titleBig')}}</div>
            <div class="title-small">{{$t('lang.userCenter.titleSmall')}}</div>
        </div>
        <div class="search">
            <div class="search-up">
                <span>{{$t('lang.userCenter.searchTitle')}}</span>
            </div>
            <div class="search-down">
                <div class="search-class">
                    <n-input class="search-input" :placeholder="$t('lang.userCenter.searchInput')" />
                    <n-button class="search-btn"><n-icon size="20px"><search/></n-icon></n-button>
                </div>
                <div>
                    <n-button class="download-btn"><span>{{$t('lang.userCenter.download')}}</span></n-button>
                </div>
            </div>
        </div>
        <div class="page-table">
            <div class="table-body">
                <n-data-table :theme-overrides="builtinThemeOverrides" :columns="columns" :data="data" :pagination="pagination" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {useI18n} from "vue-i18n";
    import {Search,DownloadOutline} from '@vicons/ionicons5'
    import { h, defineComponent,getCurrentInstance} from "vue";
    import {NInput,NButton,NIcon,NDataTable,DataTableProps} from "naive-ui";
    type BuiltinThemeOverrides  = NonNullable<DataTableProps['builtinThemeOverrides']>
    const builtinThemeOverrides: BuiltinThemeOverrides = {
        thColor:'#02fbbb',
        borderRadius:'5px',
    }



    export default defineComponent({
        name: "user-center",
        components:{
            NInput,
            NIcon,
            NButton,
            NDataTable,
            Search,
            DownloadOutline,
        },
        setup(){
            const createColumns = ({ sendMail }) => {
                return [
                    {
                        title: t('lang.userCenter.tableAudit'),
                        key: 'name',
                        align: 'center'
                    },
                    {
                        title: t('lang.userCenter.tableName'),
                        key: 'age'
                    },
                    {
                        title: t('lang.userCenter.tableType'),
                        key: 'address'
                    },
                    {
                        title: t('lang.userCenter.tableTime')
                    },
                    {
                        title: t('lang.userCenter.tableSetting')
                    },
                    {
                        title: t('lang.userCenter.tableCertificate')
                    },
                    {
                        title: t('lang.userCenter.tableAction'),
                        key: 'actions',
                        render (row) {
                            return h(
                                NButton,
                                {
                                    text,
                                    onClick: () => sendMail(row)
                                },
                                [h(
                                    NIcon,
                                    {
                                        size:'20px'
                                    },
                                    [h(
                                        DownloadOutline,
                                    )]
                                )]
                            )
                        }
                    }
                ]
            }
            const {t} = useI18n()
            const AuditReport = [
                {
                    key: 0,
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                },
                {
                    key: 1,
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                },
                {
                    key: 2,
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                }
            ]
            return {
                builtinThemeOverrides,
                data: AuditReport,
                columns: createColumns({
                    sendMail (rowData) {
                       console.log('send')
                    },
                }),
                pagination: {
                    pageSize: 10
                }
            }
        },
        methods:{
            search(){
                console.log('搜索触发')
            },
        },
    })
</script>

<style scoped>
    .page-header{
        margin-top: -80px;
        height: 400px;
        background: url("../../assets/img/user-center.png");
        display: flex;
        flex-direction: column;
    }
    .title-big{
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
    .title-small{
        margin-left: 361px;
        width: 500px;
        height: 21px;
        font-size: 20px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 66px;
    }
    .search{
        height: 400px;
        background: #EFF2F7;

    }
    .search-up{
        margin: auto;
        padding-top: 148px;
        width: 1200px;
        height: 37px;
        font-size: 36px;
        font-weight: bold;
        color: #121214;
        line-height: 42px;
    }
    .search-class{
        width: 547px;
        display: flex;
        justify-content: space-between;
    }
    .search-input{
        width: 465px;
        height: 60px;
        display: flex;
        align-items: center;
        font-size: 20px;
    }
    .search-btn{
        width: 66px;
        height: 60px;
        background: linear-gradient(144deg, #00FFC4, #02A1F9);
        box-shadow: 0px 5px 8px 0px rgba(132, 141, 134, 0.55);
        border-radius: 5px;
    }
    .download-btn{
        width: 160px;
        height: 60px;
        background: #FFFFFF;
        border: 1px solid #00FFC4;
        border-radius: 5px;
    }
    .download-btn span{
        width: 120px;
        height: 16px;
        font-size: 20px;
        font-weight: 400;
        color: #000000;
    }
    .search-down{
        margin: 80px auto;
        width: 1200px;
        height: 60px;
        display: flex;
        justify-content: space-between;
    }
    .page-table{
        margin-top: 0px;
        height: 548px;
        width: 100%;
    }
    .table-body{
        margin: auto;
        padding-top: 36px;
        width: 1200px;
        height: 360px;
    }
</style>