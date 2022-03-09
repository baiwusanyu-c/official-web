/* * @about-us.vue * @deprecated * @author czh * @update (czh 2021/12/17) */
<template>
  <div class="about-us-page">
    <!--    头部介绍    -->
    <div class="page-head">
      <div class="header-text">
        <div class="header-text-big font-format">
          {{ $t('lang.aboutUsPage.title') }}
        </div>
        <div class="header-text-small font-format leading-normal">
          {{ $t('lang.aboutUsPage.titleDesc') }}
        </div>
      </div>
    </div>
    <!--    一大段文字描述   -->
    <div
      class="flex flex-col py-16 items-center justify-center box-border desc-info"
    >
      <div
        class="flex items-center justify-between w-4/6 introduction sm:w-4/5 sm:flex-col"
      >
        <img class="sm:mb-6" src="../../assets/img/ab-us-desc.png" alt="" />
        <p
          class="ml-16 leading-loose text-justify text-lg sm:text-xs sm:ml-0 sm:text-justify"
        >
          <span class="font-format">{{
            $t('lang.aboutUsPage.descInfo1')
          }}</span>
          <br />
          <span class="font-format">{{
            $t('lang.aboutUsPage.descInfo2')
          }}</span>
        </p>
      </div>
      <div
        class="ml-16 mt-32 flex flex-wrap items-center justify-between w-4/6 introduction introduction-logo sm:w-4/5 sm:ml-0 sm:mt-6 sm:justify-center"
      >
        <div class="flex items-center justify-between">
          <img src="../../assets/img/ab-us-ic1.png" class="sm:w-12" alt="" />
          <div class="w-32 ml-2 sm:w-20">
            <h2 class="text-mainG text-4xl font-bold font-format sm:text-xl">
              {{ $t('lang.aboutUsPage.descIcon1') }}
            </h2>
            <span class="font-format sm:text-xs">{{
              $t('lang.aboutUsPage.descIconInfo1')
            }}</span>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <img src="../../assets/img/ab-us-ic2.png" class="sm:w-12" alt="" />
          <div class="w-32 ml-2 sm:w-20">
            <h2 class="text-mainG text-4xl font-bold font-format sm:text-xl">
              {{ $t('lang.aboutUsPage.descIcon2') }}
            </h2>
            <span class="font-format sm:text-xs">{{
              $t('lang.aboutUsPage.descIconInfo2')
            }}</span>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <img src="../../assets/img/ab-us-ic3.png" class="sm:w-12" alt="" />
          <div class="w-32 ml-2 sm:w-20">
            <h2 class="text-mainG text-4xl font-bold font-format sm:text-xl">
              {{ $t('lang.aboutUsPage.descIcon3') }}
            </h2>
            <span class="font-format sm:text-xs">{{
              $t('lang.aboutUsPage.descIconInfo3')
            }}</span>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <img src="../../assets/img/ab-us-ic4.png" class="sm:w-12" alt="" />
          <div class="w-32 ml-2 sm:w-20">
            <h2 class="text-mainG text-4xl font-bold font-format sm:text-xl">
              {{ $t('lang.aboutUsPage.descIcon4') }}
            </h2>
            <span
              class="font-format sm:text-xs"
              style="word-break: break-all"
              >{{ $t('lang.aboutUsPage.descIconInfo4') }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <!--    securing the blockchain ecology    -->
    <div
      class="securing-the-blockchain flex items-center justify-center w-full h-auto relative"
    >
      <div class="left-dom w-1/3 h-full"></div>
      <div
        class="center-dom text-center w-1/3 h-full flex justify-center items-center sm:w-2/3"
      >
        <p
          class="text-4xl font-bold w-2/3 text-center slogan font-format sm:text-xl sm:w-full"
        >
          {{ $t('lang.aboutUsPage.securityBlock') }}
        </p>
      </div>
      <div class="right-dom w-1/3 h-full"></div>
    </div>
    <!--    connect    -->
    <div
      class="flex flex-col py-16 items-center justify-center box-border w-full bg-white sm:px-6"
    >
      <p class="text-3xl font-bold w-1/3 text-center mb-16 font-format sm:mb-6">
        {{ $t('lang.connect') }}
      </p>
      <div class="flex items-center">
        <!--                <div class="flex items-center justify-center text-xl mr-36">
                                    <img class="mr-4" src="../../assets/img/phone.png" alt="" />
                                    {{$t('lang.phone')}}:86-028-8326-2585
                                </div>-->
        <div
          class="flex items-center justify-center text-xl font-format sm:text-base"
        >
          <img class="mr-4 sm:w-12" src="../../assets/img/mail.png" alt="" />
          {{ $t('lang.mail') }}:contact@beosin.com
        </div>
      </div>
    </div>
    <!--    Community    -->
    <div
      class="flex flex-col py-16 items-center justify-center box-border w-full bg-mainBlueGary community"
    >
      <p class="text-3xl font-bold w-1/3 text-center mb-24 font-format sm:mb-6">
        {{ $t('lang.community') }}
      </p>
      <div
        class="flex items-center flex-wrap mb-20 sm:mb-6 sm:justify-between sm:px-6"
      >
        <community-circle
          :index="0"
          @click="openWin(linkConfig['twitter'])"
        ></community-circle>
        <community-circle
          :index="1"
          @click="openWin(linkConfig['telegram'])"
        ></community-circle>
        <community-circle
          :index="2"
          @click="openWin(linkConfig['discord'])"
        ></community-circle>
        <community-circle
          :index="3"
          @click="openWin(linkConfig['github'])"
        ></community-circle>
        <community-circle
          :index="4"
          @click="openWin(linkConfig['facebook'])"
        ></community-circle>
        <community-circle
          :index="5"
          @click="openWin(linkConfig['medium'])"
        ></community-circle>
        <n-popover trigger="hover" color="#00FFBA" raw placement="bottom">
          <template #trigger>
            <community-circle :index="6"></community-circle>
          </template>
          <div>
            <img
              alt=""
              src="../../assets/img/wechat-code.jpg"
              height="100"
              width="100"
            />
          </div>
        </n-popover>
      </div>
    </div>
  </div>
  <contact-us></contact-us>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NPopover } from 'naive-ui'
