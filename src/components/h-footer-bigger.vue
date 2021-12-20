/*
* @h-footer-bigger.vue
* @deprecated
* @author czh
* @update (czh 2021/12/15)
*/
<template>
    <div class="bg-footer-container h-60 bg-footer">
        <div class="footer-class">
            <p>{{$t('lang.HFooterBigger.contact.contactTitle')}}</p>
            <div class="contact-us">
                <n-icon size="30px">
                    <location-sharp/>
                </n-icon>
                <div class="contact-us-text">{{$t('lang.HFooterBigger.contact.locationRoad')}}<br/>
                    {{$t('lang.HFooterBigger.contact.locationSingapore')}}
                </div>
            </div>
            <div class="contact-us">
                <n-icon size="30px">
                    <phone-portrait-outline/>
                </n-icon>
                <div class="contact-us-text">+86-028-8326-2585</div>
            </div>
            <div class="contact-us">
                <n-icon size="30px">
                    <mail-sharp/>
                </n-icon>
                <div class="contact-us-text">hermitmarket@gmail.com</div>
            </div>
        </div>
        <div class="footer-class">
            <p>{{$t('lang.HFooterBigger.group')}}</p>
            <div>
                <n-icon size="30px" class="group" @click="toTwitter"><logo-twitter/></n-icon>
                <n-icon size="30px" class="group" @click="toTelegram"><telegram/></n-icon>
                <n-icon size="30px" class="group"><logo-github/></n-icon>
                <n-popover trigger="click" color="#00FFBA" class="asdasd" raw placement="bottom" :builtinThemeOverrides="popoverThemeOverrides">
                    <template #trigger>
                        <n-icon size="30px" class="group"><logo-wechat/></n-icon>
                    </template>
                    <div><img src="../assets/img/wechat-code.png" height="100" width="100"/></div>
                </n-popover>
            </div>
        </div>
        <div class="footer-class">
            <p>{{$t('lang.HFooterBigger.policy.policyTitle')}}</p>
            <div class="policy-class">
                <div class="text-point"></div>
                <div class="policy-text">{{$t('lang.HFooterBigger.policy.terms')}}</div>
            </div>
            <div class="policy-class">
                <div class="text-point"></div><div class="policy-text">{{$t('lang.HFooterBigger.policy.privacy')}}</div>
            </div>
        </div>
    </div>
    <div class="h-6 flex justify-center items-center">©2021 by Hermit. All Rights Reserved.</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {LocationSharp,PhonePortraitOutline,MailSharp,LogoWechat,LogoTwitter,LogoGithub} from '@vicons/ionicons5'
import {Telegram} from '@vicons/fa'
import {NIcon,NPopover} from "naive-ui"
import {  PopoverProps } from 'naive-ui'
import {Router, useRouter} from "vue-router";

type PopoverThemeOverrides = NonNullable<PopoverProps['builtinThemeOverrides']>

const popoverThemeOverrides: PopoverThemeOverrides = {
    color:'#02fbbb'
}
export default defineComponent({
    name: "h-footer-bigger",
    components:{
        NIcon,
        NPopover,
        LocationSharp,
        PhonePortraitOutline,
        MailSharp,
        LogoTwitter,
        LogoGithub,
        LogoWechat,
        Telegram,
    },
    setup(){
        const toTwitter = ():void =>{
            window.open('https://twitter.com/HermitTech')
        }
        const toTelegram = ():void =>{
            window.open('https://t.me/+Y6Y_fgWbnPFhZTI1')
        }
        return{
            popoverThemeOverrides,
            toTwitter,
            toTelegram,
        }
    }
})
</script>

<style scoped >
.h-60{
    height: 21rem;
}
p{
    font-size: 18px;
    font-weight: 500;
    color: #ECECEC;
    line-height: 50px;
}
.bg-footer-container{
    color: #ECECEC;
    display: flex;
    justify-content: center;
}
.footer-class{
    margin-top: 60px;
    width: 345px;
    height: 200px;
}
.contact-us{
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.contact-us-text{
    padding-left: 5px;
}
.group{
    cursor:pointer;
    margin-right: 32px;
    transition: all 0.5s ease;
}
.group:hover{
    transition: all 0.5s ease;
    color: #02FBBB;
}
.wechatCode{
    width: 100px;
    height: 100px;
    background: linear-gradient(236deg, #00FFBA, #0ED9E0);
}
.policy-class{
    cursor:pointer;
    display: flex;
    width: 200px;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
}
.text-point{
    width: 4px;
    height: 4px;
    background: #CEC7C1;
    border-radius: 50%;
    transition: all 0.5s ease;
}
.policy-text{
    padding-left: 4px;
}
.policy-class:hover  .text-point {
    width: 8px;
    height: 8px;
    background: #02FBBB;
    border-radius: 50%;
    transition: all 0.5s ease;
}
.policy-class:hover  .policy-text {
    color: #02FBBB;
    transition: all 0.5s ease;
}
</style>