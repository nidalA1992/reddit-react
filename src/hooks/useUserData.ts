import { useEffect } from "react";
import { useActions } from "./useActions";
import { useTypedSelector } from "./useTypedSelector";

export function useUserData() {
  const token = useTypedSelector((state) => state.tokenReducer.data);

  const { meRequest } = useActions();

  useEffect(() => {
    if (token) {
      meRequest();
    }
  }, [token]);
}
