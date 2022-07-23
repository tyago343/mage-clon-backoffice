import { Category } from 'src/interfaces/category.interfaces';
import * as categoryConstants from '../constants/category.constants';

export const createCategory = (payload: Category) => ({
  type: categoryConstants.CREATE_CATEGORY_SUCCESS,
  payload
})