const uuid = require('uuid').v4;
export class ItemsRepo {
    store;
    constructor(store) {
        this.store = store;
    }

    getItems = () => {
        const resp = this.store.get('items');
        if(resp) {
            const items = JSON.parse(this.store.get('items'));
            return items;
        }
        return [];
    }

    createItem = ({itemName, itemImg, itemColor, itemCost}) => {
        const items = this.getItems();
        const item = {
            id : uuid(),
            itemName,
            itemImg,
            itemColor,
            itemCost
        }
        items.push(item);
        this.store.set('items', JSON.stringify(items));
        return item;
    }

    deleteItem = (id) => {
        const items = this.getItems();
        items.forEach((item, ind) => {
            if(item.id === id) {
                items.splice(ind,1);
            } 
        });
        JSON.stringify(items);
        this.store.set('items', items);
    }
}