import React, {Component} from "react";
import {connect} from "dva";
// import cookie from "js-cookie";
// import {routerRedux} from "dva/router";
// import {Dropdown, Icon, Input, Layout, Menu, message, Modal, Popover, Tooltip} from "antd";
// import styles from "./index.css";
// import PerSet from "../../components/PerSet/index";
// import CPwd from "./changePwd";
// import {WitMenu} from "../../components/index";
// const {Header, Content, Sider} = Layout;
// import base64url from "base64url";
// const Search = Input.Search;
// const Md5 = require('md5');

const empty=require('is-empty');
class DefaultLayout extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    popoverVisible:false,
    visible: false,
    collapsed: true,
    pageName: '',
    isVisible:false,
    org:{},
    renderFirst:1,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  pageChange = (name) => {
    this.state.pageName = name
  };
  handleClick = (e) => {
    console.log('click ', e);
    this.props.dispatch(routerRedux.push({
      pathname: '/config'
    }));
  };
  userMenu = (value) => {
    this.setState({
      popoverVisible:false,
    });
    if (value.key === "out") {
      cookie.remove('user');
      sessionStorage.clear();
      localStorage.clear();
      if(window.location.hostname=="www.luckup.net" || window.location.hostname=="127.0.0.1"){
        this.props.dispatch({
          type: 'newLogin/logout',
          payload: {}
        });
        this.props.dispatch(routerRedux.push('/login'));
      }else{
        //市委专用
        window.location.href="api/common/caslogout";
      }
    }
    if (value.key === "21") {
      this.setState({
        visible:true
      })
    }
    //点击修改密码
    if(value.key==='password'){
      let {user,}=this.props.layout;
      this.props.dispatch({
        type:'layout/fetchAccount',
        payload:{
          code:'account',
          pagination:false,
          para:[{key:'code',values:[user.code]}]
        },
      });
      //弹出修改密码的页面
      this.setState({ isVisible:true,})
    }
  };
  //  关闭个人偏好设置
  onCancel = () => {
    //关闭Modal
    this.setState({
      visible: false,
    });
  };
  muClick = (value) => {
    let data = this.props.layout.user.data.filter(df => df.orgCode == value.key);
    this.props.dispatch({
      type: 'layout/updated',
      payload: {
        orgName: data[0].orgName,
        orgCode: data[0].orgCode,
        orgType: data[0].orgType,
      }
    });
    //刷新页面
    window.location.reload();
  };
  handleVisibleChange = (popoverVisible) => {
    this.setState({ popoverVisible });
  };
  //菜单改变
  menuChange=(item)=>{
    sessionStorage.menuCode=item.Code;
    sessionStorage.menuItemCode=item.Code+'-1';
    this.props.dispatch({
      type: 'newLogin/success',
      payload: {
        menuCode: item.Code,
        menuItemCode: item.Code+'-1',
      }
    });
  };
  //修改密码确定
  doOk=()=>{
    let {account}=this.props.layout;
    this.formRef.props.form.validateFields((error,values)=>{
      if(!error){
        // console.log(error,values);
        this.props.dispatch({
          type:'layout/fetchPassword',
          payload:{
            account,
            newPassword:values['Password'],
          },
        })
      }
    });
  };
  //修改密码取消
  doCancel=()=>{
    this.setState({ isVisible:false,})
  };
  //在完成首次渲染之前调用，此时仍可以修改组件的state。
  componentWillMount(){
    console.log("清空组织树信息（重新获取）");
    this.props.dispatch({
      type: 'witList/success',
      payload: {
        tree:{},
      }
    });
  }
  //监听密码是否修改成功
  componentWillReceiveProps(nextProps){
    // console.log(this.state.org,'rrrrrrrrrrrrr');
    let {user}=nextProps.layout;
    let {org,renderFirst}=this.state;
    if(renderFirst && empty(org)){
      this.setState({
        org:{
          code:user.orgCode,
          name:user.orgName,
        },
        renderFirst:0,
      })
    }
    let {ok,}=nextProps.layout;
    switch (ok){
      case undefined:
        break;
      case true:
        this.setState({ isVisible:false,});
        message.success('修改成功!');
        cookie.remove('user');
        nextProps.dispatch({
          type:'newLogin/logout',
          payload: {},
        });
        break;
      case false:
        message.error('修改失败！');
        break;
    }
    if(ok){
      nextProps.dispatch({
        type:'layout/fetchState',
        payload:{ ok:undefined,},
      })
    }
  };
  onChange=(org)=>{
    this.setState({
      org,
    })
  };
  getChildContext(org) {
    return {org:this.state.org};
  }
  render() {

      return (
        <div>layout</div>
      )
  }
}


DefaultLayout.childContextTypes = {
  org: PropTypes.object,
};
function mapStateToProps(state) {
  return {
    layout:state.layout,
    newLogin:state.newLogin,
  };
}

// 建立数据关联关系
// 在订阅了数据以后，就可以通过 props 访问到 model 的数据
export default connect(mapStateToProps)(DefaultLayout);
