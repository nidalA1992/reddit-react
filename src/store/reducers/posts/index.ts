import { IPostData, IPostsState, PostActionsType, PostsActions } from "./types";

const initialState: IPostsState = {
  isLoading: false,
  error: "",
  posts: [] as IPostData[],
};

export const postsReducer = (
  state = initialState,
  action: PostsActions
): IPostsState => {
  switch (action.type) {
    case PostActionsType.POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PostActionsType.POSTS_REQUEST_SUCCES:
      return {
        ...state,
        posts: [...state.posts, action.payload.posts],
        isLoading: false,
        after: action.payload.after,
      };
    case PostActionsType.POSTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
