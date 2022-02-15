/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from '@testing-library/react'
import { renderDeliveryAddressCard } from './index';

jest.spyOn(window, 'alert');

test('renders delivery address card successfully', () => {
  const DeliveryAddressCard = renderDeliveryAddressCard({
      name : 'prasana shinde',
      address: 'Mangaon, Mumbai - 400201, Maharashtra',
      pincode: '400201'
  });
  render(<DeliveryAddressCard />);
  let textElement = screen.getByText(/delivery address/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/prasana shinde/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/change/i);
  expect(textElement).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('change'));
  expect(window.alert).toBeCalledWith('change clicked');
});
