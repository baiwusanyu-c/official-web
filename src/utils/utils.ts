/*
 * @utils.ts
 * @deprecated
 * @author czh
 * @update (czh 2022/2/21)
 */

import { nextTick } from 'vue'

export function asyncExpect(fn: Function, timeout: number | null) {
  return new Promise((resolve: Function) => {
    if (typeof timeout === 'number') {
      setTimeout(() => {
        fn()
        resolve()
      }, timeout)
    } else {
      nextTick(() => {
        fn()
        resolve()
      })
    }
  })
}
