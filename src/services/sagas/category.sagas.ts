import { AnyAction } from "redux";
import * as Effects from "redux-saga/effects";
import service from "../../config/api";
import * as categoryConstants from "../constants/category.constants";
import {
  createCategory
} from "../actions/category.action";
import endpoints from "../utils/endpoints";
import { Category } from "src/interfaces/category.interfaces";
const put: any = Effects.put;
const all: any = Effects.all;
const takeLatest: any = Effects.takeLatest;

function* createCategorySaga(action: AnyAction): any {
  try {
    const result = yield service.createResource(action.payload, endpoints.CREATECATEGORY);
    if (result.category) {
      yield put(createCategory(result.category));
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
}
function* categorySaga() {
  yield all([takeLatest(categoryConstants.CREATE_CATEGORY_REQUEST, createCategorySaga)]);
}
export default categorySaga;