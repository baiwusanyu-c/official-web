/*
* @contact-us.vue
* @deprecated
* @author czh
* @update (czh 2021/12/15)
*/
<template>
        <div class="contact-us w-full bg-mainG text-black h-64 flex items-center justify-center">
            <div class="flex items-center justify-center">
                <div class="flex flex-1 flex-col">
                    <div class="bg-black mb-4" style="width: 300px;height: 5px"></div>
                    <h2 class="text-3xl mb-8 font-bold title font-format">
                        {{$t('lang.contactUs.info1') }}
                    </h2>
                    <p class="mb-8 font-format">
                        {{$t('lang.contactUs.info2') }}
                    </p>
                </div>
                <div class="flex flex-1">
                    <be-button @click ='openDialog' customClass="h-btn-txt-black text-black font-bold w-40 mt-28 ml-20" size="large">
                        <span class="font-format">
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

<style scoped>
@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {

  .contact-us .title{
    @apply text-2xl;
  }
}

</style>