/*
* @about-hermit.vue
* @deprecated
* @author czh
* @update (czh 2021/12/15)
*/
<template>
    <div class="about-hermit-container items-center w-full flex bg-infoh w-full justify-center">
        <div class="w-1/2">
            <h1 class="text-mainG text-4xl text-center mb-14 font-format md:mb-6">{{$t('lang.aboutHerMit.title')}}</h1>
            <p class="text-default mb-10 font-format text-lg md:text-sm md:mb-6">{{$t('lang.aboutHerMit.info1')}}</p>
            <p class="text-default font-format text-lg md:text-sm md:mb-8">{{$t('lang.aboutHerMit.info2')}}</p>
        </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
    name: "about-hermit",
    data() {
        return {}
    },
    mounted() {
    },
    methods: {},
})
</script>

<style scoped>
.bg-header{
  width: 1400px
}

.about-hermit-container{
  height: 532px;
  background-image: url("../assets/img/aboute-me.png");
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {

  .about-hermit-container{
    height: 354px;
  }
}
</style>