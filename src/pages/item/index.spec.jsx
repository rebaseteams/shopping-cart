/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from '@testing-library/react'
import { renderItem } from './index';

jest.spyOn(window, 'alert');

test('renders items page successfully', () => {
  const Item = renderItem();
  render(<Item />);
  const textElement = screen.getByText(/review/);
  expect(textElement).toBeInTheDocument();
});

test('information alert buy button', () => {
    const Item = renderItem();
    render( <Item  />);
    fireEvent.click(screen.getByTestId('buy'));
    expect(window.alert).toBeCalledWith('Under Development');
});

test('information alert add-to-bag button', () => {
  const Item = renderItem();
  render( <Item  />);
  fireEvent.click(screen.getByTestId('add-to-bag'));
  expect(window.alert).toBeCalledWith('Under Development');
});