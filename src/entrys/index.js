import dva from 'dva';
import '../../public/index.html';
import createLoading from 'dva-loading';
import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';
import PropTypes from 'prop-types';
global.PropTypes=PropTypes;
// 1. Initialize
const app = dva({
  history: useRouterHistory(createHashHistory)({ queryKey: false }),
  onError(e) {
    console.log(`%c ↓↓↓↓↓↓↓↓↓↓↓↓↓请查看错误信息↓↓↓↓↓↓↓↓↓↓↓↓↓`,'color:red');
    console.log(e);
    console.log(`%c ↑↑↑↑↑↑↑↑↑↑↑↑↑请查看错误信息↑↑↑↑↑↑↑↑↑↑↑↑↑`,'color:red');
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
//自动引用所有model
require.context('../models/', true, /\.js$/).keys().forEach( file => app.model(require(`../models/${file.slice(2)}`)) );

// 4. Router
// app.router(require('../cadreRouter'));
app.router(require('../router'));

// 5. Start
app.start('#root');
