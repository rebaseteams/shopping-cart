/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react'
import { renderCheckout } from './index';

test('renders checkout page successfully', () => {
  const Checkout = renderCheckout();
  render(<Checkout />);
  const textElement = screen.getByText(/checkout page/i);
  expect(textElement).toBeInTheDocument();
});
