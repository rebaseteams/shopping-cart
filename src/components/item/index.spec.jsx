/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react'
import { renderItemCard } from './index';

test('renders item component successfully', () => {
  const Item = renderItemCard({
    itemName : 'item name',
    itemImg : 'img url',
    itemColor : 'item color', 
    itemCost : 'item cost in Rs',
    id : 'item id'
  });
  render(<Item />);
  const itemName = screen.getByText(/item name/i);
  const itemColor = screen.getByText(/item color/i);
  const itemCost = screen.getByText(/item cost in rs/i);
  expect(itemName).toBeInTheDocument();
  expect(itemColor).toBeInTheDocument();
  expect(itemCost).toBeInTheDocument();
});