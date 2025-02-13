export const validateName = (name: string): string | undefined => {
  // First check if field is empty
  if (!name || name.trim() === '') {
    return "This field is required";
  }

  // Then check for valid characters
  if (!/^[a-zA-Z\s-']+$/.test(name)) {
    return "We only accept letters and spaces for names, no special characters";
  }

  // Finally check maximum length
  if (name.length > 50) {
    return "Name cannot be longer than 50 characters";
  }

  return undefined;
};

export const validatePhoneNumber = (phoneNumber: string): string | undefined => {
  if (!phoneNumber || phoneNumber.trim() === '') {
    return "This field is required";
  }
  
  const cleanNumber = phoneNumber.replace(/[\s\-\(\)]/g, '');
  
  // UK mobile number validation (starting with 07)
  if (!/^07\d{9}$/.test(cleanNumber)) {
    return "Please check the phone number is in the correct format";
  }
  
  return undefined;
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