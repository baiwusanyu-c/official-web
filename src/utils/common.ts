import { isArray, isObject, toRawType } from '@vue/shared'
/**
 * id生成方法
 * @return {string}
 */
export const getUuid = (): string => {
  const s: Array<any> = []
  const hexDigits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4'
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
  s[8] = s[13] = s[18] = s[23] = '-'
  return s.join('')
}

export function isEmpty(val: unknown) {
  if (
    (!val && val !== 0) ||
    (isArray(val) && !val.length) ||
    (isObject(val) && !Object.keys(val).length)
  )
    return true

  return false
}

/**
 * 加法
 */
export const accAdd = (arg1: number, arg2: number): number => {
  let r1: number, r2: number
  let m = 0
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return (arg1 * m + arg2 * m) / m
}
/*
 * 获取小数位数
 */
export const getMaxDecimalLength = (val: Array<number>): number => {
  // 最大小数位长度
  let maxDecimalLength = 0
  val.forEach(x => {
    const strVal = x.toString(),
      dotIndex = strVal.indexOf('.')
    if (dotIndex > -1) {
      // 获取当前值小数位长度
      const curDecimalLength = strVal.length - 1 - dotIndex

      if (curDecimalLength > maxDecimalLength) {
        maxDecimalLength = curDecimalLength
      }
    }
  })
  return maxDecimalLength
}
/**
 * 减法
 */
export const accSub = (arg: Array<number>): number => {
  let sum = 0
  const maxDecimalLength: number = getMaxDecimalLength(arg)
  arg.forEach((x: number, index: number) => {
    const nurVal = Math.round(x * Math.pow(10, maxDecimalLength))

    if (index === 0) sum = nurVal
    else sum -= nurVal
  })

  return sum / Math.pow(10, maxDecimalLength)
}
/**
 * 校验字符纯数字
 * @param str
 */
export const checkNumber = (str: string): boolean => {
  const reg = /^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/
  if (reg.test(str)) {
    return true
  }
  return false
}
/**
 * 存储
 */
export const setStore = (name: string, content: string) => {
  if (!name) return
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = (name: string) => {
  if (!name) return
  return window.localStorage.getItem(name)
}
export const removeStore = (name: string) => {
  if (!name) return
  window.localStorage.removeItem(name)
}
/**
 * 存储
 */
export const setSession = (name: string, content: string) => {
  if (!name) return
  window.sessionStorage.setItem(name, content)
}

/**
 * 获取SessionStorage
 */
export const getSession = (name: string) => {
  if (!name) return
  return window.sessionStorage.getItem(name)
}
export const removeSession = (name: string) => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}
// 简单克隆
export const jsonClone = <T>(val: T): T => JSON.parse(JSON.stringify(val))
// 判定布尔
export const isBool = (val: unknown) => typeof val === 'boolean'
// 判定字符串
export const isString = (val: unknown) => typeof val == 'string' && val.constructor == String
// 判定数字
export const isNumber = (val: unknown) => typeof val === 'number'
// 判定HTML元素
export const isHTMLElement = (val: unknown) => toRawType(val).startsWith('HTML')
// 判定 是否是方法
export const isFunction = (val: unknown) =>
  Object.prototype.toString.call(val) === '[object Function]'
// 邮箱校验
export const verEmail = (val: string) => {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val)
}
export const formatDate = (timestamp: string | Date, formats?: string):string => {
  // formats格式包括
  // 1. Y-m-d
  // 2. Y-m-d H:i:s
  // 3. Y年m月d日
  // 4. Y年m月d日 H时i分
  formats = formats || 'Y-m-d H:i:s'

  const zero = function (value: any) {
    if (value < 10) {
      return '0' + value
    }
    return value
  }

  // console.log(timestamp)

  // var myDate = timestamp ? new Date(timestamp): '';
  const myDate = timestamp ? new Date(timestamp) : null

  let date = ''
  if (myDate) {
    const year = myDate.getFullYear()
    const month = zero(myDate.getMonth() + 1)
    const day = zero(myDate.getDate())

    const hour = zero(myDate.getHours())
    const minite = zero(myDate.getMinutes())
    const second = zero(myDate.getSeconds())
    date = formats.replace(/Y|m|d|H|i|s/gi, function (matches) {
      return {
        Y: year,
        m: month,
        d: day,
        H: hour,
        i: minite,
        s: second,
      }[matches]
    })
  } else {
    date = '--'
  }

  return date
}
export const createDate = function createDate(dateStr?: string | Date | number) {
  if (dateStr instanceof Date) {
    return dateStr
  }
  if (dateStr && dateStr.constructor === String) {
    // 替换成ie支持的字符串
    return uaMatch(navigator.userAgent.toLowerCase()).browser !== 'IE'
      ? new Date(dateStr)
      : new Date(dateStr.replace(/-/g, '/').replace('.000+0000', ''))
  } else if (dateStr && dateStr.constructor === Number) {
    return new Date(dateStr)
  } else {
    return new Date()
  }
}
/**
 * 判断操作系统
 */
