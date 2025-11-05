import { render, screen } from '@testing-library/react';
import ContactModal from './ContactModal';

test('renders contact modal with form elements', () => {
  render(<ContactModal isOpen={true} />);
  const nameInput = screen.getByPlaceholderText(/Name/i);
  const phoneInput = screen.getByPlaceholderText(/Phone/i);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  const servicesHeading = screen.getByText(/Services We Offer/i);
  const submitButton = screen.getByText(/Submit/i);

  expect(nameInput).toBeInTheDocument();
  expect(phoneInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(servicesHeading).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
