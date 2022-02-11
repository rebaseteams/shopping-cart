import { render, screen } from '@testing-library/react'
import { renderPageNotFoundPage } from './index';

test('renders page-not-found page successfully', () => {
  const PageNotFound = renderPageNotFoundPage();
  render(<PageNotFound />);
  const textElement = screen.getByText(/page not found page/i);
  expect(textElement).toBeInTheDocument();
});
