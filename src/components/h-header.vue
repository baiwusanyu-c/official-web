<template>
  <!--  左侧  -->

  <div class="hermit-header flex flex-1 items-center">
    <!--    mobile 導航    -->
    <div class="text-right display-none sm:flex">
      <be-icon
        icon="type"
        custom-class="menu-icon"
        @click="active = true"
      ></be-icon>
      <n-drawer
        v-model:show="active"
        :width="140"
        placement="left"
        style="top: 4em"
        class="bg-footer text-white"
      >
        <n-drawer-content :title="$t('lang.header.nav')" class="menu-content">
          <!--   首页    -->
          <div
            class="mb-4 w-full font-format cursor-pointer text-left text-base hover:text-mainG"
            :class="route.path.indexOf('home') > 0 ? 'item-active' : ''"
            @click="routerPush('/index/home')"
          >
            {{ $t('lang.header.home') }}
          </div>
          <!--   服务    -->
          <div class="mb-4 w-full cursor-pointer">
            <be-popover
              ref="popoverService"
              trigger="click"
              custom-class="header-popover"
              placement="right"
            >
              <template #trigger>
                <div
                  class="font-format trigger-item y-full flex items-center text-base justify-start hover:text-mainG"
                  :class="
                    route.path.indexOf('service') > 0 ? 'item-active' : ''
                  "
                >
                  {{ $t('lang.header.service') }}
                  <be-icon icon="under" class="ml-2"></be-icon>
                </div>
              </template>
              <div
                v-for="(item, index) in serviceList"
                :key="item.value"
                class="linear-l-r-s popover-list bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
                :class="item.active ? 'linear-l-r active-popover' : ''"
                @click="routerPush(item.value, index)"
              >
                <p class="ml-2 text-xs font-format">{{ item.label }}</p>
              </div>
            </be-popover>
          </div>
          <!--   产品    -->
          <div class="mb-4 w-full cursor-pointer">
            <be-popover
              ref="popoverProduct"
              trigger="click"
              custom-class="header-popover"
              placement="right"
            >
              <template #trigger>
                <div
                  class="trigger-item y-full flex items-center font-format text-base justify-start hover:text-mainG"
                  :class="
                    route.path.indexOf('product') > 0 ? 'item-active' : ''
                  "
                >
                  {{ $t('lang.header.product') }}
                  <be-icon icon="under" class="ml-2"></be-icon>
                </div>
              </template>
              <div
                v-for="(item, index) in productList"
                :key="item.value"
                class="linear-l-r-s popover-list bg-footer h-10 text-default flex items-center cursor-pointer hover:text-black"
                :class="item.active ? 'linear-l-r active-popover' : ''"
                @click="routerPush(item.value, index)"
              >
                <p class="ml-2 text-xs font-format">{{ item.label }}</p>
              </div>
            </be-popover>
          </div>
          <!--   關於我們    -->
          <div
            class="mb-4 w-full font-format cursor-pointer text-left text-base hover:text-mainG"
            :class="route.path.indexOf('aboutUs') > 0 ? 'item-active' : ''"
            @click="routerPush('/index/aboutUs')"
          >
            {{ $t('lang.header.aboutUs') }}
          </div>
          <!--    登录前    -->
          <div
            v-if="!isLogin"
            class="mb-4 w-full font-format y-full text-left flex justify-start items-center cursor-pointer mr-12 text-base hover:text-mainG"
            @click="routerPush('/login')"
          >
            <p>{{ $t('lang.header.login') }}</p>
          </div>
          <!--    登录后    -->
          <be-popover
            v-if="isLogin"
            ref="popoverLogin"
            trigger="click"
            custom-class="header-popover"
            placement="bottom"
          >
            <template #trigger>
              <div
                class="trigger-item y-full flex items-center cursor-pointer mr-12 text-base hover:text-mainG"
              >
                <img
                  style="width: 30px; height: 30px"
                  class="mr-2"
                  src="../assets/img/avatar.png"
                  alt=""
                />
                <be-icon icon="under"></be-icon>
              </div>
            </template>
            <div
              v-for="(item, index) in loginList"
              :key="item.value"
              class="linear-l-r-s popover-list bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
              :class="item.active ? 'linear-l-r active-popover' : ''"
              @click="routerPush(item.value, index)"
            >
              <p class="mx-2 text-base font-format">{{ item.label }}</p>
            </div>
          </be-popover>
        </n-drawer-content>
      </n-drawer>
    </div>
    <!--    logo    -->
    <div
      class="flex items-center justify-end cursor-pointer w-64 sm:justify-center sm:w-full"
      @click="routerPush('/index/home')"
    >
      <img src="../assets/img/LOGO.png" alt="" style="height: 46px" />
    </div>
    <!--    pc 導航    -->
    <div class="display-flex h-10 items-center justify-between ml-10 sm:hidden">
      <!--    报表    -->
      <!-- <div class="w-28 cursor-pointer text-base md:flex sm:hidden" @click="routerPush('/index/home')">
                {{ $t('lang.header.research') }}
            </div>-->
      <!--    服务    -->
      <div class="w-28 cursor-pointer">
        <be-popover
          ref="popoverService"
          trigger="hover"
          custom-class="header-popover"
          placement="bottom"
        >
          <template #trigger>
            <div
              class="font-format trigger-item y-full flex items-center text-base hover:text-mainG"
              :class="route.path.indexOf('service') > 0 ? 'item-active' : ''"
            >
              {{ $t('lang.header.service') }}
              <be-icon icon="under" class="ml-2"></be-icon>
            </div>
          </template>
          <div
            v-for="(item, index) in serviceList"
            :key="item.value"
            class="linear-l-r-s popover-list bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
            :class="item.active ? 'linear-l-r active-popover' : ''"
            @click="routerPush(item.value, index)"
          >
            <p class="mx-2 text-base font-format">{{ item.label }}</p>
          </div>
        </be-popover>
      </div>
      <!--   产品    -->
      <div class="w-28 cursor-pointer">
        <be-popover
          ref="popoverProduct"
          trigger="hover"
          custom-class="header-popover"
          placement="bottom"
        >
          <template #trigger>
            <div
              class="trigger-item y-full flex items-center font-format text-base hover:text-mainG"
              :class="route.path.indexOf('product') > 0 ? 'item-active' : ''"
            >
              {{ $t('lang.header.product') }}
              <be-icon icon="under" class="ml-2"></be-icon>
            </div>
          </template>
          <div
            v-for="(item, index) in productList"
            :key="item.value"
            class="linear-l-r-s popover-list bg-footer h-10 text-default flex items-center cursor-pointer hover:text-black"
            :class="item.active ? 'linear-l-r active-popover' : ''"
            @click="routerPush(item.value, index)"
          >
            <p class="mx-2 text-base font-format">{{ item.label }}</p>
          </div>
        </be-popover>
      </div>
      <!--   關於我們    -->
      <div
        class="font-format w-28 cursor-pointer text-base hover:text-mainG"
        :class="route.path.indexOf('aboutUs') > 0 ? 'item-active' : ''"
        @click="routerPush('/index/aboutUs')"
      >
        {{ $t('lang.header.aboutUs') }}
      </div>
    </div>
  </div>
  <!--  pc 右侧  -->
  <div
    class="hermit-header-l display-flex justify-end items-center flex-1 text-right sm:hidden"
  >
    <!--    联系    -->
    <be-button custom-class="request-btn text-bold" @click="openDialog">
      <span class="font-format">{{ $t('lang.header.requestUs') }}</span>
    </be-button>
    <!--    登录前    -->
    <div
      v-if="!isLogin"
      class="font-format y-full flex items-center cursor-pointer mr-12 text-base hover:text-mainG"
      @click="routerPush('/login')"
    >
      {{ $t('lang.header.login') }}
    </div>
    <!--    登录后    -->
    <be-popover
      v-if="isLogin"
      ref="popoverLogin"
      trigger="hover"
      custom-class="header-popover"
      placement="bottom"
    >
      <template #trigger>
        <div
          class="trigger-item y-full flex items-center cursor-pointer mr-12 text-base hover:text-mainG"
        >
          <img
            style="width: 30px; height: 30px"
            class="mr-2"
            src="../assets/img/avatar.png"
            alt=""
          />
          <be-icon icon="under"></be-icon>
        </div>
      </template>
      <div
        v-for="(item, index) in loginList"
        :key="item.value"
        class="linear-l-r-s popover-list bg-footer h-10 text-default flex cursor-pointer items-center hover:text-black"
        :class="item.active ? 'linear-l-r active-popover' : ''"
        @click="routerPush(item.value, index)"
      >
        <p class="mx-2 text-base font-format">{{ item.label }}</p>
      </div>
    </be-popover>

    <!--    语言    -->
    <!--        <be-popover  trigger="hover"
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
  <!--  mobile 右侧  -->
  <div class="display-none sm:flex">
    <!--        <be-popover trigger="click"
                    ref="popoverLang"
                    customClass="header-popover" placement="bottom">
            <template #trigger>
                <div class="trigger-item y-full flex items-center cursor-pointer text-base hover:text-mainG">
                    {{ $t('lang.header.language.EN') }}
                    <be-icon icon="under" customClass="ml-2"></be-icon>
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
</template>

