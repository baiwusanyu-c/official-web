/*
* @about-us.vue
* @deprecated
* @author czh
* @update (czh 2021/12/17)
*/
<template>
    <div class="about-us-page">
        <!--    头部介绍    -->
        <div class="page-head">
            <div class="header-text mr-1/2">
                <div class="header-text-big">
                    {{$t('lang.aboutUsPage.title')}}
                </div>
                <div class="header-text-small">
                    {{$t('lang.aboutUsPage.titleDesc')}}
                </div>
            </div>
        </div>
    </div>
    <contact-us></contact-us>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ContactUs from "../../components/contact-us.vue";
export default defineComponent({
    name: "about-us",
    components: {ContactUs},

})
</script>

<style>
.about-us-page .page-head{
    background-color: black;
    padding: 0 300px 110px 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-image:  url("../../assets/img/about-us-bg.png");
}
.about-us-page .header-text{
    display: flex;
    flex-direction: column;
}
.about-us-page .header-text-big{
    padding-top: 0;
    margin-top: 112px;
    width: 670px;
    line-height: 80px;
    font-size: 60px;
    font-weight: bold;
    color: #FFFFFF;
    font-family: SourceHanSansCN-Bold sans-serif;
}
.about-us-page .header-text-small{
    padding-top: 39px;
    width: 900px;
    font-size: 30px;
    color: #FFFFFF;
    line-height: 30px;
    font-family: SourceHanSansCN-Regular sans-serif;
}


</style>