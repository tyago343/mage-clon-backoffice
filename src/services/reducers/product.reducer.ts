import { ProductState } from 'src/interfaces/product.interfaces';
import * as productConstants from '../constants/product.constants';

const initialState: ProductState = {
  list: [],
  current: null,
  pending: false,
}

const categoryReducer = (state = initialState, action: ProductState | any): ProductState => {
  switch (action.type) {
    case productConstants.FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true
      }

    case productConstants.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
        pending: false
      }
    case productConstants.CREATE_PRODUCT_SUCCESS:
      return {
        current: action.payload,
        list: [...state.list, action.payload],
        pending: false
      }
    case productConstants.GET_PRODUCT_BY_ID_PENDING:
      return {
        ...state,
        pending: true
      }
    case productConstants.GET_PRODUCT_BY_ID_SUCCESS:
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