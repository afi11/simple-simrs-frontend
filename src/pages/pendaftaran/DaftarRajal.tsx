import React, { useEffect, useState } from "react";
import CreatableSelect from 'react-select/creatable';
import { ModalTambahPasienBaru } from "../../components";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { fetchAPIPoli } from "../../redux/actionCreators/departmentCreator";
import { daftarkanPasien, fetchCaraBayar, fetchCariPasien } from "../../redux/actionCreators/pendaftaranCreator";
import { CariPasien, Pendaftaran } from "../../redux/reducers/pendaftaranReducer";
import { getTokenUserId } from "../../config";
import { OnChangeValue } from "react-select";
import { Department } from "../../redux/reducers/departmentReducer";

function DaftarRajal() {
  const dispatch = useDispatch();
  const { departments } = useTypedSelector(
    (state) => state.department
  );

  const { caraBayars, cariPasiens } = useTypedSelector((state) => state.pendaftaran)

  const [rajal, setRajal] = useState<Pendaftaran>({
    nama: "",
    alamat: "",
    hubungan_pasien: "",
    telepon: "",
    no_mr: "",
    department_tujuan: "",
    cara_bayar_id: "",
    cara_datang: "",
    created_by_user: "",
  });

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRajal({
      ...rajal,
      [name]: value,
      created_by_user: getTokenUserId().userId + "",
    });
  };

  const changeCreateSelectAblePasien = (data: OnChangeValue<CariPasien, false>, fieldName: string) => {
    setRajal({
      ...rajal,
      [fieldName]: data?.value,
      created_by_user: getTokenUserId().userId + "",
    });
  };

  const changeCreateSelectAbleDepartment = (data: OnChangeValue<Department, false>, fieldName: string) => {
    setRajal({
      ...rajal,
      [fieldName]: data?.value,
      created_by_user: getTokenUserId().userId + "",
    });
  };

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setRajal({
      ...rajal,
      [name]: value,
    });
  };

  const inputChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setRajal({
      ...rajal,
      [name]: value,
    });
  };

  const onSubmitDaftarRajal = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    await dispatch(daftarkanPasien(rajal));
  };

  useEffect(() => {
    dispatch(fetchCariPasien());
  }, []);

  useEffect(() => {
    dispatch(fetchAPIPoli());
  }, []);

  useEffect(() => {
    dispatch(fetchCaraBayar());
  }, []);

  return (
    <>
      <div className="p-6 bg-white rounded border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={onSubmitDaftarRajal}>
            <div className="mb-6 p-2">
              <div className="flex justify-between">
                <div className="w-3/4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cari Pasien</label>
                    <CreatableSelect name="no_mr" onChange={(e) => changeCreateSelectAblePasien(e, "no_mr")} options={cariPasiens} />
                </div>
                <div className="w-1/4">
                  <div className="flex flex-1 flex-row justify-center content-center">
                    <p className="mr-5 mt-6">atau</p>
                    <button
                      className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                      data-modal-toggle="extralarge-modal"
                    >
                      Pasien Baru
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div className="mb-6 w-1/2 p-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pilih Tujuan Poli</label>
                <CreatableSelect options={departments} onChange={(e) => changeCreateSelectAbleDepartment(e, "department_tujuan")} />
              </div>
              <div className="mb-6 w-1/2 p-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Keluhan</label>
                <input type="text" name="keluhan" onChange={(e) => inputChange(e)} id="keluhan" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
            </div>
          
          
            <div className="flex flex-row justify-between">
              <div className="mb-6 w-1/2 p-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cara bayar</label>
                <select id="cara_bayar" name="cara_bayar_id" onChange={(e) => selectChange(e)} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {caraBayars.map((row) => 
                    <option value={row.id}>{row.bayar}</option>
                  )}
                </select>
              </div>
              <div className="mb-6 w-1/2 p-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cara Datang</label>
                <select 
                  name="cara_datang" onChange={(e) => selectChange(e)} 
                  id="cara_datang" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Datang Sendiri">Datang Sendiri</option>
                  <option value="Rujukan">Rujukan</option>
                  <option value="Diantar Saudara / Orang lain">Diantar Saudara / Orang lain</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
            </div>
            
            <label className="block mb-2 text font-medium text-gray-900 dark:text-gray-300">Penanggung Jawab</label>
            <div className="flex flex-row justify-between">
              <div className="mb-6 w-1/2 p-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
                <input type="text" name="nama" onChange={(e) => inputChange(e)} id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div className="mb-6 w-1/2 p-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telepon / No HP</label>
                <input type="text" name="telepon" onChange={(e) => inputChange(e)} id="telepon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
            </div>        
          
            <div className="flex flex-row justify-between">
              <div className="mb-6 w-1/2 p-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Alamat</label>
                <textarea 
                  id="alamat"
                  name="alamat" onChange={(e) => inputChangeTextArea(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
              </div>
              <div className="mb-6 w-1/2 p-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hubungan Pasien</label>
                <select name="hubungan_pasien" onChange={(e) => selectChange(e)} 
                  id="hubungan_pasien" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Anak">Anak</option>
                  <option value="Suami/Istri">Suami/Istri</option>
                  <option value="Saudara/Kerabat">Saudara/Kerabat</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Simpan</button>
            </div>
          </form>
      </div>
      <ModalTambahPasienBaru />
    </>
  );
}

export default DaftarRajal;
