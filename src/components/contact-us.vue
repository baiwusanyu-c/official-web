/*
* @contact-us.vue
* @deprecated
* @author czh
* @update (czh 2021/12/15)
*/
<template>
        <div class="w-full bg-mainG text-black h-64 flex items-center justify-center">
            <div class="flex items-center justify-center">
                <div class="flex-1 flex-col">
                    <div class="bg-black mb-4" style="height: 5px;width: 300px"></div>
                    <h2 class="text-3xl mb-8 font-bold">
                        {{$t('lang.contactUs.info1') }}
                    </h2>
                    <p class="mb-8">
                        {{$t('lang.contactUs.info2') }}
                    </p>
                </div>
                <div class="flex flex-1">
                    <be-button customClass="h-btn-txt-black text-black font-bold w-40 mt-28 ml-20" size="large">  {{$t('lang.contactBtn') }}</be-button>
                </div>
            </div>
        </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
    name: "contact-us",
    data() {
        return {}
    },
    mounted() {
    },
    methods: {},
})
</script>

<style scoped>

</style>