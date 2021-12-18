/*
* @request-quote-dialog.vue
* @deprecated  :rules="rules"
* @author czh
* @update (czh 2021/12/17)
*/
<template>
    <div id="request_quote_dialog">
        <be-dialog
            :titles="$t('lang.header.requestUs')"
            ref='moreNodeDialog'
            v-model:is-show="isShow"
            layout="right"
            customClass="request-quote-dialog"
            escExit
            @close="test"
            :is-open-modal="true">
            <template #headerIcon>
                <be-icon icon="deleteIc" @click="isShow = false"></be-icon>
            </template>
            <template #body>
                <div slot="body" class="plus-dialog-body flex flex-col justify-center items-center w-full">
                   <div class="flex w-full mb-12">
                       <div class="flex-1 mr-6">
                           <p class="label">{{$t('lang.quoteDialog.projectName')}}</p>
                           <n-input  v-model:value="formData.mail" />
                       </div>
                       <div class="flex-1">
                           <p class="label">{{$t('lang.quoteDialog.yourName')}}</p>
                           <n-input  v-model:value="formData.name" size="large"/>
                       </div>
                   </div>

                    <div class="flex flex-col w-full mb-12">
                        <p class="label">
                            {{$t('lang.quoteDialog.email')}}
                            <span style="color:red">*</span>
                        </p>
                        <n-input  v-model:value="formData.mail" size="large"/>
                    </div>
                    <div class="flex flex-col w-full mb-12">
                        <p class="label">{{$t('lang.quoteDialog.phone')}}</p>
                        <n-input  v-model:value="formData.phone" size="large"/>
                    </div>
                    <div class="flex flex-col w-full mb-12">
                        <p class="label">{{$t('lang.quoteDialog.message')}}</p>
                        <n-input
                            v-model:value="formData.msg"
                            type="textarea"
                            :autosize="{  minRows: 4, maxRows: 6 }"/>
                    </div>
                </div>
            </template>
            <template #footer>
                <be-button  customClass="sure-btn" round="3" @click="submit">
                    {{$t('lang.sure')}}
                </be-button>
            </template>
        </be-dialog>
    </div>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {NForm,NFormItem,NInput} from "naive-ui";

export default defineComponent({
    name: "request-quote-dialog",
    components:{
        NForm,
        NFormItem,
        NInput
    },
    setup() {
        const isShow = ref<boolean>(false)
        const handleClose = ():void =>{
            isShow.value = false;
        }
        const submit = ():void =>{
            handleClose()
        }
        const formData = ref({
            name:'',
            mail:'',
            phone:'',
            msg:''
        })
        return {
            formData,
            submit,
            isShow
        }
    }
})
</script>

<style>
#request_quote_dialog .be-dialog .be-dialog-container,
#request_quote_dialog .be-dialog .be-dialog-container .be-dialog-title{
   border-radius: 2px;
   @apply bg-mainBlueGary;
 }
#request_quote_dialog .be-dialog .be-dialog-container{
    @apply w-1/3;
}
#request_quote_dialog .be-dialog-container-head{
    cursor: initial;
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
/*.request-quote-dialog .be-dialog-footer,
.request-quote-dialog .be-dialog-title{
     border-radius: 2px;
 }*/
</style>