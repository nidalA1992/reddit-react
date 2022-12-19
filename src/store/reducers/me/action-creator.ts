import axios from "axios";
import { axiosOptions } from "../../../utils/ts/axiosOptions";
import { AppDispatch } from "../..";
import {
  IUserData,
  MeActionTypes,
  MeRequestAction,
  MeRequestErrorAction,
  MeRequestSuccesAction,
} from "./types";

export const MeActionCreator = {
  setIsLoading: (): MeRequestAction => ({
    type: MeActionTypes.ME_REQUEST,
  }),
  setError: (error: string): MeRequestErrorAction => ({
    type: MeActionTypes.ME_REQUEST_ERROR,
    payload: error,
  }),
  setData: (data: IUserData): MeRequestSuccesAction => ({
    type: MeActionTypes.ME_REQUEST_SUCCES,
    payload: data,
  }),
  meRequest: () => async (dispatch: AppDispatch, getState: Function) => {
    const options = axiosOptions(getState().tokenReducer.data);

    dispatch(MeActionCreator.setIsLoading());

    try {
      const { data } = await axios.get("/api/v1/me", options);

      dispatch(
        MeActionCreator.setData({
          name: data.name,
          iconImg: data.snoovatar_img,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(MeActionCreator.setError(String(error)));
    }
  },
};
