import { useSSRContext } from 'vue'

export const setTitle = (title: string) => {
  if (!import.meta.env.SSR) {
    document.title = title
  } else {
    const ctx = useSSRContext()
    if (ctx) {
      ctx.title = title
    }
  }
}
