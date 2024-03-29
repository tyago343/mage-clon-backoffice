import { CategoryAction, CategoryState } from 'src/interfaces/category.interfaces';
import * as categoryConstants from '../constants/category.constants';

const initialState: CategoryState = {
  list: [],
  current: null,
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
        list: [...action.payload],
        pending: false
      }
    case categoryConstants.CREATE_CATEGORY_SUCCESS:
      return {
        current: action.payload,
        list: [...state.list, action.payload],
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
        current: action.payload,
        pending: false
      }
    default:
      return {
        ...state
      }
  }
}
export default categoryReducer;