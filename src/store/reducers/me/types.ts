export interface IUserData {
  name?: string;
  iconImg?: string;
}

export enum MeActionTypes {
  ME_REQUEST = "ME_REQUEST",
  ME_REQUEST_SUCCES = "ME_REQUEST_SUCCES",
  ME_REQUEST_ERROR = "ME_REQUEST_ERROR",
}

export interface MeState {
  isLoading: boolean;
  error: string;
  data: IUserData;
}

export interface MeRequestAction {
  type: MeActionTypes.ME_REQUEST;
}

export interface MeRequestSuccesAction {
  type: MeActionTypes.ME_REQUEST_SUCCES;
  payload: IUserData;
}

export interface MeRequestErrorAction {
  type: MeActionTypes.ME_REQUEST_ERROR;
  payload: string;
}

export type MeActions =
  | MeRequestAction
  | MeRequestSuccesAction
  | MeRequestErrorAction;
