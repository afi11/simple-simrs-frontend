import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getTokenUserId } from "../config";
import { addPasienBaru } from "../redux/actionCreators/pasienBaruCreator";
import { Pasien } from "../redux/actionTypes/pasienBaru";
import InputForm from "./InputForm";
import RadioGender from "./RadioGender";
import SelectInputPanggilan from "./SelectInputPanggilan";

function ModalTambahPasienBaru() {
  const dispatch = useDispatch();
  const [pasien, setPasien] = useState<Pasien>({
    panggilan: "",
    nik: "",
    nama: "",
    tanggal_lahir: "",
    gender: "",
    telepon: "",
    alamat: "",
    created_by_user: "",
  });

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPasien({
      ...pasien,
      [name]: value,
      created_by_user: getTokenUserId().userId + "",
    });
  };

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setPasien({
      ...pasien,
      [name]: value,
    });
  };

  const inputChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPasien({
      ...pasien,
      [name]: value,
    });
  };

  const onSubmitPasienBaru = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    await dispatch(addPasienBaru(pasien));
  };

  return (
    <div
      id="extralarge-modal"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0"
    >
      <div className="p-4 w-full flex justify-center">
        <div className="bg-white modal-pasien w-1/2 h-screen rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Tambah Pasien Baru
            </h3>
            <button
              type="button"
              id="btnCloseModal"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="extralarge-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <form onSubmit={onSubmitPasienBaru}>
            <div className="p-6 space-y-6">
              <SelectInputPanggilan changeValue={selectChange} />
              <InputForm
                type="number"
                field="nik"
                label="NIK Pasien"
                inputType="input"
                changeValue={inputChange}
                changeValueArea={inputChangeTextArea}
              />
              <InputForm
                type="text"
                field="nama"
                label="Nama Pasien"
                inputType="input"
                changeValue={inputChange}
                changeValueArea={inputChangeTextArea}
              />
              <RadioGender changeValue={inputChange} />
              <InputForm
                type="date"
                field="tanggal_lahir"
                label="Tanggal Lahir Pasien"
                inputType="input"
                changeValue={inputChange}
                changeValueArea={inputChangeTextArea}
              />
              <InputForm
                type="text"
                field="telepon"
                label="No HP Pasien"
                inputType="input"
                changeValue={inputChange}
                changeValueArea={inputChangeTextArea}
              />
              <InputForm
                type="text"
                field="alamat"
                label="Alamat Pasien"
                inputType="textarea"
                changeValue={inputChange}
                changeValueArea={inputChangeTextArea}
              />
            </div>

            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalTambahPasienBaru;
