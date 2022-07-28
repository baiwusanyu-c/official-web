<template>
  <!--  左侧  -->
  <div class="hermit-header flex flex-1 items-center">
    <!--    mobile 導航    -->
    <div class="text-right display-none relative sm:flex sm:items-center">
      <be-icon
        icon="type"
        :custom-class="`menu-icon absolute left-2 ${active ? 'menu-icon-active' : ''}`"
        @click="active = true"></be-icon>
      <n-drawer
        v-model:show="active"
        :width="140"
        :z-index="2000"
        placement="left"
        style="top: 4em"
        class="bg-footer text-white">
        <n-drawer-content :title="$t('lang.header.nav')" class="menu-content">
          <!--   首页    -->
          <div
            class="mb-4 w-full cursor-pointer"
            :class="route.path.indexOf('home') > 0 ? 'item-active' : ''"
            @click="routerPush('/')">
            {{ $t('lang.header.home') }}
          </div>
          <!--    博客研究    -->
          <div
            class="mb-4 w-full font-format cursor-pointer text-left text-base hover:text-mainG"
            :class="route.path.indexOf('resources') > 0 ? 'item-active' : ''"
            @click="routerPush('/resources')">
            {{ $t('lang.header.resource') }}
          </div>
          <!--   解决方案    -->
          <div class="mb-4 w-full cursor-pointer">
            <menu-popover
              ref="serviceMenuRef"
              popover-style="left: 120px"
              trigger="click"
              placement="right"
              @click="productMenuRef.closePopover()">
              <div
                class="font-format trigger-item y-full flex items-center text-base justify-start hover:text-mainG"
                :class="{ 'item-active': isPathIncludes(['service']) }">
                Services
                <!-- <be-icon icon="under" class="ml-2"></be-icon> -->
              </div>
              <template #trigger>
                <div
                  v-for="item in service"
                  :key="item.value"
                  class="linear-l-r-s bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
                  :class="{ 'linear-l-r active-popover': item.value === route.path }"
                  @click="routerPush(item.value)">
                  <p class="mx-2 text-base font-format">{{ item.label }}</p>
                </div>
              </template>
            </menu-popover>
          </div>
          <div class="mb-4 w-full cursor-pointer">
            <menu-popover
              ref="productMenuRef"
              popover-style="left: 120px"
              trigger="click"
              placement="right"
              @click="serviceMenuRef.closePopover()">
              <div
                class="font-format trigger-item y-full flex items-center text-base justify-start hover:text-mainG"
                :class="{ 'item-active': isPathIncludes(['product']) }">
                Products
              </div>
              <template #trigger>
                <div
                  v-for="item in product"
                  :key="item.value"
                  class="linear-l-r-s bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
                  :class="{ 'linear-l-r active-popover': item.value === route.path }"
                  @click="routerPush(item.value)">
                  <p class="mx-2 text-base font-format">{{ item.label }}</p>
                </div>
              </template>
            </menu-popover>
          </div>
          <!--   關於我們    -->
          <div
            class="mb-4 w-full font-format cursor-pointer text-left text-base hover:text-mainG"
            :class="route.path.indexOf('aboutus') > 0 ? 'item-active' : ''"
            @click="routerPush('/aboutus')">
            {{ $t('lang.header.aboutUs') }}
          </div>
          <!--    登录前    -->
          <div
            v-if="!isLogin"
            class="mb-4 w-full font-format y-full text-left flex justify-start items-center cursor-pointer mr-12 text-base hover:text-mainG"
            @click="openLoginDialog">
            <p>{{ $t('lang.header.login') }}</p>
          </div>
          <!--    登录后    -->
          <be-popover
            v-if="isLogin"
            ref="popoverLogin"
            trigger="click"
            custom-class="header-popover"
            placement="right">
            <template #trigger>
              <div
                class="trigger-item y-full w-full flex items-center cursor-pointer mr-12 text-base hover:text-mainG">
                <img
                  style="width: 30px; height: 30px"
                  class="mr-2"
                  src="../assets/img/avatar.png"
                  alt="" />
                <be-icon icon="under"></be-icon>
              </div>
            </template>
            <div
              class="linear-l-r-s bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
              :class="{ 'linear-l-r active-popover': '/user/personal' === route.path }"
              @click="routerPush('/user/personal'), closePoper($refs.popoverLogin)">
              <p class="mx-2 text-base font-format">{{ $t('lang.header.loginStr.center') }}</p>
            </div>
            <div
              class="linear-l-r-s bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
              @click="logout(), closePoper($refs.popoverLogin)">
              <p class="mx-2 text-base font-format">{{ $t('lang.header.loginStr.quit') }}</p>
            </div>
          </be-popover>
        </n-drawer-content>
      </n-drawer>
    </div>
    <!--    logo    -->
    <div class="flex items-center justify-end cursor-pointer w-64 sm:justify-center sm:w-full">
      <img
        role="button"
        src="../assets/img/LOGO.png"
        alt=""
        style="height: 46px"
        @click="routerPush('/')" />
    </div>
    <!--    pc 導航    -->
    <div class="display-flex h-10 items-center justify-between ml-10 sm:hidden">
      <!--    博客研究    -->
      <div
        class="w-28 cursor-pointer text-base hover:text-mainG md:flex sm:hidden"
        :class="route.path.indexOf('resource') > 0 ? 'item-active' : ''"
        @click="routerPush('/resources')">
        {{ $t('lang.header.resource') }}
      </div>
      <!--    服务    -->
      <div class="w-28 cursor-pointer">
        <menu-popover>
          <div
            class="font-format trigger-item y-full flex items-center text-base justify-start hover:text-mainG"
            :class="{ 'item-active': isPathIncludes(['service']) }">
            Services
          </div>
          <template #trigger>
            <div
              v-for="item in service"
              :key="item.value"
              class="linear-l-r-s h-10 text-default flex cursor-pointer items-center hover:text-black"
              :class="{ 'linear-l-r active-popover': item.value === route.path }"
              @click="routerPush(item.value)">
              <p class="mx-2 text-base font-format">{{ item.label }}</p>
            </div>
          </template>
        </menu-popover>
        <!-- <be-popover ref="popoverService" trigger="hover" class="header-popover" placement="bottom">
          <template #trigger>
            <div
              class="font-format trigger-item y-full flex items-center text-base hover:text-mainG"
              :class="{ 'item-active': isPathIncludes(['service']) }">
              Services
              <be-icon icon="under" class="ml-2"></be-icon>
            </div>
          </template>
          <div
            v-for="item in service"
            :key="item.value"
            class="linear-l-r-s bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
            :class="{ 'linear-l-r active-popover': item.value === route.path }"
            @click="routerPush(item.value), closePoper($refs.popoverService)">
            <p class="mx-2 text-base font-format">{{ item.label }}</p>
          </div>
        </be-popover> -->
      </div>
      <!--产品-->
      <div class="w-28 cursor-pointer">
        <menu-popover>
          <div
            class="font-format trigger-item y-full flex items-center text-base hover:text-mainG"
            :class="{ 'item-active': isPathIncludes(['product']) }">
            Products
          </div>
          <template #trigger>
            <div
              v-for="item in product"
              :key="item.value"
              class="linear-l-r-s bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
              :class="{ 'linear-l-r active-popover': item.value === route.path }"
              @click="routerPush(item.value)">
              <p class="mx-2 text-base font-format">{{ item.label }}</p>
            </div>
          </template>
        </menu-popover>
      </div>
      <!--   關於我們    -->
      <div
        class="font-format w-28 cursor-pointer text-base hover:text-mainG"
        :class="route.path.indexOf('aboutus') > 0 ? 'item-active' : ''"
        @click="routerPush('/aboutus')">
        {{ $t('lang.header.aboutUs') }}
      </div>
    </div>
  </div>
  <!--  pc 右侧  -->
  <div class="hermit-header-l display-flex justify-end items-center flex-1 text-right sm:hidden">
    <!--    联系    -->
    <n-button color="#1CD2A9" class="request-btn text-bold" @click="openDialog">
      <span class="font-format">{{ $t('lang.header.requestUs') }}</span>
    </n-button>
    <!--    登录前    -->
    <div
      v-if="!isLogin"
      class="font-format y-full flex items-center cursor-pointer mr-12 text-base hover:text-mainG"
      @click="routerPush('/login')">
      {{ $t('lang.header.login') }}
    </div>
    <!--    登录后    -->
    <be-popover
      v-if="isLogin"
      ref="popoverLogin"
      trigger="click"
      custom-class="header-popover"
      placement="bottom">
      <template #trigger>
        <div
          class="trigger-item y-full flex items-center cursor-pointer mr-12 text-base hover:text-mainG">
          <img
            style="width: 30px; height: 30px"
            class="mr-2"
            src="../assets/img/avatar.png"
            alt="" />
          <be-icon icon="under"></be-icon>
        </div>
      </template>
      <div
        class="linear-l-r-s bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
        :class="{ 'linear-l-r active-popover': '/user/personal' === route.path }"
        @click="routerPush('/user/personal'), closePoper($refs.popoverLogin)">
        <p class="mx-2 text-base font-format">{{ $t('lang.header.loginStr.center') }}</p>
      </div>
      <div
        class="linear-l-r-s bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
        @click="logout(), closePoper($refs.popoverLogin)">
        <p class="mx-2 text-base font-format">{{ $t('lang.header.loginStr.quit') }}</p>
      </div>
    </be-popover>
  </div>
  <!-- 登录弹窗 -->
  <login-dialog ref="loginDialog"></login-dialog>
