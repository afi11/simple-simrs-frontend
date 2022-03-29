interface props {
  changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGender: React.FC<props> = ({ changeValue }) => {
  return (
    <fieldset className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Gender
      </label>
      <div className="flex flex-row">
        <div className="flex items-center mr-8">
          <input
            id="country-option-1"
            type="radio"
            name="gender"
            value="MALE"
            onChange={(e) => changeValue(e)}
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="country-option-1"
            className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            LAKI-LAKI
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="country-option-2"
            type="radio"
            name="gender"
            value="FEMALE"
            onChange={(e) => changeValue(e)}
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="country-option-2"
            className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            PEREMPUAN
          </label>
        </div>
      </div>
    </fieldset>
  );
};

export default RadioGender;