export const detectOS = (): string => {
  const sUserAgent = navigator.userAgent
  const isWin: boolean = navigator.platform == 'Win32' || navigator.platform == 'Windows'
  const isMac: boolean =
    navigator.platform == 'Mac68K' ||
    navigator.platform == 'MacPPC' ||
    navigator.platform == 'Macintosh' ||
    navigator.platform == 'MacIntel'
  if (isMac) return 'Mac'
  const isUnix: boolean = navigator.platform == 'X11' && !isWin && !isMac
  if (isUnix) return 'Unix'
  const isLinux: boolean = String(navigator.platform).indexOf('Linux') > -1
  if (isLinux) return 'Linux'
  if (isWin) {
    const isWin2K: boolean =
      sUserAgent.indexOf('Windows NT 5.0') > -1 || sUserAgent.indexOf('Windows 2000') > -1
    if (isWin2K) return 'Win2000'

    const isWinXP: boolean =
      sUserAgent.indexOf('Windows NT 5.1') > -1 || sUserAgent.indexOf('Windows XP') > -1
    if (isWinXP) return 'WinXP'

    const isWin2003: boolean =
      sUserAgent.indexOf('Windows NT 5.2') > -1 || sUserAgent.indexOf('Windows 2003') > -1
    if (isWin2003) return 'Win2003'

    const isWinVista: boolean =
      sUserAgent.indexOf('Windows NT 6.0') > -1 || sUserAgent.indexOf('Windows Vista') > -1
    if (isWinVista) return 'WinVista'

    const isWin7: boolean =
      sUserAgent.indexOf('Windows NT 6.1') > -1 || sUserAgent.indexOf('Windows 7') > -1
    if (isWin7) return 'Win7'

    const isWin10: boolean =
      sUserAgent.indexOf('Windows NT 10.0') > -1 || sUserAgent.indexOf('Windows 10') > -1
    if (isWin10) return 'isWin10'
  }
  return 'other'
}
interface IUaMatch {
  browser: string
  version:string
}
export function uaMatch(ua: string):IUaMatch {
  const rMsie = /(msie\s|trident.*rv:)([\w.]+)/
  const rFirefox = /(firefox)\/([\w.]+)/
  const rOpera = /(opera).+version\/([\w.]+)/
  const rChrome = /(chrome)\/([\w.]+)/
  const rSafari = /version\/([\w.]+).*(safari)/

  let match = rMsie.exec(ua)
  if (match != null) {
    return { browser: 'IE', version: match[2] || '0' }
  }
  match = rFirefox.exec(ua)
  if (match != null) {
    return { browser: match[1] || '', version: match[2] || '0' }
  }
  match = rOpera.exec(ua)
  if (match != null) {
    return { browser: match[1] || '', version: match[2] || '0' }
  }
  match = rChrome.exec(ua)
  if (match != null) {
    return { browser: match[1] || '', version: match[2] || '0' }
  }
  match = rSafari.exec(ua)
  if (match != null) {
    return { browser: match[2] || '', version: match[1] || '0' }
  }
  return { browser: '', version: '0' }
}


//北京时间转UTC时间
export const beijing2utc = (now: number | string, formats?: string):string => {
  let timestamp
  // 处理成为时间戳
  if (typeof now == 'number') {
    timestamp = createDate(now)
  } else {
    timestamp = createDate(Date.parse(now))
  }
  timestamp = timestamp.getTime()
  timestamp = timestamp / 1000

  // 增加8个小时，北京时间比utc时间多八个时区
  timestamp = timestamp + createDate().getTimezoneOffset() * 60
  // 时间戳转为时间
  // var utc_datetime = new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
  const tempTime = parseInt(timestamp.toString()) * 1000
  return formatDate(createDate(tempTime).toString(), formats)
}

export const dateToMDY = (params:string):string =>{
  let date:Date = createDate(beijing2utc(params))
  let month:number = date.getMonth() + 1
  let day:number = date.getDate()
  let year:number = date.getFullYear()
  const MONTH_LIST:Array<string> = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Ay',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  return `${MONTH_LIST[month - 1]} ${day}, ${year}`
}
