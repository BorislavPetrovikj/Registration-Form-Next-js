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
  const getErrorMessage = (
    fieldName: "firstName" | "lastName",
    error?: string
  ) => {
    if (!error) return undefined;

    if (error === "This field is required") {
      return `* Please enter a ${
        fieldName === "firstName" ? "first" : "last"
      } name`;
    }

    if (error === "special_characters") {
      return "* We only accept letters and spaces for names, no special characters";
    }

    return error;
  };

  return (
    <div role="form" aria-labelledby="registration-title">
      <h2 id="registration-title" className="sr-only">
        Personal Information
      </h2>
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
        error={getErrorMessage("firstName", errors.firstName)}
        showBullet={false}
        className={`w-full px-4 py-4 rounded-[28px] bg-[#F9FAFB] 
          ${
            errors.firstName
              ? "border-2 border-[#FF0000]"
              : "border border-[#E5E7EB]"
          } 
          outline-none transition-all duration-200 
          placeholder:text-[#9CA3AF]
          focus:outline-none focus:border-[#2563EB] focus:border-2 focus:ring-0`}
        aria-invalid={!!errors.firstName}
      />
      <Input
        label="Last name"
        name="lastName"
        type="text"
        required
        aria-required="true"
        aria-describedby="lastName-error"
        value={formData.lastName}
        onChange={handleInputChange}
        onBlur={() => handleBlur("lastName")}
        placeholder="Your last name"
        error={getErrorMessage("lastName", errors.lastName)}
        showBullet={false}
        className={`w-full px-4 py-4 rounded-[28px] bg-[#F9FAFB] 
          ${
            errors.lastName
              ? "border-2 border-[#FF0000]"
              : "border border-[#E5E7EB]"
          } 
          outline-none transition-all duration-200 
          placeholder:text-[#9CA3AF]
          focus:outline-none focus:border-[#2563EB] focus:border-2 focus:ring-0`}
        aria-invalid={!!errors.lastName}
      />
    </div>
  );
}
