import { all, call, put, takeLatest } from "redux-saga/effects";
import * as userConstants from "../constants/user.constants";
function* loginUserSaga() {
  
}
function* userSaga() {
  yield all([takeLatest(userConstants.LOGIN_USER_REQUEST, loginUserSaga)]);
}
export default userSaga;