import { Reducer } from "react";
import { 
  PostsRequestAction, 
  PostsRequestErrorAction, 
  PostsRequestSuccesAction, 
  POSTS_REQUEST, 
  POSTS_REQUEST_ERROR, 
  POSTS_REQUEST_SUCCES } from "./actions";

export interface IPostData {
  author?: string;
  previewImg?: string;
  title?: string;
  avatarSrc?: string;
  postUrl?: string;
  numComments?: number;
  karma?: number;
  userUrl: string;
  publichedTime?: string;
  id: string;
}

export type PostsState = {
  loading: boolean;
  error: string;
  data: IPostData[];
  after?: string;
}

type PostsActions = PostsRequestAction | PostsRequestSuccesAction | PostsRequestErrorAction;

export const postsReducer: Reducer<PostsState, PostsActions> = (state, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state, 
        loading: true
      }
    case POSTS_REQUEST_SUCCES: 
      return {
        ...state,
        data: [...state.data, action.data],
        loading: false,
        after: action.after
      }
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state;
  }
};
