import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import { apiFetch } from 'utils/fetch-utils';
import {setCookie,setloginUserName} from 'utils/session-utils';

export function* login({payload}){
    const{username,password} = payload;
  let loginData=yield apiFetch(`/api/login`, {
    method: 'POST',
    body:JSON.stringify({email:username,password:password})
  }).then(response => response.json())
  .then(data=>data);
 if(loginData){
 	 setCookie(loginData.token);
     yield put({
      type: ActionTypes.SUCCESS_LOGIN,
      payload: { loginStatus:true, loginData },
    })
 }
// console.log(loginData)
//   if((loginData.status==400&&loginData.status<500)&&!loginData.ok){
//     yield put({
//       type: ActionTypes.LOGIN_ERROR,
//       payload: { loginError:true },
//     });
    
//   }else{
//     const token=yield loginData.json();
//     console.log(token)
//     setCookie({"token":token["access-token"]})
//     setloginUserName({name:username});
//    
//   }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.LOGIN_POST, login)]);
}
