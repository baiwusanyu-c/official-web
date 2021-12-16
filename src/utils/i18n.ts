/*
* @i18n.ts
* @deprecated 
* @author czh
* @update (czh 2021/12/15)
*/

import {createI18n} from "vue-i18n";
import CN from './lang/zh'
import US from './lang/en'
export const i18n = createI18n({
    locale: 'en_US', // set locale
    fallbackLocale: 'en_US', // set fallback locale
    legacy: false,
    // 全局注入 $t 函数
    globalInjection: true,
    messages: {
        'zh_CN': {lang:CN},
        'en_US': {lang:US},
    },
})