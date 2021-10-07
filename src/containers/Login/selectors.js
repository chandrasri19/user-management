import { createSelector } from 'reselect';

const login = state => state.get('Login');

// export const getEmail = () =>{
//     createSelector([login], bstate => bstate.get('email'))
// };
// export const getPassword=()=>{
//   createSelector([login], bstate=> bstate.get('password'));
// }
export const getEmail = () => createSelector(
	login,
	bstate => bstate.get('email')
)
export const getPassword = () => createSelector(
	login,
	bstate => bstate.get('password')
)
export const getLoginStatus = () => createSelector(
	login,
	bstate => bstate.get('loginStatus')
)
export const loginError = () => createSelector(
	login,
	bstate => bstate.get('loginError')
)
