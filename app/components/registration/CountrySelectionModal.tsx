import React from "react";
import Modal from "../Modal";
import { RegistrationFormData } from "../../types/form";

interface CountrySelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredCountries: any[];
  setFormData: React.Dispatch<React.SetStateAction<RegistrationFormData>>;
  setIsCountryDropdownOpen: (isOpen: boolean) => void;
}

export default function CountrySelectionModal({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
  filteredCountries,
  setFormData,
  setIsCountryDropdownOpen,
}: CountrySelectionModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="">
      <div className="flex flex-col h-full">
        <div className="sticky top-0  bg-[#F6FAFE] p-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full pl-4 pr-10 py-3 rounded-full border border-[#2563EB] focus:outline-none"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {searchQuery ? (
                <button onClick={() => setSearchQuery("")} className="p-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M15 5L5 15M5 5l10 10"
                      stroke="#94A3B8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>

        <div className="overflow-y-auto flex-1">
          {filteredCountries.map((country) => {
            const FlagComponent = country.flag;
            return (
              <button
                key={country.code}
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    countryCode: country.code,
                  }));
                  setIsCountryDropdownOpen(false);
                }}
                className="w-full px-4 py-3 flex items-center hover:bg-gray-50 active:bg-gray-100"
              >
                <div className="w-8 h-6 mr-3 rounded-sm overflow-hidden">
                  <FlagComponent />
                </div>
                <span className="w-16 text-gray-600">{country.code}</span>
                <span className="flex-1 text-left text-gray-900">
                  {country.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
