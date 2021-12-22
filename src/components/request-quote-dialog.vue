/*
* @request-quote-dialog.vue
* @deprecated  :rules="rules"
* @author czh
* @update (czh 2021/12/17)
*/
<template>
    <div id="request_quote_dialog">
        <n-modal v-model:show="isShow" preset="dialog" :title="$t('lang.header.requestUs')" to="#request_quote_dialog">
            <template #header>
                <p class="pb-6">{{$t('lang.header.requestUs')}}</p>
            </template>
            <div slot="body" class="plus-dialog-body flex flex-col justify-center items-center w-full">
                <div class="flex w-full mb-8">
                    <div class="flex-1 mr-6">
                        <p class="label">{{$t('lang.quoteDialog.projectName')}}</p>
                        <n-select v-model:value="formData.type"  placeholder="Select" size="large" :options="selectList" />
                    </div>
                    <div class="flex-1">
                        <p class="label">{{$t('lang.quoteDialog.yourName')}}</p>
                        <n-input  v-model:value="formData.name" size="large"/>
                    </div>
                </div>
                <div class="flex flex-col w-full mb-8">
                    <p class="label">
                        {{$t('lang.quoteDialog.email')}}
                        <span style="color:red">*</span>
                    </p>
                    <n-input  v-model:value="formData.email" size="large"/>
                </div>
                <div class="flex flex-col w-full mb-8">
                    <p class="label">{{$t('lang.quoteDialog.phone')}}</p>
                    <n-input  v-model:value="formData.mobile" size="large"/>
                </div>
                <div class="flex flex-col w-full mb-8">
                    <p class="label">{{$t('lang.quoteDialog.message')}}</p>
                    <n-input
                        v-model:value="formData.message"
                        type="textarea"
                        :autosize="{  minRows: 4, maxRows: 6 }"/>
                </div>
                <div class="flex w-full mb-8">
                    <div class="flex-1 mr-6">
                        <p class="label">{{$t('lang.login.verCode')}}<span style="color:red">*</span></p>
                        <n-input  v-model:value="formData.code" size="large"  :onInput = "formData.code=formData.code.replace(/[^\d]/g,'')"/>
                    </div>
                    <div class="flex-1 relative" @click="getCode">
                        <img :src="codeUrl" alt="" class="absolute bottom-0 left-0" style="height: 42px"/>
                    </div>
                </div>
            </div>
            <template #action>
                <be-button  customClass="sure-btn" round="3" @click="submit">
                    {{$t('lang.sure')}}
                </be-button>
            </template>
        </n-modal>

    </div>

</template>

<script lang="ts">
import {defineComponent, ref,watch} from "vue";
import {NForm,NFormItem,NInput,NSelect,NModal} from "naive-ui";
import {IOption} from "../utils/types";
import {useI18n} from "vue-i18n";
import {createQuote, IQuote} from "../api/quote";
import {BeMessage} from "../../public/be-ui/be-ui.es.js";
import {verEmail} from "../utils/common";
import {getCodeImg} from "../api/login";

export default defineComponent({
    name: "request-quote-dialog",
    components:{
        NForm,
        NFormItem,
        NSelect,
        NModal,
        NInput
    },
    setup() {
        const message = BeMessage.service
        const isShow = ref<boolean>(false)
        const handleClose = ():void =>{
            isShow.value = false;
        }
        watch(isShow,(nVal)=>{
            if(!nVal){
                formData.value = {
                    name:'',
                    email:'',
                    type:1,
                    uuid:0,
                    code:"",
                    mobile:'',
                    message:''
                }
            }else{
                getCode()
            }
        })
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
            if(!formData.value.email){
                tipStr = t('lang.login.tipAccount')
                verMsg(tipStr)
                return false
            }
            if(!verEmail(String(formData.value.email))){
                tipStr = t('lang.login.tipErrEmail')
                verMsg(tipStr)
                return false
            }
            if(!formData.value.code){
                tipStr = t('lang.login.tipVerCode')
                verMsg(tipStr)
                return false
            }
            return true
        }
        const submit = ():void =>{
            if(!verifyCodeForm()) return
            const params:IQuote = {
                name:formData.value.name,
                email:formData.value.email,
                type:formData.value.type,
                mobile:formData.value.mobile,
                message:formData.value.message,
                code:formData.value.code,
                uuid:formData.value.uuid,
            }
            createQuote(params).then((res: any) => {
                if (res.code === 200) {
                    message({
                        customClass:'hermit-msg',
                        titles: t('lang.opSuccess'),
                        msgType: 'success',
                        duration: 1500,
                        offsetTop:80,
                        close: true,
                    })
                    handleClose()
                    //paginationReactive.itemCount = 1
                }
            }).catch(err => {
                message({
                    customClass:'hermit-msg',
                    titles: err.message,
                    msgType: 'warning',
                    duration: 1500,
                    offsetTop:80,
                    close: true,
                })
                console.error(err)
            })
        }
        const formData = ref<IQuote>({
            name:'',
            email:'',
            type:1,
            uuid:0,
            code:"",
            mobile:'',
            message:''
        })
        const {t} = useI18n()
        let selectList:IOption  = ref([
              {label:t('lang.projectList.project1'), value:1},
              {label:t('lang.projectList.project2'), value:2},
              {label:t('lang.projectList.project3'), value:3},
              {label:t('lang.projectList.project4'), value:4}
            ])
        /**
         * 获取登录验证码
         */
        const codeUrl = ref<string>('')
        const  getCode = ():void=>{
            getCodeImg().then((res:any) => {
                formData.value.uuid = res.uuid;
                codeUrl.value = "data:image/gif;base64," + res.img;
            });
        }
        return {
            codeUrl,
            getCode,
            formData,
            submit,
            selectList,
            isShow,
        }
    }
})
</script>

<style>
#request_quote_dialog .n-dialog{
  background: #EFF2F7 !important;
  border-top:5px solid #02fbbb;
  @apply w-1/3;
}

#request_quote_dialog .request-quote-dialog{
  border-top:5px solid #02fbbb;
}

#request_quote_dialog .sure-btn{

  @apply bg-mainG text-black w-28;
}

#request_quote_dialog .plus-dialog-body{
  @apply bg-mainBlueGary;
}

#request_quote_dialog .plus-dialog-body .label{
  @apply text-black text-lg mb-2 font-light;
}


#request_quote_dialog .n-dialog.n-dialog--icon-left .n-dialog__icon{
  display: none;
}
</style>