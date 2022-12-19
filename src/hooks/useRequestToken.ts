import { useEffect } from "react";
import { useActions } from "./useActions";

export function useRequestToken() {
  const { tokenRequest } = useActions();

  useEffect(() => {
    tokenRequest();
  }, []);
}
