import { CartRepo } from ".";
import { Store } from '../../../../providers/store'

describe('CART INMEMORY REPO', () => {
  const store = new Store();
  const cartRepo = new CartRepo(store)

  afterEach(() => {
    store.clear();
  })

  describe('Add item in Cart', () => {
    test('should add item in cart successfully', () => {
      cartRepo.addItem('item id', 1);
      const cartItem = cartRepo.getCartItems();
      expect(cartItem).toStrictEqual([{ id: 'item id', quantity: 1 }]);
    });

    test('should increase item quantity if item already present', () => {
      cartRepo.addItem('item id', 1);
      cartRepo.addItem('item id', 1);
      const cartItem = cartRepo.getCartItems();
      expect(cartItem).toStrictEqual([{ id: 'item id', quantity: 2 }]);
    });

    test('should add default quantity 1 if quantity not provided', () => {
      cartRepo.addItem('item id');
      const cartItem = cartRepo.getCartItems();
      expect(cartItem).toStrictEqual([{ id: 'item id', quantity: 1 }]);
    });

    test('should not update or add item in cart id item id is not provided', () => {
      cartRepo.addItem();
      const cartItem = cartRepo.getCartItems();
      expect(cartItem).toStrictEqual([]);
    });
  });

  describe('Get item from Cart', () => {
    test('should get empty array id the cart is not set', () => {
      const cartItem = cartRepo.getCartItems();
      expect(cartItem).toStrictEqual([]);
    });

    test('should return value if item present in cart', () => {
      cartRepo.addItem('Item id', 1);
      const cartItem = cartRepo.getCartItems();
      expect(cartItem).toStrictEqual([{ id: 'Item id', quantity: 1 }]);
    })
  })

  describe('Remove item from cart', () => {
    test('should remove item succesfully', () => {
      cartRepo.addItem('Item id', 1);
      const cartItem = cartRepo.getCartItems();
      expect(cartItem).toStrictEqual([{ id: 'Item id', quantity: 1 }]);
      cartRepo.removeItem('Item id');
      const cartItemRemoved = cartRepo.getCartItems();
      expect(cartItemRemoved).toStrictEqual([]);
    });
  })
})