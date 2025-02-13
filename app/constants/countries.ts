import { GB, IE, US, AU, AF, AL, DZ } from "country-flag-icons/react/3x2";

export const COUNTRIES = [
  { code: "+44", name: "United Kingdom", flag: GB, shortCode: "GB" },
  { code: "+353", name: "Ireland", flag: IE, shortCode: "IE" },
  { code: "+1", name: "United States of America", flag: US, shortCode: "US" },
  { code: "+61", name: "Australia", flag: AU, shortCode: "AU" },
  { code: "+93", name: "Afghanistan", flag: AF, shortCode: "AF" },
  { code: "+355", name: "Albania", flag: AL, shortCode: "AL" },
  { code: "+213", name: "Algeria", flag: DZ, shortCode: "DZ" },
] as const;

export type Country = typeof COUNTRIES[number]; 