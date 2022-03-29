import { PendaftaranAction, PendaftaranType } from "../actionTypes/pendaftaran";

export interface Pendaftaran {
    nama: string;
    alamat: string;
    hubungan_pasien: string;
    telepon: string;
    no_mr: string;
    department_tujuan: string;
    cara_bayar_id: string;
    cara_datang: string;
    created_by_user: string;
}

export interface CaraBayar {
    id: number;
    bayar: string;
}

export interface CariPasien {
    label: string;
    value: string;
}

interface State {
    pendaftaran: Pendaftaran;
    caraBayars: CaraBayar[];
    cariPasiens: CariPasien[];
    loading: boolean;
    error: string | null;
}

const initialState = {
    pendaftaran: {
        nama: "",
        alamat: "",
        hubungan_pasien: "",
        telepon: "",
        no_mr: "",
        department_tujuan: "",
        cara_bayar_id: "",
        cara_datang: "",
        created_by_user: "",
    },
    caraBayars: [],
    cariPasiens: [],
    loading: false,
    error: null
};

const pendaftaranReducer = (state: State = initialState, action: PendaftaranAction): State => {
    switch(action.type) {
        case PendaftaranType.POST_PENDAFTARAN_PENDING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case PendaftaranType.POST_PENDAFTARAN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }
        case PendaftaranType.POST_PENDAFTARAN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PendaftaranType.FETCH_CARA_BAYAR:
            return {
                ...state,
                caraBayars: action.payload
            }
        case PendaftaranType.FETCH_CARI_PASIEN:
            return {
                ...state,
                cariPasiens: action.payload
            }
        default:
            return state;
    }
}

export default pendaftaranReducer;