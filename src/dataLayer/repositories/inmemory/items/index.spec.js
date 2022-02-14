import { ItemsRepo } from "."
import { Store } from "../../../../providers/store"

describe('Items inmemory Repository', () => {
    const store = new Store();
    const itemsRepo = new ItemsRepo(store);

    afterEach(() => {
        store.clear();
    })

    describe('CREATE ITEM',() => {
        test('should create item successfully', () => {
            const item = itemsRepo.createItem({
                name: 'item name',
                images: 'img url',
                color: 'item color',
                price: 'item cost in Rs'
            })
            expect(item.name).toContain('item name')
            expect(item).toHaveProperty('id');
        })
    
        test('should create item with when all details not provided with undefined values', () => {
            const item = itemsRepo.createItem({
                images: 'img url',
                color: 'item color',
                price: 'item cost in Rs'
            })
            expect(item.name).toStrictEqual(undefined)
            expect(item).toHaveProperty('id');
        })
    
        test('should create two items with same data but different uuids', () => {
            const item = itemsRepo.createItem({
                name: "item name",
                images: 'img url',
                color: 'item color',
                price: 'item cost in Rs'
            })
    
            const item2 = itemsRepo.createItem({
                name: "item name",
                images: 'img url',
                color: 'item color',
                price: 'item cost in Rs'
            })
            expect(item.id).not.toEqual(item2.id);
            expect(item.name).toEqual(item2.name);
        })
    })

    describe('GET ITEMs', () => {
        test('should return empty array when calling get items with no items stored', () => {
            const items = itemsRepo.getItems();
            expect(items).toStrictEqual([]);
        })
    
        test('should return one item in array on calling get items with one item stored', () => {
            const item = itemsRepo.createItem({
                name: 'item name',
                images: 'img url',
                color: 'item color',
                price: 'item cost in Rs',
                description: 'nice product',
                priceUnit: '$',
                stockCount: 100,
                outOfStock: false,
                details: 'Dtails',
                highlights: ['hl1', 'hl2'],
                path: [],
                category: '',
                subCategory: ''
            })
            const items = itemsRepo.getItems();
            expect(items).toStrictEqual([ item ]);
        })
    
        test('should return multiple items in array on calling get items when multiple items stored', () => {
            const item = itemsRepo.createItem({
                name: 'item name',
                images: 'img url',
                color: 'item color',
                price: 'item cost in Rs',
                description: 'nice product',
                priceUnit: '$',
                stockCount: 100,
                outOfStock: false,
                details: 'Dtails',
                highlights: ['hl1', 'hl2'],
                path: [],
                category: '',
                subCategory: ''
            })
            const item2 = itemsRepo.createItem({
                name: 'item two name',
                images: 'img url',
                color: 'item color',
                price: 'item cost in Rs',
                description: 'nice product',
                priceUnit: '$',
                stockCount: 100,
                outOfStock: false,
                details: 'Dtails',
                highlights: ['hl1', 'hl2'],
                path: [],
                category: '',
                subCategory: ''
            })
            const items = itemsRepo.getItems();
            expect(items).toStrictEqual([item, item2]);
        })
    })

    describe('DELETE ITEM', () => {
        test('should delete item that doesnt exists', () => {
            itemsRepo.deleteItem('1');
            const items = itemsRepo.getItems();
            expect(items).toStrictEqual([]);
        })
    
        test('should delete item that exists', () => {
            const item = itemsRepo.createItem({
                name: 'item name',
                images: 'img url',
                color: 'item color',
                price: 'item cost in Rs'
            });
            itemsRepo.deleteItem(item.id);
            const items = itemsRepo.getItems();
            expect(items).toStrictEqual([]);
        })
    })

    const itemData = {
        name: 'item name',
        images: 'img url',
        color: 'item color',
        price: 'item cost in Rs'
    }
    describe('Get Item', () => {
        test('should return null if the item not present', () => {
            const item = itemsRepo.getItem('not present');
            expect(item).toStrictEqual(null);
        })

        test('should return item if the item present', () => {
            // Creating item First
            const item = itemsRepo.createItem(itemData);
            // Getting back the item 
            const result = itemsRepo.getItem(item.id);
            expect(result.name).toStrictEqual(itemData.name);
            expect(result.images).toStrictEqual(itemData.images);
            expect(result.color).toStrictEqual(itemData.color);
            expect(result.price).toStrictEqual(itemData.price);
        })
    })
})
