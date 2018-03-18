import React from "react";
import TweenOne from 'rc-tween-one';
import {connect} from "dva";
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import style from './login.less';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor() {
    super()
    this.animation = { left: '70%', duration: 2000 };
    this.state = {
      isLoginError: false,
      isLoginButton: false
    }
  }

  changeValid = (e) => {
    this.props.form.validateFields((err, values) => {
      if((e.target.id == 'userName' && e.target.value && values.password) || (e.target.id == 'password' && e.target.value && values.userName)){
        this.setState({
          isLoginButton: true
        })
      }else{
        this.setState({
          isLoginButton: false
        })
      }
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.isLoginButton){
      return false;
    }
    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log('err', err)
        console.log('values', values)
      }
      if (values.userName != 'zj') {
        this.setState({isLoginError: true})
        return false;
      }
      this.setState({isLoginError: false})

      console.log('Received values of form: ', values);
      if (!err) {
        // if (!values.username) {
        //   this.setState({isLoginError: true})
        //   return false;
        // } else {
        //   this.setState({isLoginError: false})
        // }
        // console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className={style["login-wrap-content"]}>
        <div className={style["login-bg"]}>
          <TweenOne
            animation={this.animation}
            className="code-box-shape"
            style={{ margin: '40px 20px' }}
          />
        </div>
        <div className={style["login-wrap"]}>
          <div className={style["login-inner"]}>
            <div className={style["login-logo"]}></div>
            <Form onSubmit={this.handleSubmit} className={`login-form ${style['login-form-zj']}`}
                  style={{paddingLeft: '20px', paddingRight: '20px'}}>
              <FormItem className={style['login-input-zj']}>
                {getFieldDecorator('userName', {
                  rules: [{required: false, message: ''}],
                })(
                  <Input prefix={<Icon type="user" style={{color: '#3581ff'}}/>} placeholder="请输入您的账号"
                         style={{height: '100%'}} onChange={this.changeValid}/>
                )}
              </FormItem>
              <FormItem className={style['login-input-zj-20']}>
                {getFieldDecorator('password', {
                  rules: [{required: false, message: '请输入您的密码'}],
                })(
                  <Input prefix={<Icon type="lock" style={{color: '#3581ff'}}/>} type="password"
                         style={{height: '100%'}}
                         placeholder="请输入您的密码" onChange={this.changeValid}/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>7天内免登录</Checkbox>
                )}
                <span
                  className={this.state.isLoginError ? style['login-error-message'] : style['login-noerror-message']}>请输入正确的账号或密码！</span>
                <Button type="primary" htmlType="submit"
                        className={this.state.isLoginButton ? style['login-yesButton'] : style['login-noButton']}
                        style={{width: '100%', height: '58px', marginTop: '40px'}}>
                  登录
                </Button>
              </FormItem>
            </Form>
          </div>

        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default connect()(WrappedNormalLoginForm);
