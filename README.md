使用CssVar#
操作 CSS 变量

用法#
import { useCssVar } from '@vueuse/core'

const el = ref(null)
const color = useCssVar('--color', el)

使用深色#
具有自动数据持久性的反应暗模式。

基本用法#
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)


使用事件监听器#
轻松使用 EventListener。在挂载时使用addEventListener注册，在卸载时使用removeEventListener自动注册。

用法#
import { useEventListener } from '@vueuse/core'

useEventListener(document, 'visibilitychange', (evt) => { console.log(evt) })


使用视差#
轻松创建视差效果。如果不支持方向，它会使用useDeviceOrientation并回退useMouse。

用法#
<div ref='container'>
</div>
import { useParallax } from '@vueuse/core'

export default {
setup() {
const container = ref(null)
const { tilt, roll, source } = useParallax(container)

    return {
      container,
    }
},
}


使用窗口大小#
反应窗口大小

用法#
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

使用ResizeObserver#
报告元素内容或边框尺寸的变化

用法#
````
<template>
  <div ref="el">
    {{text}}
  </div>
</template>

<script>
import { ref } from 'vue'
import { useResizeObserver } from '@vueuse/core'

export default {
  setup() {
    const el = ref(null)
    const text = ref('')

    useResizeObserver(el, (entries) => {
      const entry = entries[0]
      const { width, height } = entry.contentRect
      text.value = `width: ${width}, height: ${height}`
    })

    return {
      el,
      text,
    }
  }
})
</script>

````
√ 1.登录接口  
2.报告 搜索  
√ 3.首页背景图 - djd
√ 4.波纹背景图 
√ 5.联系我们校验  
√ 6.首页swiper文案  
7.产品截图
√ 8.group 连接 
9.about-us Community 连接   缺github\facebook\?
√ 10.首頁蘑菇跳轉 - djd  
11.合约报告 swiper  