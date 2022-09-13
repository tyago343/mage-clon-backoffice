import { Category } from 'src/interfaces/category.interfaces';
import * as categoryConstants from '../constants/category.constants';

export const createCategorySuccess = (payload: Category) => ({
  type: categoryConstants.CREATE_CATEGORY_SUCCESS,
  payload
})
export const createCategoryRequest = (payload: Partial<Category>) => ({
  type: categoryConstants.CREATE_CATEGORY_REQUEST,
  payload
})

export const fetchCategoriesPending = () => ({
  type: categoryConstants.FETCH_CATEGORIES_PENDING,
})

export const fetchCategoriesSuccess = (payload: Category[]) => ({
  type: categoryConstants.FETCH_CATEGORIES_SUCCESS,
  payload
})

export const fetchCategoriesRequest = () => ({
  type: categoryConstants.FETCH_CATEGORIES_REQUEST
})

export const getCategoryByIdPending = () => ({
  type: categoryConstants.GET_CATEGORY_BY_ID_PENDING,
})

export const getCategoryByIdSuccess = (payload: Category[]) => ({
  type: categoryConstants.GET_CATEGORY_BY_ID_SUCCESS,
  payload
})

export const getCategoryByIdRequest = (payload: number | string) => ({
  type: categoryConstants.GET_CATEGORY_BY_ID_REQUEST,
  payload
})