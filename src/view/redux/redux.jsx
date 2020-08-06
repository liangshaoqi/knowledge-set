import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd'
// 引入action
import { setPageTitle, setInfoList } from '../../store/action.js';
class ReduxCom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let { setPageTitle, setInfoList, pageTitle, infoList } = this.props;
    console.log(this.props);
    // 触发setPageTitle action
    // setPageTitle('新标题')
  }
  change = () => {
    this.props.setInfoList([111111])
  }
  render() {
    let { pageTitle, infoList } = this.props;
    return (
      <div>
        <p>redux</p>
        <h1>{pageTitle}</h1>
        <Button onClick={this.change}> 异步修改info</Button>
        {infoList.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
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
    setPageTitle(data) {
      dispatch(setPageTitle(data));
    },
    setInfoList(data) {
      dispatch(setInfoList(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxCom);
