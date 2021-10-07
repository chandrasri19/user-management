import { ActionTypes } from './constants';

export function handleLogout() {
  return {
    type: ActionTypes.USER_LOGOUT,
  };
}
