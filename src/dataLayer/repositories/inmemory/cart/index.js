import _ from 'lodash';

export class CartRepo {
  store;
  constructor(store) {
      this.store = store;
  }

  addItem = (id, quantity = 1) => {
    if (!id) return;
    let cart = this.getCartItems()
    
    // If the item is already present increase quantity
    const item = _.find(cart, (ct) => ct.id === id)
    if (item) { 
      cart = _.map(cart, (ct) => { if (ct.id === id) return { ...ct, quantity: ct.quantity + quantity }; return ct })
      this.store.set('cart', JSON.stringify(cart));
      return;
    }
    cart.push({id, quantity});
    this.store.set('cart', JSON.stringify(cart));
  }

  getCartItems = () => {
    let cart = this.store.get('cart');
    if (!cart) return [];
    return JSON.parse(cart);
  }
}