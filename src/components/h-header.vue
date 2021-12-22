<template>
    <!--  左侧  -->
    <div class="hermit-header flex flex-1 items-center">
        <div class="flex items-center justify-end cursor-pointer md:w-64 sm:w-12 " @click="routerPush('/index/home')">
            <img src="../assets/img/LOGO.png" alt=""/>
        </div>

        <div class="h-10 flex items-center justify-between ml-10">
            <!--    报表    -->
<!--            <div class="w-28 cursor-pointer text-base md:flex sm:hidden" @click="routerPush('/index/home')">
                {{ $t('lang.header.research') }}
            </div>-->
            <!--    服务    -->
            <div class="w-28 cursor-pointer md:flex sm:hidden">
                <be-popover trigger="click"
                            ref="popoverService"
                            customClass="header-popover" placement="bottom">
                    <template #trigger>
                        <div class="font-format trigger-item y-full flex items-center text-base hover:text-mainG" :class="route.path.indexOf('service') > 0 ? 'item-active' : ''">
                            {{ $t('lang.header.service') }}
                            <be-icon icon="under" class="ml-2"></be-icon>
                        </div>
                    </template>
                    <div
                        class="linear-l-r-s popover-list bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
                        :class="item.active ? 'linear-l-r active-popover' : ''"
                        @click="routerPush(item.value,index)"
                        v-for="(item,index) in serviceList">
                        <p class="ml-2 text-base font-format">{{item.label}}</p>
                    </div>
                </be-popover>
            </div>
            <!--   产品    -->
            <div class="w-28 cursor-pointer md:flex sm:hidden">
                <be-popover trigger="click" customClass="header-popover" placement="bottom" ref="popoverProduct">
                    <template #trigger>
                        <div class="trigger-item y-full flex items-center font-format text-base hover:text-mainG" :class="route.path.indexOf('product') > 0 ? 'item-active' : ''">
                            {{ $t('lang.header.product') }}
                            <be-icon icon="under" class="ml-2"></be-icon>
                        </div>
                    </template>
                    <div
                        class="linear-l-r-s popover-list bg-footer h-10 text-default flex items-center cursor-pointer hover:text-black"
                        :class="item.active ? 'linear-l-r active-popover' : ''"
                        @click="routerPush(item.value,index)"
                        v-for="(item,index) in productList">
                        <p class="ml-2 text-base font-format">{{item.label}}</p>
                    </div>
                </be-popover>
            </div>
            <div class="font-format w-28 cursor-pointer text-base hover:text-mainG md:flex sm:hidden"
                 :class="route.path.indexOf('aboutUs') > 0 ? 'item-active' : ''"
                 @click="routerPush('/index/aboutUs')">
                {{ $t('lang.header.aboutUs') }}
            </div>
        </div>
    </div>
    <!--  右侧  -->
    <div class="hermit-header-l flex justify-end items-center flex-1 text-right md:block sm:hidden">
        <!--    联系    -->
        <be-button customClass="request-btn text-bold" @click="openDialog">
            <span class="font-format">{{ $t('lang.header.requestUs') }}</span>
        </be-button>
        <!--    登录前    -->
        <div class="font-format y-full flex items-center cursor-pointer mr-12 text-base hover:text-mainG" @click="routerPush('/login')"    v-if="!isLogin">
            {{ $t('lang.header.login') }}
        </div>
        <!--    登录后    -->
        <be-popover trigger="click"
                    v-if="isLogin"
                    ref="popoverLogin"
                    customClass="header-popover" placement="bottom">
            <template #trigger>
                <div class="trigger-item y-full flex items-center cursor-pointer mr-12 text-base hover:text-mainG">
                    <img style="width: 30px;height: 30px;" class='mr-2' src="../assets/img/avatar.png"/>
                    <be-icon icon="under" ></be-icon>
                </div>
            </template>
            <div
                class="linear-l-r-s popover-list bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
                :class="item.active ? 'linear-l-r active-popover' : ''"
                @click="routerPush(item.value,index)"
                v-for="(item,index) in loginList">
                <p class="ml-2 text-base font-format">{{item.label}}</p>
            </div>
        </be-popover>

        <!--    语言    -->
<!--        <be-popover trigger="click"
                    ref="popoverLang"
                    customClass="header-popover" placement="bottom">
            <template #trigger>
                <div class="trigger-item y-full flex items-center cursor-pointer text-base hover:text-mainG">
                    {{ $t('lang.header.language.EN') }}
                    <be-icon icon="under" ></be-icon>
                </div>
            </template>
            <div
                class="linear-l-r-s popover-list bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
                :class="item.active ? 'linear-l-r active-popover' : ''"
                @click="changeLanguage(item.value,index)"
                v-for="(item,index) in langList">
                <p class="ml-2 text-base">{{item.label}}</p>
            </div>
        </be-popover>-->
    </div>
    <!--  移动端显示的菜单按钮  -->
    <div class="text-right md:hidden sm:flex">
        <be-icon icon="type" customClass="menu-icon"></be-icon>
    </div>
