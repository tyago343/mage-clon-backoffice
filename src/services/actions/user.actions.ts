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
export const logoutUserRequest = () => ({
  type: userConstants.LOGOUT_USER_REQUEST,
});
export const logoutUserSuccess = () => ({
  type: userConstants.LOGOUT_USER_SUCCESS,
});
export const logoutUserFailure = () => ({
  type: userConstants.LOGOUT_USER_FAILURE,
});
