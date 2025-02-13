import React from "react";
import { FormData, ValidationErrors } from "../../types/form";
import { Input } from "../ui/Input";

interface Step1FormProps {
  formData: FormData;
  errors: ValidationErrors;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (name: string) => void;
}

export default function Step1Form({
  formData,
  errors,
  handleInputChange,
  handleBlur,
}: Step1FormProps) {
  return (
    <div role="form" aria-labelledby="registration-title">
      <h2 id="registration-title" className="sr-only">Personal Information</h2>
      <Input
        label="First name"
        name="firstName"
        type="text"
        required
        aria-required="true"
        aria-describedby="firstName-error"
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
          outline-none transition-all duration-200 
          placeholder:text-[#9CA3AF]
          focus:outline-none focus:border-[#2563EB] focus:border-2 focus:ring-0`}
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
            outline-none transition-all duration-200 
            placeholder:text-[#9CA3AF]
            focus:outline-none focus:border-[#2563EB] focus:border-2 focus:ring-0`}
          aria-required="true"
          aria-invalid={!!errors.lastName}
        />
        {errors.lastName && (
          <div className="mt-2 text-[#FF0000] text-sm">
            {errors.lastName === "This field is required" ? (
              <span>
                * We only accept letters and spaces for names, no special
                characters
              </span>
            ) : (
              errors.lastName
            )}
          </div>
        )}
      </div>
    </div>
  );
}
