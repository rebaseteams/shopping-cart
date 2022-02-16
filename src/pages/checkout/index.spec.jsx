/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react'
import { renderDeliveryAddressCard } from '../../components/deliver-address-card';
import { renderLoginCard } from '../../components/login-card';
import { renderOrderSummaryCard } from '../../components/order-summary-card';
import { renderPaymentOptionsCard } from '../../components/payment-options-card';
import { renderPriceDetails } from '../../components/price-details';
import { CartRepo } from '../../dataLayer/repositories/inmemory/cart';
import { ItemsRepo } from '../../dataLayer/repositories/inmemory/items';
import { CartService } from '../../dataLayer/services/cart';
import { ItemsService } from '../../dataLayer/services/items';
import { Store } from '../../providers/store';
import { renderCheckout } from './index';

test('renders checkout page successfully', () => {
  const store = new Store();
  const itemsService = new ItemsService(new ItemsRepo(store));
  const cartService = new CartService(new CartRepo(store));
  const Checkout = renderCheckout(renderPriceDetails, renderLoginCard, renderDeliveryAddressCard, renderOrderSummaryCard, renderPaymentOptionsCard, itemsService, cartService);
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
