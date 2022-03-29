interface props {
  changeValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInputPanggilan: React.FC<props> = ({ changeValue }) => {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Panggilan
      </label>
      <select
        id="panggilan"
        name="panggilan"
        onChange={(e) => changeValue(e)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="By">By, (Bayi)</option>
        <option value="Ank">Ank, (Anak)</option>
        <option value="Tn">Tn, (Tuan)</option>
        <option value="Ny">Ny, (Nyonya)</option>
      </select>
    </div>
  );
};

export default SelectInputPanggilan;
