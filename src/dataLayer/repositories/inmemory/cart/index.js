import _ from 'lodash';

export class CartRepo {
  store;
  itemName;
  constructor(store, itemName = 'cart') {
      this.store = store;
      this.itemName = itemName;
  }

  addItem = (id, quantity = 1) => {
    if (!id) return;
    let cart = this.getCartItems()
    
    // If the item is already present increase quantity
    const item = _.find(cart, (ct) => ct.id === id)
    if (item) { 
      cart = _.map(cart, (ct) => { if (ct.id === id) return { ...ct, quantity: ct.quantity + quantity }; return ct })
      this.store.set(this.itemName, JSON.stringify(cart));
      return;
    }
    cart.push({id, quantity});
    this.store.set(this.itemName, JSON.stringify(cart));
  }

  getCount = () => {
    const cart = this.getCartItems();
    let count = 0;
    for (let i = 0; i < cart.length ; i++) {
      count += cart[i].quantity;
    }
    return count;
  }

  getCartItems = () => {
    let cart = this.store.get(this.itemName);
    if (!cart) return [];
    return JSON.parse(cart);
  }

  removeItem = (id) => {
    let cart = this.getCartItems();
    const afterRemoveItem = _.remove(cart, (ct) => ct.id !== id);
    this.store.set(this.itemName, JSON.stringify(afterRemoveItem));
    return afterRemoveItem;
  }
}