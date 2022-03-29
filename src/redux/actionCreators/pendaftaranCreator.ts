import axios from "axios";
import { Dispatch } from "redux";
import { getTokenUserId } from "../../config";
import { Pendaftaran } from "../reducers/pendaftaranReducer";
import { PendaftaranAction, PendaftaranType } from "../actionTypes/pendaftaran";

export const fetchCariPasien = () => {
  return async (dispatch: Dispatch<PendaftaranAction>) => {
      try {
          const { data } = await axios.get(
            `http://localhost:8888/api/search-pasien`,
            {
              headers: { Authorization: getTokenUserId().token + "" },
            });
            dispatch({type: PendaftaranType.FETCH_CARI_PASIEN, payload: data.data});
        } catch (err) {}
  };
}

export const fetchCaraBayar = () => {
    return async (dispatch: Dispatch<PendaftaranAction>) => {
        try {
            const { data } = await axios.get(
              `http://localhost:8888/api/cara-bayar`,
              {
                headers: { Authorization: getTokenUserId().token + "" },
              });
              dispatch({type: PendaftaranType.FETCH_CARA_BAYAR, payload: data.data});
          } catch (err) {}
    };
}

export const daftarkanPasien = (pendaftaran: Pendaftaran) => {
    return async (dispatch: Dispatch<PendaftaranAction>) => {
        dispatch({
            type: PendaftaranType.POST_PENDAFTARAN_PENDING
        });

        try {
            const { data } = await axios.post(
              `http://localhost:8888/api/pendaftaran`,
              pendaftaran,
              {
                headers: { Authorization: getTokenUserId().token + "" },
              }
            );
            console.log(data);
          } catch (err) {}

    };
}