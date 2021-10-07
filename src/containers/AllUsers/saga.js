import { call, put,all, takeEvery,takeLatest } from 'redux-saga/effects'
import {TicketBookTypes} from './actions'


const getAuthHeader=()=> {
    let getToken=localStorage.getItem('token');
  if (getToken != null || getToken!= undefined) {
    const token =getToken;

    return {
      "Authorization": ` ${token}`,
      'Content-type': 'application/json',
    };
  }
  return {
    'Content-type': 'application/json',
  };
}   


//get user details
const getAllUsers =
    async () => {
        const response = await fetch('https://reqres.in/api/users?page=2')
        const allusers = await response.json()
         return allusers     
        }

function* sagaUsers(){
    try{
        const allusers = yield call(getAllUsers);
        yield put({type: TicketBookTypes.GET_ALLUSERS_SUCCESS,payload:allusers});     
    }catch(e){
        yield put({type: 'GET_USERS_FAILED'});
        console.log("saga failed")   

    }
}

// update the edit user

const updateEditUser =
    async (payload,id) => {
        const response = await fetch(`https://reqres.in/api/users/${id}`,{
            method:'put',
            headers: { 'Content-Type': 'application/json' },
            data:payload,
        })
        console.log(response)
        const allusers = await response.json()
        console.log(allusers)
         return allusers     
        }

const updateEditUser2=(payload,id) =>
            fetch(`https://reqres.in/api/users/${id}`,{
                method:'put',
                headers: { 'Content-Type': 'application/json' },
                data:payload,
            })
                .then(res=>res.json())
                .then(data=>{
                     console.log(data); // logs "1" as expected
                return parseInt(data);
            }).catch(err=>console.log(err))    
                  
function* editUser(payload){
//     const json = yield fetch(`https://reqres.in/api/users/${id}`,{
//         method:'put',
//         headers: { 'Content-Type': 'application/json' },
//         data:payload,
//     })
//     .then(response => response.json(), );    

// yield put({ type:TicketBookTypes.EDIT_SUCCESS_FLAG,payload:allusers});

          const allusers = yield call(updateEditUser2(payload,8));
        yield put({type: TicketBookTypes.EDIT_SUCCESS_FLAG,payload:allusers});     
        console.log("success")
   
}

//delete user

const deleteUser =
    async (id) => {
        const response = await fetch(`https://reqres.in/api/users/${id}`)
        const allusers = await response.json()
         return allusers     
        }
function* deleteUserFun({payload}){        
    const allusers = yield call(deleteUser(payload.id));
        yield put({type: TicketBookTypes.DELETE_USER,payload:allusers});     
}
//login user

function* loginuser({payload}){
    yield fetch('https://reqres.in/api/login',{
        method:'POST',
        headers: getAuthHeader(),
        body:JSON.stringify(payload),
       
    }).then(res=>res.json())
    .then(data=>{
        console.log(data);
        localStorage.setItem('token',data.token);
    })
}

//getSingleUser
const getsignleUser=async (payload) => {
    const response = await fetch(`https://reqres.in/api/users/${Number(payload)}`);
    const allusers = await response.json();
     return allusers     
    }
function* singleUser({payload}){
        const allusers = yield call(getsignleUser,payload);
        yield put({type: TicketBookTypes.SUCCESS_SELECTED_USER,payload:allusers.data});      
      
}

function* rootSagas() {
    yield all([
    takeLatest(TicketBookTypes.All_USERS, sagaUsers),
    takeLatest(TicketBookTypes.UPDATE_USER, editUser),
    takeLatest(TicketBookTypes.DELETE_USER, deleteUserFun),
    takeLatest(TicketBookTypes.LOGIN_SUCCESS_USER, loginuser),
    takeLatest(TicketBookTypes.SELECTED_USER,singleUser)
    ]);
 }
 
 export default rootSagas;