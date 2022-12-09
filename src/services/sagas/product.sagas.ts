import { AnyAction } from "redux";
import * as Effects from "redux-saga/effects";
import service from "../../config/api";
import * as productConstants from "../constants/product.constants";
import {
  fetchProductsPending,
  fetchProductsSuccess,
  getProductByIdPending,
  getProductByIdSuccess,
  createProductSuccess
} from "../actions/products.action";
import endpoints from "../utils/endpoints";
const put: any = Effects.put;
const all: any = Effects.all;
const takeLatest: any = Effects.takeLatest;

function* createProductSaga(action: AnyAction): any {
  try {
    const result = yield service.createResource(
      action.payload,
      endpoints.CREATECATEGORY
    );
    if (result) {
      yield put(createProductSuccess(result));
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
}
function* fetchProducts(): any {
  yield put(fetchProductsPending());
  try {
    const result = yield service.fetchResource(endpoints.FETCHPRODUCTS);
    if (result) {
      yield put(fetchProductsSuccess(result));
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
}

function* getProductById(action: AnyAction): any {
  yield put(getProductByIdPending());
  try {
    const result = yield service.fetchResource(
      endpoints.GETCATEGORY.replace(":identifier", action.payload)
    );
    if (result) {
      yield put(getProductByIdSuccess(result));
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
}
function* productSaga() {
  yield all([
    takeLatest(productConstants.CREATE_PRODUCT_REQUEST, createProductSaga),
  ]);
  yield all([
    takeLatest(productConstants.FETCH_PRODUCTS_REQUEST, fetchProducts),
  ]);
  yield all([
    takeLatest(productConstants.GET_PRODUCT_BY_ID_REQUEST, getProductById),
  ]);
}

export default productSaga;
