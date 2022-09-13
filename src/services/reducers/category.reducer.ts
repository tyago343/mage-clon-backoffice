import { CategoryAction, CategoryState } from 'src/interfaces/category.interfaces';
import * as categoryConstants from '../constants/category.constants';

const initialState: CategoryState = {
  categories: [],
  currentCategory: null,
  pending: false,
}

const categoryReducer = (state = initialState, action: CategoryAction | any): CategoryState => {
  switch (action.type) {
    case categoryConstants.FETCH_CATEGORIES_PENDING:
      return {
        ...state,
        pending: true
      }

    case categoryConstants.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: [...action.payload],
        pending: false
      }
    case categoryConstants.CREATE_CATEGORY_SUCCESS:
      return {
        currentCategory: action.payload,
        categories: [...state.categories, action.payload],
        pending: false
      }
    case categoryConstants.GET_CATEGORY_BY_ID_PENDING:
      return {
        ...state,
        pending: true
      }
    case categoryConstants.GET_CATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        currentCategory: action.payload,
        pending: false
      }
    default:
      return {
        ...state
      }
  }
}
export default categoryReducer;