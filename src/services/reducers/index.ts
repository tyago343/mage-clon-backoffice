import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
