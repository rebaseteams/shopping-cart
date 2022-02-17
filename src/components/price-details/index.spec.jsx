/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react'
import { CartRepo } from '../../dataLayer/repositories/inmemory/cart';
import { ItemsRepo } from '../../dataLayer/repositories/inmemory/items';
import { CartService } from '../../dataLayer/services/cart';
import { ItemsService } from '../../dataLayer/services/items';
import { Store } from '../../providers/store';
import { renderPriceDetails } from './index';

test('renders price details page successfully', () => {
  const itemsService = new ItemsService(new ItemsRepo(new Store()));
  const cartService = new CartService(new CartRepo(new Store()));
  const PriceDetails = renderPriceDetails({ itemsService, cartService});
  render(<PriceDetails />);
  let textElement = screen.getByText(/price details/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/delivery charges/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/total payable/i);
  expect(textElement).toBeInTheDocument();
});
