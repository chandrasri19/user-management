import keymirror from "fbjs/lib/keyMirror";

export const TicketBookTypes = keymirror({
  BOOK_TICKET: null,
  SAVE_DATA: null,
  All_USERS:null,
  GET_ALLUSERS_SUCCESS:null,
  EDIT_USER:null,
  UPDATE_USER:null,
  UPDATE_CASE:null,
  EDIT_SUCCESS_FLAG:null,
  DELETE_USER:null,
  DELETE_SUCCESS_FLAG:null,
  DELETE_USER_ID:null,
  LOGIN_USER:null,
  LOGIN_SUCCESS_USER:null,
  LOGIN_FAILED:null,
  LOGIN_SUCCESS:null,
  SUCCESS_SELECTED_USER:null,
  SELECTED_USER:null,
});

export function StartbookTicket(alluserdata) {
  console.log("action")
  return { type: TicketBookTypes.All_USERS, payload: { alluserdata } };
}
export function editUser(user) {
  console.log("action")
  return { type: TicketBookTypes.EDIT_USER, payload: user };
}
export function updateCaseForEach(key,value){
  return{
    type:TicketBookTypes.UPDATE_CASE,
    payload:{
      key,value
    }
  }
}

export function updateEditUser(user) {
  console.log("action")
  return { type: TicketBookTypes.UPDATE_USER, payload: user };
}
export function singleUserSelect(user) {
  console.log("action")
  return { type: TicketBookTypes.SELECTED_USER, payload: user };
}
export function loginUser(user) {
  console.log("action")
  return { type: TicketBookTypes.LOGIN_SUCCESS, payload: user };
}
export function loginuserSave(user) {
  return { type: TicketBookTypes.LOGIN_SUCCESS_USER, payload: user };
}
export function deleteruser(user) {
  console.log("action")
  return { type: TicketBookTypes.DELETE_USER, payload: user };
}
