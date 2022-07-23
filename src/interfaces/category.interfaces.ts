export interface Category {
  name: string;
  position: string;
}
export interface CategoryAction {
  type: string;
  payload?: Category;
}
export interface CategoryState {
  categories: Category[],
  currentCategory: Category | null
}