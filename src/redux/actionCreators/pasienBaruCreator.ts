import axios from "axios";
import { Dispatch } from "redux";
import { getTokenUserId } from "../../config";
import {
  Pasien,
  PasienBaruAction,
  PasienBaruType,
} from "../actionTypes/pasienBaru";

export const addPasienBaru = (pasien: Pasien) => {
  return async (dispatch: Dispatch<PasienBaruAction>) => {
    dispatch({
      type: PasienBaruType.POST_PASIEN_BARU_PENDING,
    });

    try {
      const { data } = await axios.post(
        `http://localhost:8888/api/pasien`,
        pasien,
        {
          headers: { Authorization: getTokenUserId().token + "" },
        }
      );
      console.log(data);
      document.getElementById("btnCloseModal")?.click();
    } catch (err) {}
  };
};
