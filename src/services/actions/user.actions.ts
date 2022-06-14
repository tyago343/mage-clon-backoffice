import * as userConstants from "../constants/user.constants";
export const loginUserRequest = (payload: any) => ({
  type: userConstants.LOGIN_USER_REQUEST,
  payload,
});
export const loginUserSuccess = (payload: any) => ({
  type: userConstants.LOGIN_USER_SUCCESS,
  payload,
});
export const loginUserFailure = (payload: any) => ({
  type: userConstants.LOGIN_USER_FAILURE,
  payload,
});
