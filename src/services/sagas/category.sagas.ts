import { AnyAction } from "redux";
import * as Effects from "redux-saga/effects";
import service from "../../config/api";
import * as categoryConstants from "../constants/category.constants";
import {
  createCategorySuccess, 
  fetchCategoriesPending, 
  fetchCategoriesSuccess,
   getCategoryByIdPending, 
   getCategoryByIdSuccess
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
function* fetchCategories(): any {
  yield put(fetchCategoriesPending());
  try {
    const result = yield service.fetchResource(endpoints.FETCHCATEGORIES);
    if (result) {
      yield put(fetchCategoriesSuccess(result))
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
}

function* getCategoryById(action: AnyAction): any {
  yield put(getCategoryByIdPending());
  try {
    const result = yield service.fetchResource(endpoints.GETCATEGORY.replace(":identifier", action.payload));
    if (result) {
      yield put(getCategoryByIdSuccess(result))
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
}
function* categorySaga() {
  yield all([takeLatest(categoryConstants.CREATE_CATEGORY_REQUEST, createCategorySaga)]);
  yield all([takeLatest(categoryConstants.FETCH_CATEGORIES_REQUEST, fetchCategories)]);
  yield all([takeLatest(categoryConstants.GET_CATEGORY_BY_ID_REQUEST, getCategoryById)]);
}

export default categorySaga;