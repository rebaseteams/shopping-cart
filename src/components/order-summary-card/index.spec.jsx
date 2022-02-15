/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from '@testing-library/react'
import { renderOrderSummaryCard } from './index';

jest.spyOn(window, 'alert');

test('renders order summary card successfully', () => {
  const OrderSummaryCard = renderOrderSummaryCard({
      numberOfItems : 1
  });
  render(<OrderSummaryCard />);
  let textElement = screen.getByText(/order summary/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/change/i);
  expect(textElement).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('change'));
  expect(window.alert).toBeCalledWith('change clicked');
});
