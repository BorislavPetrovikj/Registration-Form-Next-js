import React from "react";
import { FormData, ValidationErrors } from "../../types/form";
import CountrySelector from "./CountrySelector";

interface Step2FormProps {
  formData: FormData;
  errors: ValidationErrors;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setIsCountryDropdownOpen: (isOpen: boolean) => void;
  countries: any[];
}

export default function Step2Form({
  formData,
  errors,
  handleInputChange,
  setIsCountryDropdownOpen,
  countries,
}: Step2FormProps) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-normal text-gray-600 mb-2">
        Phone number
      </label>
      <div className="flex gap-2 w-full">
        <CountrySelector
          formData={formData}
          countries={countries}
          setIsCountryDropdownOpen={setIsCountryDropdownOpen}
        />
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="07890 123456"
          className="flex-1 px-4 py-3 rounded-full bg-white border border-gray-200
            outline-none transition-all duration-200 placeholder:text-gray-400
            focus:border-blue-500 min-w-0"
        />
      </div>
      {errors.phoneNumber && (
        <div className="mt-2 text-red-500 text-sm">{errors.phoneNumber}</div>
      )}
    </div>
  );
}