import ContactUs from '../../components/contact-us.vue'
import composition from '../../utils/mixin/common-func'
import { linkConfig } from '../../enums/link'
import CommunityCircle from '../../components/community-circle.vue'

export default defineComponent({
  name: 'AboutUs',
  components: { CommunityCircle, ContactUs, NPopover },
  setup(props, ctx) {
    const { openWin } = composition(props, ctx)
    return {
      openWin,
      linkConfig,
    }
  },
})
</script>

<style>
.about-us-page .page-head {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 300px 110px 300px;
  background-color: #121214;
  background-image: url('../../assets/img/about-us-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.about-us-page .header-text {
  display: flex;
  flex-direction: column;
}

.about-us-page .header-text-big {
  width: 670px;
  padding-top: 0;
  margin-top: 112px;
  font-family: SourceHanSansBold, sans-serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 80px;
  color: #fff;
}

.about-us-page .header-text-small {
  width: 900px;
  padding-top: 39px;
  font-family: SourceHanSansRegular, sans-serif;
  font-size: 30px;
  line-height: 1.5;
  color: #fff;
}

.about-us-page .community {
  background-image: url('../../assets/img/community-bg.png');
  background-repeat: round;
  background-size: 100%;
}

.about-us-page .desc-info {
  background-color: #fff;
  background-image: url('../../assets/img/customer-earth.png');
  background-repeat: no-repeat;
  background-size: 100%;
}

.about-us-page .securing-the-blockchain {
  height: 360px;
}

.about-us-page .securing-the-blockchain .left-dom {
  background-image: url('../../assets/img/securing-the-blockchain-left.png');
  background-repeat: round;
  background-size: 100%;
}

.about-us-page .securing-the-blockchain .center-dom {
  background-image: url('../../assets/img/securing-the-blockchain-center.png');
  background-repeat: round;
  background-size: 100%;
}

.about-us-page .securing-the-blockchain .right-dom {
  background-image: url('../../assets/img/securing-the-blockchain-right.png');
  background-repeat: round;
  background-size: 100%;
}

@media screen and (min-width: 1280px) and (max-height: 638px) and (max-width: 1326px) {
  .about-us-page .page-head {
    padding: 0 100px 50px 100px;
  }

  .desc-info .introduction {
    width: 80%;
  }

  .desc-info .introduction span {
    font-size: 12px;
  }

  .desc-info .introduction.introduction-logo {
    margin-top: 2rem;
  }

  .securing-the-blockchain .slogan {
    font-size: 25px;
  }

  .about-us-page .securing-the-blockchain {
    height: 238px;
  }
}
@media screen and (min-width: 100px) and (max-width: 1278px) {
  .about-us-page .page-head {
    padding: 0 35px 30px 35px;
    background-image: url('../../assets/img/about-us-bg-mobile.png');
    background-repeat: round;
    background-size: cover;
  }

  .about-us-page .header-text-big {
    @apply text-4xl w-full mt-6;
  }

  .about-us-page .header-text-small {
    @apply text-base w-full mt-0 pt-6;
  }

  .desc-info .introduction.introduction-logo {
    background-image: url('../../assets/img/customer-earth.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .about-us-page .securing-the-blockchain {
    height: 150px;
  }

  .about-us-page .securing-the-blockchain .left-dom,
  .about-us-page .securing-the-blockchain .center-dom,
  .about-us-page .securing-the-blockchain .right-dom {
    background-size: cover;
  }
}
</style>
