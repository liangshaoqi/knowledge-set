// 防抖
export function debounce(fn, wait = 1000) {
  // 缓存一个定时器id
  let timer = 0
  console.log('this:'+this)
  // 这里返回的函数是每次用户实际调用的防抖函数
  // 如果定时器设置了,就清空上一次的的定时器
  // 开始一个新的定时器,延迟执行用户传入的方法
  return function() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      console.log(this)
    }, wait)
  }
}
// 节流
export function throttle(fn, delay) {
  let prev = Date.now()
  return function() {
    let now = Date.now()
    if (now - prev > delay) {
      fn.apply(this, arguments)
      prev = Date.now
    }
  }
}