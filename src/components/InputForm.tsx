import React from "react";

interface props {
  type: string;
  field: string;
  label: string;
  inputType: string;
  changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeValueArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputForm: React.FC<props> = ({
  type,
  field,
  label,
  inputType,
  changeValue,
  changeValueArea
}) => {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
      {inputType === "input" ? (
        <input
          type={type}
          id={field}
          name={field}
          onChange={(e) => changeValue(e)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      ) : (
        <textarea
          name={field}
          onChange={(e) => changeValueArea(e)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
      )}
    </div>
  );
};

export default InputForm;