</template>

<script lang="ts">
  import { Router, useRouter, useRoute, RouteLocationNormalizedLoaded } from 'vue-router'
  import { NDrawer, NDrawerContent, NButton } from 'naive-ui'
  import {
    defineComponent,
    ref,
    getCurrentInstance,
    ComponentInternalInstance,
    onMounted,
  } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useEventBus } from '@vueuse/core'
  import { getStore, removeStore, removeSession } from '../utils/common'
  import composition from '../utils/mixin/common-func'
  import LoginDialog from '../views/login/login-dialog.vue'
  import MenuPopover from '@/components/menu-popover/index.vue'
  interface ISelect {
    label: string
    value: string
    active?: boolean
  }

  interface ILoginDialog extends ComponentInternalInstance {
    uid: number
    show: boolean
  }
  export default defineComponent({
    name: 'HHeader',
    components: {
      LoginDialog,
      NDrawer,
      NDrawerContent,
      NButton,
      MenuPopover,
    },
    emits: ['changeLang'],
    setup(props, ctx) {
      const { message } = composition()
      const internalInstance = getCurrentInstance()
      const isLogin = ref<boolean>(false)
      /**
       * 跳转方法
       * @param path 路由地址
       * @param index 索引
       */
      const router: Router = useRouter()
      const route: RouteLocationNormalizedLoaded = useRoute()
      const routerPush = (path: string): void => {
        active.value = false
        router.push(path)
      }
      const serviceMenuRef: any = ref(null)
      const productMenuRef: any = ref(null)

      /**
       * 关闭popover
       * @param path 路由地址
       * @param index 索引
       */
      const logout = (): void => {
        // 退出登录
        removeStore('token')
        removeStore('userInfo')
        isLogin.value = false
        message('success', t('lang.opSuccess'), 'hermit-msg')
        if (/personal/.test(route.path)) routerPush('/')
        window.location.reload()
      }
      /**
       * 变换语言
       * @param lang 语言
       * @param index 索引
       */
      const changeLanguage = (lang: string): void => {
        ctx.emit('changeLang', lang)
      }
      const { t } = useI18n()

      const service = ref<ISelect[]>([
        {
          label: t('lang.header.serviceStr.service1'),
          value: '/service/audit',
        },
        {
          label: t('lang.header.serviceStr.service2'),
          value: '/service/chainsaudit',
        },
        {
          label: 'Cryptocurrency Tracing',
          value: '/service/tracing',
        },
      ])
      const product = ref<ISelect[]>([
        {
          label: t('lang.header.productStr.product1'),
          value: '/product/vass',
        },
        {
          label: t('lang.header.productStr.product2'),
          value: '/product/eagleeye',
        },
      ])
      const loginList = ref<Array<ISelect>>([
        {
          label: t('lang.header.loginStr.center'),
          value: '/user/personal',
          active: false,
        },
        {
          label: t('lang.header.loginStr.quit'),
          value: 'quit',
          active: false,
        },
      ])
      const langList = ref<Array<ISelect>>([
        {
          label: t('lang.header.language.EN'),
          value: 'en_US',
          active: false,
        },
        {
          label: t('lang.header.language.CH'),
          value: 'zh_CN',
          active: false,
        },
      ])
      const bus = useEventBus<string>('openQuote')
      const openDialog = (): void => {
        bus.emit('true')
      }
      const closePoper = (popover: any) => {
        popover.show = false
      }
      // 移動端彈出抽屜菜單
      const active = ref<boolean>(false)
      const initPage = (): void => {
        if (getStore('token')) {
          isLogin.value = true
        }
      }
      onMounted(() => {
        initPage()
      })
      /**
       * 移动端 开启登录弹窗
       */
      const openLoginDialog = (): void => {
        active.value = false
        ;(internalInstance?.refs?.loginDialog as ILoginDialog).show = true
      }
      const busLogin = useEventBus<string>('isLogin')
      busLogin.on(params => {
        if (params === 'true') {
          isLogin.value = true
        }
      })
      const busLoginExpired = useEventBus<string>('loginExpired')
      busLoginExpired.on(() => {
        removeSession('activeItem')
        isLogin.value = false
        initPage()
      })
      const isPathIncludes = (arr: string[]) => arr.some(it => route.path.includes(it))

      return {
        openLoginDialog,
        active,
        isLogin,
        openDialog,
        loginList,
        langList,
        changeLanguage,
        routerPush,
        route,
        closePoper,
        logout,
        isPathIncludes,
        service,
        product,
        productMenuRef,
        serviceMenuRef,
      }
    },
  })
