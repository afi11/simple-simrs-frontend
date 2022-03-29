import { AuthAction, AuthType } from "../actionTypes/auth";

export interface Auth {
  token: string;
  userId: string;
}

interface State {
  auth: Auth;
  loading: boolean;
  error: string | null;
}

const initialState = {
  auth: { token: "", userId: "" },
  loading: false,
  error: null,
};

const authReducer = (
  state: State = initialState,
  action: AuthAction
): State => {
  switch (action.type) {
    case AuthType.GET_DATA_AUTH_PENDING:
      return {
        loading: true,
        auth: { token: "", userId: "" },
        error: null,
      };
    case AuthType.GET_DATA_AUTH_SUCCESS:
      return {
        loading: false,
        auth: action.payload,
        error: null,
      };
    case AuthType.GET_DATA_AUTH_FAIL:
      return {
        loading: false,
        auth: { token: "", userId: "" },
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
