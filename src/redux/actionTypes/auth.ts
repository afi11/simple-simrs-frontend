import { Auth } from "../reducers/authReducer";

export enum AuthType {
  GET_DATA_AUTH_PENDING = "GET_DATA_AUTH_PENDING",
  GET_DATA_AUTH_SUCCESS = "GET_DATA_AUTH_SUCCESS",
  GET_DATA_AUTH_FAIL = "GET_DATA_AUTH_FAIL",
}

export interface User {
  username: string;
  password: string;
}

interface actionPending {
  type: AuthType.GET_DATA_AUTH_PENDING;
}

interface actionSuccess {
  type: AuthType.GET_DATA_AUTH_SUCCESS;
  payload: Auth;
}

interface actionFail {
  type: AuthType.GET_DATA_AUTH_FAIL;
  payload: string;
}

export type AuthAction = actionPending | actionSuccess | actionFail;
