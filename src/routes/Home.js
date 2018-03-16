import React, {Component} from "react";
import {connect} from "dva";

class Home extends Component {

  render() {
    return (
      <div>
        我是首页
      </div>
    );
  }
}

// 指定订阅数据，这里关联了 home
// function mapStateToProps({ home }) {
//   return { home };
// }

// 建立数据关联关系
// 在订阅了数据以后，就可以通过 props 访问到 model 的数据
export default connect()(Home);
