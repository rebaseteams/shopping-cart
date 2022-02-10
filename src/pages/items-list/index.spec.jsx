import { render, screen } from '@testing-library/react'
import { renderItemsList } from './index';

test('renders items-list page successfully', () => {
  const ItemsList = renderItemsList();
  render(<ItemsList />);
  const textElement = screen.getByText(/items list page/i);
  expect(textElement).toBeInTheDocument();
});
