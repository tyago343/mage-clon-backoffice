export interface Category {
  name: string;
  position: string;
  id: string;
  createAt?: string;
  updatedAt?: string;
}
export interface CategoryAction {
  type: string;
  payload: Category | Category[];
}
export interface CategoryState {
  categories: Category[],
  currentCategory: Category | null,
  pending: boolean;
}