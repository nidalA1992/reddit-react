import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { axiosOptions } from "../../utils/ts/axiosOptions";
import { IRootState } from "../reducer";
import { IPostData } from "./reducer";

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCES = 'POSTS_REQUEST_SUCCES';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export type PostsRequestAction = {
  type: typeof POSTS_REQUEST;
}

export type PostsRequestSuccesAction = {
  type: typeof POSTS_REQUEST_SUCCES;
  data: IPostData;
  after?: string;
}

export type PostsRequestErrorAction = {
  type: typeof POSTS_REQUEST_ERROR;
  error: string;
}

interface IReditBest {
  [N: string]: any;
}

type PostsRequestThunkAction = ThunkAction<void, IRootState, unknown, Action<string>>;

export const postsRequest: ActionCreator<PostsRequestAction> = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSucces: ActionCreator<PostsRequestSuccesAction> = (data: IPostData, after: string) => ({
  type: POSTS_REQUEST_SUCCES,
  data,
  after
});

export const postsRequestError: ActionCreator<PostsRequestErrorAction> = (error: string) => ({
  type: POSTS_REQUEST_ERROR,
  error
});

export const postsRequestAsync = (): PostsRequestThunkAction => async (dispatch, getState) => {
  const {token, posts} = getState();

  const options = axiosOptions(token.data, posts.after);
  const baseUrl = 'https://www.reddit.com';

  dispatch(postsRequest());

  await axios.get('/best?sr_detail=true', options)
        .then(({ data: { data: {after, children} }}) => {

          children.forEach(({data: i}:IReditBest) =>  {
            const currentPostData: IPostData = {
              author: i.author, 
              previewImg: i.preview ? i.url.split('?')[0] : '',
              title: i.title,
              postUrl: baseUrl.concat(i.permalink),
              numComments: i.num_comments,
              karma: i.score,
              userUrl: baseUrl.concat('/user/', i.author),
              publichedTime: new Date(i.created * 1000).toLocaleDateString(),
              id: i.id,
            }

            axios.get(`/user/${i.author}/about`, options)
              .then((res) => {
                currentPostData.avatarSrc = res.data.data.icon_img.split('?')[0]
                dispatch(postsRequestSucces(currentPostData, after))
              });
          })
        })
        .catch((error) => {
          console.log(error);
          dispatch(postsRequestError(String(error)));
        })
};
