import { Reducer } from "react";
import { IUserData, MeActions, MeActionTypes, MeState } from "./types";

const initialState: MeState = {
  isLoading: false,
  error: "",
  data: {} as IUserData,
};

export const meReducer = (state = initialState, action: MeActions): MeState => {
  switch (action.type) {
    case MeActionTypes.ME_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case MeActionTypes.ME_REQUEST_SUCCES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case MeActionTypes.ME_REQUEST_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
