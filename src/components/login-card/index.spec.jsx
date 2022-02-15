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
  let textElement = screen.getByText(/login/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/prasana shinde/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/change/i);
  expect(textElement).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('change'));
  expect(window.alert).toBeCalledWith('change clicked');
});
