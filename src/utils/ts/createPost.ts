import { IReditBest, IPostData } from "../../store/reducers/posts/types";

export const createPost = (post: IReditBest): IPostData => {
  const baseUrl = "https://www.reddit.com";

  return {
    author: post.author,
    previewImg: post.preview ? post.url.split("?")[0] : "",
    title: post.title,
    postUrl: baseUrl.concat(post.permalink),
    numComments: post.num_comments,
    karma: post.score,
    userUrl: baseUrl.concat("/user/", post.author),
    publichedTime: new Date(post.created * 1000).toLocaleDateString(),
    id: post.id,
  };
};