</template>

<script lang="ts">
import {Router, useRouter, useRoute, RouteLocationNormalizedLoaded} from "vue-router";
import {NDatePicker, NInput, NPopselect,NConfigProvider,NAvatar} from 'naive-ui'
import {defineComponent, ref, getCurrentInstance, ComponentInternalInstance, onMounted} from "vue";
import {useI18n} from "vue-i18n";
import {useEventBus} from "@vueuse/core";
import {getStore, removeStore, setSession,getSession} from "../utils/common";
import {BeMessage} from "../../public/be-ui/be-ui.es.js";
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
    components: {NDatePicker, NInput, NPopselect,NConfigProvider,NAvatar},
    emits: [
        'changeLang',
    ],
    setup(props, ctx) {
        const message = BeMessage.service
        const internalInstance = getCurrentInstance()
        const isLogin = ref<boolean>(false)
        /**
         * 跳转方法
         * @param path 路由地址
         * @param index 索引
         */
        const router: Router = useRouter()
        const route: RouteLocationNormalizedLoaded = useRoute()
        const routerPush = (path: string,index:number): void => {
            closePopover(path,index)
            if(/quit/.test(path)) return
            router.push(path)
        }
        /**
         * 关闭popover
         * @param path 路由地址
         * @param index 索引
         */
        const closePopover = (path: string,index:number):void => {
            serviceList.value.map((val:ISelect)=>val.active = false)
            productList.value.map((val:ISelect)=>val.active = false)
            // 服务介绍
            if(/service/.test(path)){
                serviceList.value[index].active = true;
                (internalInstance?.refs?.popoverService as IPopover).close()
                setSession('activeItem',JSON.stringify({value:index,key:'service'}))
            }
            // 产品介绍
            if(/product/.test(path)){
                productList.value[index].active = true;
                (internalInstance?.refs?.popoverProduct as IPopover).close()
                setSession('activeItem',JSON.stringify({value:index,key:'product'}))
            }
            //用户中心
            if(/user/.test(path)){
                loginList.value.map((val:ISelect)=>val.active = false)
                loginList.value[index].active = true;
                (internalInstance?.refs?.popoverLogin as IPopover).close()
                setSession('activeItem',JSON.stringify({value:index,key:'user'}))
            }
            // 退出登录
            if(/quit/.test(path)){
                loginList.value.map((val:ISelect)=>val.active = false);
                (internalInstance?.refs?.popoverLogin as IPopover).close()
                removeStore('token')
                removeStore('userInfo')
                isLogin.value = false
                message({
                    customClass:'hermit-msg',
                    titles: t('lang.opSuccess'),
                    msgType: 'success',
                    duration: 1500,
                    offsetTop:80,
                    close: true,
                })
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
                value: '/index/user/personal',
                active:false,
            },
            {
                label: t('lang.header.loginStr.quit'),
                value: 'quit',
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
        onMounted(()=>{
            if(getStore('token')){
                isLogin.value = true
            }
            const activeItem:string = getSession('activeItem') as string
            if(!activeItem) return
            const activeIndex:number = parseInt(JSON.parse(activeItem).value )
            if(JSON.parse(activeItem).key === 'user'){
                loginList.value[activeIndex].active = true;
            }
            if(JSON.parse(activeItem).key === 'product'){
                productList.value[activeIndex].active = true;
            }
            if(JSON.parse(activeItem).key === 'service'){
                serviceList.value[activeIndex].active = true;
            }
        })
        return {
            isLogin,
            openDialog,
            loginList,
            langList,
            serviceList,
            productList,
            changeLanguage,
            routerPush,
            route,
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

.linear-l-r.active-popover{
  @apply text-black
}

.hermit-header-l .request-btn{
  width:  145px;
  height: 34px;
  @apply bg-mainG text-black mr-12;
}

.hermit-header-l .request-btn:hover{
  color: black;
  background: #01e099;
}

.trigger-item .be-icon-container .be-icon{
    width: 15px;
    height: 15px;
  fill:#fff;
}

.trigger-item:hover .be-icon-container .be-icon{
  fill:#02fbbb;
}

.item-active,
.item-active .be-icon-container .be-icon{
  color: #02fbbb;
  fill:#02fbbb;;
}
</style>