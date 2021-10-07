import { createSelector } from "reselect";
const AlluserDetail = (state) => state.get("allUserDetail");

export const FetchedData = () =>
  createSelector(AlluserDetail, (bstate) => bstate.get("allUserDetaild"));

  export const eSuccessFlag = () =>
  createSelector(AlluserDetail, (bstate) => bstate.get("eSuccessFlag"));
  
  export const loginSuccess = () =>
  createSelector(AlluserDetail, (bstate) => bstate.get("isAuthendicate"));
  
  export const editUser = () =>
  createSelector(AlluserDetail, (bstate) => bstate.get("editUser"));

  export const getSingleUser = () =>
  createSelector(AlluserDetail, (bstate) => bstate.get("editUser"));


 

