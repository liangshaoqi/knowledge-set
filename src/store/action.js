// action也是函数
export function setPageTitle (data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_PAGE_TITLE',
      data: data
    })
  }
}

export function setInfoList (data) {
  return (dispatch, getState) => {
    console.log(getState)
    // 测试接口
    let url = 'https://wechat-sccp-dev.changhongedu.cn/oauth/token'
    // 使用fetch实现异步请求
    window.fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => {
      let data = [1111, 1111]
      dispatch({
        type: 'SET_INFO_LIST',
        data: data
      })
    }).catch(() => {
      let data = [222, 222]
      dispatch({
        type: 'SET_INFO_LIST',
        data: data
      })
    })
    // dispatch({
    //   type: 'SET_INFO_LIST',
    //   data: data
    // })
  }
}
export function setNumber (data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_NUMBER',
      data: data
    })
  }
}