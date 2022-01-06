/*
* @common-func.ts
* @deprecated 
* @author czh
* @update (czh 2021/12/24)
*/
import {Router, useRouter} from "vue-router";
import {ref} from "vue";
import {getCodeImg} from "../../api/login";

// @ts-ignore
import {BeMessage} from "../../../public/be-ui/be-ui.es.js";
import {Ref} from "@vue/reactivity";
export default (props: any, ctx: any) => {
    /**
     * 打開窗口
     */
    const openWin = (url:string,winName:string,cb:Function):void =>{
        if(cb){cb()}
        window.open(url, winName?winName:url)
    }
    /**
     * 跳转方法
     * @param path 路由地址
     */
    const router: Router = useRouter()
    const routerPush = (path: string): void => {
        router.push(path)
    }
    /**
     * 获取登录验证码
     */
    const codeUrl = ref<string>('')
    const  getCode = (formData:any):void=>{
        getCodeImg().then((res:any) => {
            formData.uuid = res.uuid;
            codeUrl.value = "data:image/gif;base64," + res.img;
        });
    }
    const message = (type:string,info:string,className:string):void =>{
        BeMessage.service({
            customClass:className,
            titles: info,
            msgType: type,
            duration: 2500,
            offsetTop:80,
            close: true,
        })
    }
    /**
     * 開啓定時器，進行數字滾動
     * @param initVal
     * @param max
     * @param setp
     */
    const startTimer = (initVal:Ref,max:number,step:number):void =>{
        let timer = setInterval(()=>{
            initVal.value = initVal.value + step
            if(initVal.value >= max){
                initVal.value = max
                clearInterval(timer)
            }
        },200)
    }
    return{
        startTimer,
        message,
        codeUrl,
        getCode,
        routerPush,
        openWin
    }
}