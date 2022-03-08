/*
 * @be-icon.d.ts
 * @deprecated
 * @author czh
 * @update (czh 2021/9/29)
 */
import { ComponentInternalInstance } from 'vue'

export interface IDialog extends ComponentInternalInstance {
  uid: number
  addRef: Function
  hide: Function
  clientWidth: number
  clientHeight: number
  install?: Function
  proxy: any
  name: string
}
