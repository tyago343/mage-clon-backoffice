import { all, fork } from "redux-saga/effects";
import categorySaga from "./category.sagas";
import userSaga from "./user.sagas";

export default function* rootSaga() {
  yield all([fork(userSaga)]);
  yield all([fork(categorySaga)]);
}
