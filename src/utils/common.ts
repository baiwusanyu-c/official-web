import {
    isArray,
    isObject,
    toRawType,
} from '@vue/shared'
/**
 * id生成方法
 * @return {string}
 */
export const getUuid = (): string => {
    let s: Array<any> = [];
    let hexDigits: string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i: number = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = "4"
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
    s[8] = s[13] = s[18] = s[23] = "-"
    return s.join("")
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

export const clearTimer = (timer: any) => {
    clearTimeout(timer.value)
    // @ts-ignore
    timer.value = null
}

export function debounce(func: Function, wait: number) {
    let timeout: any;
    return function () {
        const context = this;
        const args = [...arguments];
        if (timeout) clearTimeout(timeout);
        const callNow = !timeout;
        timeout = setTimeout(() => {
            // @ts-ignore
            timeout = null;
        }, wait)
        if (callNow) func.apply(context, args)
    }
}

/**
 * map转数组
 * @param map
 */
export const mapToArr = (map: any): Array<any> => {
    let list = [];
    for (let key of map) {
        list.push(key[1]);
    }
    return list;
};

export const arrDupRemov = (arr: Array<any>, key: string): Array<any> => {
    let newObj:any = {};
    return arr.reduce((preVal, curVal) => {
        newObj[curVal[key]] ? '' : newObj[curVal[key]] = preVal.push(curVal);
        return preVal
    }, [])
};
/**
 * 加法
 */
export const accAdd = (arg1:number, arg2:number):number =>{
    let r1:number, r2:number
    let m:number = 0
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
export const  getMaxDecimalLength = (val:Array<number>):number =>{
    // 最大小数位长度
    let maxDecimalLength = 0
    val.forEach((x) => {
        const strVal = x.toString(),
            dotIndex = strVal.indexOf('.')
        if (dotIndex > -1) {
            // 获取当前值小数位长度
            let curDecimalLength = strVal.length - 1 - dotIndex

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
export const accSub = (arg:Array<number>):number =>{
    let sum:number = 0
    let maxDecimalLength:number = getMaxDecimalLength(arg)
    arg.forEach((x:number, index:number) => {
        let nurVal = Math.round(x * Math.pow(10, maxDecimalLength));

        if (index === 0)
            sum = nurVal
        else
            sum -= nurVal
    })

    return sum / Math.pow(10, maxDecimalLength)
}
/**
 * 校验字符纯数字
 * @param str
 */
export const checkNumber = (str:string):boolean=> {
    let reg = /^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/
    if (reg.test(str)) {
        return true;
    }
    return false;
}
/**
 * 存储
 */
export const setStore = (name:string, content:string) => {
    if (!name) return;
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = (name:string) =>{
    if (!name) return;
    return window.localStorage.getItem(name);
}
// 简单克隆
export const jsonClone = <T>(val: T):T => JSON.parse(JSON.stringify(val))
// 判定布尔
export const isBool = (val: unknown) => typeof val === 'boolean'
// 判定字符串
export const isString = (val: unknown) => (typeof val == 'string') && val.constructor == String;
// 判定数字
export const isNumber = (val: unknown) => typeof val === 'number'
// 判定HTML元素
export const isHTMLElement = (val: unknown) => toRawType(val).startsWith('HTML')
// 判定 是否是方法
export const isFunction = (val: unknown) => Object.prototype.toString.call(val) === '[object Function]'
// 邮箱校验
export const verEmail = (val:string) => {
    return /^(\w)+((\.\w+)|(\-\w+))*@(\w|\-)+((\.\w+)+)$/.test(val)
}
export const formatDate = (timestamp:Date, formats:string) => {
    // formats格式包括
    // 1. Y-m-d
    // 2. Y-m-d H:i:s
    // 3. Y年m月d日
    // 4. Y年m月d日 H时i分
    formats = formats || 'Y-m-d H:i:s';

    let zero = function(value:any) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };

    // console.log(timestamp)

    // var myDate = timestamp ? new Date(timestamp): '';
    let myDate = timestamp ? new Date(timestamp) : null;

    let date = '';
    if (myDate) {
        let year = myDate.getFullYear();
        let month = zero(myDate.getMonth() + 1);
        let day = zero(myDate.getDate());

        let hour = zero(myDate.getHours());
        let minite = zero(myDate.getMinutes());
        let second = zero(myDate.getSeconds());
        date = formats.replace(/Y|m|d|H|i|s/ig, function(matches) {
            return ({
                Y: year,
                m: month,
                d: day,
                H: hour,
                i: minite,
                s: second
            })[matches];
        });
    } else {
        date = '--';
    }

    return date;
};