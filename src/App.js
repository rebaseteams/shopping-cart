import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./providers/context";
import { renderHeader } from './components/header';
import { renderItemsList } from './pages/items-list';
import { renderItem } from './pages/item';
import { renderCheckout } from './pages/checkout';
import { renderPageNotFoundPage } from './pages/page-not-found';
import { useState } from "react";
import { renderItemCard } from "./components/item";
import { renderPriceDetails } from "./components/price-details";
import { renderLoginCard } from "./components/login-card";
import { renderDeliveryAddressCard } from "./components/deliver-address-card";
import { renderOrderSummaryCard } from "./components/order-summary-card";
import { renderPaymentOptionsCard } from "./components/payment-options-card";

export function renderApp(services ) {
  const Header = renderHeader(services.cart);
  const ItemsList = renderItemsList(renderItemCard, services.items);
  const ItemPage = renderItem(services.items, services.cart);
  const CheckOutPage = renderCheckout(renderPriceDetails, renderLoginCard, renderDeliveryAddressCard, renderOrderSummaryCard, renderPaymentOptionsCard);
  const PageNotFound = renderPageNotFoundPage();

  return function App () {
    const [ count, setCount ] = useState(services.cart.getCount()); 
    return (
      <BrowserRouter>
        <GlobalProvider.Provider value={{ value: count, setCount}}>
          <Header />
          <Routes>
            <Route path='/' element={<ItemsList />} />
            <Route path='/item/:id' element={<ItemPage />} />
            <Route path='/checkout' element={<CheckOutPage />} />
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </GlobalProvider.Provider>
      </BrowserRouter>
    )
  }
}
