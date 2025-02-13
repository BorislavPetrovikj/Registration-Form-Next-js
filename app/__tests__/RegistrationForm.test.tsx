import { render, screen, fireEvent } from '@testing-library/react';
import RegistrationForm from '../components/RegistrationForm';

describe('RegistrationForm', () => {
  it('validates required fields', async () => {
    render(<RegistrationForm />);
    
    const continueButton = screen.getByText('Continue');
    fireEvent.click(continueButton);
    
    expect(await screen.findByText('* Please enter a first name')).toBeInTheDocument();
  });
}); 