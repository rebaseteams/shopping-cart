/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from '@testing-library/react'
import { renderItem } from './index';
import { Store } from '../../providers/store/index';
import { ItemsService } from '../../dataLayer/services/items';
import { ItemsRepo } from '../../dataLayer/repositories/inmemory/items';

global.window = jest.fn()

jest.spyOn(window, 'alert');

describe('ITEM PAGE', () => {

  test('renders items page successfully', () => {
    const service = new ItemsService(new ItemsRepo(new Store()));
    const Item = renderItem(service);
    render(<Item />);
    const textElement = screen.getByText(/review/);
    expect(textElement).toBeInTheDocument();
  });

  test('information alert buy button', () => {
    const service = new ItemsService(new ItemsRepo(new Store()));
    const Item = renderItem(service);
    render( <Item  />);
    fireEvent.click(screen.getByTestId('buy'));
    expect(window.alert).toBeCalledWith('On Buy Under Development');
  });

  test('information alert add-to-bag button', () => {
    const service = new ItemsService(new ItemsRepo(new Store()));
    const Item = renderItem(service);
    render( <Item  />);
    fireEvent.click(screen.getByTestId('add-to-bag'));
    expect(window.alert).toBeCalledWith('On Add Cart Under Development');
  });
});