import { MeActionCreator } from "./me/action-creator";
import { PostsActionsCreator } from "./posts/actions-creator";
import { TokenActionsCreator } from "./token/actions-creator";

export default {
  ...MeActionCreator,
  ...PostsActionsCreator,
  ...TokenActionsCreator,
};
