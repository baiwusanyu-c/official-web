/* * @h-footer-bigger.vue * @deprecated * @author czh * @update (czh 2021/12/15) */
<template>
  <div class="bg-footer page-footer">
    <div class="block">
      <img src="@/assets/img/LOGO.png" class="w-39 ph:w-25" alt="" />
      <p style="font-size: 18px; line-height: 24px; margin-top: 28px">
        Stay up-to-date on our latest offerings, tools, and the world of blockchain security.
      </p>
      <div class="mt-10">
        <a href="mailto:Contact@beosin.com" class="email">Contact@beosin.com</a>
      </div>
    </div>
    <div class="block">
      <p class="footer-title text-lg font-format">
        {{ $t('lang.HFooterBigger.search.title') }}
      </p>
      <ul style="margin-bottom: 20px">
        <li
          v-show="tabTypes.indexOf(3) > -1"
          class="font-format"
          @click="$router.push({ path: '/resources', query: { type: 3 } })">
          Security Incident
        </li>
        <li
          v-show="tabTypes.indexOf(1) > -1"
          class="font-format"
          @click="$router.push({ path: '/resources', query: { type: 1 } })">
          Research Report
        </li>
        <li
          v-show="tabTypes.indexOf(6) > -1"
          class="font-format"
          @click="$router.push({ path: '/resources', query: { type: 6 } })">
          Event Update
        </li>
        <li
          v-show="tabTypes.indexOf(4) > -1"
          class="font-format"
          @click="$router.push({ path: '/resources', query: { type: 4 } })">
          Partnership Announcement
        </li>
        <li
          v-show="tabTypes.indexOf(5) > -1"
          class="font-format"
          @click="$router.push({ path: '/resources', query: { type: 5 } })">
          Web3.0 Classroom
        </li>
        <li
          v-show="tabTypes.indexOf(7) > -1"
          class="font-format"
          @click="$router.push({ path: '/resources', query: { type: 7 } })">
          Resources
        </li>
      </ul>
      <p class="footer-title text-lg font-format">
        {{ $t('lang.HFooterBigger.company.title') }}
      </p>
      <ul class="mt-6">
        <li class="font-format" @click="$router.push('/aboutus')">
          {{ $t('lang.HFooterBigger.company.aboutUs') }}
        </li>
        <li class="font-format" @click="openWin(linkConfigPolicy.conditions)">
          {{ $t('lang.HFooterBigger.company.team') }}
        </li>
        <li class="font-format" @click="openWin(linkConfigPolicy.privacy)">
          {{ $t('lang.HFooterBigger.company.privacy') }}
        </li>
      </ul>
    </div>
    <div class="block">
      <p class="footer-title text-lg font-format">
        {{ $t('lang.HFooterBigger.serve.title') }}
      </p>
      <ul>
        <li class="font-format" @click="$router.push('/product/vass')">
          {{ $t('lang.HFooterBigger.serve.vaas') }}
        </li>
        <li class="font-format" @click="$router.push('/product/eagleeye')">
          {{ $t('lang.HFooterBigger.serve.eye') }}
        </li>
        <li class="font-format" @click="$router.push('/service/audit')">
          {{ $t('lang.HFooterBigger.serve.audit') }}
        </li>
        <li class="font-format" @click="$router.push('/service/chainsaudit')">
          {{ $t('lang.HFooterBigger.serve.platform') }}
        </li>
        <li class="font-format" @click="$router.push('/service/tracing')">
          Cryptocurrency Tracing
        </li>
      </ul>
    </div>

    <div class="block socials">
      <p class="footer-title text-lg font-format">
        {{ $t('lang.HFooterBigger.socials.title') }}
      </p>
      <ul>
        <li class="font-format" @click="openWin(linkConfig.twitter)">
          <be-icon :size="30" icon="iconTwitter"></be-icon>
          {{ $t('lang.HFooterBigger.socials.twitter') }}
        </li>
        <li class="font-format" @click="openWin(linkConfig.alert)">
          <be-icon icon="iconTwitter"></be-icon>
          {{ $t('lang.HFooterBigger.socials.alert') }}
        </li>
        <li class="font-format" @click="openWin(linkConfig.telegram)">
          <be-icon icon="iconTelegram"></be-icon>
          {{ $t('lang.HFooterBigger.socials.telegram') }}
        </li>
        <li class="font-format" @click="openWin(linkConfig.linkedin)">
          <be-icon icon="iconLinkedin"></be-icon>
          {{ $t('lang.HFooterBigger.socials.linkedin') }}
        </li>
        <li class="font-format" @click="openWin(linkConfig.medium)">
          <be-icon icon="iconMedium"></be-icon>
          {{ $t('lang.HFooterBigger.socials.medium') }}
        </li>
        <li class="font-format" @click="openWin(linkConfig.discord)">
          <be-icon icon="iconDiscord"></be-icon>
          {{ $t('lang.HFooterBigger.socials.discord') }}
        </li>
      </ul>
    </div>
  </div>
  <div
    class="h-60px ph:text-12px ph:h-30px text-18px bg-[#1D263B] text-[#717786] flex justify-center items-center font-format">
    ©2021 by Beosin. All Rights Reserved.
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { getArticleTabTypes } from '@/api/research'

  import { linkConfig, linkConfigPolicy } from '../enums/link'
  import composition from '../utils/mixin/common-func'
  export default defineComponent({
    name: 'HFooterBigger',
    async setup() {
      const { openWin } = composition()

      const tabTypes = ref([])
      const res = await getArticleTabTypes()
      tabTypes.value = res.data

      return {
        linkConfig,
        linkConfigPolicy,
        tabTypes,
        openWin,
      }
    },
  })
</script>
<!-- prettier-ignore -->
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
<!-- prettier-ignore -->
<style scoped>
.email{
  font-size: 20px;
}
.page-footer{
  display: grid;
  grid-template-columns: 344px 1fr 1fr 1fr;
  column-gap: 20px;
  background-color: #121928;
}
.page-footer li{
  width: fit-content;
  margin-top: 24px !important;
  line-height: 20px;
  font-size: 18px;
  cursor: pointer;
}
.bg-footer{
  padding: 60px max(30px,calc((100% - 1230px) / 2)) 30px;
}

.block{
  color: #888888;

}
.footer-title{
  color: #fff;
  
}
.block li:hover{
  color: #02fbbb;
}
.socials li:hover :deep(use){
  fill: #02fbbb;
}

.socials :deep(use){
  fill: #777;
}
.block li > .be-icon-container{
  margin-right: 10px;
}
.socials li{
  display: flex;
  align-items: center;
   margin-top: 30px !important;
}
.socials :deep(svg) {
  width: 24px;
  height: 24px;
}

@media screen and (max-width: 1278px) {
  .page-footer{
    grid-template-columns: 1fr 1fr;
    row-gap: 60px;
    padding: 30px 20px;
  }
  .email{
    word-break: break-all;
    font-size: 18px;
  }
  .block * {
    font-size: 12px !important;
  }
  .block li{
    margin-top: 12px !important;
  }
  
}
</style>
