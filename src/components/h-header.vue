<template>
    <!--  左侧  -->
    <div class="hermit-header flex flex-1 items-center">
        <div class="flex items-center justify-end cursor-pointer md:w-64 sm:w-12 " @click="routerPush('/index/home')">
            <img src="../assets/img/LOGO.png" alt=""/>
        </div>

        <div class="h-10 flex items-center justify-between ml-10">
<!--            <div class="w-28 cursor-pointer text-base md:flex sm:hidden" @click="routerPush('/index/home')">
                {{ $t('lang.header.research') }}
            </div>-->
            <div class="w-28 cursor-pointer md:flex sm:hidden">
                <be-popover trigger="click"
                            ref="popoverService"
                            customClass="header-popover" placement="bottom">
                    <template #trigger>
                        <div class="y-full flex items-center text-base">
                            {{ $t('lang.header.service') }}
                            <be-icon icon="under" color="white"></be-icon>
                        </div>
                    </template>
                    <div
                        class="popover-list bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
                        :class="item.active ? 'linear-l-r active-popover' : ''"
                        @click="routerPush(item.value,index)"
                        v-for="(item,index) in serviceList">
                        <p class="ml-2 text-base">{{item.label}}</p>
                    </div>
                </be-popover>
            </div>
            <div class="w-28 cursor-pointer md:flex sm:hidden">
                <be-popover trigger="click" customClass="header-popover" placement="bottom" ref="popoverProduct">
                    <template #trigger>
                        <div class="y-full flex items-center text-base" >
                            {{ $t('lang.header.product') }}
                            <be-icon icon="under" color="white"></be-icon>
                        </div>
                    </template>
                    <div
                        class="popover-list bg-footer h-10 text-default flex items-center cursor-pointer hover:text-black"
                        :class="item.active ? 'linear-l-r active-popover' : ''"
                        @click="routerPush(item.value,index)"
                        v-for="(item,index) in productList">
                        <p class="ml-2 text-base">{{item.label}}</p>
                    </div>
                </be-popover>
            </div>
            <div class="w-28 cursor-pointer text-base md:flex sm:hidden" @click="routerPush('/index/aboutUs')">
                {{ $t('lang.header.aboutUs') }}
            </div>
        </div>
    </div>
    <!--  右侧  -->
    <div class="hermit-header-l flex justify-end items-center flex-1 text-right md:block sm:hidden">
        <be-button customClass="request-btn text-bold" @click="openDialog">{{ $t('lang.header.requestUs') }}</be-button>
        <be-popover trigger="click"
                    ref="popoverLogin"
                    customClass="header-popover" placement="bottom">
            <template #trigger>
                <div class="y-full flex items-center cursor-pointer mr-12 text-base">
                    {{ $t('lang.header.login') }}
                    <be-icon icon="under" color="white"></be-icon>
                </div>
            </template>
            <div
                class="popover-list bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
                :class="item.active ? 'linear-l-r active-popover' : ''"
                @click="routerPush(item.value,index)"
                v-for="(item,index) in loginList">
                <p class="ml-2 text-base">{{item.label}}</p>
            </div>
        </be-popover>
        <be-popover trigger="click"
                    ref="popoverLang"
                    customClass="header-popover" placement="bottom">
            <template #trigger>
                <div class="y-full flex items-center cursor-pointer text-base">
                    {{ $t('lang.header.language.EN') }}
                    <be-icon icon="under" color="white"></be-icon>
                </div>
            </template>
            <div
                class="popover-list bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
                :class="item.active ? 'linear-l-r active-popover' : ''"
                @click="changeLanguage(item.value,index)"
                v-for="(item,index) in langList">
                <p class="ml-2 text-base">{{item.label}}</p>
            </div>
        </be-popover>
        <!--        <be-button customClass="animated-l-r animated-dom">测试按钮</be-button>-->
    </div>
    <!--  移动端显示的菜单按钮  -->
    <div class="text-right md:hidden sm:flex">
        <be-icon icon="type" customClass="menu-icon"></be-icon>
    </div>
</template>

<script lang="ts">
import {Router, useRouter} from "vue-router";
import {NDatePicker, NInput, NPopselect,NConfigProvider} from 'naive-ui'
import {defineComponent, ref,getCurrentInstance,ComponentInternalInstance} from "vue";
import {useI18n} from "vue-i18n";
import {useEventBus} from "@vueuse/core";

