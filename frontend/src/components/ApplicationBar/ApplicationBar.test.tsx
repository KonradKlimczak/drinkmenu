import { render, screen } from '@testing-library/react';
import { ApplicationBar } from './ApplicationBar';

test('renders Application Bar with icon, header and buttons', () => {
  render(<ApplicationBar />);

  const iconElement = screen.getByTestId('LocalBarIcon');
  expect(iconElement).toBeInTheDocument();

  const headerElement = screen.getByText(/Drinkly/i);
  expect(headerElement).toBeInTheDocument();

  const loginElement = screen.getByText(/Login/i);
  expect(loginElement).toBeInTheDocument();

  const createAccountElement = screen.getByText(/Create new account/i);
  expect(createAccountElement).toBeInTheDocument();
});
