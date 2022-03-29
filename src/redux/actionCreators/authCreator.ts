import axios from "axios";
import { Dispatch } from "redux";
import { setUserToken } from "../../config";
import { AuthType, AuthAction, User } from "../actionTypes/auth";
import { Auth } from "../reducers/authReducer";

export const postAuth = (user: User) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthType.GET_DATA_AUTH_PENDING,
    });

    try {
      const { data } = await axios.post(
        `http://localhost:8888/api/login`, 
        user, 
      );
      console.log(data);
      const result: Auth = { token: data.token, userId: data.user.original.id };
      setUserToken(result);
      dispatch({ type: AuthType.GET_DATA_AUTH_SUCCESS, payload: result });
    } catch (err) {}
  };
};
