
import * as Cookies from "js-cookie"; 

export function setCookie(response) {
  Cookies.set('token', response);
}

export function removeCookie() {
  Cookies.remove('token');
}

export function isLoggedIn() {
  if (!Cookies.get('token')) {
    return false;
  } else {
    return true;
  }
}
export function setloginUserName(response) {
  Cookies.set('loginUser', response.name);
}
export function getloginUserName(response) {
  if (!Cookies.get('loginUser')) return;
  return Cookies.get('loginUser');
}
export function getTokenCookie() {
  if (!Cookies.get('token')) return;
  return Cookies.get('token');
}

export function getAlreadyLoggedInCookie() {
  if (!Cookies.get('alreadyLoggedIn')) return;
  return JSON.parse(Cookies.get('alreadyLoggedIn'));
}
