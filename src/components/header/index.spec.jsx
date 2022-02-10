import { render, screen } from '@testing-library/react'
import { renderHeader } from './index';

test('renders header component successfully', () => {
  const Header = renderHeader();
  render(<Header />);
  const textElement = screen.getByText(/header component/i);
  expect(textElement).toBeInTheDocument();
});
