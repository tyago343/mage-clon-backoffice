import { all, fork } from "redux-saga/effects";
import categorySaga from "./category.sagas";
import userSaga from "./user.sagas";
import productSaga from "./product.sagas";

export default function* rootSaga() {
  yield all([fork(userSaga)]);
  yield all([fork(categorySaga)]);
  yield all([fork(productSaga)]);
}
