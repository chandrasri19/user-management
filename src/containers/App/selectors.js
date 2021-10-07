import { createSelector } from 'reselect';

const planState = state => state.get('employees');

export const getlogoutStatus = () => createSelector([planState], bstate => bstate.get('logout'));

export const getAuthendicate=()=>createSelector(
  planState,
  bstate=> bstate.get('isAuthendicate') 
  )
