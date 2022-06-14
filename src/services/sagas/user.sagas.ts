import { AnyAction } from "redux";
import service from "../../config/api";
import * as userConstants from "../constants/user.constants";
import * as Effects from "redux-saga/effects";
import { loginUserFailure, loginUserSuccess } from "../actions/user.actions";

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
function* userSaga() {
  yield all([takeLatest(userConstants.LOGIN_USER_REQUEST, loginUserSaga)]);
}
export default userSaga;
