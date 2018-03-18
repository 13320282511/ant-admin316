import React from "react";
import {connect} from "dva";
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import style from './login.less';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor() {
    super()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className={style["login-wrap-content"]}>
        <div className={style["login-bg"]}></div>
        <div className={style["login-wrap"]}>
          <div className={style["login-inner"]}>
            <div className={style["login-logo"]}></div>
            <Form onSubmit={this.handleSubmit} className={`login-form ${style['login-form-zj']}`}
                  style={{paddingLeft: '20px', paddingRight: '20px'}}>
              <FormItem className={style['login-input-zj']}>
                {getFieldDecorator('userName', {
                  rules: [{required: true, message: 'Please input your username!'}],
                })(
                  <Input prefix={<Icon type="user" style={{color: '#3581ff'}}/>} placeholder="Username" style={{height:'100%'}}/>
                )}
              </FormItem>
              <FormItem className={style['login-input-zj']}>
                {getFieldDecorator('password', {
                  rules: [{required: true, message: 'Please input your Password!'}],
                })(
                  <Input prefix={<Icon type="lock" style={{color: '#3581ff'}}/>} type="password"
                         style={{height:'100%'}}
                         placeholder="Password"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                  Log in
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
