/*
* @contact-us.vue
* @deprecated
* @author czh
* @update (czh 2021/12/15)
*/
<template>
        <div class="contact-us w-full bg-mainG text-black h-64 flex items-center justify-center">
            <div class="flex items-center justify-center  lg125:w-3/4 md:w-3/4" style="width: 62%">
                <div class="flex flex-col lg:mr-0 lg125:mr-0 md:mr-0">
                    <div class="bg-black mb-4" style="width: 300px;height: 5px"></div>
                    <h2 class="text-3xl font-bold title font-format leading-normal">
                        {{$t('lang.contactUs.info1') }}
                    </h2>

                </div>
                <div class="flex justify-end">
                    <be-button @click ='openDialog' customClass="contact-btn h-btn-txt-black text-black font-bold w-40 ml-20" size="large">
                        <span class="font-format text-2xl leading-loose">
                                {{$t('lang.contactBtn') }}
                        </span>
                    </be-button>
                </div>
            </div>
        </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useEventBus} from "@vueuse/core";
export default defineComponent({
    name: "contact-us",
    setup(){
        const bus = useEventBus<string>('openQuote')
        const openDialog = ():void =>{
            bus.emit('true')
        }
        return{
            openDialog
        }
    }
})
</script>

<style>
@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {

  .contact-us .title{
    @apply text-2xl;
  }
}

.contact-us .contact-btn{
  width: 293px;
  height: 60px;
}

</style>