export class CartService {
  cartRepo;
  constructor(cartRepo) {
    this.cartRepo = cartRepo;
  }

  addCart = (id, quentity = 1) => {
    this.cartRepo.addCart(id, quentity);
  }

  getCart = () => {
    return this.cartRepo.getCart();
  }
}