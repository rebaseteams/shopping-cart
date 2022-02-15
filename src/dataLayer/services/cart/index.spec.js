import { CartService } from ".";
import { Cart } from "../../repositories/inmemory/cart";
import { Store } from "../../../providers/store";

describe('CART SERVICE', () => {
  const store = new Store();
  const cartService = new CartService(new Cart(store));

  afterEach(() => {
    store.clear();
  });

  describe('Add item in Cart Service', () => {
    test('should add item in cart successfully', () => {
      cartService.addCart('item id', 1);
      const cartItem = cartService.getCart();
      expect(cartItem).toStrictEqual([{ id: 'item id', quentity: 1 }]);
    });

    test('should increase item quentity if item already present', () => {
      cartService.addCart('item id', 1);
      cartService.addCart('item id', 1);
      const cartItem = cartService.getCart();
      expect(cartItem).toStrictEqual([{ id: 'item id', quentity: 2 }]);
    });

    test('should add default quentity 1 if quentity not provided', () => {
      cartService.addCart('item id');
      const cartItem = cartService.getCart();
      expect(cartItem).toStrictEqual([{ id: 'item id', quentity: 1 }]);
    });

    test('should not update or add item in cart id item id is not provided', () => {
      cartService.addCart();
      const cartItem = cartService.getCart();
      expect(cartItem).toStrictEqual([]);
    });
  });

  describe('Get item from Cart', () => {
    test('should get empty array id the cart is not set', () => {
      const cartItem = cartService.getCart();
      expect(cartItem).toStrictEqual([]);
    })
  })
})