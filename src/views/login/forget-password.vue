/*
* @forget-password.vue
* @deprecated
* @author czh
* @update (czh 2021/12/17)
*/

<template>
    <div class="flex flex-col items-start w-full">
        <img src="src/assets/img/logo-black.png" class='mb-4 w-1/2' alt=""/>
        <!--  账户      -->
        <h3 class="text-2xl font-bold mb-2">{{$t('lang.login.registerTxt')}}</h3>
        <div class='mb-2 h-24 border-b w-full'>
            <span class="text-gray-500 mr-4">{{$t('lang.login.account')}}</span>
            <input type="text" class='h-16'  :placeholder="$t('lang.login.tipAccount')" v-model="form.account"/>
        </div>
        <!--  密码      -->
        <div class='login-password mb-2 h-24 border-b w-full flex items-center '>
            <span class="text-gray-500 mr-4 flex-grow-0">{{$t('lang.login.password')}}</span>
            <input class='flex-grow h-16'
                   :placeholder="$t('lang.login.tipPassword')"
                   :type="isShowPassword" v-model="form.password"/>
            <be-icon :icon="isShowPassword === 'password' ? 'noEye' : 'eye'"
                     customClass="flex-grow-0"
                     @click="changeShowPWord('confirm')"></be-icon>
        </div>
        <!--  确认密码      -->
        <div class='login-password mb-2 h-24 border-b w-full flex items-center '>
            <span class="text-gray-500 mr-4 flex-grow-0">{{$t('lang.login.password')}}</span>
            <input class='flex-grow h-16'
                   :type="isShowPassword"
                   :placeholder="$t('lang.login.tipPasswordConfirm')"
                   v-model="form.re_password"/>
            <be-icon :icon="isShowPasswordConfirm === 'password' ? 'noEye' : 'eye'"
                     customClass="flex-grow-0"
                     @click="changeShowPWord('unConfirm')"></be-icon>
            <!--       no-eye     -->
        </div>
        <p class="mb-4 text-gray-500">
            <span style="color: red">*</span>
            {{$t('lang.login.tip')}}
        </p>
        <!--  邮箱验证      -->
        <div class='mb-4 flex w-full'>
            <input type="text" v-model="form.verification_code" class="border h-12 flex-1"/>
            <div class="bg-mainG cursor-pointer flex items-center justify-center w-32" @click="verifyCodeMail">
                <img src="src/assets/img/send-vr-code.png" alt=""/>
            </div>
        </div>
        <be-button @click="register"
                   size="large"
                   customClass="login-btn linear-l-r text-black font-bold text-lg w-full mb-4 mx-auto">
            {{$t('lang.login.register')}}
        </be-button>
        <be-button size="large"
                   bordered
                   customClass="login-btn text-black font-bold text-lg w-80 mb-6 w-full mx-auto border-mainG">
            {{$t('lang.login.login')}}
        </be-button>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {forgetPassword, verifyCodePassword,IMailCode,IForgetPassword} from "../../api/login";
import {BeMessage} from '../../../public/be-ui/be-ui.es.js'
import {useI18n} from "vue-i18n";
export default defineComponent({
    name: "ForgetPassword",
    setup() {
        const message = BeMessage.service
        const form = ref<IForgetPassword>({})
        const isShowPassword = ref<string>('password')
        const isShowPasswordConfirm = ref<string>('password')
        const {t} = useI18n()
        /**
         * 密码显示
         */
        const changeShowPWord = (type:string):void =>{
            if(isShowPassword.value === 'password' && type === 'unConfirm'){
                isShowPassword.value = 'text'
            }
            if(isShowPassword.value === 'text' && type === 'unConfirm'){
                isShowPassword.value = 'password'
            }
            if(isShowPasswordConfirm.value === 'password' && type === 'confirm'){
                isShowPasswordConfirm.value = 'text'
            }
            if(isShowPasswordConfirm.value === 'text' && type === 'confirm'){
                isShowPasswordConfirm.value = 'password'
            }
        }
        /**
         * 表单校验
         */
        const verifyCodeForm = ():void =>{

        }
        /**
         * 邮箱验证码发送
         */
        const verifyCodeMail = ():void =>{
            const params:IMailCode = {
                userName:String(form.value.account)
            }
            verifyCodePassword(params).then((res:unknown)=>{
                debugger
                message({
                    titles: t('lang.sendSuccess'),
                    msgType: 'success',
                    duration: 1500,
                    close: true,
                })
            }).catch(err=>{
                message({
                    titles: t('lang.sendFailed'),
                    msgType: 'warning',
                    duration: 1500,
                    close: true,
                })
                console.error(err)
            })
        }
        /**
         * 注册方法
         */
        const register = ():void =>{
            verifyCodeForm()
            forgetPassword(form.value).then((res:unknown)=>{
                message({
                    titles: t('lang.opSuccess'),
                    msgType: 'success',
                    duration: 1500,
                    close: true,
                })
            }).catch(err=>{
                message({
                    titles: t('lang.opFailed'),
                    msgType: 'warning',
                    duration: 1500,
                    close: true,
                })
                console.error(err)
            })
        }
        return {
            isShowPassword,
            isShowPasswordConfirm,
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