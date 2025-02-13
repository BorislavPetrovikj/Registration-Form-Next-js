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
  const selectedCountry = countries.find(
    (c) => c.code === formData.countryCode
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsCountryDropdownOpen(true);
    }
  };

  return (
    <button
      onClick={() => setIsCountryDropdownOpen(true)}
      onKeyDown={handleKeyDown}
      aria-label={`Select country code: ${formData.countryCode}`}
      aria-haspopup="true"
      className="px-3 py-3 rounded-full bg-white border border-gray-200 flex items-center gap-2 shrink-0"
    >
      <div className="w-6 h-4 rounded-sm overflow-hidden">
        {selectedCountry?.flag && React.createElement(selectedCountry.flag)}
      </div>
      <span>{formData.countryCode}</span>
    </button>
  );
}
