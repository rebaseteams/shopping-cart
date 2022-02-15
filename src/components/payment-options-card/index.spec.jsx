/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from '@testing-library/react'
import { renderPaymentOptionsCard } from './index';

jest.spyOn(window, 'alert');

test('renders payment options card successfully', () => {
  const PaymentOptionsCard = renderPaymentOptionsCard();
  render(<PaymentOptionsCard />);
  let textElement = screen.getByText(/payment options/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/change/i);
  expect(textElement).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('change'));
  expect(window.alert).toBeCalledWith('change clicked');
});
