/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react'
import { renderPriceDetails } from './index';

test('renders price details page successfully', () => {
  const PriceDetails = renderPriceDetails({numberOfItems : 1, price : 100, total : 100});
  render(<PriceDetails />);
  let textElement = screen.getByText(/price details/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText('Price (1 item)');
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/delivery charges/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/total payable/i);
  expect(textElement).toBeInTheDocument();
});
