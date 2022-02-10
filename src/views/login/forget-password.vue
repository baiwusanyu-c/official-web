/*
* @forget-password.vue
* @deprecated
* @author czh
* @update (czh 2021/12/17)
*/

<template>
    <div class="flex flex-col items-start w-full">
        <img src="../../assets/img/logo-green-black.png" class='w-1/2' alt=""/>
        <!--  账户      -->
        <h3 class="text-2xl font-bold mb-2 font-format">{{$t('lang.login.forget')}}</h3>
        <div class='mb-2 h-24 border-b w-full md:h-14 lg:h-14'>
            <span class="text-gray-500 mr-4 font-format">{{$t('lang.login.account')}}</span>
            <input type="text" class='w-9/12 login-input h-16 font-format md:h-12 lg:h-12'  :placeholder="$t('lang.login.tipAccount')" v-model="form.account"/>
        </div>
        <!--  密码      -->
        <div class='login-password mb-2 h-24 border-b w-full flex items-center md:h-14 lg:h-14'>
            <span class="text-gray-500 mr-4 flex-grow-0 font-format">{{$t('lang.login.password')}}</span>
            <input class='w-9/12 login-input flex-grow h-16 font-format md:h-12 lg:h-12'
                   :placeholder="$t('lang.login.tipPassword')"
                   :type="isShowPassword" v-model="form.password"/>
            <be-icon :icon="isShowPassword === 'password' ? 'noEye' : 'eye'"
                     customClass="flex-grow-0"
                     @click="changeShowPWord('confirm')"></be-icon>
        </div>
        <!--  确认密码      -->
        <div class='login-password mb-2 h-24 border-b w-full flex items-center '>
            <span class="text-gray-500 mr-4 flex-grow-0 font-format">{{$t('lang.login.password')}}</span>
            <input class='w-9/12 login-input flex-grow h-16 font-format md:h-12 lg:h-12'
                   :type="isShowPasswordConfirm"
                   :placeholder="$t('lang.login.tipPasswordConfirm')"
                   v-model="form.re_password"/>
            <be-icon :icon="isShowPasswordConfirm === 'password' ? 'noEye' : 'eye'"
                     customClass="flex-grow-0"
                     @click="changeShowPWordConfirm('unConfirm')"></be-icon>
            <!--       no-eye     -->
        </div>
        <p class="mb-4 text-gray-500 font-format md:mb-2">
            <span style="color: red">*</span>
            {{$t('lang.login.tip')}}
        </p>
        <!--  邮箱验证      -->
        <div class='mb-4 flex w-full'>
            <input type="text" v-model="form.verification_code" class="w-9/12 login-input border h-12 flex-1 font-format"/>
            <div class="bg-mainG cursor-pointer flex items-center justify-center w-32" @click="verifyCodeMail">
                <img v-show="!emailSent&&!sending" src="../../assets/img/send-vr-code.png" alt=""/>
                <span v-show="sending" style="color: #606266">...</span>
                <span v-show="emailSent&&!sending" style="color: #606266">{{sendSeconds}}s</span>
            </div>
        </div>
        <be-button @click="updatePassword"
                   size="large"
                   customClass="login-btn linear-l-r text-black font-bold text-lg w-full mb-4 mx-auto ">
            <span class="font-format">{{$t('lang.login.confirm')}}</span>
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
    import {defineComponent, onMounted, ref, watch} from "vue";
import {forgetPassword, verifyCodePassword,IMailCode,IForgetPassword} from "../../api/login";
import {useI18n} from "vue-i18n";
import {verEmail} from "../../utils/common";
import composition from "../../utils/mixin/common-func";
import {Base64} from "js-base64";
export default defineComponent({
    name: "ForgetPassword",
    emits: [
        'showChange',
    ],
    setup(props,ctx) {
        const {message} = composition(props, ctx)
        const form = ref<IForgetPassword>({})
        const isShowPassword = ref<string>('password')
        const isShowPasswordConfirm = ref<string>('password')
        const {t} = useI18n()
        /**
         * 密码显示
         */
        const changeShowPWord = (type:string):void =>{
            if(isShowPassword.value === 'password' && type === 'confirm'){
                isShowPassword.value = 'text'
                return
            }
            if(isShowPassword.value === 'text' && type === 'confirm'){
                isShowPassword.value = 'password'
                return;
            }

        }
        const changeShowPWordConfirm = (type:string):void =>{
            if(isShowPasswordConfirm.value === 'password' && type === 'unConfirm'){
                isShowPasswordConfirm.value = 'text'
                return;
            }
            if(isShowPasswordConfirm.value === 'text' && type === 'unConfirm'){
                isShowPasswordConfirm.value = 'password'
                return;
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
            if(!form.value.password){
                tipStr = t('lang.login.tipPassword')
                verMsg(tipStr)
                return false
            }
            if(!form.value.re_password){
                tipStr = t('lang.login.tipPasswordConfirm')
                verMsg(tipStr)
                return false
            }
            if(form.value.re_password !== form.value.password){
                tipStr = t('lang.login.tipTwicePassword')
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
        const sendSeconds = ref<number>(10)
        const emailSent = ref<boolean>(false)
        const sending = ref<boolean>(false)
        // 如果邮件发送开始计时
        watch(emailSent,()=>{
            let time = sendSeconds.value*1000
            if(emailSent.value){
                localStorage.setItem('emailSentTime',JSON.stringify(Date.now()))
                let interval = setInterval(()=>{
                    if(sendSeconds.value>0){
                        sendSeconds.value--
                    }
                    if(sendSeconds.value===0){
                        clearInterval(interval)
                    }
                },1000)
                // 限制10s时间
                setTimeout(()=>{
                    emailSent.value=false
                },time)
            }else{
                sendSeconds.value = 10
            }
        })
        // 确保页面刷新之后用户发送邮件所经过的时间是否超过限制
        onMounted(()=>{
            if(Date.now() - JSON.parse(localStorage.getItem('emailSentTime')) < 10000){
                sendSeconds.value = 10 - parseInt((Date.now() - JSON.parse(localStorage.getItem('emailSentTime')))/1000)
                emailSent.value = true
                localStorage.setItem('emailSentTime',JSON.stringify(Date.now()))
            }
        })
        const verifyCodeMail = ():void =>{
            if(emailSent.value||sending.value){
                message('warning',t('lang.login.tipWait'),'hermit-msg')
                return
            }
            if(!form.value.account){
                message('warning',t('lang.login.tipAccount'),'hermit-msg')
                return
            }
            const params:IMailCode = {
                userName:String(form.value.account)
            }
            sending.value = true
            verifyCodePassword(params).then((res:any)=>{
                if(res.code === 200) {
                    sending.value = false
                    // 邮件已发送开始计时
                    emailSent.value = true
                    localStorage.setItem('emailSentTime',JSON.stringify(Date.now()))
                    message('success',t('lang.sendSuccess'),'hermit-msg')
                }
            }).catch(err=>{
                message('warning',err.message,'hermit-msg')
                sending.value = false
                console.error(err)
            })
        }
        /**
         * 修改密碼方法
         */
        const updatePassword = ():void =>{
            if(!verifyCodeForm()) return
            form.value.password = Base64.encode(form.value.password as string)
            form.value.re_password = Base64.encode(form.value.re_password as string)
            forgetPassword(form.value).then((res:any)=>{
                if(res.code === 200) {
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
            isShowPasswordConfirm,
            changeShowPWordConfirm,
            form,
            changeShowPWord,
            verifyCodeMail,
            updatePassword,

            emailSent,
            sendSeconds,
            sending
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