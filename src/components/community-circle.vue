/* * @community-circle.vue * @deprecated * @author czh * @update (czh 2022/1/8)
*/
<template>
  <img
    class="mr-16 cursor-pointer sm:mb-6 sm:mr-0"
    :src="img"
    alt=""
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    @click="handleClick"
  />
</template>

<script lang="ts">
interface IImge {
  img: string
}
import { computed, defineComponent, onMounted, reactive, ref } from 'vue'
export default defineComponent({
  name: 'CommunityCircle',
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
    const list = [1, 2, 4, 5, 6, 7, 3]
    const imgList = reactive<object[]>([])
    const imgListHover = reactive<object[]>([])
    const imgImport = import.meta.globEager('../assets/img/community*.png')
    const getImage = (): void => {
      list.map((val: number) => {
        const obj: IImge = { img: '' }
        obj.img = imgImport['../assets/img/community' + val + '.png'].default
        //  obj.img = imgImport['../assets/img/hexagon' + (index + 1) + '-hover.png'].default
        imgList.push(obj)
        const objHover: IImge = { img: '' }
        objHover.img =
          imgImport['../assets/img/community' + val + '-hover.png'].default
        imgListHover.push(objHover)
      })
    }
    const img = computed(() => {
      if (isHover.value) {
        return (imgListHover[props.index] as IImge)?.img
      } else {
        return (imgList[props.index] as IImge)?.img
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
