/*
* @common-func.ts
* @deprecated 
* @author czh
* @update (czh 2021/12/24)
*/
import {Router, useRouter} from "vue-router";
import {ref} from "vue";
import {getCodeImg} from "../../api/login";
import {BeMessage} from "../../../public/be-ui/be-ui.es";

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
            duration: 1500,
            offsetTop:80,
            close: true,
        })
    }
    return{
        message,
        codeUrl,
        getCode,
        routerPush,
        openWin
    }
}