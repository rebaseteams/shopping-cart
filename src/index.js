import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { renderHeader } from './components/header';
import { renderItemsList } from './pages/items-list';
import { renderItem } from './pages/item';
import { renderCheckout } from './pages/checkout';
import { renderPageNotFoundPage } from './pages/page-not-found';
import { renderItemCard } from './components/item';
import { ItemsRepo } from './dataLayer/repositories/inmemory/items';
import { Store } from './providers/store';
import { ItemsService } from './dataLayer/services/items';
import { seedItems } from './utils/seeder/items';
import { CartRepo } from './dataLayer/repositories/inmemory/cart';
import { CartService } from './dataLayer/services/cart';
import { renderPriceDetails } from './components/price-details';
import { renderLoginCard } from './components/login-card';
import { renderDeliveryAddressCard } from './components/deliver-address-card';
import { renderOrderSummaryCard } from './components/order-summary-card';
import { renderPaymentOptionsCard } from './components/payment-options-card';

const providers = {
  store : new Store()
}

const repositories = {
  items : new ItemsRepo(providers.store),
  cart : new CartRepo(providers.store)
}

const services = {
  items : new ItemsService(repositories.items),
  cart : new CartService(repositories.cart)
}

const Header = renderHeader(services.cart);
const ItemsList = renderItemsList(renderItemCard, services.items);
const ItemPage = renderItem(services.items, services.cart);
const CheckOutPage = renderCheckout(renderPriceDetails, renderLoginCard, renderDeliveryAddressCard, renderOrderSummaryCard, renderPaymentOptionsCard);
const PageNotFound = renderPageNotFoundPage();

seedItems(services.items);

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<ItemsList />} />
      <Route path='/item/:id' element={<ItemPage />} />
      <Route path='/checkout' element={<CheckOutPage />} />
      <Route path="/page-not-found" element={<PageNotFound />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
