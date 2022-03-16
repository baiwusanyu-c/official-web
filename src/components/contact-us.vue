/* * @contact-us.vue * @deprecated * @author czh * @update (czh 2021/12/15) */
<template>
  <div
    class="contact-us w-full bg-mainG text-black h-64 flex items-center justify-center sm:h-auto">
    <div
      class="contact-us-body flex items-center justify-center box-border lg125:w-3/4 md:w-3/4 sm:flex-col sm:p-6">
      <div class="flex flex-col lg:mr-0 lg125:mr-0 md:mr-0">
        <div class="contact-us-line bg-black mb-4"></div>
        <h2 class="text-3xl font-bold title font-format leading-normal sm:text-xl sm:mt-8">
          {{ $t('lang.contactUs.info1') }}
        </h2>
      </div>
      <div class="flex justify-end sm:mt-8 sm:justify-center">
        <be-button
          custom-class="contact-btn h-btn-txt-black text-black font-bold w-40 ml-20 sm:ml-0"
          size="large"
          @click="openDialog">
          <span class="font-format text-2xl leading-loose sm:text-xl">
            {{ $t('lang.contactBtn') }}
          </span>
        </be-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useEventBus } from '@vueuse/core'
  export default defineComponent({
    name: 'ContactUs',
    setup() {
      const bus = useEventBus<string>('openQuote')
      const openDialog = (): void => {
        bus.emit('true')
      }
      return {
        openDialog,
      }
    },
  })
</script>

<!-- prettier-ignore -->
<style>
  @media screen and (min-width: 1280px) and (max-width: 1326px) {

    .contact-us .title {
      @apply text-2xl;
    }
  }

  .contact-us-body {
    width: 62%;
  }

  .contact-us .contact-btn {
    width: 293px;
    height: 60px;
  }

  .contact-us-line {
    width: 300px;
    height: 5px;
  }

  @media screen and (min-width: 100px) and (max-width: 1278px) {

    .contact-us-body {
      width: 100%;
    }

    .contact-us-line {
      width: 150px;
    }

    .contact-us .contact-btn {
      width: 180px;
      height: 35px;
    }

    .contact-us .contact-btn span {
      line-height: 1.75;
    }
  }
</style>
