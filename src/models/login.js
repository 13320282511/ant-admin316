export default {

  namespace: 'login',

  state: {
    name: '20'
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
      // history.listen(({pathname, search}) => {
      //   const query = queryString.parse(search);
      //   if(pathname.toString() == '/two/routerLink') {
      //     dispatch({
      //       type: 'getDetails',
      //       payload:{code:query.code}
      //     })
      //   }
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'save'});
    },
    * ceSave({payload}, {call, put}) {
      yield  put({type: 'hdianji', payload: payload})
    },
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
    hdianji(state, {payload}) {
      return {...state,...payload};
    }
  },

};
