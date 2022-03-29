import { PasienBaruType, PasienBaruAction } from "../actionTypes/pasienBaru";

export interface PasienBaru {
  panggilan: string;
  nik: string;
  nama: string;
  tanggal_lahir: string;
  gender: string;
  telepon: string;
  alamat: string;
  created_by_user: string;
}

interface State {
  pasien: PasienBaru;
  loading: boolean;
  error: string | null;
}

const initialState = {
  pasien: {
    panggilan: "",
    nik: "",
    nama: "",
    tanggal_lahir: "",
    gender: "",
    telepon: "",
    alamat: "",
    created_by_user: "",
  },
  loading: false,
  error: null,
};

const pasienBaruReducer = (
  state: State = initialState,
  action: PasienBaruAction
): State => {
  switch (action.type) {
    case PasienBaruType.POST_PASIEN_BARU_PENDING:
      return {
        loading: true,
        pasien: {
          panggilan: "",
          nik: "",
          nama: "",
          tanggal_lahir: "",
          gender: "",
          telepon: "",
          alamat: "",
          created_by_user: "",
        },
        error: null,
      };
    case PasienBaruType.POST_PASIEN_BARU_SUCCESS:
      return {
        loading: false,
        pasien: action.payload,
        error: null,
      };
    case PasienBaruType.POST_PASIEN_BARU_FAIL:
      return {
        loading: false,
        pasien: {
          panggilan: "",
          nik: "",
          nama: "",
          tanggal_lahir: "",
          gender: "",
          telepon: "",
          alamat: "",
          created_by_user: "",
        },
        error: action.payload,
      };
    case PasienBaruType.FETCH_CREATE_BY_USER:
      return {
        ...state,
        pasien: {
          ...state.pasien,
          created_by_user: action.payload,
        },
      };
    default:
      return state;
  }
};

export default pasienBaruReducer;
