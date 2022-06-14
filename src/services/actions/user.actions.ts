import * as userConstants from "../constants/user.constants";
export const loginUserRequest = () => ({ type: userConstants.LOGIN_USER_REQUEST });
export const loginUserSuccess = (payload: any) => ({
  type: userConstants.LOGIN_USER_SUCCESS,
  payload,
});
export const loginUserFailure = (payload: any) => ({
  type: userConstants.LOGIN_USER_FAILURE,
  payload,
});
