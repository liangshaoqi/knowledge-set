import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd'
// 引入action
import { setPageTitle, setInfoList, setNumber } from '../../store/action.js';
class ReduxCom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // let { setPageTitle, setInfoList, pageTitle, infoList } = this.props;
    console.log(this.props);
    // 触发setPageTitle action
    // setPageTitle('新标题')
  }
  change = () => {
    this.props.setInfoList([111111])
  }
  changeTitle = () => {
    this.props.setPageTitle('你好')
  }
  changeNumber = () => {
    console.log(111111)
    this.props.setNumber(1)
  }
  render() {
    console.log(this.props)
    let { pageTitle, infoList, number } = this.props;
    return (
      <div>
        <p>redux</p>
        <Button onClick={this.changeTitle}>修改title</Button>
        <h1>{pageTitle}</h1>
        <Button onClick={this.change}> 异步修改info</Button>
        {infoList.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
        <Button onClick={this.changeNumber}>修改数字</Button>
        <p>{number}</p>
      </div>
    );
  }
}
// mapStateToProps: 将state映射到组件的props中
const mapStateToProps = (state) => {
  return {
    pageTitle: state.pageTitle,
    infoList: state.infoList
  };
};
// mapDispatchToProps: 将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPageTitle(data) { // 这里setPageTitle将在changeTitle方法中引用
      dispatch(setPageTitle(data)); // 这里色setPageTitle是action引入的方法
    },
    setInfoList(data) {
      dispatch(setInfoList(data));
    },
    setNumber(data) {
      dispatch(setNumber(data))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxCom);
