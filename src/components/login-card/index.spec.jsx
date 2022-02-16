/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from '@testing-library/react'
import { renderLoginCard } from './index';

jest.spyOn(window, 'alert');

test('renders login card successfully', () => {
  const LoginCard = renderLoginCard({
      name: 'PRASANA SHINDE',
      mobile: '+918989898989'
  });
  render(<LoginCard />);
  let textElement = screen.getAllByText(/prasana shinde/i);
  expect(textElement[0]).toBeInTheDocument();
  textElement = screen.getByText(/change/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getAllByText('+918989898989');
  expect(textElement[0]).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('change'));
  textElement = screen.getAllByText('Advantages of our secure login');
  expect(textElement[0]).toBeInTheDocument();
  textElement = screen.getAllByText('Easily Track Orders, Hassle free Returns');
  expect(textElement[0]).toBeInTheDocument();
  textElement = screen.getAllByText('Get Relevant Alerts and Recommendation');
  expect(textElement[0]).toBeInTheDocument();
  textElement = screen.getAllByText('Wishlist, Reviews, Ratings and more.');
  expect(textElement[0]).toBeInTheDocument();
  textElement = screen.getAllByText('Login & Sign in to another account');
  expect(textElement[0]).toBeInTheDocument();
});
