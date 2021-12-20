/*
* @register-account.vue
* @deprecated
* @author czh
* @update (czh 2021/12/17)
*/
<template>
    <div class="flex flex-col items-start w-full">
        <img src="../../assets/img/logo-black.png" class='mb-2 w-1/2' alt=""/>
        <!--  账户      -->
        <h3 class="text-2xl font-bold mb-2">{{$t('lang.login.registerTxt')}}</h3>
        <div class='mb-8 h-24 border-b w-full'>
            <span class="text-gray-500 mr-4">{{$t('lang.login.account')}}</span>
            <input type="text" class='h-16'
                   :placeholder="$t('lang.login.tipAccount')"
                   v-model="form.account"/>
        </div>

        <!--  密码      -->
        <div class='login-password mb-2 h-24 border-b w-full flex items-center '>
            <span class="text-gray-500 mr-4 flex-grow-0">{{$t('lang.login.password')}}</span>
            <input class='flex-grow h-16' :type="isShowPassword" :placeholder="$t('lang.login.tipPassword')" v-model="form.password"/>
            <be-icon :icon="isShowPassword === 'password' ? 'noEye' : 'eye'"
                     customClass="flex-grow-0"
                     @click="changeShowPWord"></be-icon>
        </div>

        <p class="mb-8 text-gray-500">
            <span style="color: red">*</span>
            {{$t('lang.login.tip')}}
        </p>
        <!--  邮箱验证      -->
        <div class='mb-8 flex w-full'>
            <input type="text" v-model="form.verification_code" class="border h-12 flex-1"/>
            <div class="bg-mainG cursor-pointer flex items-center justify-center w-32" @click="verifyCodeMail">
                <img src="../../assets/img/send-vr-code.png" alt=""/>
            </div>
        </div>
        <be-button @click="register"
                   size="large"
                   customClass="login-btn linear-l-r text-black font-bold text-lg w-full mb-8 mx-auto">
            {{$t('lang.login.register')}}
        </be-button>
        <be-button size="large"
                   bordered
                   @click="changeShow('login')"
                   customClass="login-btn text-black font-bold text-lg w-80 mb-6 w-full mx-auto border-mainG">
            {{$t('lang.login.login')}}
        </be-button>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {registerAccount, verifyCode,IMailCode,IRegister} from "../../api/login";
import {BeMessage} from '../../../public/be-ui/be-ui.es.js'
import {useI18n} from "vue-i18n";
import {verEmail} from "../../utils/common";
export default defineComponent({
    name: "RegisterAccount",
    emits: [
        'showChange',
    ],
    setup(props,ctx) {
        const message = BeMessage.service
        const form = ref<IRegister>({})
        const isShowPassword = ref<string>('password')
        const {t} = useI18n()
        /**
         * 密码显示
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
            if(!form.value.account){
                tipStr = t('lang.login.tipAccount')
                verMsg(tipStr)
                return false
            }
            if(!verEmail(String(form.value.account))){
                tipStr = t('lang.login.tipErrEmail')
                verMsg(tipStr)
                return false
            }
            if(!form.value.account){
                tipStr = t('lang.login.tipAccount')
                verMsg(tipStr)
                return false
            }
            if(!form.value.password){
                tipStr = t('lang.login.tipPassword')
                verMsg(tipStr)
                return false
            }
            if(!form.value.verification_code){
                tipStr = t('lang.login.tipVerCode')
                verMsg(tipStr)
                return false
            }
            return true
        }
        /**
         * 邮箱验证码发送
         */
        const verifyCodeMail = ():void =>{
            if(!form.value.account){
                message({
                    titles: t('lang.tipAccount'),
                    msgType: 'warning',
                    duration: 1500,
                    offsetTop:80,
                    close: true,
                })
                return
            }
            const params:IMailCode = {
                userName:String(form.value.account)
            }
            verifyCode(params).then((res:any)=>{
                if(res.code === 200){
                    message({
                        titles: t('lang.sendSuccess'),
                        msgType: 'success',
                        duration: 1500,
                        offsetTop:80,
                        close: true,
                    })
                }

            }).catch(err=>{
                message({
                    titles: t('lang.sendFailed'),
                    msgType: 'warning',
                    duration: 1500,
                    offsetTop:80,
                    close: true,
                })
                console.error(err)
            })
        }
        /**
         * 注册方法
         */
        const register = ():void =>{
            if(!verifyCodeForm()) return
            registerAccount(form.value).then((res:any)=>{
                if(res.code === 200){
                    message({
                        titles: t('lang.opSuccess'),
                        msgType: 'success',
                        duration: 1500,
                        offsetTop:80,
                        close: true,
                    })
                    changeShow('login')
                }

            }).catch(err=>{
                message({
                    titles: t('lang.opFailed'),
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
        return {
            changeShow,
            isShowPassword,
            form,
            changeShowPWord,
            verifyCodeMail,
            register
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
    .login-btn:hover{
        border-color:#02fbbb;
        color:#02fbbb;
    }
    .login-password .be-icon{
        width: 60px;
        height: 30px;
    }
</style>