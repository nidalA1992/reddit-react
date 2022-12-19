export interface TokenState {
  data: Token;
  error: string;
}

export enum TokenActionTypes {
  TOKEN_REQUEST = "TOKEN_REQUEST",
  TOKEN_REQUEST_SUCCES = "TOKEN_REQUEST_SUCCES",
  TOKEN_REQUEST_ERROR = "TOKEN_REQUEST_ERROR",
}

export interface TokenRequestAction {
  type: TokenActionTypes.TOKEN_REQUEST;
}

export interface TokenRequestSuccesAction {
  type: TokenActionTypes.TOKEN_REQUEST_SUCCES;
  payload: Token;
}

export interface TokenRequestErrorAction {
  type: TokenActionTypes.TOKEN_REQUEST_ERROR;
  payload: string;
}

export type TokenActions =
  | TokenRequestAction
  | TokenRequestSuccesAction
  | TokenRequestErrorAction;
