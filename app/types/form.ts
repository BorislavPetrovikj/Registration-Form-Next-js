export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
}

export interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

export type FormStep = 1 | 2; 