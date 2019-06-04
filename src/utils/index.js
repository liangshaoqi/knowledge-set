/* eslint-disable */
// 防抖
export function debounce(fn, wait = 1000) {
  // 缓存一个定时器id
  let timer = 0
  console.log('this:' + this)
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
export function session_set(name, data) {
  sessionStorage.setItem(name, JSON.stringify(data))
}

export function session_get(name) {
  return JSON.parse(sessionStorage.getItem(name))
}

/**
 * 时间戳转换时间
 * @param timeStamp 时间戳
 * @param middleStr 中间连接符
 * @param type 返回类型是否带详细数据(时分秒)
 */
export function timestampToTime(timeStamp, middleStr = '-', type = 'YMD') {
  let date = new Date(timeStamp)
  let Y = date.getFullYear() + middleStr
  let M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + middleStr
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + ''
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  let m =
    (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  if (type === 'YMD') {
    return Y + M + D
  }
  return Y + M + D + ' ' + h + m + s
}
/**
 * 标准时间转时间字符串(2019-03-29)
 * @param {*} date 标准时间
 */
export function formatDate(date) {
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate()
  d = d < 10 ? '0' + d : d
  return y + '-' + m + '-' + d
}
/**
 * 判断对象属性值是否为空或者null或者undefined
 * @export
 * @param {*} obj
 * @returns true: 对象属性值有空 false:对象属性值没有空
 */
export function objectHasValueIsEmpty(obj) {
  for (var key in obj) {
    if (obj[key] === '' || obj[key] === undefined || obj[key] === null) {
      return true
    }
  }
  return false
}
// 秒数转时间
export function reverseTime(item) {
  let h = 0
  let m = 0
  let s = 0
  let time = 0
  if (item >= 3600) {
    h = Math.floor(item / 3600)
    m = Math.floor((item - 3600 * h) / 60)
    s = item - 3600 * h - 60 * m
    time =
      (h >= 10 ? h : '0' + h) +
      ':' +
      (m >= 10 ? m : '0' + m) +
      ':' +
      (s >= 10 ? s : '0' + s)
  } else if (item >= 60) {
    m = Math.floor(item / 60)
    s = item - 60 * m
    time =
      (h >= 10 ? h : '0' + h) +
      ':' +
      (m >= 10 ? m : '0' + m) +
      ':' +
      (s >= 10 ? s : '0' + s)
  } else {
    s = item
    time =
      (h >= 10 ? h : '0' + h) +
      ':' +
      (m >= 10 ? m : '0' + m) +
      ':' +
      (s >= 10 ? s : '0' + s)
  }
  return time
}

// 深度克隆
export function deepClone(obj) {
  var str
  var newobj = obj.constructor === Array ? [] : {}
  if (typeof obj !== 'object') {
    return
  } else if (window.JSON) {
    str = JSON.stringify(obj) // 序列化对象
    newobj = JSON.parse(str) // 还原
  } else {
    // 如果不支持以上方法
    for (var i in obj) {
      newobj[i] = typeof obj[i] === 'object' ? this.cloneObj(obj[i]) : obj[i]
    }
  }
  return newobj
}
// 获取UUId
export function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * 判断数组对象中是否含有字段并且与参数字段值相等
 * @param { Array } arr 需要判断的数组
 * @param { String } property 某个属性
 * @param { String } propertyValue 属性值
 */
export function arrIsSome(arr, property, propertyValue) {
  return arr.some(item => {
    return item[property] === propertyValue
  })
}
/**
 * 暂时没用
 * 对应字段为某个值时,保留该字段对应的对象
 * @param { Array } nodes 要过滤的节点
 * @param { Function } predicate 过滤条件,符合条件的保留
 */
export function treeFilter(nodes, predicate) {
  // 如果没有节点,结束递归
  if (!(nodes && nodes.length)) return []
  // 申明一个空数组
  let newChildren = []
  // 循环节点
  for (let node of nodes) {
    // 判断节点数据是否和参数的条件相等
    console.log(predicate(node))
    if (predicate(node)) {
      // 如果节点符合条件,直接加入新的节点集newChildren
      newChildren.push(node)
      node.children = treeFilter(node.children, predicate)
    } else {
      // 如果当前节点不符合条件,递归过滤子节点
      // 把符合条件的子节点提升上来,并加入新节点集
      newChildren.push(...treeFilter(node.children, predicate))
    }
  }
  return newChildren
}

// 判断是否是移动端浏览器
export function browserType() {
  var sUserAgent = navigator.userAgent.toLowerCase()
  var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad'
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os'
  var bIsMidp = sUserAgent.match(/midp/i) == 'midp'
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4'
  var bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb'
  var bIsAndroid = sUserAgent.match(/android/i) == 'android'
  var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce'
  var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile'
  if (
    bIsIpad ||
    bIsIphoneOs ||
    bIsMidp ||
    bIsUc7 ||
    bIsUc ||
    bIsAndroid ||
    bIsCE ||
    bIsWM
  ) {
    return 'phone'
  }
  return 'pc'
}
