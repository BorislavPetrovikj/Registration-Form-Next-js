import React from "react";
import { RegistrationFormData, ValidationErrors } from "../../types/form";
import { PhoneInput } from "../ui/PhoneInput";

interface Step2FormProps {
  formData: RegistrationFormData;
  errors: ValidationErrors;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (name: string) => void;
  setIsCountryDropdownOpen: (isOpen: boolean) => void;
  countries: any[];
}

export default function Step2Form({
  formData,
  errors,
  handleInputChange,
  handleBlur,
  setIsCountryDropdownOpen,
  countries,
}: Step2FormProps) {
  return (
    <div className="mb-1">
      <label className="block font-body font-light text-[12px] leading-[16px] tracking-[0%] text-[#021626] mb-1">
        Phone number
      </label>
      <PhoneInput
        formData={formData}
        error={errors.phoneNumber}
        countries={countries}
        setIsCountryDropdownOpen={setIsCountryDropdownOpen}
        onChange={handleInputChange}
        onBlur={() => handleBlur("phoneNumber")}
      />
    </div>
  );
}
