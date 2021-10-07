import { ActionTypes } from './constants';
import {ActionTypes  as PrimaryActionTypes } from 'containers/App/constants'

export function LoginUserField(fieldName,fieldValue) {
  return {
    type: ActionTypes.LOGIN_USER,
    payload:{
        fieldName,fieldValue
    }
  };
}
export function loginPost(username,password){
    return{
        type:ActionTypes.LOGIN_POST,
        payload:{
            username,password
        }
    };
}
export function updateLoginStatus(){
  return{
      type:PrimaryActionTypes.USER_LOGIN_SUCCESS,
  };
}
