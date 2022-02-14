/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from '@testing-library/react'
import { renderHeader } from './index';

jest.spyOn(window, 'alert');

test('renders header component successfully', () => {
  const Header = renderHeader();
  render(<Header />);
  const loginButton = screen.getByText(/login/i);
  const moreButton = screen.getByText(/more/i);
  const cartButton = screen.getByText(/cart/i);
  expect(loginButton).toBeInTheDocument();
  expect(moreButton).toBeInTheDocument();
  expect(cartButton).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('login'));
  expect(window.alert).toBeCalledWith('login clicked');
  fireEvent.click(screen.getByTestId('more'));
  expect(window.alert).toBeCalledWith('more clicked');
  fireEvent.click(screen.getByTestId('cart'));
  expect(window.alert).toBeCalledWith('cart clicked');
});
