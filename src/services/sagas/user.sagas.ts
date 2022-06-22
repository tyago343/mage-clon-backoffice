import { AnyAction } from "redux";
import * as Effects from "redux-saga/effects";
import service from "../../config/api";
import * as userConstants from "../constants/user.constants";
import {
  loginUserFailure,
  loginUserSuccess,
  logoutUserFailure,
  logoutUserSuccess,
} from "../actions/user.actions";
const put: any = Effects.put;
const all: any = Effects.all;
const takeLatest: any = Effects.takeLatest;

function* loginUserSaga(action: AnyAction): any {
  try {
    const result = yield service.login(action.payload.username, action.payload.password);
    if (result.user) {
      yield put(loginUserSuccess({ user: result.user }));
    } else {
      yield put(loginUserFailure({ error: result.message }));
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
}
function* logoutUserSaga(): any {
  try {
    const result = yield service.logout();
    if (result) {
      yield put(logoutUserSuccess());
    } else {
      yield put(logoutUserFailure());
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
}
function* userSaga() {
  yield all([takeLatest(userConstants.LOGIN_USER_REQUEST, loginUserSaga)]);
  yield all([takeLatest(userConstants.LOGOUT_USER_REQUEST, logoutUserSaga)]);
}
export default userSaga;
