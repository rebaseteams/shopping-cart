/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react'
import { renderCheckout } from './index';

test('renders checkout page successfully', () => {
  const Checkout = renderCheckout();
  render(<Checkout />);
  let textElement = screen.getByText(/login/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/delivery address/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/order summary/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/payment options/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/price details/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText('Price (1 item)');
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/delivery charges/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/total payable/i);
  expect(textElement).toBeInTheDocument();
});
