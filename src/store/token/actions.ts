import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IRootState } from "../reducer";

export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export const TOKEN_REQUEST_SUCCES = 'TOKEN_REQUEST_SUCCES';
export const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';

export type TokenRequestAction = {
  type: typeof TOKEN_REQUEST;
}

export type TokenRequestSuccesAction = {
  type: typeof TOKEN_REQUEST_SUCCES,
  data: Token,
}

export type TokenRequestErrorAction = {
  type: typeof TOKEN_REQUEST_ERROR,
  error: string
}

type tokenRequestAsync = ThunkAction<void, IRootState, unknown, Action<Token>>;

export const tokenRequest: ActionCreator<TokenRequestAction> = () => ({
  type: TOKEN_REQUEST,
});

export const tokenRequestSucces: ActionCreator<TokenRequestSuccesAction> = (data: Token) => ({
  type: TOKEN_REQUEST_SUCCES,
  data
});

export const tokenRequestError: ActionCreator<TokenRequestErrorAction> = (error: string) => ({
  type: TOKEN_REQUEST_ERROR,
  error
});

export const saveTokenAsync = ():tokenRequestAsync => (dispatch) => {
  dispatch(tokenRequest());

  const code = new URL((document.location.href)).searchParams.get('code');

  if(!code) return;

  console.log(process.env.CLIENT_SECRET)
   axios
    .post(
      "https://www.reddit.com/api/v1/access_token",
      `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:4000/auth`,
      {
        auth: {
          username: process.env.CLIENT_ID,
          password: process.env.CLIENT_SECRET || 'f-BI71U6PRv23Jhw92AZ887OtSZI7Q',
        },
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      }
    )
    .then(({ data }) => {
      dispatch(tokenRequestSucces(data['access_token']));
    })
    .catch((error) => {
      dispatch(tokenRequestError(error));
    });
}
