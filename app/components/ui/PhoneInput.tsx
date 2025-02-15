import React from "react";
import Image from "next/image";
import CountrySelector from "../registration/CountrySelector";


interface RegistrationFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
}

interface PhoneInputProps {
  formData: RegistrationFormData;
  error?: string;
  countries: any[];
  setIsCountryDropdownOpen: (isOpen: boolean) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

export function PhoneInput({
  formData,
  error,
  countries,
  setIsCountryDropdownOpen,
  onChange,
  onBlur,
}: PhoneInputProps) {
  return (
    <div className="mb-5">
      <div className="flex gap-2 w-full">
        <CountrySelector
          formData={formData}
          countries={countries}
          setIsCountryDropdownOpen={setIsCountryDropdownOpen}
          error={error}
        />
        <div className="flex-1">
          <input
            type="tel"
            name="phoneNumber"
            required
            aria-required="true"
            aria-describedby="phoneNumber-error"
            value={formData.phoneNumber}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="07890 123456"
            className={`h-[56px] w-full px-4 rounded-[28px] 
              bg-[#F6FAFE]
              ${
                error
                  ? "border-2 border-[#F23148]"
                  : "border-2 border-[#0216261F]"
              }
              font-body font-light text-body-reg text-[#021626]
              placeholder:text-[#02162680] placeholder:font-light
              focus:outline-none focus:border-[#0D71C9] focus:border-2 focus:ring-0`}
            aria-invalid={!!error}
          />
        </div>
      </div>
      {error && (
        <div className="font-body font-light text-[12px] leading-[16px] text-[#F23148] mt-2 flex items-center gap-1">
          <Image
            src="/Vector.svg"
            alt=""
            width={14}
            height={14}
            className="shrink-0"
            priority
          />
          {error}
        </div>
      )}
    </div>
  );
}
