import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { meRequestAsync } from "../store/me/actions";
import { 
  loadingDataSelector, 
  tokenSelector, 
  userDataSelector 
} from "../store/reducer";

export function useUserData() {
  const { name, iconImg } = userDataSelector();
  const loading = loadingDataSelector();
  const token = tokenSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    
    if (token) {
      dispatch(meRequestAsync());
    }

  }, [token]);

  return {name, iconImg, loading}
}

