/* * @core-advantages.vue * @deprecated * @author czh * @update (czh 2022/1/10)
*/
<template>
  <div
    class="flex justify-center items-center w-full my-8 sm:my-4"
    style="z-index: 1"
  >
    <div
      class="advant-circle flex justify-center items-center font-bold p-6 text-center text-lg font-format md:p-4"
      :style="{ backgroundImage: `url(${img})` }"
    ></div>
    <div
      class="flex-1 ml-6 justify-center items-center text-white md:p-6"
      style="height: min-content"
    >
      <p
        class="leading-normal font-bold text-2xl font-format text-mainG mb-4 sm:text-xs"
      >
        {{ $t(`lang.product.${type}.advantSubTitle${index}`) }}
      </p>
      <p class="leading-normal text-lg font-format text-white sm:text-xs">
        {{ $t(`lang.product.${type}.advantDesc${index}`) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
interface IImge {
  img: string
}
import { computed, defineComponent, onMounted, reactive } from 'vue'
export default defineComponent({
  name: 'CoreAdvantages',
  props: {
    index: {
      type: Number,
      default: 0,
      require: true,
    },
    type: {
      type: String,
      require: true,
      default: '',
    },
  },

  setup(props) {
    const list = [1, 2, 3, 4]
    const imgList = reactive<object[]>([])
    const imgImport = import.meta.globEager(`../assets/img/advant-*.png`)
    const getImage = (): void => {
      list.map((val: number) => {
        const obj: IImge = { img: '' }
        obj.img =
          imgImport[`../assets/img/advant-${props.type}` + val + '.png'].default
        imgList.push(obj)
      })
    }
    const img = computed(() => {
      return (imgList[props.index - 1] as IImge)?.img
    })
    onMounted(() => {
      getImage()
    })
    return {
      img,
      list,
      imgList,
    }
  },
})
</script>
