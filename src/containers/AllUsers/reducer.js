import { InitialState } from "./initial";
import { TicketBookTypes } from "./actions";



function TicketBookReducer(state = InitialState, action) {
  switch (action.type) {
    case TicketBookTypes.SAVE_DATA: {
      return state.set("data", action.payload);
    }
    case TicketBookTypes.All_USERS: {
      return state.set("allUserDetailsdata", action.payload);
    }
    case TicketBookTypes.GET_ALLUSERS_SUCCESS:{
      console.log("reducer")
      return state.set("allUserDetaild",action.payload)      
    }
    case TicketBookTypes.EDIT_USER: {
      return state.set("editUser", action.payload);
    }
    case TicketBookTypes.UPDATE_CASE: {
     let editedUser=Object.assign({},state.editUser);
     editedUser[action.payload.key]=action.payload.value;
      return state.set("editUser", editedUser);
    }
    case TicketBookTypes.EDIT_SUCCESS_FLAG: {
      return state.set("eSuccessFlag", true);
    }
    case TicketBookTypes.LOGIN_SUCCESS: {
      return state.set("loginsuccess", true);
    }
    case TicketBookTypes.LOGIN_SUCCESS_USER:{
      return state.set('isAuthendicate',true)      
    }
    case TicketBookTypes.DELETE_SUCCESS_FLAG: {
      return state.set("eSuccessFlag", true);
    }
    case TicketBookTypes.SUCCESS_SELECTED_USER:{
      return state.set("editUser",action.payload)      
    }
    case TicketBookTypes.SUCCESS_LOGOUT:{
      return state
        .set('isAuthendicate',false)
    }
    case TicketBookTypes.USER_LOGIN_SUCCESS:{
      return state
        .set('isAuthendicate',true)
    }
    default:
      return state;
  }
}

export default TicketBookReducer;
