const scale = (
  widths = [
    [0, 750],
    [750, 1230],
  ],
  el: HTMLElement
) => {
  const orignStyle = el.style.cssText
  widths.sort((a, b) => a[0] - b[0])
  for (let i = 1; i < widths.length; i++) {
    if (widths[i][0] < widths[i - 1][1]) throw new Error('有交叉区间')
  }
  const resize = () => {
    const height = el.clientHeight // 不会根据transform的scale而变化
    const width = document.body.clientWidth // 对比屏幕宽度
    let scale = 1
    const range = widths.find(it => it[1] >= width && it[0] < width)
    if (!range) {
      el.style.cssText = orignStyle
      return
    }
    const max = range[1]

    scale = width / max
    el.style.cssText = `transform:scale(${scale});transform-origin:left top;width:${max}px;
        overflow:hidden;
        margin-bottom:-${height * (1 - scale)}px;`
  }

  resize()
  window.addEventListener('resize', resize)
  el.querySelectorAll('img').forEach(img => {
    if (img.complete) return
    img.addEventListener('load', resize)
  })

  return () => {
    window.removeEventListener('resize', resize)
    el.style.cssText = orignStyle
  }
}

export { scale }
