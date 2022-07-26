/* * @hexagon.vue * @deprecated * @author czh * @update (czh 2021/12/16) */
<template>
  <div
    class="hexagon-container"
    :style="{
      backgroundImage: `url(${img})`,
    }"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false">
    <p class="mt-4 font-format sm:text-xs px-5px">{{ text }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue'
  const imgImport = import.meta.globEager('../assets/img/hexagon*.png')
  const list = ref<Array<string>>([
    'NFT Contract',
    'DeFi Contracts',
    'GameFi Contract',
    'Tokens Contracts',
    'Other Customized Smart Contracts',
    '6',
    '7',
    'Coding Security Audit',
    'Consensus Security Audit',
    'Account System Security Audit',
    'Asset Security Audit',
    'Application-layer Security Audit',
    'AML Risk Assessment',
    'Real-time Intelligence Notification',
    'Transaction Analysis',
    'Crypto Address Monitoring',
    'Forensics Analysis Report',
  ])
  export default defineComponent({
    name: 'HexagonComp',
    props: {
      index: {
        type: Number,
        default: 0,
        require: true,
      },
    },
    setup(props) {
      const isHover = ref<boolean>(false)
      const img = computed(() => {
        if (isHover.value) {
          return imgImport['../assets/img/hexagon' + (props.index + 1) + '-hover.png'].default
        }
        return imgImport['../assets/img/hexagon' + (props.index + 1) + '.png'].default
      })

      return {
        img,
        isHover,
        text: list.value[props.index as keyof typeof list.value],
      }
    },
  })
</script>
<!-- prettier-ignore -->
<style scoped>
  .hexagon-container {
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 240px;
    padding: 0 10px;
    text-align: center;
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: cover;
    transition: all .1s;
  }

  .hexagon-container p {
    margin-top: 40px;
  }

  .hexagon-container:hover {
    z-index: 20;
  }

  /* 100% - 110% 适配 */
  @media screen and (min-width: 1540px) and (max-width: 1750px) {

    .hexagon-container {
      height: 200px;
      font-size: 12px;
    }

    .hexagon-container:hover p {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 1536px) and (max-width: 1750px) {

    .hexagon-container {
      height: 204px;
      font-size: 12px;
    }

    .hexagon-container:hover p {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 1280px) and (max-width: 1326px) {

    .hexagon-container {
      width: 32%;
      height: 228px;
      padding: 0 14px;
      font-size: 12px;
    }

    .hexagon-container:hover p {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 100px) and (max-width: 1278px) {

    .hexagon-container {
      width: 26%;
      height: 128px;
      font-size: 12px;
    }

    .hexagon-container p {
      transform: scale(.7);
    }

    .hexagon-container:hover p {
      font-size: 12px;
    }
  }
</style>
