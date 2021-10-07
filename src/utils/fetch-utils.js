import fetchDefaults from 'fetch-defaults';
import * as Cookies from "js-cookie"; 

export const apiFetch = function(url, data) {
  const serverUrl = 'https://reqres.in';

  return fetchDefaults(window.fetch, serverUrl, {
    headers: getAuthHeader(),
  })(url, data);
};

function getAuthHeader() {
  if (Cookies.get('token') != null || Cookies.get('token') != undefined) {
    const token = Cookies.get('token');
    console.log(token)
    return {
      Authorization: `${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
  }
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
}