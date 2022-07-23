import { UserAction, UserState } from "src/interfaces/user.interfaces";
import * as userConstants from "../constants/user.constants";

const initialState: UserState = {
  pending: false,
  user: null,
  error: null,
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case userConstants.LOGIN_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
      case userConstants.LOGOUT_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case userConstants.LOGIN_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        error: null,
      };
      case userConstants.LOGOUT_USER_SUCCESS:
        return {
          ...state,
          pending: false,
          user: null,
          error: null,
        };
    case userConstants.LOGIN_USER_FAILURE:
      return {
        ...state,
        pending: false,
        user: null,
        error: null,
      };
      case userConstants.LOGOUT_USER_FAILURE:
      return {
        ...state,
        pending: false,
        user: null,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};
export default userReducer;
