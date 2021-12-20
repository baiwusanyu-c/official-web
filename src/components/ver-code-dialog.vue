/*
* @ver-code-dialog.vue
* @deprecated
* @author czh
* @update (czh 2021/12/18)
*/
<template>
    <div id="ver_code_dialog">
        <be-dialog
            :titles="$t('lang.login.verCode')"
            ref='moreNodeDialog'
            v-model:is-show="isShow"
            layout="right"
            customClass="request-quote-dialog"
            escExit
            :isDrage="false"
            @close="test"
            :is-open-modal="true">
            <template #headerIcon>
                <be-icon icon="deleteIc" @click="isShow = false"></be-icon>
            </template>
            <template #body>
                <div slot="body" class="plus-dialog-body flex flex-col justify-center items-center w-full">
                    <div class="flex w-full mb-12">
                        <div class="flex-1 mr-6">
                            <n-input  v-model:value="formData.code"
                                      :onInput = "formData.code = formData.code.replace(/[^\d]/g,'')"
                                      size="large"/>
                        </div>
                        <div class="flex-1" @click="getCode">
                            <img :src="codeUrl" alt="" style="height: 40px"/>
                        </div>
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
import {watch, defineComponent, ref} from "vue";
import {useI18n} from "vue-i18n";
import {BeMessage} from "../../public/be-ui/be-ui.es";
import {NInput} from "naive-ui";
import {getBackCode, getReportByCode, IReportCode} from "../api/service";
import {setSession} from "../utils/common";
import {getCodeImg} from "../api/login";
export default defineComponent({
    name: "ver-code-dialog",
    components:{NInput},
    props:{
      num:{
          type:String
      }
    },
    setup(props) {
        const message = BeMessage.service
        const isShow = ref<boolean>(false)
        const formData = ref<IReportCode>({})
        const {t} = useI18n()
        const handleClose = ():void =>{
            isShow.value = false;
        }
        watch(isShow,(nVal)=>{
            if(!nVal){
                formData.value = {}
            }
        })
        const submit = ():void =>{
            const params:IReportCode = {
                num: formData.value.num,
                code: formData.value.code,
                uuid: formData.value.uuid
            }
            getReportByCode(params).then((res: any) => {
                if (res.code === 200) {
                    message({
                        titles: t('lang.opSuccess'),
                        msgType: 'success',
                        duration: 1500,
                        offsetTop:80,
                        close: true,
                    })
                    setSession('CETInfo',JSON.stringify(res.data))

                    handleClose()
                }
            }).catch(err => {
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
         * 获取登录验证码
         */
        const codeUrl = ref<string>('')
        const  getCode = ():void=>{
            getCodeImg().then((res:any) => {
                formData.value.uuid = res.uuid;
                codeUrl.value = "data:image/gif;base64," + res.img;
            });
        }
        watch(isShow,(nVal:boolean)=>{
            if(nVal){
                formData.value.num = props.num && parseInt(props.num) || undefined
                formData.value.code = ""
                getCode()
            }
        })
        return {
            getCode,
            formData,
            submit,
            isShow,
            codeUrl,
        }
    }
})
</script>

<style >
#ver_code_dialog .be-dialog .be-dialog-container,
#ver_code_dialog .be-dialog .be-dialog-container .be-dialog-title{
    border-radius: 2px;
    @apply bg-mainBlueGary;
}
#ver_code_dialog .be-dialog .be-dialog-container{
    @apply w-1/3;
}
#ver_code_dialog .be-dialog-container-head{
    cursor: initial;
}
#ver_code_dialog .request-quote-dialog{
    border-top:5px solid #02fbbb;
}
#ver_code_dialog .sure-btn{

    @apply bg-mainG text-black w-28;
}
#ver_code_dialog .plus-dialog-body{
    @apply bg-mainBlueGary;
}
#ver_code_dialog .plus-dialog-body .label{
    @apply text-black text-lg mb-2 font-light;
}
/*.request-quote-dialog .be-dialog-footer,
.request-quote-dialog .be-dialog-title{
     border-radius: 2px;
 }*/
</style>