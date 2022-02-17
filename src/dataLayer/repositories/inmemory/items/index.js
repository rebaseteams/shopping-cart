import _ from 'lodash';

const uuid = require('uuid').v4;
export class ItemsRepo {
    store;
    constructor(store) {
        this.store = store;
    }

    getItem = (id) => {
        const resp = this.store.get('items');
        if(resp) {
            const items = JSON.parse(this.store.get('items'));
            const item = _.find(items, (item) => item.id === id);
            if (item) return item;
            else return null;
        }
        return null;
    }

    getItems = () => {
        const resp = this.store.get('items');
        if(resp) {
            const items = JSON.parse(this.store.get('items'));
            return items;
        }
        return [];
    }

    createItem = ({ name, images, color, price, description, priceUnit, star, rating, outOfStock, stockCount, reviewCount, details, highlights, path, category, subCategory, discount }) => {
        const items = this.getItems();
        const newItem = {
            id : uuid(),
            name,
            images,
            color,
            price,
            description,
            priceUnit,
            star,
            rating,
            outOfStock,
            stockCount,
            reviewCount,
            details,
            highlights,
            path,
            category,
            discount,
            subCategory,
        }
        items.push(newItem);
        this.store.set('items', JSON.stringify(items));
        return newItem;
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