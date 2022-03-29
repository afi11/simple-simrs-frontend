import { PasienBaru } from "../reducers/pasienBaruReducer";

export enum PasienBaruType {
  FETCH_CREATE_BY_USER = "FETCH_CREATE_BY_USER",
  POST_PASIEN_BARU_PENDING = "POST_PASIEN_BARU_PENDING",
  POST_PASIEN_BARU_SUCCESS = "POST_PASIEN_BARU_SUCCESS",
  POST_PASIEN_BARU_FAIL = "POST_PASIEN_BARU_FAIL",
}

export interface Pasien {
  panggilan: string;
  nik: string;
  nama: string;
  tanggal_lahir: string;
  gender: string;
  telepon: string;
  alamat: string;
  created_by_user: string;
}

interface actionPostPending {
  type: PasienBaruType.POST_PASIEN_BARU_PENDING;
}

interface actionPostSuccess {
  type: PasienBaruType.POST_PASIEN_BARU_SUCCESS;
  payload: PasienBaru;
}

interface actionPostFail {
  type: PasienBaruType.POST_PASIEN_BARU_FAIL;
  payload: string;
}

interface actionFecthUserId {
  type: PasienBaruType.FETCH_CREATE_BY_USER;
  payload: string;
}

export type PasienBaruAction =
  | actionPostPending
  | actionPostSuccess
  | actionPostFail
  | actionFecthUserId;
