import React, { Component } from 'react'


class Login extends Component {
  // 构造函数中使用super是为了继承父类的方法和属性
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true,
      value: ''
    }
  }
  change = () => {
  }
  test = () => {
    console.log(11111)
  }
  render() {
    return (
      <div>
        登录:{this.state.isLogin + ''}
        <input type="text" onChange={this.test()}/>
      </div>
    )
  }
}
export default Login