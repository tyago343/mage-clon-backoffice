import { Product } from 'src/interfaces/product.interfaces';
import * as productConstants from '../constants/product.constants';

export const createProductSuccess = (payload: Product) => ({
  type: productConstants.CREATE_PRODUCT_SUCCESS,
  payload
})
export const createProductRequest = (payload: Partial<Product>) => ({
  type: productConstants.CREATE_PRODUCT_REQUEST,
  payload
})

export const fetchProductsPending = () => ({
  type: productConstants.FETCH_PRODUCTS_PENDING,
})

export const fetchProductsSuccess = (payload: Product[]) => ({
  type: productConstants.FETCH_PRODUCTS_SUCCESS,
  payload
})

export const fetchProductsRequest = () => ({
  type: productConstants.FETCH_PRODUCTS_REQUEST
})

export const getProductByIdPending = () => ({
  type: productConstants.GET_PRODUCT_BY_ID_PENDING,
})

export const getProductByIdSuccess = (payload: Product[]) => ({
  type: productConstants.GET_PRODUCT_BY_ID_SUCCESS,
  payload
})

export const getProductByIdRequest = (payload: number | string) => ({
  type: productConstants.GET_PRODUCT_BY_ID_REQUEST,
  payload
})