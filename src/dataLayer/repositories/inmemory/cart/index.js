import _ from 'lodash';

export class Cart {
  store;
  constructor(store) {
      this.store = store;
  }

  addCart = (id, quentity = 1) => {
    if (!id) return;
    let cart = this.store.get('cart');
    if (!cart || undefined) cart = [];
    else cart = JSON.parse(cart);
    
    // If the item is already present increase quentity
    const item = _.find(cart, (ct) => ct.id === id)
    if (item) { 
      cart = _.map(cart, (ct) => { if (ct.id === id) return { ...ct, quentity: ct.quentity + quentity }; return ct })
      this.store.set('cart', JSON.stringify(cart));
      return;
    }
    cart.push({id, quentity});
    this.store.set('cart', JSON.stringify(cart));
  }

  getCart = () => {
    let cart = this.store.get('cart');
    if (!cart) return [];
    return JSON.parse(cart);
  }
}