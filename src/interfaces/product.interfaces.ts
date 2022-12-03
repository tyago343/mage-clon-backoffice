export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  createAt?: string;
  updatedAt?: string;
}
export interface ProductAction {
  type: string;
  payload: Product | Product[];
}
export interface ProductState {
  list: Product[],
  current: Product | null,
  pending: boolean;
}