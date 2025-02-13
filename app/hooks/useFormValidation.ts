import { useState, useEffect } from 'react';
import { FormData, ValidationErrors } from '../types/form';
import { validateName, validatePhoneNumber } from '../utils/validation';

export function useFormValidation(formData: FormData) {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (touched.firstName && !formData.firstName) {
      setErrors((prev) => ({ ...prev, firstName: "This field is required" }));
    }
    if (touched.lastName && !formData.lastName) {
      setErrors((prev) => ({ ...prev, lastName: "This field is required" }));
    }
  }, [formData.firstName, formData.lastName, touched]);

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

  return {
    errors,
    setErrors,
    touched,
    setTouched,
    handleBlur,
    validateStep1,
    validateStep2
  };
} 