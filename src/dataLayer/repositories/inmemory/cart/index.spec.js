import { Cart } from ".";
import { Store } from '../../../../providers/store'

describe('CART INMEMORY REPO', () => {
  const store = new Store();
  const cart = new Cart(store)

  afterEach(() => {
    store.clear();
  })

  describe('Add item in Cart', () => {
    test('should add item in cart successfully', () => {
      cart.addCart('item id', 1);
      const cartItem = cart.getCart();
      expect(cartItem).toStrictEqual([{ id: 'item id', quentity: 1 }]);
    });

    test('should increase item quentity if item already present', () => {
      cart.addCart('item id', 1);
      cart.addCart('item id', 1);
      const cartItem = cart.getCart();
      expect(cartItem).toStrictEqual([{ id: 'item id', quentity: 2 }]);
    });

    test('should add default quentity 1 if quentity not provided', () => {
      cart.addCart('item id');
      const cartItem = cart.getCart();
      expect(cartItem).toStrictEqual([{ id: 'item id', quentity: 1 }]);
    });

    test('should not update or add item in cart id item id is not provided', () => {
      cart.addCart();
      const cartItem = cart.getCart();
      expect(cartItem).toStrictEqual([]);
    });
  });

  describe('Get item from Cart', () => {
    test('should get empty array id the cart is not set', () => {
      const cartItem = cart.getCart();
      expect(cartItem).toStrictEqual([]);
    })
  })
})