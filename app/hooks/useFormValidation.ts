import { useState } from 'react';
import { RegistrationFormData, ValidationErrors } from '../types/form';
import { validateName, validatePhoneNumber, shouldShowValidation } from '../utils/validation';

export function useFormValidation(formData: RegistrationFormData) {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string, shouldValidate: boolean = false) => {
    if (name === 'firstName' || name === 'lastName') {
      return validateName(value, shouldValidate);
    } else if (name === 'phoneNumber') {
      return validatePhoneNumber(value, shouldValidate);
    }
    return undefined;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (touched[name]) {
      const error = validateField(name, value, false);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const value = formData[name as keyof typeof formData];
    
    const error = validateField(name, value, !value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateStep1 = (): boolean => {
    setIsSubmitting(true);
    setTouched(prev => ({
      ...prev,
      firstName: true,
      lastName: true
    }));

    const firstNameError = validateField('firstName', formData.firstName, true);
    const lastNameError = validateField('lastName', formData.lastName, true);

    setErrors({
      firstName: firstNameError,
      lastName: lastNameError,
    });

    return !firstNameError && !lastNameError;
  };

  const validateStep2 = (): boolean => {
    setIsSubmitting(true);
    setTouched(prev => ({
      ...prev,
      phoneNumber: true
    }));

    const phoneError = validateField('phoneNumber', formData.phoneNumber, true);
    setErrors(prev => ({ ...prev, phoneNumber: phoneError }));
    return !phoneError;
  };

  const resetValidation = () => {
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  return {
    errors,
    setErrors,
    touched,
    setTouched,
    handleBlur,
    handleInputChange,
    validateStep1,
    validateStep2,
    resetValidation,
    isSubmitting
  };
} 