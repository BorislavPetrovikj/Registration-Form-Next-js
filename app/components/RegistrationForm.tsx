"use client";

import { useState, useEffect } from "react";
import { FormData, FormStep, ValidationErrors } from "../types/form";
import { validateName, validatePhoneNumber } from "../utils/validation";
import StepIndicator from "./StepIndicator";
import Header from "./Header";
import { useFormStore } from "../store/useFormStore";

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
    <div className="w-full max-w-md px-4 py-2">
      <Header showBack={step === 2} onBack={handleBack} />
      <StepIndicator currentStep={step} />

      <form onSubmit={(e) => e.preventDefault()} className="mt-8">
        <h1 className="text-[20px] leading-7 font-semibold text-gray-900 mb-6">
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
                  className={`w-full px-6 py-4 rounded-[28px] bg-[#F9FAFB] ${
                    errors.firstName
                      ? "border border-red-500"
                      : "border border-[#E5E7EB] shadow-sm"
                  } outline-none transition-all duration-200 placeholder:text-[#9CA3AF]`}
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
                  className={`w-full px-6 py-4 rounded-[28px] bg-[#F9FAFB] ${
                    errors.lastName
                      ? "border border-red-500"
                      : "border border-[#E5E7EB] shadow-sm"
                  } outline-none transition-all duration-200 placeholder:text-[#9CA3AF]`}
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
              <label className="block text-sm font-normal text-[#6B5F5F] mb-2">
                Phone Number
              </label>
              <div className="relative">
                <select
                  value={formData.countryCode}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      countryCode: e.target.value,
                    }))
                  }
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-transparent border-0 outline-none text-[#6B5F5F]"
                >
                  <option value="+44">+44</option>
                  <option value="+1">+1</option>
                  <option value="+33">+33</option>
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="07890 123456"
                  className={`w-full pl-20 pr-6 py-4 rounded-[28px] bg-[#F9FAFB] ${
                    errors.phoneNumber
                      ? "border border-red-500"
                      : "border border-[#E5E7EB] shadow-sm"
                  } outline-none transition-all duration-200 placeholder:text-[#9CA3AF]`}
                  aria-required="true"
                  aria-invalid={!!errors.phoneNumber}
                />
              </div>
              {errors.phoneNumber && (
                <div className="mt-2 text-red-500 text-sm">
                  {errors.phoneNumber === "This field is required" ? (
                    <span className="flex items-center gap-1">
                      <span className="text-red-500">*</span>
                      This field is required
                    </span>
                  ) : (
                    errors.phoneNumber
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleContinue}
          className="w-full bg-[#2563EB] text-white rounded-full py-4 px-4 hover:bg-[#1d4ed8] transition-colors mt-6 font-medium"
        >
          Continue
        </button>

        <div className="text-center mt-6">
          <a href="#" className="text-[#2563EB] text-sm hover:underline">
            Already have an account?
          </a>
        </div>

        <div className="text-center mt-8 text-[#9CA3AF] text-sm">
          Version 0.1
        </div>
      </form>
    </div>
  );
}
