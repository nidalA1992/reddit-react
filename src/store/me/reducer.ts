import { Reducer } from "react";
import { IUserData } from "../reducer";
import { 
  MeRequestAction, 
  MeRequestErrorAction, 
  MeRequestSuccesAction, 
  ME_REQUEST, 
  ME_REQUEST_ERROR, 
  ME_REQUEST_SUCCES 
} from "./actions";

export type MeState = {
  loading: boolean;
  error: string;
  data: IUserData;
}

type MeActions = MeRequestAction | MeRequestSuccesAction | MeRequestErrorAction;

export const meReducer: Reducer<MeState, MeActions> = (state, action) => {
  switch (action.type) {
    case ME_REQUEST: 
      return {
        ...state,
        loading: true
      }
    case ME_REQUEST_SUCCES: 
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case ME_REQUEST_ERROR: 
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state;
  }
}

