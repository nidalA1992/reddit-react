import { Reducer } from "react";
import { TokenActions, TokenActionTypes, TokenState } from "./types";

const initialState: TokenState = {
  data: "",
  error: "",
};

export const tokenReducer = (
  state = initialState,
  action: TokenActions
): TokenState => {
  switch (action.type) {
    case TokenActionTypes.TOKEN_REQUEST:
      return {
        ...state,
      };
    case TokenActionTypes.TOKEN_REQUEST_SUCCES:
      return {
        ...state,
        data: action.payload,
      };
    case TokenActionTypes.TOKEN_REQUEST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
