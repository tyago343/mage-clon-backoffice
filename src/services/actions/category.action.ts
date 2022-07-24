import { Category } from 'src/interfaces/category.interfaces';
import * as categoryConstants from '../constants/category.constants';

export const createCategorySuccess = (payload: Category) => ({
  type: categoryConstants.CREATE_CATEGORY_SUCCESS,
  payload
})
export const createCategoryRequest = (payload: Category) => ({
  type: categoryConstants.CREATE_CATEGORY_REQUEST,
  payload
})