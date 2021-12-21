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
                <div class="header-text-big font-format">
                    {{$t('lang.aboutUsPage.title')}}
                </div>
                <div class="header-text-small font-format">
                    {{$t('lang.aboutUsPage.titleDesc')}}
                </div>
            </div>
        </div>
       <!--    一大段文字描述   -->
        <div class="flex flex-col py-16 items-center justify-center box-border desc-info">
            <div class="flex items-center justify-between w-4/6 introduction">
                <img src="../../assets/img/ab-us-desc.png" alt="" />
                 <p class="ml-16 leading-loose text-lg">
                     <span class="font-format">{{$t('lang.aboutUsPage.descInfo1')}}</span>
                     <br>
                     <span class="font-format">{{$t('lang.aboutUsPage.descInfo2')}}</span>
                 </p>
            </div>
            <div class="ml-16 mt-32 flex items-center justify-between w-4/6 introduction introduction-logo">
                <div class="flex items-center justify-between ">
                    <img src="../../assets/img/ab-us-ic1.png" alt="" />
                    <div class="w-32 ml-2">
                        <h2 class="text-mainG text-4xl font-bold font-format">
                            {{$t('lang.aboutUsPage.descIcon1')}}
                        </h2>
                        <span class="font-format">{{$t('lang.aboutUsPage.descIconInfo1')}}</span>
                    </div>
                </div>
                <div class="flex items-center justify-between ">
                    <img src="../../assets/img/ab-us-ic2.png" alt="" />
                    <div class="w-32 ml-2">
                        <h2 class="text-mainG text-4xl font-bold font-format">
                            {{$t('lang.aboutUsPage.descIcon2')}}
                        </h2>
                        <span class="font-format">{{$t('lang.aboutUsPage.descIconInfo2')}}</span>
                    </div>
                </div>
                <div class="flex items-center justify-between ">
                    <img src="../../assets/img/ab-us-ic3.png" alt="" />
                    <div class="w-32 ml-2">
                        <h2 class="text-mainG text-4xl font-bold font-format">
                            {{$t('lang.aboutUsPage.descIcon3')}}
                        </h2>
                        <span class="font-format">{{$t('lang.aboutUsPage.descIconInfo3')}}</span>
                    </div>
                </div>
                <div class="flex items-center justify-center ">
                    <img src="../../assets/img/ab-us-ic4.png" alt="" />
                    <div class="w-32 ml-2">
                        <h2 class="text-mainG text-4xl font-bold font-format">
                            {{$t('lang.aboutUsPage.descIcon4')}}
                        </h2>
                        <span class="font-format">{{$t('lang.aboutUsPage.descIconInfo4')}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!--    securing the blockchain ecology    -->
        <div class="securing-the-blockchain flex items-center justify-center w-full h-auto">
            <p class="text-4xl font-bold w-1/3 text-center slogan font-format">{{$t('lang.aboutUsPage.securityBlock')}}</p>
        </div>
        <!--    connect    -->
        <div class="flex flex-col py-16 items-center justify-center box-border w-full">
            <p class="text-3xl font-bold w-1/3 text-center mb-16 font-format">{{$t('lang.connect')}}</p>
            <div class="flex items-center">
<!--                <div class="flex items-center justify-center text-xl mr-36">
                    <img class="mr-4" src="../../assets/img/phone.png" alt="" />
                    {{$t('lang.phone')}}:86-028-8326-2585
                </div>-->
                <div class="flex items-center justify-center text-xl font-format">
                    <img class="mr-4" src="../../assets/img/mail.png" alt="" />
                    {{$t('lang.mail')}}:hermitmarket@gmail.com
                </div>
            </div>
        </div>
        <!--    Community    -->
        <div class="flex flex-col py-16 items-center justify-center box-border w-full bg-mainBlueGary">
            <p class="text-3xl font-bold w-1/3 text-center mb-24 font-format">{{$t('lang.community')}}</p>
            <div class="flex items-center mb-20">
                <img  @click="openWin(linkConfig['twitter'])"  class="mr-16 cursor-pointer" src="../../assets/img/community1.png" alt="" />
                <img  @click="openWin(linkConfig['telegram'])" class="mx-16 cursor-pointer" src="../../assets/img/community2.png" alt="" />
                <img  @click="openWin(linkConfig['medium'])"   class="mx-16 cursor-pointer" src="../../assets/img/community7.png" alt="" />
                <img  @click="openWin(linkConfig['github'])"   class="mx-16 cursor-pointer" src="../../assets/img/community5.png" alt="" />
                <img  @click="openWin(linkConfig['facebook'])" class="mx-16 cursor-pointer" src="../../assets/img/community6.png" alt="" />
                <n-popover trigger="click"
                           :arrow-style="{background:'#02fbbb'}"
                           color="#00FFBA"
                           raw
                           placement="bottom">
                    <template #trigger>
                        <img  class="ml-16 cursor-pointer " src="../../assets/img/community3.png" alt="" />
                    </template>
                    <div><img src="../../assets/img/wechat-code.png" height="100" width="100"/></div>
                </n-popover>
            </div>
        </div>
    </div>
    <contact-us></contact-us>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ContactUs from "../../components/contact-us.vue";
import {PopoverProps,NPopover} from "naive-ui";

import {linkConfig} from '../../enums/link'

export default defineComponent({
    name: "about-us",
    components: {ContactUs,NPopover},
    setup(){
        /**
         * 打開窗口
         */
        const openWin = (url:string)=>{
            window.open(url, url)
        }
        return{
            openWin,
            linkConfig,
        }
    }

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
    background-repeat: no-repeat;
    background-size: cover;
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
    font-family: SourceHanSansBold sans-serif;
}
.about-us-page .header-text-small{
    padding-top: 39px;
    width: 900px;
    font-size: 30px;
    color: #FFFFFF;
    line-height: 30px;
    font-family: SourceHanSansRegular sans-serif;
}
.about-us-page .desc-info{
    background-image: url("../../assets/img/customer-earth.png");
    background-repeat: no-repeat;
    background-size: 100%;
}
.about-us-page .securing-the-blockchain{
    height: 360px;
    background-image: url("../../assets/img/securing-the-blockchain.png");
    background-repeat: no-repeat;
    background-size: 100%;
}
@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {
    .about-us-page .page-head {
        padding: 0 100px 50px 100px;
    }
    .desc-info .introduction{
        width: 80%;
    }
    .desc-info .introduction span{
        font-size: 12px;
    }
    .desc-info .introduction.introduction-logo{
        margin-top: 2rem;
    }
    .securing-the-blockchain .slogan{
        font-size: 25px;
    }
    .about-us-page .securing-the-blockchain{
        height: 238px;
    }
}

</style>