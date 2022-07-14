const copy = (content, callback) => {
  const inputValue = document.createElement('input');   // 创建DOM元素
  document.body. appendChild(inputValue);   // 将创建的DOM插入到Body上
  inputValue.value = content;   // 将数据赋值给创建的DOM元素的Value上
  inputValue.select();   // 通过表单元素的select()方法选中内容
  document.execCommand('copy');   // 执行浏览器复制命令
  console.log("复制成功");   // 复制完成后的提示
  document.body.removeChild(inputValue);   // 移除DOM元素
  callback && callback()
}

export default copy