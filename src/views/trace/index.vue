<template>
  <div class="trace-top">
    <header class="w-full flex justify-center items-center text-[#fff]">
      <div class="relative top-content pr-25vw">
        <div class="top-left">
          <h1 class="top-left-h1">{{ $t('lang.projectList.project5') }}</h1>
          <p class="text-[#FAFAFB] mt-2vw">
            {{ $t('lang.tracePage.pageIntro') }}
          </p>
        </div>
        <img src="@/assets/img/trace/top-img.png" class="absolute top-img w-full" alt="" />
      </div>
    </header>
  </div>
  <main class="trace-main bg-white pt-6.3vw">
    <div class="trace-content w-66.7vw mx-auto">
      <h3 class="text-3vw pb-2vw main-title">{{ $t('lang.tracePage.feture') }}</h3>
      <ul class="grid grid-cols-2 gap-7vw py-6vw feture-list">
        <li class="block w-full">
          <img class="main-img" src="@/assets/img/trace/main-1.png" alt="" />
          <h4 class="main-block-title">{{ $t('lang.tracePage.bTitle1') }}</h4>
          <p class="main-p">
            {{ $t('lang.tracePage.bInfo1') }}
          </p>
        </li>
        <li class="block w-full">
          <img class="main-img" src="@/assets/img/trace/main-2.png" alt="" />
          <h4 class="main-block-title">{{ $t('lang.tracePage.bTitle2') }}</h4>
          <p class="main-p">
            {{ $t('lang.tracePage.bInfo2') }}
          </p>
        </li>
        <li class="block w-full">
          <img class="main-img" src="@/assets/img/trace/main-3.png" alt="" />
          <h4 class="main-block-title">{{ $t('lang.tracePage.bTitle3') }}</h4>
          <p class="main-p">
            {{ $t('lang.tracePage.bInfo3') }}
          </p>
        </li>
        <li class="block w-full">
          <img class="main-img" src="@/assets/img/trace/main-4.png" alt="" />
          <h4 class="main-block-title">{{ $t('lang.tracePage.bTitle4') }}</h4>
          <p class="main-p">
            {{ $t('lang.tracePage.bInfo4') }}
          </p>
        </li>
      </ul>
    </div>
  </main>
  <trace-form> </trace-form>
</template>

<script setup lang="ts">
  import TraceForm from './includes/trace-form.vue'
</script>
<script lang="ts">
  export default { name: 'TracePage' }
</script>

<style scoped>
  /*pad*/
  @media screen and (max-width: 900px) {
    .main-img {
      width: 120px !important;
      height: 120px !important;
    }
    .trace-top {
      padding: 60px !important;
    }

    .trace-content,
    :deep(.trace-form-content) {
      width: calc(100vw - 120px) !important;
    }

    .top-left {
      /* width: 80vw !important; */
    }
    .main-block-title {
      font-size: 18px !important;
    }
    .main-p {
      font-size: 14px !important;
    }
    .trace-top .top-left > p {
      font-size: 2.7vw;
      line-height: 1.5;
      margin-top: 6vw !important;
    }
  }
  /* 手机 */
  @media screen and (max-width: 500px) {
    .top-content {
      padding-right: 132px;
    }
    .trace-top {
      padding: 30px !important;
    }
    .trace-content,
    :deep(.trace-form-content) {
      width: calc(100vw - 60px) !important;
    }
    .feture-list {
      grid-template-columns: 1fr !important;
      row-gap: 11vw;
    }
    .main-title {
      font-size: 18px !important;
    }
    .main-img {
      width: 84px !important;
      height: 84px !important;
    }
    .main-block-title {
      margin-top: 5vw !important;
    }
    .main-p {
      font-size: 14px;
    }
    .right-img {
      display: none !important;
    }
    .top-left > p {
      font-size: 14px;
    }
    .top-left-h1 {
      font-size: 30px !important;
    }
  }
  .top-left-h1 {
    font-size: 60px;
  }
  .top-left > p {
    font-size: 24px;
    line-height: 1.5;
  }
  .main-img {
    width: 168px;
    height: 168px;
    object-fit: contain;
  }
  .main-block-title {
    margin-top: 2.4vw;
    font-size: 32px;
    font-weight: bold;
  }
  .main-p {
    font-size: 24px;
    line-height: 1.5;
  }
  .trace-top {
    background: url('@/assets/img/trace/top-bg.png') no-repeat;
    background-size: cover;
    background-position: center;
    padding: 69px 16.6vw;
  }
  .main-title {
    border-bottom: 5px solid #01e4b7;
    width: fit-content;
    font-weight: bold;
  }
  .top-left {
    /* width: 42vw; */
  }
  .top-img {
    width: 24vw;
    right: 0;
    top: calc(50% - 8vw);
    min-width: 132px;
  }
</style>