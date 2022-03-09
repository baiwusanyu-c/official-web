/* * @h-footer-bigger.vue * @deprecated * @author czh * @update (czh 2021/12/15)
*/
<template>
  <div class="bg-footer-container bg-footer">
    <div class="footer-class footer-class-1d5">
      <p class="footer-title text-lg font-format sm:text-base">
        {{ $t('lang.HFooterBigger.contact.contactTitle') }}
      </p>
      <!--            <div class="contact-us">
                            <n-icon class="footer-icon">
                                <location-sharp/>
                            </n-icon>
                            <div class="contact-us-text font-format">{{$t('lang.HFooterBigger.contact.locationRoad')}}<br/>
                                {{$t('lang.HFooterBigger.contact.locationSingapore')}}
                            </div>
                        </div>-->
      <!--            <div class="contact-us">
                            <n-icon size="30px">
                                <phone-portrait-outline/>
                            </n-icon>
                            <div class="contact-us-text">+86-028-8326-2585</div>
                        </div>-->
      <div class="contact-us">
        <n-icon class="footer-icon">
          <mail-sharp />
        </n-icon>
        <div class="contact-us-text font-format">contact@beosin.com</div>
      </div>
    </div>
    <div class="footer-class">
      <p class="footer-title text-lg font-format mb-2 sm:text-base">
        {{ $t('lang.HFooterBigger.group') }}
      </p>
      <div class="flex flex-wrap">
        <n-icon class="group group-mr" @click="openWin(linkConfig['twitter'])">
          <logo-twitter />
        </n-icon>
        <n-icon class="group group-mr" @click="openWin(linkConfig['telegram'])">
          <telegram />
        </n-icon>
        <!--                <n-icon class="group group-mr group-mr-0" @click="openWin(linkConfig['github'])">
                    <logo-github/>
                </n-icon>-->
        <be-icon
          custom-class="group group-mr group-mr-0 discord"
          icon="iconDiscordBeosin"
          @click="openWin(linkConfig['discord'])"
        ></be-icon>
        <n-popover trigger="hover" color="#00FFBA" raw placement="bottom">
          <template #trigger>
            <n-icon class="group sm:hidden">
              <logo-wechat />
            </n-icon>
          </template>
          <div>
            <img
              src="../assets/img/wechat-code.jpg"
              height="100"
              width="100"
              alt=""
            />
          </div>
        </n-popover>
      </div>
      <img
        src="../assets/img/wechat-code.jpg"
        class="display-none mt-4 sm:flex"
        height="100"
        width="100"
        alt=""
      />
    </div>
    <div class="footer-class sm:hidden">
      <p class="footer-title text-lg font-format">
        {{ $t('lang.HFooterBigger.policy.policyTitle') }}
      </p>
      <div
        class="policy-class"
        @click="openWin(linkConfigPolicy['conditions'])"
      >
        <div class="text-point"></div>
        <div class="policy-text font-format">
          {{ $t('lang.HFooterBigger.policy.terms') }}
        </div>
      </div>
      <div class="policy-class" @click="openWin(linkConfigPolicy['privacy'])">
        <div class="text-point"></div>
        <div class="policy-text font-format">
          {{ $t('lang.HFooterBigger.policy.privacy') }}
        </div>
      </div>
    </div>
  </div>
  <!--    <div class="h-6 flex justify-center items-center font-format">©2021 by Hermit. All Rights Reserved.</div>-->
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { MailSharp, LogoWechat, LogoTwitter } from '@vicons/ionicons5'
import { Telegram } from '@vicons/fa'
import { NIcon, NPopover } from 'naive-ui'
import { linkConfig, linkConfigPolicy } from '../enums/link'
import composition from '../utils/mixin/common-func'

export default defineComponent({
  name: 'HFooterBigger',
  components: {
    NIcon,
    NPopover,
    MailSharp,
    LogoTwitter,
    LogoWechat,
    Telegram,
  },
  setup() {
    const { openWin } = composition()
    return {
      linkConfig,
      linkConfigPolicy,
      openWin,
    }
  },
})
</script>
<style>
.footer-class .discord .be-icon {
  width: 30px;
  height: 30px;
  fill: white;
}

.footer-class .discord .be-icon:hover {
  fill: #02fbbb;
}
</style>
<style scoped>
.h-60 {
  height: 21rem;
}

.footer-title {
  font-weight: 500;
  line-height: 50px;
  color: #ececec;
}

.bg-footer-container {
  display: flex;
  justify-content: center;
  color: #ececec;
}

.footer-class {
  width: 345px;
  height: 220px;
  margin-top: 60px;
}

.contact-us {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
}

.contact-us-text {
  padding-left: 5px;
  word-break: break-all;
}

.group {
  font-size: 30px;
  cursor: pointer;
  transition: all 0.5s ease;
}

.group-mr {
  margin-right: 32px;
}

.footer-icon {
  font-size: 30px;
}

.group:hover {
  color: #02fbbb;
  transition: all 0.5s ease;
}

.wechatCode {
  width: 100px;
  height: 100px;
  background: linear-gradient(236deg, #00ffba, #0ed9e0);
}

.policy-class {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  margin-top: 15px;
  cursor: pointer;
}

.text-point {
  width: 4px;
  height: 4px;
  background: #cec7c1;
  border-radius: 50%;
  transition: all 0.5s ease;
}

.policy-text {
  padding-left: 4px;
}

.policy-class:hover .text-point {
  width: 8px;
  height: 8px;
  background: #02fbbb;
  border-radius: 50%;
  transition: all 0.5s ease;
}

.policy-class:hover .policy-text {
  color: #02fbbb;
  transition: all 0.5s ease;
}

@media screen and (min-width: 100px) and (max-width: 1278px) {
  .bg-footer-container {
    display: flex;
    justify-content: space-between;
    @apply py-12 px-6;
  }

  .contact-us-text {
    font-size: 12px;
  }

  .footer-class {
    flex: 1;
    width: 50%;
    margin-top: 0;
  }

  .footer-class-1d5 {
    flex: 1.5;
  }

  .group {
    font-size: 25px;
  }

  .group-mr {
    margin-right: 10px;
  }

  .group-mr-0 {
    margin-right: 0;
  }

  .footer-icon {
    font-size: 25px;
  }
}
</style>
