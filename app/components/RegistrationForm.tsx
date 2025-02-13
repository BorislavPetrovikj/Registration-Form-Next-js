"use client";

import { useState, useEffect } from "react";
import { FormData, FormStep, ValidationErrors } from "../types/form";
import { validateName, validatePhoneNumber } from "../utils/validation";
import StepIndicator from "./StepIndicator";
import Header from "./Header";
import { useFormStore } from "../store/useFormStore";
import Modal from "./Modal";
import { GB, IE, US, AU, AF, AL, DZ } from "country-flag-icons/react/3x2";
import React from "react";
import SuccessScreen from "./SuccessScreen";

export default function RegistrationForm() {
  const { step, firstName, lastName, setStep, setFirstName, setLastName } =
    useFormStore();
  const [formData, setFormData] = useState<FormData>({
    firstName: firstName,
    lastName: lastName,
    phoneNumber: "",
    countryCode: "+44",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = [
    { code: "+44", name: "United Kingdom", flag: GB, shortCode: "GB" },
    { code: "+353", name: "Ireland", flag: IE, shortCode: "IE" },
    { code: "+1", name: "United States of America", flag: US, shortCode: "US" },
    { code: "+61", name: "Australia", flag: AU, shortCode: "AU" },
    { code: "+93", name: "Afghanistan", flag: AF, shortCode: "AF" },
    { code: "+355", name: "Albania", flag: AL, shortCode: "AL" },
    { code: "+213", name: "Algeria", flag: DZ, shortCode: "DZ" },
  ];

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.includes(searchQuery)
  );

  // Check for empty fields when they are touched
  useEffect(() => {
    if (touched.firstName && !formData.firstName) {
      setErrors((prev) => ({ ...prev, firstName: "This field is required" }));
    }
    if (touched.lastName && !formData.lastName) {
      setErrors((prev) => ({ ...prev, lastName: "This field is required" }));
    }
  }, [formData.firstName, formData.lastName, touched]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Update Zustand store for firstName and lastName
    if (name === "firstName") setFirstName(value);
    if (name === "lastName") setLastName(value);

    // Mark field as touched
    if (!touched[name]) {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }

    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (!formData[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
    }
  };

  const validateStep1 = (): boolean => {
    const firstNameError = validateName(formData.firstName);
    const lastNameError = validateName(formData.lastName);

    setErrors({
      firstName: firstNameError,
      lastName: lastNameError,
    });

    return !firstNameError && !lastNameError;
  };

  const validateStep2 = (): boolean => {
    const phoneError = validatePhoneNumber(formData.phoneNumber);
    setErrors({ phoneNumber: phoneError });
    return !phoneError;
  };

  const handleContinue = () => {
    if (step === 1 && validateStep1()) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStep(2);
        setIsTransitioning(false);
      }, 200);
    } else if (step === 2 && validateStep2()) {
      setIsSuccess(true);
    }
  };

  const handleBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(1);
      setIsTransitioning(false);
      setErrors({});
      setTouched({});
    }, 200);
  };

  const handleBackToStart = () => {
    setIsSuccess(false);
    setStep(1);
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      countryCode: "+44",
    });
    setErrors({});
    setTouched({});
  };

  if (isSuccess) {
    return <SuccessScreen onBackToStart={handleBackToStart} />;
  }

  return (
    <>
      <div className="w-full max-w-[393px] mx-auto px-3">
        <Header showBack={step === 2} onBack={handleBack} />
        <StepIndicator currentStep={step} />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8"
          role="form"
          aria-label="Registration form"
        >
          <div role="group" aria-labelledby="step-title">
            <h1
              id="step-title"
              className="text-[20px] leading-7 font-semibold text-gray-900 mb-6"
            >
              {step === 1 ? "Some introductions" : "Let's validate your number"}
            </h1>

            <div
              className={`space-y-6 transition-opacity duration-200 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {step === 1 ? (
                <div>
                  <div className="mb-6">
                    <label className="block text-sm font-normal text-[#6B5F5F] mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("firstName")}
                      placeholder="Your first name"
                      className={`w-full px-4 py-4 rounded-[28px] bg-[#F9FAFB] 
                        ${
                          errors.firstName
                            ? "border-2 border-red-500"
                            : "border border-[#E5E7EB]"
                        } 
                        outline-none 
                        transition-all duration-200 
                        placeholder:text-[#9CA3AF]
                        focus:outline-none
                        focus:border-[#2563EB]
                        focus:border-2
                        focus:ring-0`}
                      aria-required="true"
                      aria-invalid={!!errors.firstName}
                    />
                    {errors.firstName && (
                      <div className="mt-2 text-[#FF0000] text-sm">
                        {errors.firstName === "This field is required" ? (
                          <span>* Please enter a first name</span>
                        ) : (
                          errors.firstName
                        )}
                      </div>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-normal text-[#6B5F5F] mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("lastName")}
                      placeholder="Your last name"
                      className={`w-full px-4 py-4 rounded-[28px] bg-[#F9FAFB] 
                        ${
                          errors.lastName
                            ? "border-2 border-red-500"
                            : "border border-[#E5E7EB]"
                        } 
                        outline-none 
                        transition-all duration-200 
                        placeholder:text-[#9CA3AF]
                        focus:outline-none
                        focus:border-[#2563EB]
                        focus:border-2
                        focus:ring-0`}
                      aria-required="true"
                      aria-invalid={!!errors.lastName}
                    />
                    {errors.lastName && (
                      <div className="mt-2 text-[#FF0000] text-sm">
                        {errors.lastName === "This field is required" ? (
                          <span>
                            * We only accept letters and spaces for names, no
                            special characters
                          </span>
                        ) : (
                          errors.lastName
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <label className="block text-sm font-normal text-gray-600 mb-2">
                    Phone number
                  </label>
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => setIsCountryDropdownOpen(true)}
                      className="px-3 py-3 rounded-full bg-white border border-gray-200 flex items-center gap-2 shrink-0"
                    >
                      <div className="w-6 h-4 rounded-sm overflow-hidden">
                        {countries.find((c) => c.code === formData.countryCode)
                          ?.flag &&
                          React.createElement(
                            countries.find(
                              (c) => c.code === formData.countryCode
                            )!.flag
                          )}
                      </div>
                      <span>{formData.countryCode}</span>
                    </button>
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
                    <div className="mt-2 text-red-500 text-sm">
                      {errors.phoneNumber}
                    </div>
                  )}
                </div>
              )}
            </div>

            {step === 2 && (
              <p className="text-sm text-[#6B5F5F] mb-6">
                By clicking 'Continue' you confirm that you agree to our{" "}
                <button
                  onClick={() => setShowTerms(true)}
                  className="text-[#2563EB] hover:underline"
                >
                  terms and conditions
                </button>{" "}
                and{" "}
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="text-[#2563EB] hover:underline"
                >
                  privacy policy
                </button>
              </p>
            )}

            <button
              type="button"
              onClick={handleContinue}
              disabled={isSubmitting}
              className={`w-full bg-primary text-white rounded-full py-4 px-4 
                ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-primary/80"
                } 
                transition-colors mt-6 font-medium`}
            >
              {isSubmitting ? "Processing..." : "Continue"}
            </button>

            {step === 1 && (
              <>
                <div className="text-center mt-6">
                  <a
                    href="#"
                    className="text-[#2563EB] text-sm hover:underline"
                  >
                    Already have an account?
                  </a>
                </div>

                <div className="text-center mt-8 text-[#9CA3AF] text-sm">
                  Version 0.1
                </div>
              </>
            )}
          </div>
        </form>
      </div>

      {/* Single Modal for country selection */}
      <Modal
        isOpen={isCountryDropdownOpen}
        onClose={() => setIsCountryDropdownOpen(false)}
        title=""
      >
        <div className="flex flex-col h-full">
          <div className="sticky top-0 bg-white p-4">
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

      {/* Terms and Privacy modals */}
      <Modal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms & conditions"
      >
        <p>
          Pirate ipsum arrgh bounty warp jack. Clipper driver the sloop anchor.
          Coast coxswain anchor jennys just full pin gangway yellow. Ahoy
          timbers dead tender guns of arr round down bilge. Sink black avast
          plate tell her tender. Road tales halter grog gun.
        </p>
        <p>
          Splice bucko blossom schooner topsail jolly chantey bounty sloop
          coxswain. Or aft o'nine run the dock belaying clipper. Hang ballast
          down topsail scurvy grog. Heave halter to spot log dock rat heave
          hands ipsum. Looker yer coxswain gold gangway. Grog pink deck men
          jones' yawl yard fer. Lugsail starboard plate crack topsail.
        </p>
        <p>
          Pin ipsum shot boat arr. Mizzen prey scurvy no crow's. Log roger
          schooner yer gangway coast piracy gunwalls. Chase yar chains down
          arrgh hands spirits gun. Salmagundi scurvy warp lugsail eye or bow
          shiver. Lass dock pin driver poop rat. Avast sail bilge rat gunwalls
          topsail pink.
        </p>
      </Modal>

      <Modal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy policy"
      >
        <p>
          Pirate ipsum arrgh bounty warp jack. Clipper driver the sloop anchor.
          Coast coxswain anchor jennys just full pin gangway yellow. Ahoy
          timbers dead tender guns of arr round down bilge. Sink black avast
          plate tell her tender. Road tales halter grog gun.
        </p>
        <p>
          Splice bucko blossom schooner topsail jolly chantey bounty sloop
          coxswain. Or aft o'nine run the dock belaying clipper. Hang ballast
          down topsail scurvy grog. Heave halter to spot log dock rat heave
          hands ipsum. Looker yer coxswain gold gangway. Grog pink deck men
          jones' yawl yard fer. Lugsail starboard plate crack topsail.
        </p>
        <p>
          Pin ipsum shot boat arr. Mizzen prey scurvy no crow's. Log roger
          schooner yer gangway coast piracy gunwalls. Chase yar chains down
          arrgh hands spirits gun. Salmagundi scurvy warp lugsail eye or bow
          shiver. Lass dock pin driver poop rat. Avast sail bilge rat gunwalls
          topsail pink.
        </p>
      </Modal>
    </>
  );
}
