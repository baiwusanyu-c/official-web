/*
 * @be-notification-type.ts
 * @deprecated
 * @author czh
 * @update (czh 2021/9/8)
 */
import type { ComponentInternalInstance } from 'vue'

export interface INotifyOption {
  isShow?: boolean
  titles?: string
  customClass?: string
  msgType?: string
  offsetTop?: number
  offsetBottom?: number
  placement?: string
  description?: string
  duration?: number
  key?: string
  onClose?: () => void
  onClick?: (e: Event | null) => void
  closeNotify?: (inst: INotfiy, isAll: boolean) => void
  compType?: string
  close?: boolean
  isUpdate?: boolean
  bodyRender?: any
  iconPreRender?: any
  closeRender?: any
  loading?: boolean
  placementSelf?: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: {}
}

export interface ItInstanceMap {
  topLeft?: Array<any>
  topRight?: Array<any>
  bottomLeft?: Array<any>
  bottomRight?: Array<any>
  topCenter?: Array<any>
}

export interface INotfiy extends ComponentInternalInstance {
  uid: number
  el: HTMLElement
}

export interface INotfiyInst {
  notify: INotfiy
  close: Function
}
