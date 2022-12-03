import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import userReducer from "./user.reducer";
import productReducer from "./product.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
