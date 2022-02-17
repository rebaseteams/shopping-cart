/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import { renderItemCard } from './index';

test('renders item component successfully', () => {
  const Item = renderItemCard({
    name : 'item name',
    images : 'img url',
    color : 'item color', 
    price : 'item cost in Rs',
    id : 'item id'
  });
  render(<BrowserRouter><Item /></BrowserRouter>);
  const itemName = screen.getByText(/item name/i);
  const itemColor = screen.getByText(/item color/i);
  const itemCost = screen.getByText(/item cost in rs/i);
  expect(itemName).toBeInTheDocument();
  expect(itemColor).toBeInTheDocument();
  expect(itemCost).toBeInTheDocument();
});
