/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react'
import { CartRepo } from '../../dataLayer/repositories/inmemory/cart';
import { CartService } from '../../dataLayer/services/cart';
import { Store } from '../../providers/store';
import { renderOrderSummaryCard } from './index';

test('renders order summary card successfully', () => {
  const cartService = new CartService(new CartRepo(new Store()));
  const OrderSummaryCard = renderOrderSummaryCard({ email : 'prasanashinde@gmail.com', cartService });
  render(<OrderSummaryCard />);
  let textElement = screen.getByText(/order summary/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/change/i);
  expect(textElement).toBeInTheDocument();
});
