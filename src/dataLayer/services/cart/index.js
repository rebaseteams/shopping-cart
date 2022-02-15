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
}