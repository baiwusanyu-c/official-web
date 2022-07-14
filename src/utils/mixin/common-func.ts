/*
 * @common-func.ts
 * @deprecated
 * @author czh
 * @update (czh 2021/12/24)
 */
import { Router, RouteLocationNormalizedLoaded, useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { getCodeImg } from '../../api/login'

// @ts-ignore
import { Ref } from '@vue/reactivity'
export default () => {
  /**
   * 打開窗口
   */
  const openWin = (url: string, winName: string, cb?: Function): void => {
    if (cb) {
      cb()
    }
    window.open(url, winName ? winName : url)
  }
  /**
   * 跳转方法
   * @param path 路由地址
   */
  const router: Router = useRouter()
  const route: RouteLocationNormalizedLoaded = useRoute()
  const routerPush = (path: string): void => {
    router.push(path)
  }
  /**
   * 获取登录验证码
   */
  const codeUrl = ref<string>('')
  const uuid = ref<string>('')
  const getCode = (): void => {
    getCodeImg().then((res: any) => {
      uuid.value = res.uuid
      codeUrl.value = 'data:image/gif;base64,' + res.img
    })
  }
  const message = (type: string, info: string, className: string): void => {
    // import('../../../public/be-ui/be-ui.es').then(res =>
    //   res.BeMessage.service({
    //     customClass: className,
    //     titles: info,
    //     msgType: type,
    //     duration: 2500,
    //     offsetTop: 80,
    //     close: false,
    //   })
    // )
  }
  /**
   * 開啓定時器，進行數字滾動
   * @param initVal
   * @param max
   * @param step
   */
  const startTimer = (initVal: Ref, max: number, step: number): void => {
    const timer = setInterval(() => {
      initVal.value = initVal.value + step
      if (initVal.value >= max) {
        initVal.value = max
        clearInterval(timer)
      }
    }, 200)
  }
  return {
    startTimer,
    uuid,
    router,
    route,
    message,
    codeUrl,
    getCode,
    routerPush,
    openWin,
  }
}
