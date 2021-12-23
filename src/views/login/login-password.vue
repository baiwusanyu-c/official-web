/*
* @login-password.vue
* @deprecated
* @author czh
* @update (czh 2021/12/17)
*/
<template>
    <div class="flex flex-col items-start w-full">
        <img src="../../assets/img/logo-green-black.png" class='mb-8 w-1/2' alt=""/>
        <div class="flex flex-col items-start w-full flex-grow">
            <!--  账户      -->
            <div class='mb-2 h-14 border-b w-full'>
                <span class="text-gray-500 mr-4 font-format">{{$t('lang.login.account')}}</span>
                <input type="text"
                       class='w-9/12 font-format'
                       :placeholder="$t('lang.login.tipAccount')"
                       v-model="form.username"/>
            </div>

            <!--  密码      -->
            <div class='login-password mb-2 h-24 border-b w-full flex items-center '>
                <span class="text-gray-500 mr-4 flex-grow-0 font-format">{{$t('lang.login.password')}}</span>
                <input class='flex-grow font-format'
                       :type="isShowPassword"
                       :placeholder="$t('lang.login.tipPassword')"
                       v-model="form.password"/>
                <be-icon :icon="isShowPassword === 'password' ? 'noEye' : 'eye'"
                         customClass="flex-grow-0"
                         @click="changeShowPWord"></be-icon>
                <!--       no-eye     -->
            </div>
            <!--  數字驗證碼      -->
            <div class='mt-8 flex w-full'>
                <input type="text" v-model="form.code" class="border h-12 flex-1 font-format"/>
                <div class="bg-mainG cursor-pointer flex items-center justify-center w-32" @click="getCode">
                    <img :src="codeUrl" alt=""/>
                </div>
            </div>
        </div>
        <be-button @click="login" size="large"
                   customClass="login-btn linear-l-r text-black font-bold text-lg w-full mb-8 mx-auto">
           <span class="font-format">{{$t('lang.login.login')}}</span>
        </be-button>
        <div class="flex items-center justify-between w-full">
            <p class="text-gray-500 cursor-pointer font-format" style="text-decoration:underline" @click="changeShow('forget')">{{$t('lang.login.forget')}} </p>
            <p class="text-gray-500 cursor-pointer font-format" style="text-decoration:underline" @click="changeShow('register')"> {{$t('lang.login.register')}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {loginAccount, ILogin, getCodeImg} from "../../api/login";
import {BeMessage} from '../../../public/be-ui/be-ui.es.js'
import {setStore} from "../../utils/common";
import {useI18n} from "vue-i18n";
import {verEmail} from "../../utils/common";
import {Router, useRouter} from "vue-router";
import {Base64} from 'js-base64';
export default defineComponent({
    name: "LoginPassword",
    emits: [
        'showChange',
    ],
    setup(props,ctx) {
        const message = BeMessage.service
        const form = ref<ILogin>({})
        const isShowPassword = ref<string>('password')
        const {t} = useI18n()
        /**
         * 密碼顯示
         */
        const changeShowPWord = ():void =>{
            if(isShowPassword.value === 'password'){
                isShowPassword.value = 'text'
            }else{
                isShowPassword.value = 'password'
            }
        }
        /**
         * 校验提示
         */
        const verMsg = (tipStr:string):void =>{
            message({
                customClass:'hermit-msg',
                titles: tipStr,
                msgType: 'warning',
                duration: 1500,
                offsetTop:80,
                close: true,
            })
        }
        /**
         * 表单校验
         */
        const verifyCodeForm = ():boolean =>{
            let tipStr = ''
            if(!form.value.username){
                tipStr = t('lang.login.tipAccount')
                verMsg(tipStr)
                return false
            }
            if(!verEmail(String(form.value.username))){
                tipStr = t('lang.login.tipErrEmail')
                verMsg(tipStr)
                return false
            }
            if(!form.value.password){
                tipStr = t('lang.login.tipPassword')
                verMsg(tipStr)
                return false
            }
            return true
        }
        /**
         * 登錄方法
         */
        const router: Router = useRouter()
        const login = ():void =>{
            if(!verifyCodeForm()) return
            const params:ILogin = {
                username: String(form.value.username),
                password:Base64.encode(form.value.password as string),
                client_id: 'official_site_sg_system',
                client_secret: 'uZtik#Iu8D',
                grant_type: 'password',
                scope: 'server',
                code: form.value.code,
                uuid:form.value.uuid,
                login_type:'password',

            }
            loginAccount(params).then((res:any)=>{
                message({
                    customClass:'hermit-msg',
                    titles: t('lang.loginSuccess'),
                    msgType: 'success',
                    duration: 1500,
                    offsetTop:80,
                    close: true,
                })
                setStore('token',res.access_token)
                setStore('userInfo', JSON.stringify(res))

                router.push('/index/home')
            }).catch(err=>{
                message({
                    customClass:'hermit-msg',
                    titles:err.message,
                    msgType: 'warning',
                    duration: 1500,
                    offsetTop:80,
                    close: true,
                })
                console.error(err)
            })
        }
        /**
         * 切換顯示
         */
        const  changeShow = (type:string):void=>{
            ctx.emit('showChange',type)
        }
        /**
         * 获取登录验证码
         */
        const codeUrl = ref<string>('')
        const  getCode = ():void=>{
            getCodeImg().then((res:any) => {
                form.value.uuid = res.uuid;
                codeUrl.value = "data:image/gif;base64," + res.img;
            });
        }
        onMounted(()=>{
            getCode()
        })
        return {
            codeUrl,
            changeShow,
            isShowPassword,
            form,
            changeShowPWord,
            login,
            getCode
        }
    }
})
</script>

<style>
#login_form .login-btn,
#login_form .login-btn .be-button-body{
  height: 50px;
  line-height: 50px;
  color:black
}

#login_form .login-btn .be-button-body:hover,
#login_form .login-btn:hover{
  color:#02fbbb;
  border-color:#02fbbb;
}

.login-password .be-icon{
  width: 60px;
  height: 30px;
}
</style>