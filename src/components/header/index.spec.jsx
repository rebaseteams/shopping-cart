/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from '@testing-library/react'
import { renderHeader } from './index';
import { CartService } from '../../dataLayer/services/cart'
import { CartRepo } from '../../dataLayer/repositories/inmemory/cart';
import { Store } from '../../providers/store';

jest.spyOn(window, 'alert');

const mockUseCountValid = () => {
  return { cartCount: 455 }
}

const mockUseCountInvalid = () => {
  return { cartCount: 0 }
}

describe('HEADER COMPONENT', () => {
  const store = new Store()
  test('renders header component successfully', () => {
    const Header = renderHeader(new CartService(new CartRepo(store)));
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

  test('Should show cart count', () => {
    const Header = renderHeader(new CartService(new CartRepo(store)), mockUseCountValid);
    render(<Header />);
    expect(screen.getByText('455')).toBeInTheDocument();
  })

  test('Should not show cart count if its 0', () => {
    const Header = renderHeader(new CartService(new CartRepo(store)), mockUseCountInvalid);
    render(<Header />);
    expect(() => screen.getByText('0')).toThrow('Unable to find an element');
  })
});

