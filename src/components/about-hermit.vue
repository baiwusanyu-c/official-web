/* * @about-hermit.vue * @deprecated * @author czh * @update (czh 2021/12/15) */
<template>
  <div
    class="about-hermit items-center w-full flex bg-infoh w-full justify-center"
  >
    <div
      class="about-hermit-container w-5/6 h-full flex justify-center items-center sm:w-full"
    >
      <div class="w-2/3 sm:w-full sm:p-8">
        <h1
          class="text-mainG text-4xl text-center mb-14 font-format md:mb-6 sm:w-full sm:text-3xl sm:mb-6"
        >
          {{ $t('lang.aboutHerMit.title') }}
        </h1>
        <p
          class="text-default mb-10 font-format text-lg text-justify leading-normal md:text-sm md:mb-6 sm:text-xs"
        >
          {{ $t('lang.aboutHerMit.info1') }}
        </p>
        <p
          class="text-default font-format text-lg text-justify leading-normal md:text-sm md:mb-8 sm:text-xs"
        >
          {{ $t('lang.aboutHerMit.info2') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutHermit',
})
</script>

<style scoped>
.bg-header {
  width: 1400px;
}

.about-hermit {
  height: 532px;
}

.about-hermit-container {
  background-image: url('../assets/img/aboute-me.png');
  background-repeat: round;
  background-size: cover;
}

@media screen and (min-width: 1280px)  and (max-width: 1326px) {

  .about-hermit {
    height: 354px;
  }
}

@media screen and (min-width: 100px) and (max-width: 1278px) {

  .about-hermit {
    height: auto;
  }

  .about-hermit-container {
    background-image: url('../assets/img/aboute-me-mobile.png');
  }
}
</style>
