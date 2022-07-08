import { default as BeEllipsis } from './package/ellipsis' // 全局、按需
import { default as BeTag } from './package/tag' // 全局、按需
// export { default as BeTooltip } from './package/tooltip' // 全局、按需
import { default as BeButton } from './package/button' // 全局、按需
import { default as BeIcon } from './package/svg-icon' // 全局、按需
import { default as BePopover } from './package/popover' // 全局、按需
// export { default as BeProgress } from './package/progress' // 全局、按需
import { default as BeDialog } from './package/dialog' // 全局、按需
import { default as BeInput } from './package/input' // 全局、按需
// plugins
// export { default as BeNotification } from './package/notification' // 服务
// export { default as BeMessage } from './package/message' // 服务
// export { default as BeMsg } from './package/message-box' // 服务
// 指令
// export { ClickOutside } from './utils/direactives/click-outside'
// export { dragDirective } from './utils/direactives/drag-directives'
export default {
  install(vue) {
    vue.use(BeEllipsis)
    vue.use(BeButton)
    vue.use(BeIcon)
    vue.use(BePopover)
    vue.use(BeDialog)
    vue.use(BeInput)
  },
}
export { BeEllipsis, BeTag, BeButton, BeIcon, BePopover, BeDialog, BeInput }
