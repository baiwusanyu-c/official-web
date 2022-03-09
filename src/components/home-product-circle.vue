/* * @home-product-circle.vue * @deprecated * @author czh * @update (czh
2022/1/10) */
<template>
  <div
    class="absolute flex justify-center flex-col items-center home-product-circle"
    :class="`circle${index}`"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <img class="w-28 sm:w-12" :src="img" alt="" />
    <p
      class="product-circle-desc font-format font-bold text-center sm:text-xs"
      style="width: 10em"
    >
      {{ $t(`lang.home.productFeature${index}`) }}
    </p>
  </div>
</template>

<script lang="ts">
interface IImge {
  img: string
}
import { computed, defineComponent, onMounted, reactive, ref } from 'vue'
export default defineComponent({
  name: 'HomeProductCircle',
  props: {
    index: {
      type: Number,
      default: 0,
      require: true,
    },
  },
  emits: ['click'],

  setup(props, ctx) {
    const isHover = ref<boolean>(false)
    const list = [1, 2, 3, 4, 5, 6, 7, 8]
    const imgList = reactive<object[]>([])
    const imgListHover = reactive<object[]>([])
    const imgImport = import.meta.globEager('../assets/img/prod-f*.png')
    const getImage = (): void => {
      list.map((val: number) => {
        const obj: IImge = { img: '' }
        obj.img = imgImport['../assets/img/prod-f' + val + '.png'].default
        imgList.push(obj)
        const objHover: IImge = { img: '' }
        objHover.img =
          imgImport['../assets/img/prod-f' + val + '-hover.png'].default
        imgListHover.push(objHover)
      })
    }
    const img = computed(() => {
      if (isHover.value) {
        return (imgListHover[props.index - 1] as IImge)?.img
      } else {
        return (imgList[props.index - 1] as IImge)?.img
      }
    })
    const handleClick = (): void => {
      ctx.emit('click')
    }
    onMounted(() => {
      getImage()
    })
    return {
      handleClick,
      img,
      isHover,
      list,
      imgList,
      imgListHover,
    }
  },
})
</script>
<style>
@media screen and (min-width: 100px) and (max-width: 1278px) {
  .product-circle-desc {
    transform: scale(0.8);
  }
}
</style>
