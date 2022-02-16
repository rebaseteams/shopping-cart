/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from '@testing-library/react'
import { renderDeliveryAddressCard } from './index';

test('renders delivery address card successfully', () => {
  const DeliveryAddressCard = renderDeliveryAddressCard();
  render(<DeliveryAddressCard />);
  let textElement = screen.getByText(/delivery address/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/change/i);
  expect(textElement).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('change'));
  textElement = screen.getByText(/name/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/10-digit mobile number/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/pincode/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/locality/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText('City/District/Town');
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/state/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText('Landmark (Optional)');
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText('Alternate Phone (Optional)');
  expect(textElement).toBeInTheDocument();
});
