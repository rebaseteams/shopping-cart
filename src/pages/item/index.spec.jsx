/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from "@testing-library/react";
import { renderItem } from "./index";
import { Store } from "../../providers/store/index";
import { ItemsService } from "../../dataLayer/services/items";
import { ItemsRepo } from "../../dataLayer/repositories/inmemory/items";

const mockUseItemHook = () => {
  return {
    loading: false,
    product: {
      category: "Mens",
      color: "232",
      description:
        "Light weight , Breathable Spacer Mesh. 3D Splash Printing on 3 Stripes & special grains printing on heel cap gives the shoe a vibrant & bold look. Ortholite sock liner for better cushioning. They feature a textile upper and a supportive cage that wraps aroundthe midfoot to give you stability where you need it most. Outsole : ADIWEAR: outsolefor best durability in high wear areas.",
      details: "Dtails",
      highlights: [
        ("Shoe Width: Medium", "Adidas Men Running sports shoes")
      ],
      id: "f27ae6af-1a43-4d11-b141-63a713cd0b3c",
      images: [
        ("https://rukminim1.flixcart.com/image/880/1056/kv8f…ftwwht-vivred-original-imag86cpxqc9qgeg.jpeg?q=50",
        "https://assetscdn1.paytm.com/images/catalog/produc…MOKY-TRENDYSMOK381955669A9D8/1622965634045_0..jpg")
      ],
      name: "Adifloss M Running Shoes For Men  (Blue)",
      outOfStock: false,
      path: [({}, {})],
      price: "2334",
      priceUnit: "$",
      reviewCount: 0,
      star: 0,
      stockCount: 100,
      subCategory: "Shoes",
    },
  };
};

jest.spyOn(window, "alert");

describe("ITEM PAGE", () => {
  test("renders items page successfully", () => {
    const service = new ItemsService(new ItemsRepo(new Store()));
    const Item = renderItem(service, mockUseItemHook);
    render(<Item />);
    const textElement = screen.getByText(/review/);
    expect(textElement).toBeInTheDocument();
  });

  test("information alert buy button", () => {
    const service = new ItemsService(new ItemsRepo(new Store()));
    const Item = renderItem(service, mockUseItemHook);
    render(<Item />);
    fireEvent.click(screen.getByTestId("buy"));
    expect(window.alert).toBeCalledWith("On Buy Under Development");
  });

  test("information alert add-to-bag button", () => {
    const service = new ItemsService(new ItemsRepo(new Store()));
    const Item = renderItem(service, mockUseItemHook);
    render(<Item />);
    fireEvent.click(screen.getByTestId("add-to-bag"));
    expect(window.alert).toBeCalledWith("On Add Cart Under Development");
  });
});
