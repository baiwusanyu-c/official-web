/*
* @login.vue
* @deprecated
* @author czh
* @update (czh 2021/12/17)
*/
<template>
    <div class="login flex justify-center items-center">
        <div class="login-form px-12 py-10 box-border flex animate__animated animate__fadeInDown animate__faster" id="login_form">
            <register-account @showChange = 'changeType' v-if="showType === 'register'"></register-account>
            <login-password  @showChange = 'changeType' v-if="showType === 'login'"></login-password>
            <forget-password @showChange = 'changeType' v-if="showType === 'forget'"></forget-password>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import RegisterAccount from "./register-account.vue";
import LoginPassword from "./login-password.vue";
import ForgetPassword from "./forget-password.vue";

export default defineComponent({
    name: "login",
    components: {ForgetPassword, LoginPassword, RegisterAccount},
    setup() {
        const showType = ref<string>('login')
        /**
         * 切換顯示
         * @param type
         */
        const changeType = (type:string):void =>{
            showType.value = type
        }
        return {
            showType,
            changeType
        }
    }
})
</script>

<style scoped>
.login{
    width: 100vw;
    height: 100vh;
    background-image: url("../../assets/img/login-bg.png");
    background-size: cover;
}
.login-form{
    border-top: 5px solid #02fbbb;
    @apply rounded w-1/4 h-4/6 bg-default

}
</style>