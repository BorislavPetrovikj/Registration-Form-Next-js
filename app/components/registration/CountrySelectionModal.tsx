import React from "react";
import Modal from "../Modal";
import { RegistrationFormData } from "../../types/form";
import { Input } from "../ui/Input";

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
    <Modal isOpen={isOpen} onClose={onClose} title="" showCloseButton={false}>
      <div className="flex flex-col h-full bg-[#F6FAFE]">
        <div className="sticky top-0 px-4 pt-4 pb-2 -mt-10">
          <div className="relative">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search country"
              className="bg-[#F6FAFE]"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              {searchQuery ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchQuery("");
                  }}
                  className="p-1 hover:bg-gray-50 rounded-full"
                >
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

        <div className="overflow-y-auto flex-1 px-4">
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
                className="w-full py-4 flex items-center hover:bg-white"
              >
                <div className="flex items-center">
                  <div className="w-8 h-6 overflow-hidden rounded-[4px]">
                    <FlagComponent />
                  </div>
                  <span className="ml-2 text-[#021626] font-body font-light">
                    {country.code}
                  </span>
                </div>
                <span className="flex-1 text-left text-[#021626] font-body font-light ml-4">
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
