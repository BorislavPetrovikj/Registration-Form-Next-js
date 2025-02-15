# Registration Form - Next.js with TypeScript and Tailwind CSS

A modern, accessible two-step registration form built with Next.js, TypeScript, and Tailwind CSS. Features smooth transitions, comprehensive validation, and a pixel-perfect design matching the Figma prototype.

## Features

- ✨ Two-step registration form with smooth transitions
- 🔒 Comprehensive client-side validation
- ♿ Fully accessible with ARIA attributes
- 📱 Responsive design
- 🎨 Pixel-perfect implementation
- 🔄 State preservation between steps

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd registration-form
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing Guide

### Validation Rules
- First/Last Name: 2-50 characters, letters only
- Phone Number: UK format (07XXXXXXXXX)
- Test with these number for uk : 07890 123456

### Test Cases
1. Form Navigation
   - Try navigating between steps
   - Verify state preservation
   - Test back button functionality

2. Field Validation
   - Submit empty fields
   - Test invalid characters
   - Try incorrect phone formats

3. Accessibility
   - Navigate with keyboard
   - Test with screen readers
   - Verify ARIA attributes

## Development

### Project Structure
```
├── app/
│   ├── components/
│   │   ├── registration/
│   │   │   ├── CountrySelectionModal.tsx
│   │   │   ├── CountrySelector.tsx
│   │   │   ├── FormFooter.tsx
│   │   │   ├── FormModals.tsx
│   │   │   ├── Step1Form.tsx
│   │   │   └── Step2Form.tsx
│   │   ├── ui/
│   │   │   ├── Input.tsx
│   │   │   └── PhoneInput.tsx
│   │   ├── Header.tsx
│   │   ├── Modal.tsx
│   │   ├── RegistrationForm.tsx
│   │   ├── StepIndicator.tsx
│   │   └── SuccessScreen.tsx
│   ├── constants/
│   │   └── countries.ts
│   ├── hooks/
│   │   └── useFormValidation.ts
│   ├── store/
│   │   └── useFormStore.ts
│   ├── types/
│   │   └── form.ts
│   ├── utils/
│   │   └── validation.ts
│   ├── __tests__/
│   │   └── RegistrationForm.test.tsx
│   ├── fonts/
│   │   ├── GeistVF.woff
│   │   └── GeistMonoVF.woff
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── Logo.svg
│   └── Vector.svg
├── .eslintrc.json
├── jest.config.ts
├── jest.setup.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

### Key Components

- `registration/`: Contains all registration-specific components
  - `Step1Form.tsx`: First step of registration (name inputs)
  - `Step2Form.tsx`: Second step of registration (phone input)
  - `CountrySelector.tsx`: Country selection component
  - `FormFooter.tsx`: Footer with terms and continue button
  - `FormModals.tsx`: Terms and privacy policy modals

- `ui/`: Reusable UI components
  - `Input.tsx`: Base input component
  - `PhoneInput.tsx`: Specialized phone input with country code

- `hooks/`: Custom React hooks
  - `useFormValidation.ts`: Form validation logic

- `store/`: State management
  - `useFormStore.ts`: Zustand store for form state

- `utils/`: Utility functions
  - `validation.ts`: Form validation rules and functions

- `types/`: TypeScript type definitions
  - `form.ts`: Form-related types and interfaces

Would you like me to make any other adjustments to the structure documentation?