</script>

<!-- prettier-ignore -->
<style>
  .menu-icon .be-icon {
    fill: #fff;

    @apply w-6 h-6;
  }

  .menu-icon-active .be-icon {
    fill: #02fbbb;
  }

  .header-popover .be-popover {
    z-index: 2078;

    @apply bg-footer;
  }

  .header-popover .be-popover-body {
    padding: 5px 0 0 0 !important;
  }

  .popover-list {
    min-width: 100px;
  }

  .popover-list:hover {
    background: rgba(93, 232, 176, 1);
    background: -moz-linear-gradient(left, rgba(93, 232, 176, 1) 0%, rgba(37, 180, 232, 1) 100%);
    background: -webkit-linear-gradient(left, rgba(93, 232, 176, 1) 0%, rgba(37, 180, 232, 1) 100%);
    background: -o-linear-gradient(left, rgba(93, 232, 176, 1) 0%, rgba(37, 180, 232, 1) 100%);
    background: -ms-linear-gradient(left, rgba(93, 232, 176, 1) 0%, rgba(37, 180, 232, 1) 100%);
    background: linear-gradient(to right, rgba(93, 232, 176, 1) 0%, rgba(37, 180, 232, 1) 100%);
  }

  .linear-l-r.active-popover {
    @apply text-black;
  }

  .hermit-header-l .request-btn {
    width: 145px;
    height: 34px;

    @apply text-black mr-12;
  }

  .hermit-header-l .request-btn:hover {
    color: black;
    background: #01e099;
  }

  .trigger-item .be-icon-container .be-icon {
    width: 10px;
    height: 10px;
    fill: #898e9a;
  }

  .trigger-item:hover .be-icon-container .be-icon {
    fill: #02fbbb;
  }

  .item-active,
  .item-active .be-icon-container .be-icon {
    color: #02fbbb;
    fill: #02fbbb;
  }

  .n-drawer .n-drawer-content.menu-content .n-drawer-body-content-wrapper {
    padding: 20px 0 20px 20px;
  }

  .n-drawer .n-drawer-content.menu-content .n-drawer-header__main {
    color: #fff;
  }
</style>
