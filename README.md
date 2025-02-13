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
│   │   ├── ui/
│   │   │   ├── form-input.tsx
│   │   │   └── step-indicator.tsx
│   │   └── registration-form.tsx
│   ├── lib/
│   │   └── validation.ts
│   ├── types/
│   │   └── form.ts
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── fonts/
└── ...
```

### Key Components

- `registration-form.tsx`: Main form component with step management
- `form-input.tsx`: Reusable input component with validation
- `step-indicator.tsx`: Visual indicator for current step
- `validation.ts`: Form validation rules and functions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
