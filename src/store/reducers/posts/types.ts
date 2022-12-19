export interface IPostData {
  author?: string;
  previewImg?: string;
  title?: string;
  avatarSrc?: string;
  postUrl?: string;
  numComments?: number;
  karma?: number;
  userUrl?: string;
  publichedTime?: string;
  id?: string;
}

export interface IPostsState {
  isLoading: boolean;
  error: string;
  posts: IPostData[];
  after?: string;
}

export interface IReditBest {
  [N: string]: any;
}

export enum PostActionsType {
  POSTS_REQUEST = "POSTS_REQUEST",
  POSTS_REQUEST_SUCCES = "POSTS_REQUEST_SUCCES",
  POSTS_REQUEST_ERROR = "POSTS_REQUEST_ERROR",
}

export interface PostsRequestAction {
  type: PostActionsType.POSTS_REQUEST;
}

export interface PostsRequestSuccesAction {
  type: PostActionsType.POSTS_REQUEST_SUCCES;
  payload: { posts: IPostData; after?: string };
}

export interface PostsRequestErrorAction {
  type: PostActionsType.POSTS_REQUEST_ERROR;
  payload: string;
}

export type PostsActions =
  | PostsRequestAction
  | PostsRequestSuccesAction
  | PostsRequestErrorAction;
