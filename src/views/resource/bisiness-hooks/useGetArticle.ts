import { computed, onMounted, ref, watch } from 'vue'
import { getBlogNewsList } from '../../../api/research'

const useGetArticle = initParams => {
  const data = ref([])
  const total = ref(0)
  const params = ref(initParams)
  const loading = ref(false)
  const refresh = async params => {
    loading.value = true
    const res: any = await getBlogNewsList(params)
    if (res.code === 200 && res.rows) {
      data.value = res.rows
      total.value = res.total
    }
    loading.value = false
  }

  watch(params, () => {
    refresh(params.value)
  })

  const pages = computed(() => {
    return Math.ceil(total.value / params.value.pageSize)
  })

  const setParams = param => {
    params.value = { ...params.value, ...param }
  }

  // const res: any = await getBlogNewsList(params.value)
  // if (res.code === 200 && res.rows) {
  //   data.value = res.rows
  //   total.value = res.total
  // }

  // setParams(params.value)
  refresh(initParams)

  return {
    data,
    total,
    pages,
    params,
    loading,
    setParams,
  }
}

export default useGetArticle
