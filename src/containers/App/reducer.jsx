import { fromJS, List } from 'immutable';
import { ActionTypes } from './constants';
import immutable from 'immutability-helper';
import {isLoggedIn} from 'utils/session-utils'
import { logout } from './sagas';
const userTypePlanState = fromJS({
isAuthendicate:isLoggedIn(),
employeesDetails:[],
logout:false,
});

function userTypePlanReducer(state = userTypePlanState, action) {
  switch (action.type) {
    
    case ActionTypes.SUCCESS_LOGOUT:{
      return state
        .set('isAuthendicate',false)
    }
    case ActionTypes.USER_LOGIN_SUCCESS:{
      return state
        .set('isAuthendicate',true)
    }
    
       
    default:
      return state;
  }
}
export default userTypePlanReducer;
