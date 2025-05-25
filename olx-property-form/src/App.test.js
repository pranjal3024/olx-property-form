import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OLX Property Filter heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/OLX Property Filter/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders property form', () => {
  render(<App />);
  const locationInput = screen.getByPlaceholderText(/Enter location/i);
  expect(locationInput).toBeInTheDocument();
});
