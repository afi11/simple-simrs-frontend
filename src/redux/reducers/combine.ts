import { combineReducers } from "redux";
import authReducer from "./authReducer";
import pasienBaruReducer from "./pasienBaruReducer";
import departmentReducer from "./departmentReducer";
import pendaftaranReducer from "./pendaftaranReducer";

const reducers = combineReducers({
  auth: authReducer,
  pasienBaru: pasienBaruReducer,
  department: departmentReducer,
  pendaftaran: pendaftaranReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
