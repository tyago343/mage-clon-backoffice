import { AnyAction } from "redux";
import * as Effects from "redux-saga/effects";
import service from "../../config/api";
import * as categoryConstants from "../constants/category.constants";
import {
  createCategorySuccess, fetchCategoriesPending, fetchCategoriesSuccess
} from "../actions/category.action";
import endpoints from "../utils/endpoints";
const put: any = Effects.put;
const all: any = Effects.all;
const takeLatest: any = Effects.takeLatest;

function* createCategorySaga(action: AnyAction): any {
  try {
    const result = yield service.createResource(action.payload, endpoints.CREATECATEGORY);
    if (result) {
      yield put(createCategorySuccess(result));
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
}
function* fetchCategories(action: AnyAction): any {
  yield put(fetchCategoriesPending());
  try {
    const result = yield service.fetchResource(endpoints.FETCHCATEGORIES);
    if(result) {
      yield put(fetchCategoriesSuccess(result))
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
}
function* categorySaga() {
  yield all([takeLatest(categoryConstants.CREATE_CATEGORY_REQUEST, createCategorySaga)]);
  yield all([takeLatest(categoryConstants.FETCH_CATEGORIES_REQUEST, fetchCategories)]);
}

export default categorySaga;