export const validateName = (name: string): string | undefined => {
  if (!name) {
    return "This field is required";
  }
  if (name.trim().length < 2) {
    return "Name must be at least 2 characters long";
  }
  if (!/^[a-zA-Z\s-']+$/.test(name)) {
    return "Name can only contain letters, spaces, hyphens and apostrophes";
  }
  if (name.length > 50) {
    return "Name cannot be longer than 50 characters";
  }
  return undefined;
};

export const validatePhoneNumber = (phoneNumber: string): string | undefined => {
  if (!phoneNumber) {
    return "This field is required";
  }
  
  // Remove spaces and any other formatting characters
  const cleanNumber = phoneNumber.replace(/[\s\-\(\)]/g, '');
  
  // UK phone number validation (more comprehensive)
  // Allows for various UK number formats
  if (!/^(?:(?:\+44|0)7\d{9}|(?:\+44|0)1\d{9}|(?:\+44|0)2\d{9})$/.test(cleanNumber)) {
    return "Please enter a valid UK phone number (e.g., 07123456789 or +447123456789)";
  }
  
  if (cleanNumber.length > 15) {
    return "Phone number is too long";
  }
  
  return undefined;
};

// Helper function to validate email if needed in the future
export const validateEmail = (email: string): string | undefined => {
  if (!email) {
    return "This field is required";
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  
  return undefined;
}; 