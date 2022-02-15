import { CartService } from ".";
import { CartRepo } from "../../repositories/inmemory/cart";
import { Store } from "../../../providers/store";

describe('CART SERVICE', () => {
  const store = new Store();
  const cartService = new CartService(new CartRepo(store));

  afterEach(() => {
    store.clear();
  });

  describe('Add item in Cart Service', () => {
    test('should add item in cart successfully', () => {
      cartService.addItem('item id', 1);
      const cartItem = cartService.getCartItems();
      expect(cartItem).toStrictEqual([{ id: 'item id', quantity: 1 }]);
    });

    test('should increase item quantity if item already present', () => {
      cartService.addItem('item id', 1);
      cartService.addItem('item id', 1);
      const cartItem = cartService.getCartItems();
      expect(cartItem).toStrictEqual([{ id: 'item id', quantity: 2 }]);
    });

    test('should add default quantity 1 if quantity not provided', () => {
      cartService.addItem('item id');
      const cartItem = cartService.getCartItems();
      expect(cartItem).toStrictEqual([{ id: 'item id', quantity: 1 }]);
    });

    test('should not update or add item in cart id item id is not provided', () => {
      cartService.addItem();
      const cartItem = cartService.getCartItems();
      expect(cartItem).toStrictEqual([]);
    });
  });

  describe('Get item from Cart', () => {
    test('should get empty array id the cart is not set', () => {
      const cartItem = cartService.getCartItems();
      expect(cartItem).toStrictEqual([]);
    })

    test('should return value if item present in cart', () => {
      cartService.addItem('Item id', 1);
      const cartItem = cartService.getCartItems();
      expect(cartItem).toStrictEqual([{ id: 'Item id', quantity: 1 }]);
    })
  })
})