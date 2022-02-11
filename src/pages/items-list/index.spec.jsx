/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react'
import { renderItemCard } from '../../components/item';
import { ItemsRepo } from '../../dataLayer/repositories/inmemory/items';
import { ItemsService } from '../../dataLayer/services/items';
import { Store } from '../../providers/store';
import { renderItemsList } from './index';

test('renders items-list page successfully', () => {
  const service = new ItemsService(new ItemsRepo(new Store()));
  const ItemsList = renderItemsList(renderItemCard, service);
  render(<ItemsList />);
  const textElement = screen.getByText(/products/i);
  expect(textElement).toBeInTheDocument();
});
