import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { axiosOptions } from "../../utils/ts/axiosOptions";
import { IRootState, IUserData } from "../reducer";

export const ME_REQUEST = 'ME_REQUEST';
export const ME_REQUEST_SUCCES = 'ME_REQUEST_SUCCES';
export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';

export type MeRequestAction = {
  type: typeof ME_REQUEST;
}

export type MeRequestSuccesAction = {
  type: typeof ME_REQUEST_SUCCES;
  data: IUserData;
}

export type MeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  error: string;
}

type MeRequestThunkAction = ThunkAction<void, IRootState, unknown, Action<string>>

export const meRequest: ActionCreator<MeRequestAction> = () => ({
  type: ME_REQUEST,
});

export const meRequestSucces: ActionCreator<MeRequestSuccesAction> = (data: IUserData) => ({
  type: ME_REQUEST_SUCCES,
  data
});

export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
  type: ME_REQUEST_ERROR,
  error
});

export const meRequestAsync = (): MeRequestThunkAction => (dispatch, getState) => {
  const options = axiosOptions(getState().token.data);
  
  dispatch(meRequest());

  axios.get('/api/v1/me', options)
    .then((resp) => {
      const userData = resp.data;
      dispatch(meRequestSucces({ name: userData.name, iconImg: userData.snoovatar_img }))
    })
    .catch((error) => {
      console.log(error);
      dispatch(meRequestError(String(error)))
    });
}


