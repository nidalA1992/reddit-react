import axios from "axios";
import { AppDispatch } from "../..";
import {
  TokenActionTypes,
  TokenRequestAction,
  TokenRequestErrorAction,
  TokenRequestSuccesAction,
} from "./types";

export const TokenActionsCreator = {
  setIsLoading: (): TokenRequestAction => ({
    type: TokenActionTypes.TOKEN_REQUEST,
  }),
  setToken: (token: Token): TokenRequestSuccesAction => ({
    type: TokenActionTypes.TOKEN_REQUEST_SUCCES,
    payload: token,
  }),
  setError: (error: string): TokenRequestErrorAction => ({
    type: TokenActionTypes.TOKEN_REQUEST_ERROR,
    payload: error,
  }),
  tokenRequest: () => async (dispatch: AppDispatch) => {
    dispatch(TokenActionsCreator.setIsLoading());
    const code = new URL(document.location.href).searchParams.get("code");

    if (!code) return;

    const redirect =
      process.env.NODE_ENV === "development"
        ? process.env.REDIRECT_DEV
        : process.env.REDIRECT;
    const clientId =
      process.env.NODE_ENV === "development"
        ? process.env.CLIENT_ID_DEV
        : process.env.CLIENT_ID;
    const secret =
      process.env.NODE_ENV === "development"
        ? process.env.SECRET_DEV
        : process.env.SECRET;

    try {
      const { data } = await axios.post(
        "https://www.reddit.com/api/v1/access_token",
        `grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
        {
          auth: {
            username: clientId || "",
            password: secret || "",
          },
          headers: { "Content-type": "application/x-www-form-urlencoded" },
        }
      );

      dispatch(TokenActionsCreator.setToken(data["access_token"]));
    } catch (error) {
      console.error(error);
      dispatch(TokenActionsCreator.setError(String(error)));
    }
  },
};