<script lang="ts">
import {
  Router,
  useRouter,
  useRoute,
  RouteLocationNormalizedLoaded,
} from 'vue-router'
import { NDrawer, NDrawerContent } from 'naive-ui'
import {
  defineComponent,
  ref,
  getCurrentInstance,
  ComponentInternalInstance,
  onMounted,
} from 'vue'
import { useI18n } from 'vue-i18n'
import { useEventBus } from '@vueuse/core'
import {
  getStore,
  removeStore,
  setSession,
  getSession,
  removeSession,
} from '../utils/common'
import composition from '../utils/mixin/common-func'
interface ISelect {
  label: string
  value: string
  active?: boolean
}
interface IPopover extends ComponentInternalInstance {
  uid: number
  close: Function
}
export default defineComponent({
  name: 'HHeader',
  components: {
    NDrawer,
    NDrawerContent,
  },
  emits: ['changeLang'],
  setup(props, ctx) {
    const { message } = composition(props, ctx)
    const internalInstance = getCurrentInstance()
    const isLogin = ref<boolean>(false)
    /**
     * 跳转方法
     * @param path 路由地址
     * @param index 索引
     */
    const router: Router = useRouter()
    const route: RouteLocationNormalizedLoaded = useRoute()
    const routerPush = (path: string, index?: number): void => {
      ;(index || index === 0) && closePopover(path, index)
      if (/quit/.test(path)) return
      // 主頁
      if (/home/.test(path)) {
        clearActive()
        removeSession('activeItem')
      }
      router.push(path)
    }
    const clearActive = (): void => {
      serviceList.value.map((val: ISelect) => (val.active = false))
      productList.value.map((val: ISelect) => (val.active = false))
    }
    /**
     * 关闭popover
     * @param path 路由地址
     * @param index 索引
     */
    const closePopover = (path: string, index: number): void => {
      clearActive()
      // 服务介绍
      if (/service/.test(path)) {
        serviceList.value[index].active = true
        ;(internalInstance?.refs?.popoverService as IPopover).close()
        setSession(
          'activeItem',
          JSON.stringify({ value: index, key: 'service' })
        )
      }
      // 产品介绍
      if (/product/.test(path)) {
        productList.value[index].active = true
        ;(internalInstance?.refs?.popoverProduct as IPopover).close()
        setSession(
          'activeItem',
          JSON.stringify({ value: index, key: 'product' })
        )
      }
      //用户中心
      if (/user/.test(path)) {
        loginList.value.map((val: ISelect) => (val.active = false))
        loginList.value[index].active = true
        ;(internalInstance?.refs?.popoverLogin as IPopover).close()
        setSession('activeItem', JSON.stringify({ value: index, key: 'user' }))
      }
      // 退出登录
      if (/quit/.test(path)) {
        loginList.value.map((val: ISelect) => (val.active = false))
        ;(internalInstance?.refs?.popoverLogin as IPopover).close()
        removeStore('token')
        removeStore('userInfo')
        isLogin.value = false
        message('success', t('lang.opSuccess'), 'hermit-msg')
        if (/personal/.test(path)) routerPush('index/home')
      }
      if (/lang/.test(path)) {
        langList.value.map((val: ISelect) => (val.active = false))
        langList.value[index].active = true
        ;(internalInstance?.refs?.popoverLang as IPopover).close()
      }
    }
    /**
     * 变换语言
     * @param lang 语言
     * @param index 索引
     */
    const changeLanguage = (lang: string, index: number): void => {
      closePopover('lang', index)
      ctx.emit('changeLang', lang)
    }
    const { t } = useI18n()
    const serviceList = ref<Array<ISelect>>([
      {
        label: t('lang.header.serviceStr.service1'),
        value: '/index/service/contracts',
        active: false,
      },
      {
        label: t('lang.header.serviceStr.service2'),
        value: '/index/service/security',
        active: false,
      },
    ])
    const productList = ref<Array<ISelect>>([
      {
        label: t('lang.header.productStr.product1'),
        value: '/index/product/productVaaS',
        active: false,
      },
      {
        label: t('lang.header.productStr.product2'),
        value: '/index/product/productEagle',
        active: false,
      },
    ])
    const loginList = ref<Array<ISelect>>([
      {
        label: t('lang.header.loginStr.center'),
        value: '/index/user/personal',
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
    // 移動端彈出抽屜菜單
    const active = ref<boolean>(false)
    onMounted(() => {
      if (getStore('token')) {
        isLogin.value = true
      }
      const activeItem: string = getSession('activeItem') as string
      if (!activeItem) return
      const activeIndex: number = parseInt(JSON.parse(activeItem).value)
      if (JSON.parse(activeItem).key === 'user') {
        loginList.value[activeIndex].active = true
      }
      if (JSON.parse(activeItem).key === 'product') {
        productList.value[activeIndex].active = true
      }
      if (JSON.parse(activeItem).key === 'service') {
        serviceList.value[activeIndex].active = true
      }
    })
    return {
      active,
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
  },
})
</script>

<style>
.menu-icon .be-icon {
  fill: #fff;
  @apply w-6 h-6;
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
  background: -moz-linear-gradient(
    left,rgba(93, 232, 176, 1) 0%,rgba(37, 180, 232, 1) 100%
  );
  background: -webkit-linear-gradient(
    left,rgba(93, 232, 176, 1) 0%,rgba(37, 180, 232, 1) 100%
  );
  background: -o-linear-gradient(
    left,rgba(93, 232, 176, 1) 0%,rgba(37, 180, 232, 1) 100%
  );
  background: -ms-linear-gradient(
    left,rgba(93, 232, 176, 1) 0%,rgba(37, 180, 232, 1) 100%
  );
  background: linear-gradient(
    to right,rgba(93, 232, 176, 1) 0%,rgba(37, 180, 232, 1) 100%
  );
}

.linear-l-r.active-popover {
  @apply text-black;
}

.hermit-header-l .request-btn {
  width: 145px;
  height: 34px;
  @apply bg-mainG text-black mr-12;
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
