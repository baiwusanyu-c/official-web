/*
* @login-password.vue
* @deprecated
* @author czh
* @update (czh 2021/12/17)
*/
<template>
    <div class="flex flex-col items-start w-full">
        <img src="src/assets/img/logo-black.png" class='mb-8 w-1/2' alt=""/>
        <div class="flex flex-col items-start w-full flex-grow">
            <!--  账户      -->
            <div class='mb-2 h-14 border-b w-full'>
                <span class="text-gray-500 mr-4 ">{{$t('lang.login.account')}}</span>
                <input type="text"
                       class='w-9/12'
                       :placeholder="$t('lang.login.tipAccount')"
                       v-model="form.account"/>
            </div>

            <!--  密码      -->
            <div class='login-password mb-2 h-24 border-b w-full flex items-center '>
                <span class="text-gray-500 mr-4 flex-grow-0">{{$t('lang.login.password')}}</span>
                <input class='flex-grow'
                       :type="isShowPassword"
                       :placeholder="$t('lang.login.tipPassword')"
                       v-model="form.password"/>
                <be-icon :icon="isShowPassword === 'password' ? 'noEye' : 'eye'"
                         customClass="flex-grow-0"
                         @click="changeShowPWord"></be-icon>
                <!--       no-eye     -->
            </div>

        </div>
        <be-button @click="login" size="large"
                   customClass="login-btn linear-l-r text-black font-bold text-lg w-full mb-8 mx-auto">
            {{$t('lang.login.login')}}
        </be-button>
        <div class="flex items-center justify-between w-full">
            <p class="text-gray-500 cursor-pointer " style="text-decoration:underline">{{$t('lang.login.forget')}} </p>
            <p class="text-gray-500 cursor-pointer " style="text-decoration:underline"> {{$t('lang.login.register')}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {loginAccount,ILogin} from "../../api/login";
import {BeMessage} from '../../../public/be-ui/be-ui.es.js'
import {useI18n} from "vue-i18n";
export default defineComponent({
    name: "LoginPassword",
    setup() {
        const message = BeMessage.service
        const form = ref<ILogin>({})
        const isShowPassword = ref<string>('password')
        const {t} = useI18n()
        const changeShowPWord = ():void =>{
            if(isShowPassword.value === 'password'){
                isShowPassword.value = 'text'
            }else{
                isShowPassword.value = 'password'
            }
        }
        const login = ():void =>{
            const params:ILogin = {
                account:String(form.value.account),
                password:String(form.value.password)
            }
            loginAccount(params).then((res:unknown)=>{
                message({
                    titles: t('lang.loginSuccess'),
                    msgType: 'success',
                    duration: 1500,
                    close: true,
                })
            }).catch(err=>{
                message({
                    titles: t('lang.loginFailed'),
                    msgType: 'warning',
                    duration: 1500,
                    close: true,
                })
                console.error(err)
            })
        }
        return {
            isShowPassword,
            form,
            changeShowPWord,
            login
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
    border-color:#02fbbb;
    color:#02fbbb;
}
.login-password .be-icon{
    width: 60px;
    height: 30px;
}
</style>