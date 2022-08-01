<template>
  <div id="hermit_app_main" class="w-full h-full absolute inset-0">
    <router-view v-slot="{ Component }">
      <Suspense>
        <!-- 主要内容 -->
        <component :is="Component"></component>

        <!-- 加载中状态 -->
        <template #fallback>正在加载...</template>
      </Suspense>
    </router-view>
    <n-drawer
      v-if="!ssr"
      v-model:show="showTip"
      style="background: #2e3037"
      :block-scroll="false"
      :show-mask="false"
      :mask-closable="false"
      height="auto"
      placement="bottom">
      <div class="drawer-content">
        <p class="content">
          Beosin and its partners use cookies during your navigation on this site to ensure proper
          functioning of the website, measure its audience and performance. By remaining on this
          website, you consent to our use of cookies.
        </p>
        <n-button color="#fff" text-color="#2e3037" @click="handleAccept">I Accept</n-button>
      </div>
    </n-drawer>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import { NDrawer, NButton } from 'naive-ui'

  const isShowAcceptTip = () => {
    const currentIp = (window as any).returnCitySN['cip']
    const currentDate: number = new Date().getTime()
    const localUser = localStorage.getItem('localUser')
      ? JSON.parse(localStorage.getItem('localUser') as any)
      : {}
    const lastDate: number = localUser.date
    const lastIp = localUser.ip
    const accept = localUser.accept
    if (!lastIp || currentIp !== lastIp) {
      return true
    }
    if (!accept) {
      return true
    }
    if (currentDate - lastDate > 86400) {
      return true
    }
    return false
  }
  export default defineComponent({
    name: 'AppEnter',
    components: { NDrawer, NButton },
    setup() {
      const showTip = ref(false)

      onMounted(() => {
        if (isShowAcceptTip()) {
          showTip.value = true
        }
      })

      const handleAccept = () => {
        const updateLocalUser = {
          ip: (window as any).returnCitySN['cip'],
          date: new Date().getTime(),
          accept: true,
        }
        localStorage.setItem('localUser', JSON.stringify(updateLocalUser))
        showTip.value = false
      }

      // !import.meta.env.SSR &&
      //   setTimeout(() => {
      //     console.log((window as any).returnCitySN)
      //   })

      return {
        showTip,
        handleAccept,
        ssr: import.meta.env.SSR,
      }
    },
  })
</script>
<style lang="less" scoped>
  .drawer-content {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    .content {
      flex: 1;
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 13px;
      margin-right: 20px;
    }
  }
</style>
<!-- prettier-ignore -->
<style>
  @import 'assets/css/animate.css';
  @import 'assets/css/common.css';

  #hermit_app_main {
    min-width: 1220px;
  }

  @media screen and (min-width: 100px) and (max-width: 1278px) {

    #hermit_app_main {
      min-width: initial;
    }
  }
</style>
