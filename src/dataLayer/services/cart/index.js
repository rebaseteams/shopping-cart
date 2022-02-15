export class CartService {
  cartRepo;
  constructor(cartRepo) {
    this.cartRepo = cartRepo;
  }

  addItem = (id, quantity = 1) => {
    this.cartRepo.addItem(id, quantity);
  }

  getCartItems = () => {
    return this.cartRepo.getCartItems();
  }

  removeItem = () => {
    return this.cartRepo.removeItem()
  }

  getCount = () => {
    return this.cartRepo.getCount();
  }
}