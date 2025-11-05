import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header with navigation links', () => {
  render(<Header />);
  const homeLink = screen.getByText(/Home/i);
  const servicesLink = screen.getByText(/Services/i);
  const aboutLink = screen.getByText(/About/i);
  const industriesLink = screen.getByText(/Industries/i);
  const careerLink = screen.getByText(/Career/i);
  const reachUsButton = screen.getByText(/Reach Us/i);

  expect(homeLink).toBeInTheDocument();
  expect(servicesLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(industriesLink).toBeInTheDocument();
  expect(careerLink).toBeInTheDocument();
  expect(reachUsButton).toBeInTheDocument();
});
