import { Reducer } from "react";
import { 
  TokenRequestAction, 
  TokenRequestErrorAction, 
  TokenRequestSuccesAction, 
  TOKEN_REQUEST, 
  TOKEN_REQUEST_ERROR, 
  TOKEN_REQUEST_SUCCES 
} from "./actions";

export type TokenState = {
  data: Token,
  error: string,
}

type TokenActions = TokenRequestAction | TokenRequestSuccesAction | TokenRequestErrorAction;

export const tokenReducer: Reducer<TokenState, TokenActions> = (state, action) => {
  switch (action.type) {
    case TOKEN_REQUEST: 
      return {
        ...state,
      }
    case TOKEN_REQUEST_SUCCES: 
      return {
        ...state,
        data: action.data,
      }
    case TOKEN_REQUEST_ERROR: 
      return {
        ...state,
        error: action.error,
      }
    default:
      return state;
  }
}
