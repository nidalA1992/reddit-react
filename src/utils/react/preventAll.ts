import { preventDefault } from "./preventDefault";
import { stopPropagation } from "./stopPropagation";

const preventAll = <T extends (e: any) => void>(handler: T) => {
  return () => preventDefault(stopPropagation(handler));
};
