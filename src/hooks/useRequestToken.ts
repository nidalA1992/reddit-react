import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveTokenAsync } from "../store/token/actions";

export function useRequestToken() {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(saveTokenAsync());
    
  },[]);
}
