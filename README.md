# Registration Form - Next.js with TypeScript and Tailwind CSS

A modern, accessible two-step registration form built with Next.js, TypeScript, and Tailwind CSS. Features smooth transitions, comprehensive validation, and a pixel-perfect design matching the Figma prototype.

## Features

- ✨ Two-step registration form with smooth transitions
- 🔒 Comprehensive client-side validation
- ♿ Fully accessible with ARIA attributes and keyboard navigation
- 📱 Responsive design
- 🎨 Pixel-perfect implementation of the Figma design
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

## Form Validation Rules

### Step 1: Personal Information

#### First Name and Last Name
- Required fields
- Minimum 2 characters
- Maximum 50 characters
- Allows letters, spaces, hyphens, and apostrophes
- No numbers or special characters

### Step 2: Contact Information

#### Phone Number
- Required field
- Accepts UK phone number formats:
  - Mobile: 07123456789 or +447123456789
  - Landline: 01234567890 or +441234567890
- Allows spaces, hyphens, and parentheses in input
- Maximum 15 digits (excluding formatting)

## Testing the Form

1. **Step 1 Testing**
   - Try submitting empty fields
   - Enter invalid characters (numbers, special characters)
   - Test minimum/maximum length validation
   - Verify error messages are clear and accessible

2. **Step 2 Testing**
   - Test different phone number formats
   - Verify country code selection
   - Check validation for invalid phone numbers
   - Test back button functionality

3. **Accessibility Testing**
   - Navigate using keyboard only (Tab, Shift+Tab, Enter)
   - Test with screen readers
   - Verify ARIA attributes are present
   - Check focus management between steps

4. **Transition Testing**
   - Verify smooth 200ms transitions between steps
   - Check that form state is preserved when going back
   - Test transitions on different devices/browsers

## Development

### Project Structure
```
├── app/
│   ├── components/
│   │   ├── FormInput.tsx
│   │   ├── RegistrationForm.tsx
│   │   └── StepIndicator.tsx
│   ├── types/
│   │   └── form.ts
│   ├── utils/
│   │   └── validation.ts
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── fonts/
└── ...
```

### Key Components

- `RegistrationForm`: Main form component with step management
- `FormInput`: Reusable input component with validation
- `StepIndicator`: Visual indicator for current step
- `validation.ts`: Form validation rules and functions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