interface ISelect {
    label: string,
    value: string,
    active?:boolean,
}
interface IPopover extends ComponentInternalInstance {
    uid: number,
    close:Function
}
export default defineComponent({
    name: "HHeader",
    components: {NDatePicker, NInput, NPopselect,NConfigProvider},
    emits: [
        'changeLang',
    ],
    setup(props, ctx) {
        const internalInstance = getCurrentInstance()
        /**
         * 跳转方法
         * @param path 路由地址
         * @param index 索引
         */
        const router: Router = useRouter()
        const routerPush = (path: string,index:number): void => {
            closePopover(path,index)
            router.push(path)
        }
        /**
         * 关闭popover
         * @param path 路由地址
         * @param index 索引
         */
        const closePopover = (path: string,index:number):void => {
            if(/service/.test(path)){
                serviceList.value.map((val:ISelect)=>val.active = false)
                serviceList.value[index].active = true;
                (internalInstance?.refs?.popoverService as IPopover).close()
            }
            if(/product/.test(path)){
                productList.value.map((val:ISelect)=>val.active = false)
                productList.value[index].active = true;
                (internalInstance?.refs?.popoverProduct as IPopover).close()
            }
            //用户中心
            if(/user/.test(path)){
                loginList.value.map((val:ISelect)=>val.active = false)
                loginList.value[index].active = true;
                (internalInstance?.refs?.popoverLogin as IPopover).close()
            }
            // 退出登录
            if(/quite/.test(path)){
                loginList.value.map((val:ISelect)=>val.active = false);
                (internalInstance?.refs?.popoverLogin as IPopover).close()
            }
            if(/lang/.test(path)){
                langList.value.map((val:ISelect)=>val.active = false);
                langList.value[index].active = true;
                (internalInstance?.refs?.popoverLang as IPopover).close()
            }

        }
        /**
         * 变换语言
         * @param lang 语言
         * @param index 索引
         */
        const changeLanguage = (lang: string,index:number): void => {
            closePopover('lang',index)
            ctx.emit('changeLang',lang)
        }
        const {t} = useI18n()
        const serviceList = ref<Array<ISelect>>([
            {
                label: t('lang.header.serviceStr.service1'),
                value: '/index/service/contracts',
                active:false,
            },
            {
                label:t('lang.header.serviceStr.service2'),
                value: '/index/service/security',
                active:false,
            }
        ])
        const productList = ref<Array<ISelect>>([
            {
                label: t('lang.header.productStr.product1'),
                value: '/index/product/productVass',
                active:false,
            },
            {
                label: t('lang.header.productStr.product2'),
                value: '/index/product/productEagle',
                active:false,
            }
        ])
        const loginList = ref<Array<ISelect>>([
            {
                label: t('lang.header.loginStr.center'),
                value: '/user/center',
                active:false,
            },
            {
                label: t('lang.header.loginStr.quite'),
                value: 'quite',
                active:false,
            }
        ])
        const langList = ref<Array<ISelect>>([
            {
                label: t('lang.header.language.EN'),
                value: 'en_US',
                active:false,
            },
            {
                label: t('lang.header.language.CH'),
                value: 'zh_CN',
                active:false,
            }
        ])
        const bus = useEventBus<string>('openQuote')
        const openDialog = ():void =>{
            bus.emit('true')
        }
        return {
            openDialog,
            loginList,
            langList,
            serviceList,
            productList,
            changeLanguage,
            routerPush,
        }
    }
})
</script>

<style>
.menu-icon .be-icon {
    @apply w-6 h-6
}
.header-popover .be-popover{
    z-index: 998;
    @apply bg-footer
}
.header-popover .be-popover-body{
    padding:5px 0 0 0 !important;

}
.popover-list{
    position: relative;
    min-width: 100px;

}
.popover-list:hover{
    background: rgba(93,232,176,1);
    background: -moz-linear-gradient(left, rgba(93,232,176,1) 0%, rgba(37,180,232,1) 100%);
    background: -webkit-linear-gradient(left, rgba(93,232,176,1) 0%, rgba(37,180,232,1) 100%);
    background: -o-linear-gradient(left, rgba(93,232,176,1) 0%, rgba(37,180,232,1) 100%);
    background: -ms-linear-gradient(left, rgba(93,232,176,1) 0%, rgba(37,180,232,1) 100%);
    background: linear-gradient(to right, rgba(93,232,176,1) 0%, rgba(37,180,232,1) 100%);
}
.popover-list:before{
    content: '';
    width: 3px;
    height: 100%;
    position: absolute;
    background: rgba(93,232,176,1);
}
.linear-l-r.active-popover{
    @apply text-black
}
.hermit-header-l .request-btn{
    @apply bg-mainG text-black mr-12;
}
</style>