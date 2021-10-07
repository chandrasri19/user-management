import { fromJS, List } from 'immutable';
import { ActionTypes } from './constants';
import immutable from 'immutability-helper';

const loginState = fromJS({
    email:'',
    password:'',
    loginStatus:false,
    loginError:false,
});

function loginReducer(state = loginState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_USER: {
      return state
        .set(action.payload.fieldName, action.payload.fieldValue)
    }
    case ActionTypes.SUCCESS_LOGIN:{
      return state.set('loginStatus',action.payload.loginStatus).set("loginData",action.payload.loginData)
          .set('loginError',state.get('loginStatus')===true&&false||true)
    }
    case ActionTypes.LOGIN_ERROR:{
      return state.set("loginError",action.payload.loginError)
    }
       
    default:
      return state;
  }
}
export default loginReducer;
