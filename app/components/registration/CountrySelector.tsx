import React from "react";
import { FormData } from "../../types/form";

interface CountrySelectorProps {
  formData: FormData;
  countries: any[];
  setIsCountryDropdownOpen: (isOpen: boolean) => void;
}

export default function CountrySelector({
  formData,
  countries,
  setIsCountryDropdownOpen,
}: CountrySelectorProps) {
  return (
    <button
      onClick={() => setIsCountryDropdownOpen(true)}
      className={`h-[56px] px-6 rounded-[28px] border-2 border-[#0216261F] flex items-center justify-between min-w-[100px]
        ${!formData.countryCode && "bg-[#F6FAFE]"}`}
    >
      <span className="font-body font-light text-body-reg text-[#021626]">
        {formData.countryCode}
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#021626"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
