/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from "@testing-library/react";
import { renderItem } from "./index";
import { Store } from "../../providers/store/index";
import { ItemsService } from "../../dataLayer/services/items";
import { ItemsRepo } from "../../dataLayer/repositories/inmemory/items";
import { CartService } from "../../dataLayer/services/cart";
import { CartRepo } from "../../dataLayer/repositories/inmemory/cart";
import testData from "./testData.json";

const mockUseItemHook = () => {
  return testData;
};

jest.spyOn(window, "alert");

describe("ITEM PAGE", () => {
  const store = new Store();
  const itemService = new ItemsService(new ItemsRepo(new Store()));
  const cartService = new CartService(new CartRepo(new Store()));

  afterEach(() => {
    store.clear();
  })
  test("renders items page successfully", () => {
    const Item = renderItem(itemService, cartService, mockUseItemHook);
    render(<Item />);
    const textElement = screen.getByText(/review/);
    expect(textElement).toBeInTheDocument();
  });

  test("information alert buy button", () => {
    const Item = renderItem(itemService, cartService, mockUseItemHook);
    render(<Item />);
    fireEvent.click(screen.getByTestId("buy"));
    expect(window.alert).toBeCalledWith("On Buy Under Development");
  });

  test("information alert add-to-bag button", () => {
    const Item = renderItem(itemService, cartService, mockUseItemHook);
    render(<Item />);
    fireEvent.click(screen.getByTestId("add-to-bag"));
    const item = store.get('cart'); 
    expect(JSON.parse(item)).toStrictEqual([{"id": "f27ae6af-1a43-4d11-b141-63a713cd0b3c", "quantity": 1}])
  });
});
