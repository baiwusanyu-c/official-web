/*
* @register-account.vue
* @deprecated
* @author czh
* @update (czh 2021/12/17)
*/
<template>
    <div class="flex flex-col items-start w-full">
        <img src="../../assets/img/logo-green-black.png" class='mb-2 w-1/2' alt=""/>
        <!--  账户      -->
        <h3 class="text-2xl font-bold mb-2 font-format">{{$t('lang.login.registerTxt')}}</h3>
        <div class='mb-8 h-24 border-b w-full md:mb-4 lg:mb-4'>
            <span class="text-gray-500 mr-4 font-format">{{$t('lang.login.account')}}</span>
            <input type="text" class='login-input h-16 w-9/12 md:h-14 lg:h-14'
                   :placeholder="$t('lang.login.tipAccount')"
                   v-model="form.account"/>
        </div>

        <!--  密码      -->
        <div class='login-password mb-2 h-24 border-b w-full flex items-center '>
            <span class="text-gray-500 mr-4 flex-grow-0 font-format">{{$t('lang.login.password')}}</span>
            <input class='login-input flex-grow h-16 w-9/12 font-format md:h-14 lg:h-14' :type="isShowPassword" :placeholder="$t('lang.login.tipPassword')" v-model="form.password"/>
            <be-icon :icon="isShowPassword === 'password' ? 'noEye' : 'eye'"
                     customClass="flex-grow-0"
                     @click="changeShowPWord"></be-icon>
        </div>

        <p class="mt-4 mb-2 text-gray-500 font-format md:mb-t lg:mb-t">
            <span style="color: red">*</span>
            {{$t('lang.login.tip')}}
        </p>
        <!--  邮箱验证      -->
        <div class='mb-8 flex w-full md:mb-4'>
            <input type="text" v-model="form.verification_code" class="w-9/12 login-input border h-12 flex-1 font-format"/>
            <div class="bg-mainG cursor-pointer flex items-center justify-center w-32" @click="verifyCodeMail">
                <img src="../../assets/img/send-vr-code.png" alt=""/>
            </div>
        </div>
        <be-button @click="register"
                   size="large"
                   customClass="login-btn linear-l-r text-black font-bold text-lg w-full mb-8 mx-auto md:mb-4 lg125:mb-4">
           <span class="font-format">{{$t('lang.login.register')}}</span>
        </be-button>
        <be-button size="large"
                   bordered
                   @click="changeShow('login')"
                   customClass="login-btn text-black font-bold text-lg mb-6 w-full mx-auto border-mainG">
            <span class="font-format">{{$t('lang.login.login')}}</span>
        </be-button>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {registerAccount, verifyCode,IMailCode,IRegister} from "../../api/login";
import {useI18n} from "vue-i18n";
import {verEmail} from "../../utils/common";
import composition from "../../utils/mixin/common-func";
import {Base64} from "js-base64";
export default defineComponent({
    name: "RegisterAccount",
    emits: [
        'showChange',
    ],
    setup(props,ctx) {
        const {message} = composition(props, ctx)
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
            message('warning',tipStr,'hermit-msg')
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
                message('warning',t('lang.login.tipAccount'),'hermit-msg')
                return
            }
            const params:IMailCode = {
                userName:String(form.value.account)
            }
            verifyCode(params).then((res:any)=>{
                if(res.code === 200){
                    message('success',t('lang.sendSuccess'),'hermit-msg')
                }

            }).catch(err=>{
                message('warning',err.message,'hermit-msg')
                console.error(err)
            })
        }
        /**
         * 注册方法
         */
        const register = ():void =>{
            if(!verifyCodeForm()) return
            form.value.password = Base64.encode(form.value.password as string)
            registerAccount(form.value).then((res:any)=>{
                if(res.code === 200){
                    message('success',t('lang.opSuccess'),'hermit-msg')
                    changeShow('login')
                }

            }).catch(err=>{
                message('warning',err.message,'hermit-msg')
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
    color:#02fbbb;
    border-color:#02fbbb;
  }

  .login-password .be-icon{
    width: 60px;
    height: 30px;
  }

</style>