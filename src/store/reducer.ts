import { useSelector } from "react-redux";
import { Reducer } from "redux";
import { ActionCreator } from "redux";
import { 
  TOKEN_REQUEST, 
  TOKEN_REQUEST_ERROR, 
  TOKEN_REQUEST_SUCCES, 
  ME_REQUEST, 
  ME_REQUEST_ERROR, 
  ME_REQUEST_SUCCES, 
  POSTS_REQUEST, 
  POSTS_REQUEST_ERROR, 
  POSTS_REQUEST_SUCCES, 
  meReducer, 
  MeRequestAction, 
  MeRequestErrorAction, 
  MeRequestSuccesAction, 
  MeState, 
  PostsRequestAction, 
  PostsRequestErrorAction, 
  PostsRequestSuccesAction, 
  PostsState, 
  tokenReducer, 
  TokenRequestAction, 
  TokenRequestErrorAction, 
  TokenRequestSuccesAction, 
  TokenState,
  postsReducer, 
} from "./reexports";

const UPDATE_COMMENT = 'UPDATE_COMMENT';

export interface IRootState {
  commentText: string;
  me: MeState
  token: TokenState;
  posts: PostsState;
}

export interface IUserData {
  name?: string;
  iconImg?: string;
}

const initialState: IRootState = {
  commentText: '',
  token: {
    data: '',
    error: '',
  },
  me: {
    loading: false,
    error: '',
    data: {}
  },
  posts: {
    loading: false,
    error: '',
    data: []
  }
}

type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  commentText: string;
}

export const updateComment: ActionCreator<UpdateCommentAction> = (commentText) => ({
  type: UPDATE_COMMENT, commentText
});

type MyAction = UpdateCommentAction 
  | MeRequestAction 
  | MeRequestSuccesAction 
  | MeRequestErrorAction
  | TokenRequestAction
  | TokenRequestSuccesAction
  | TokenRequestErrorAction
  | PostsRequestAction
  | PostsRequestSuccesAction
  | PostsRequestErrorAction;

export const rootReducer: Reducer<IRootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_COMMENT':
      return {
        ...state,
        commentText: action.commentText
      }
    case ME_REQUEST:
    case ME_REQUEST_SUCCES:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action)
      }
    case TOKEN_REQUEST:
    case TOKEN_REQUEST_SUCCES:
    case TOKEN_REQUEST_ERROR:
      return {
        ...state, 
        token: tokenReducer(state.token, action)
      }
    case POSTS_REQUEST:
    case POSTS_REQUEST_SUCCES:
    case POSTS_REQUEST_ERROR: {
      return {
        ...state,
        posts: postsReducer(state.posts, action)
      }
    }
    default:
      return state;
  }
}

export const commentTextSelector = () => useSelector<IRootState, string>((state) => state.commentText);
export const tokenSelector = () => useSelector<IRootState, Token>((state) => state.token.data);
export const userDataSelector = () => useSelector<IRootState, IUserData>(state => state.me.data);
export const loadingDataSelector = () => useSelector<IRootState, boolean>(state => state.me.loading);
export const postsDataSelector = () => useSelector<IRootState, PostsState>(state => state.posts);
