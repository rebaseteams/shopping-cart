import { render, screen } from '@testing-library/react'
import { renderItem } from './index';

test('renders items page successfully', () => {
  const Item = renderItem();
  render(<Item />);
  const textElement = screen.getByText(/item page/i);
  expect(textElement).toBeInTheDocument();
});
