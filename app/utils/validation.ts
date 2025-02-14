export function validateName(value: string, shouldValidate: boolean = false): string | undefined {
  // Only show "required" error if:
  // 1. We're explicitly validating (e.g., on form submit)
  // 2. OR the field has been touched and left empty
  if (!value && shouldValidate) {
    return "This field is required";
  }
  
  // If there's a value, check for special characters
  if (value && value.trim()) {
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(value)) {
      return "special_characters";
    }
  }
  
  return undefined;
}

export const validatePhoneNumber = (phoneNumber: string, shouldValidate: boolean = false): string | undefined => {
  // Only show "required" error if:
  // 1. We're explicitly validating (e.g., on form submit)
  // 2. OR the field has been touched and left empty
  if (!phoneNumber && shouldValidate) {
    return "This field is required";
  }
  
  // If there's a value, validate the format
  if (phoneNumber && phoneNumber.trim()) {
    const cleanNumber = phoneNumber.replace(/[\s\-\(\)]/g, '');
    
    // UK mobile number validation (starting with 07)
    if (!/^07\d{9}$/.test(cleanNumber)) {
      return "Please check the phone number is in the correct format";
    }
  }
  
  return undefined;
};

// Helper function to check if we should show validation errors
export const shouldShowValidation = (
  value: string, 
  touched: boolean, 
  isSubmitting: boolean
): boolean => {
  // Show validation when:
  // 1. Field has been touched AND has a value
  // 2. Field has been touched AND user is submitting
  // 3. User is submitting regardless of touch state
  return (touched && value.length > 0) || (touched && isSubmitting) || isSubmitting;
};

// Helper function to validate email if needed in the future
export const validateEmail = (email: string): string | undefined => {
  if (!email || email.trim() === '') {
    return "This field is required";
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  
  return undefined;
}; 