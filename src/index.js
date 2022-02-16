import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ItemsRepo } from './dataLayer/repositories/inmemory/items';
import { Store } from './providers/store';
import { ItemsService } from './dataLayer/services/items';
import { seedItems } from './utils/seeder/items';
import { CartRepo } from './dataLayer/repositories/inmemory/cart';
import { CartService } from './dataLayer/services/cart';
import { renderApp } from './App';

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

seedItems(services.items);

const App = renderApp(services);

ReactDOM.render(
  <App />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
