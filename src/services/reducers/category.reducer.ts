import { CategoryAction, CategoryState } from 'src/interfaces/category.interfaces';
import * as categoryConstants from '../constants/category.constants';

const initialState: CategoryState = {
  categories: [],
  currentCategory: null
}

const categoryReducer = (state = initialState, action: CategoryAction) => {
  switch (action.type) {
    case categoryConstants.CREATE_CATEGORY:
      return {
        currentCategory: action.payload,
        categories: [...state.categories, action.payload]
      }
  }
}
export default categoryReducer;