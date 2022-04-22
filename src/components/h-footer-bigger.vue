/* * @h-footer-bigger.vue * @deprecated * @author czh * @update (czh 2021/12/15) */
<template>
  <div
    class="bg-footer page-footer grid px-20vw py-20px sm:px-5vw grid-cols-4 sm:grid-cols-2 gap-x-3 gap-y-12">
    <div class="block">
      <p class="footer-title text-lg font-format">
        {{ $t('lang.HFooterBigger.search.title') }}
      </p>
      <ul>
        <li class="font-format" @click="$router.push('/index/research')">
          {{ $t('lang.HFooterBigger.search.analysis') }}
        </li>
        <li
          class="font-format"
          @click="$router.push({ path: '/index/research', query: { tab: 2 } })">
          {{ $t('lang.HFooterBigger.search.report') }}
        </li>
      </ul>
    </div>
    <div class="block">
      <p class="footer-title text-lg font-format">
        {{ $t('lang.HFooterBigger.serve.title') }}
      </p>
      <ul>
        <li class="font-format" @click="$router.push('/index/product/productVaaS')">
          {{ $t('lang.HFooterBigger.serve.vaas') }}
        </li>
        <li class="font-format" @click="$router.push('/index/product/productEagle')">
          {{ $t('lang.HFooterBigger.serve.eye') }}
        </li>
        <li class="font-format" @click="$router.push('/index/service/contracts')">
          {{ $t('lang.HFooterBigger.serve.audit') }}
        </li>
        <li class="font-format" @click="$router.push('/index/service/security')">
          {{ $t('lang.HFooterBigger.serve.platform') }}
        </li>
      </ul>
    </div>
    <div class="block">
      <p class="footer-title text-lg font-format">
        {{ $t('lang.HFooterBigger.company.title') }}
      </p>
      <ul>
        <li class="font-format" @click="$router.push('/index/aboutUs')">
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
  <!--    <div class="h-6 flex justify-center items-center font-format">©2021 by Hermit. All Rights Reserved.</div>-->
</template>
<script lang="ts">
  import { defineComponent } from 'vue'

  import { linkConfig, linkConfigPolicy } from '../enums/link'
  import composition from '../utils/mixin/common-func'
  export default defineComponent({
    name: 'HFooterBigger',
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
.page-footer li{
  width: fit-content;
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
  margin-top: 12px !important;
  display: flex;
  align-items: center;

}
.socials :deep(svg) {
  width: 24px;
  height: 24px;
}
.block li{
  cursor: pointer;
  margin-top: 20px;
}
</style>
