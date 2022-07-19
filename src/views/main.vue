<template>
  <n-config-provider :locale="uiLang" :date-locale="dateLang">
    <be-container class="hermit-container-container h-full overscroll-auto pb-0">
      <!-- 头部   -->
      <be-header
        class="flex items-center justify-between fixed w-full z-30 text-default"
        style="height: 4em; background: #141720; opacity: 0.9">
        <h-header @change-lang="changeLanguage"></h-header>
      </be-header>
      <!--  主体    -->
      <be-main class="relative left-0 top-14 pb-0 overflow-hidden hermit-main">
        <router-view></router-view>
      </be-main>
      <!-- <be-footer
        v-if="!/research/.test(route.path)"
        class="hermit-footer px-0 box-border top-14 relative left-0">
        <h-footer-bigger></h-footer-bigger>
      </be-footer> -->
      <be-footer class="hermit-footer px-0 box-border top-14 relative left-0">
        <h-footer-bigger></h-footer-bigger>
      </be-footer>
    </be-container>
  </n-config-provider>

  <request-quote-dialog ref="requestQuoteDialog"></request-quote-dialog>
</template>

<script lang="ts">
  import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue'
  import { NConfigProvider } from 'naive-ui'
  import { zhCN, dateZhCN } from 'naive-ui'
  import HHeader from '../components/h-header.vue'
  import { useI18n } from 'vue-i18n'
  import { getStore, setStore } from '../utils/common'
  import { NDateLocale } from 'naive-ui/lib/locales/date/enUS'
  import { NLocale } from 'naive-ui/lib/locales/common/enUS'
  import HFooterBigger from '../components/h-footer-bigger.vue'
  import RequestQuoteDialog from '../components/request-quote-dialog.vue'
  import { useEventBus } from '@vueuse/core'
  import { IDialog } from '../utils/types'
  import composition from '../utils/mixin/common-func'

  export default defineComponent({
    name: 'MainPage',
    components: {
      RequestQuoteDialog,
      HFooterBigger,
      HHeader,
      NConfigProvider,
    },
    setup() {
      const curInst = getCurrentInstance()
      /**
       * 初始化语言
       */
      const { locale } = useI18n()
      const uiLang = ref<NLocale | null>(zhCN)
      const dateLang = ref<NDateLocale | null>(dateZhCN)
      const initLang = (): void => {
        const langCache = getStore('lang')
        locale.value = (langCache ? langCache : 'en_US') as string
        // 本地持久化
        setStore('lang', locale.value)
        changeUILang(locale.value)
      }
      /**
       * 变换语言
       */
      const changeLanguage = (lang: string): void => {
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
      const openQuoteDialog = (isShow: string): void => {
        if (isShow === 'true') {
          ;(curInst?.refs.requestQuoteDialog as IDialog).isShow = true
        }
      }
      bus.on(openQuoteDialog)
      onMounted(() => {
        initLang()
      })
      const { route } = composition()
      return {
        route,
        uiLang,
        dateLang,
        changeLanguage,
      }
    },
  })
</script>

<!-- prettier-ignore -->
<style>
  .hermit-container-container {
    background-color: #040305;
  }

  .hermit-container-container .be-header {
    height: 4.5em;
    @apply px-2;
  }

  .be-main.pb-0 {
    padding: 0;
  }

  .hermit-footer.px-0 {
    padding-right: 0;
    padding-left: 0;
  }

  .hermit-container-container .hermit-main {
    overflow: hidden;
  }
</style>
