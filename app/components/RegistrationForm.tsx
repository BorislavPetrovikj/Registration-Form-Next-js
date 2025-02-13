"use client";

import { useState } from "react";
import { FormData, FormStep, ValidationErrors } from "../types/form";
import { validateName, validatePhoneNumber } from "../utils/validation";
import StepIndicator from "./StepIndicator";
import FormInput from "./FormInput";

export default function RegistrationForm() {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    countryCode: "+44",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
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
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  const handleBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(1);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div
      className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg"
      role="form"
      aria-label="Registration form"
    >
      <StepIndicator currentStep={step} />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-4"
        noValidate
      >
        <div
          className={`transition-opacity duration-200 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {step === 1 ? (
            <div role="group" aria-label="Personal Information">
              <FormInput
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Your first name"
                error={errors.firstName}
                aria-required="true"
                aria-invalid={!!errors.firstName}
                aria-describedby={
                  errors.firstName ? "firstName-error" : undefined
                }
              />
              <FormInput
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Your last name"
                error={errors.lastName}
                aria-required="true"
                aria-invalid={!!errors.lastName}
                aria-describedby={
                  errors.lastName ? "lastName-error" : undefined
                }
              />
            </div>
          ) : (
            <div role="group" aria-label="Contact Information">
              <FormInput
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="07890 123456"
                error={errors.phoneNumber}
                aria-required="true"
                aria-invalid={!!errors.phoneNumber}
                aria-describedby={
                  errors.phoneNumber ? "phoneNumber-error" : undefined
                }
                prefix={
                  <select
                    value={formData.countryCode}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        countryCode: e.target.value,
                      }))
                    }
                    className="h-full py-0 pl-3 pr-7 border-0 bg-transparent text-gray-500 sm:text-sm"
                    aria-label="Country code"
                  >
                    <option value="+44">+44</option>
                    <option value="+1">+1</option>
                    <option value="+33">+33</option>
                  </select>
                }
              />
            </div>
          )}
        </div>

        <div className="flex justify-center gap-4 mt-6">
          {step === 2 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200"
              aria-label="Go back to previous step"
            >
              Back
            </button>
          )}
          <button
            type="button"
            onClick={handleContinue}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            aria-label={step === 1 ? "Continue to next step" : "Submit form"}
          >
            {step === 1 ? "Continue" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
