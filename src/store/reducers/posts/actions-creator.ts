import axios from "axios";
import { AppDispatch } from "../..";
import { axiosOptions } from "../../../utils/ts/axiosOptions";
import { createPost } from "../../../utils/ts/createPost";
import {
  IReditBest,
  PostsRequestAction,
  PostActionsType,
  PostsRequestSuccesAction,
  IPostData,
  PostsRequestErrorAction,
} from "./types";

export const PostsActionsCreator = {
  setIsLoading: (): PostsRequestAction => ({
    type: PostActionsType.POSTS_REQUEST,
  }),
  setPosts: (posts: IPostData, after: string): PostsRequestSuccesAction => ({
    type: PostActionsType.POSTS_REQUEST_SUCCES,
    payload: { posts, after },
  }),
  setError: (error: string): PostsRequestErrorAction => ({
    type: PostActionsType.POSTS_REQUEST_ERROR,
    payload: error,
  }),
  postsRequest: () => async (dispatch: AppDispatch, getState: Function) => {
    const { tokenReducer, postsReducer } = getState();
    const options = axiosOptions(tokenReducer.data, postsReducer.after);

    dispatch(PostsActionsCreator.setIsLoading());

    try {
      const {
        data: {
          data: { after, children },
        },
      } = await axios.get("/best?sr_detail=true", options);

      children.forEach(({ data }: IReditBest) => {
        const currentPostData: IPostData = createPost(
          data || ({} as IPostData)
        );

        axios.get(`/user/${data.author}/about`, options).then((res) => {
          currentPostData.avatarSrc = res.data.data.icon_img.split("?")[0];
          dispatch(PostsActionsCreator.setPosts(currentPostData, after));
        });
      });
    } catch (error) {
      console.error(error);
      dispatch(PostsActionsCreator.setError(String(error)));
    }
  },
};
