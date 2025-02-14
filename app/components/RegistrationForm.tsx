"use client";

import { useState } from "react";
import { RegistrationFormData, ValidationErrors } from "../types/form";
import StepIndicator from "./StepIndicator";
import Header from "./Header";
import { useFormStore } from "../store/useFormStore";

import React from "react";
import SuccessScreen from "./SuccessScreen";
import Step1Form from "./registration/Step1Form";
import Step2Form from "./registration/Step2Form";
import CountrySelectionModal from "./registration/CountrySelectionModal";
import FormModals from "./registration/FormModals";
import FormFooter from "./registration/FormFooter";
import { useFormValidation } from "../hooks/useFormValidation";
import { COUNTRIES } from "../constants/countries";

export default function RegistrationForm() {
  const { step, firstName, lastName, setStep, setFirstName, setLastName } =
    useFormStore();
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: firstName,
    lastName: lastName,
    phoneNumber: "",
    countryCode: "+44",
  });

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    errors,
    setErrors,
    touched,
    setTouched,
    handleBlur,
    validateStep1,
    validateStep2,
    clearErrors,
  } = useFormValidation(formData);

  const countries = COUNTRIES;

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.includes(searchQuery)
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "firstName") setFirstName(value);
    if (name === "lastName") setLastName(value);

    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
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
    clearErrors();
    setTimeout(() => {
      setStep(1);
      setIsTransitioning(false);
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
    clearErrors();
  };

  const handleOpenCountryModal = () => {
    setIsCountryDropdownOpen(true);
    clearErrors();
  };

  if (isSuccess) {
    return <SuccessScreen onBackToStart={handleBackToStart} />;
  }

  return (
    <>
      <div className="w-[393px] h-[721px] mx-auto">
        <div className="px-4 max-w-[393px]">
          <Header showBack={step === 2} onBack={handleBack} />
          <StepIndicator currentStep={step} />

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-[30px] space-y-6 max-w-full"
            role="form"
            aria-label="Registration form"
          >
            <div role="group" aria-labelledby="step-title">
              <h1
                id="step-title"
                className="font-heading font-bold text-[18px] leading-heading-sm text-gray-900 mb-4"
              >
                {step === 1
                  ? "Some introductions"
                  : "Let's validate your number"}
              </h1>

              <div
                className={`space-y-6 transition-opacity duration-200 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                {step === 1 ? (
                  <Step1Form
                    formData={formData}
                    errors={errors}
                    handleInputChange={handleInputChange}
                    handleBlur={handleBlur}
                  />
                ) : (
                  <Step2Form
                    formData={formData}
                    errors={errors}
                    handleInputChange={handleInputChange}
                    handleBlur={handleBlur}
                    setIsCountryDropdownOpen={setIsCountryDropdownOpen}
                    countries={countries as unknown as any[]}
                  />
                )}
              </div>

              <FormFooter
                step={step}
                isSubmitting={isSubmitting}
                showTerms={showTerms}
                showPrivacy={showPrivacy}
                setShowTerms={setShowTerms}
                setShowPrivacy={setShowPrivacy}
                handleContinue={handleContinue}
              />
            </div>
          </form>
        </div>
      </div>

      <CountrySelectionModal
        isOpen={isCountryDropdownOpen}
        onClose={() => {
          setIsCountryDropdownOpen(false);
          clearErrors();
        }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredCountries={filteredCountries}
        setFormData={setFormData}
        setIsCountryDropdownOpen={setIsCountryDropdownOpen}
      />

      <FormModals
        showTerms={showTerms}
        showPrivacy={showPrivacy}
        setShowTerms={setShowTerms}
        setShowPrivacy={setShowPrivacy}
      />
    </>
  );
}
