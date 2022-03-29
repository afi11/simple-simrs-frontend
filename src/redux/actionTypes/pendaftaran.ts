import { CaraBayar, CariPasien } from "../reducers/pendaftaranReducer";

export enum PendaftaranType {
    POST_PENDAFTARAN_PENDING = "POST_PENDAFTARAN_PENDING",
    POST_PENDAFTARAN_SUCCESS = "POST_PENDAFTARAN_SUCCESS",
    POST_PENDAFTARAN_FAIL = "POST_PENDAFTARAN_FAIL",
    FETCH_CARA_BAYAR = "FETCH_CARA_BAYAR",
    FETCH_CARI_PASIEN = "FETCH_CARI_PASIEN"
}

interface actionPendaftaranPending {
    type: PendaftaranType.POST_PENDAFTARAN_PENDING;
}

interface actionPendaftaranSuccess {
    type: PendaftaranType.POST_PENDAFTARAN_SUCCESS;
    payload: string;
}

interface actionPendaftaranFail {
    type: PendaftaranType.POST_PENDAFTARAN_FAIL;
    payload: string;
}

interface actionFecthCaraBayar {
    type: PendaftaranType.FETCH_CARA_BAYAR;
    payload: CaraBayar[]
}

interface actionFecthPasien {
    type: PendaftaranType.FETCH_CARI_PASIEN;
    payload: CariPasien[]
}

export type PendaftaranAction = actionPendaftaranPending |
    actionPendaftaranSuccess | actionPendaftaranFail | actionFecthCaraBayar | actionFecthPasien;