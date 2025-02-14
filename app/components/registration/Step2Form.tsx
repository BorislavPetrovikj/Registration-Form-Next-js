import React from "react";
import { FormData, ValidationErrors } from "../../types/form";
import CountrySelector from "./CountrySelector";
import { Input } from "../ui/Input";

interface Step2FormProps {
  formData: FormData;
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
      <div className="flex gap-2 w-full">
        <CountrySelector
          formData={formData}
          countries={countries}
          setIsCountryDropdownOpen={setIsCountryDropdownOpen}
        />
        <Input
          type="tel"
          name="phoneNumber"
          required
          aria-required="true"
          aria-describedby="phoneNumber-error"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          onBlur={() => handleBlur("phoneNumber")}
          placeholder="07890 123456"
          error={errors.phoneNumber}
          showBullet={true}
          className={`flex-1 h-[56px] px-4 rounded-[28px] 
            bg-[#F6FAFE]
            border-2 border-[#0216261F]
            font-body font-light text-body-reg
            placeholder:text-[#02162680] placeholder:font-light
            focus:outline-none focus:border-[#0D71C9] focus:border-2 focus:ring-0`}
        />
      </div>
    </div>
  );
}
