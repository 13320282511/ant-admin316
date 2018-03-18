/**
 * Created by zj on 2018/3/16.
 */
import React from "react";
import {connect} from "dva";
import style from './login.less';
class Login extends React.Component {
  constructor () {
    super()
  }
  render() {
    return (
      <div className={style['login-form-wrap']}>
        <form className={style['login-form']}>
          <div><input type="text" placeholder="请输入用户名"/></div>
          <div><input type="password" placeholder="请输入密码"/></div>
        </form>
      </div>
    )
  }
}
export default connect()(Login);
