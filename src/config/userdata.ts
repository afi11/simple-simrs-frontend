import { Auth } from "../redux/reducers/authReducer";

export function setUserToken(auth: Auth) {
  localStorage.setItem("token", "Bearer " + auth.token);
  localStorage.setItem("userId", auth.userId);
}

type dataUser = {
  token: string | null;
  userId: string | null;
};

export function getTokenUserId() {
  let token: string | null = localStorage.getItem("token");
  let userId: string | null = localStorage.getItem("userId");
  let data: dataUser = {
    token: token,
    userId: userId,
  };
  return data;
}

export function isAuthenticated() {
  let token = getTokenUserId().token;
  let userId = getTokenUserId().userId;
  let state: boolean;
  if (token != null && userId != null) {
    state = true;
  } else {
    state = false;
  }
  return state;
}

export function destroyTokenUser() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
}
