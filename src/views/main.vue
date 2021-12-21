<template>
    <n-config-provider :locale="uiLang" :date-locale="dateLang">
        <be-container class="hermit-container-container h-full overscroll-auto pb-0">
            <!-- 头部   -->
            <be-header class="flex items-center justify-between fixed w-full bg-default z-30 bg-header text-default">
                <h-header @changeLang="changeLanguage"></h-header>
            </be-header>
            <!--  主体    -->
            <be-main class="relative left-0 top-14 pb-0">
                <router-view></router-view>
            </be-main>
            <be-footer class="hermit-footer px-0 box-border">
                <h-footer-bigger></h-footer-bigger>
            </be-footer>
        </be-container>
    </n-config-provider>

    <request-quote-dialog ref="requestQuoteDialog"></request-quote-dialog>
</template>

<script lang="ts">
import {defineComponent, getCurrentInstance, onMounted, ref} from "vue";
import {NConfigProvider, NDatePicker, NSelect} from 'naive-ui'
import {zhCN, dateZhCN} from 'naive-ui'
import HHeader from "../components/h-header.vue";
import {useI18n} from 'vue-i18n'
import {getStore, setStore} from "../utils/common";
import {NDateLocale} from "naive-ui/lib/locales/date/enUS";
import {NLocale} from "naive-ui/lib/locales/common/enUS";
import HFooterBigger from "../components/h-footer-bigger.vue";
import RequestQuoteDialog from "../components/request-quote-dialog.vue";
import {useEventBus} from "@vueuse/core";
import {IDialog} from "../utils/types";

export default defineComponent({
    components: {RequestQuoteDialog, HFooterBigger, HHeader, NConfigProvider, NDatePicker,NSelect},
    setup() {
        const curInst = getCurrentInstance()
        /**
         * 初始化语言
         */
        const {locale} = useI18n()
        const uiLang = ref<NLocale | null>(zhCN)
        const dateLang = ref<NDateLocale | null>(dateZhCN)
        const initLang = (): void => {
            const langCache = getStore('lang')
            locale.value = (langCache ? langCache : 'zh_CN') as string
            // 本地持久化
            setStore('lang', locale.value)
            changeUILang(locale.value)
        }
        /**
         * 变换语言
         */
        const changeLanguage = (lang:string): void => {
            locale.value = lang
            // 本地持久化
            setStore('lang', locale.value)
            changeUILang(locale.value)
        }
        /**
         * 变换UI语言
         */
        const changeUILang = (locale: string): void => {
            if (locale === 'en_US') {
                uiLang.value = null
                dateLang.value = null
            } else {
                uiLang.value = zhCN
                dateLang.value = dateZhCN
            }
        }
        const bus = useEventBus<string>('openQuote')
        /**
         * 彈窗開啓
         */
        const openQuoteDialog = (isShow:string):void =>{
            if(isShow === 'true'){
                (curInst?.refs.requestQuoteDialog as IDialog).isShow = true
            }
        }
        bus.on(openQuoteDialog)
        onMounted(() => {
            initLang()

        })


        return {

            uiLang,
            dateLang,
            changeLanguage
        }
    }
})
</script>

<style>
.hermit-container-container .be-header {
    height: 4.5em;
    @apply px-8;
}
.hermit-container-container .hermit-footer{
    height: 20em;
}
.be-main.pb-0{
    padding: 0;
}
.hermit-footer.px-0{
    padding-left: 0;
    padding-right: 0;
}
</style>