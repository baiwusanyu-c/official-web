/*
* @h-footer-bigger.vue
* @deprecated
* @author czh
* @update (czh 2021/12/15)
*/
<template>
    <div class="bg-footer-container bg-footer">
        <div class="footer-class">
            <p class="font-format">{{$t('lang.HFooterBigger.contact.contactTitle')}}</p>
            <div class="contact-us">
                <n-icon size="30px">
                    <location-sharp/>
                </n-icon>
                <div class="contact-us-text font-format">{{$t('lang.HFooterBigger.contact.locationRoad')}}<br/>
                    {{$t('lang.HFooterBigger.contact.locationSingapore')}}
                </div>
            </div>
<!--            <div class="contact-us">
                <n-icon size="30px">
                    <phone-portrait-outline/>
                </n-icon>
                <div class="contact-us-text">+86-028-8326-2585</div>
            </div>-->
            <div class="contact-us">
                <n-icon size="30px">
                    <mail-sharp/>
                </n-icon>
                <div class="contact-us-text font-format">hermitmarket@gmail.com</div>
            </div>
        </div>
        <div class="footer-class">
            <p class="font-format mb-2">{{$t('lang.HFooterBigger.group')}}</p>
            <div>
                <n-icon size="30px" class="group" @click="openWin(linkConfig['twitter'])"><logo-twitter/></n-icon>
                <n-icon size="30px" class="group" @click="openWin(linkConfig['telegram'])"><telegram/></n-icon>
                <n-icon size="30px" class="group" @click="openWin(linkConfig['github'])"><logo-github/></n-icon>
                <n-popover trigger="hover"
                           color="#00FFBA" raw placement="bottom">
                    <template #trigger>
                        <n-icon size="30px" class="group"><logo-wechat/></n-icon>
                    </template>
                    <div><img src="../assets/img/wechat-code.jpg" height="100" width="100"/></div>
                </n-popover>
            </div>
        </div>
        <div class="footer-class">
            <p class="font-format">{{$t('lang.HFooterBigger.policy.policyTitle')}}</p>
            <div class="policy-class" @click="openPdf(linkConfigPolicy['conditions'])">
                <div class="text-point"></div>
                <div class="policy-text font-format">{{$t('lang.HFooterBigger.policy.terms')}}</div>
            </div>
            <div class="policy-class" @click="openPdf(linkConfigPolicy['privacy'])">
                <div class="text-point" ></div>
                <div class="policy-text font-format">{{$t('lang.HFooterBigger.policy.privacy')}}</div>
            </div>
        </div>
    </div>
    <div class="h-6 flex justify-center items-center font-format">©2021 by Hermit. All Rights Reserved.</div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {LocationSharp,PhonePortraitOutline,MailSharp,LogoWechat,LogoTwitter,LogoGithub} from '@vicons/ionicons5'
import {Telegram} from '@vicons/fa'
import {NIcon,NPopover} from "naive-ui"
import {linkConfig,linkConfigPolicy} from '../enums/link'

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
        /**
         * 打開窗口
         */
        const openWin = (url:string)=>{
            window.open(url, url)
        }
        const openPdf = (url:string)=>{
            window.open(url, url)
        }
        return{
            linkConfig,
            linkConfigPolicy,
            openWin,
            openPdf,
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
  line-height: 50px;
  color: #ECECEC;
}

.bg-footer-container{
  display: flex;
  justify-content: center;
  color: #ECECEC;
}

.footer-class{
  width: 345px;
  height: 200px;
  margin-top: 60px;
}

.contact-us{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
}

.contact-us-text{
  padding-left: 5px;
}

.group{
  margin-right: 32px;
  cursor:pointer;
  transition: all .5s ease;
}

.group:hover{
  color: #02FBBB;
  transition: all .5s ease;
}

.wechatCode{
  width: 100px;
  height: 100px;
  background: linear-gradient(236deg, #00FFBA, #0ED9E0);
}

.policy-class{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  margin-top: 15px;
  cursor:pointer;
}

.text-point{
  width: 4px;
  height: 4px;
  background: #CEC7C1;
  border-radius: 50%;
  transition: all .5s ease;
}

.policy-text{
  padding-left: 4px;
}

.policy-class:hover  .text-point {
  width: 8px;
  height: 8px;
  background: #02FBBB;
  border-radius: 50%;
  transition: all .5s ease;
}

.policy-class:hover  .policy-text {
  color: #02FBBB;
  transition: all .5s ease;
}
</style>