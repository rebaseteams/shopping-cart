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
                itemName: 'item name',
                itemImg: 'img url',
                itemColor: 'item color',
                itemCost: 'item cost in Rs'
            })
            expect(item.itemName).toContain('item name')
            expect(item).toHaveProperty('id');
        })
    
        test('should create item with when all details not provided with undefined values', () => {
            const item = itemsRepo.createItem({
                itemImg: 'img url',
                itemColor: 'item color',
                itemCost: 'item cost in Rs'
            })
            expect(item.itemName).toStrictEqual(undefined)
            expect(item).toHaveProperty('id');
        })
    
        test('should create two items with same data but different uuids', () => {
            const item = itemsRepo.createItem({
                itemName: "item name",
                itemImg: 'img url',
                itemColor: 'item color',
                itemCost: 'item cost in Rs'
            })
    
            const item2 = itemsRepo.createItem({
                itemName: "item name",
                itemImg: 'img url',
                itemColor: 'item color',
                itemCost: 'item cost in Rs'
            })
            expect(item.id).not.toEqual(item2.id);
            expect(item.itemName).toEqual(item2.itemName);
        })
    })

    describe('GET ITEM', () => {
        test('should return empty array when calling get items with no items stored', () => {
            const items = itemsRepo.getItems();
            expect(items).toStrictEqual([]);
        })
    
        test('should return one item in array on calling get items with one item stored', () => {
            const item = itemsRepo.createItem({
                itemName: 'item name',
                itemImg: 'img url',
                itemColor: 'item color',
                itemCost: 'item cost in Rs'
            })
            const items = itemsRepo.getItems();
            expect(items).toStrictEqual([item]);
        })
    
        test('should return multiple items in array on calling get items when multiple items stored', () => {
            const item = itemsRepo.createItem({
                itemName: 'item name',
                itemImg: 'img url',
                itemColor: 'item color',
                itemCost: 'item cost in Rs'
            });
            const item2 = itemsRepo.createItem({
                itemName: 'item name',
                itemImg: 'img url',
                itemColor: 'item color',
                itemCost: 'item cost in Rs'
            });
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
                itemName: 'item name',
                itemImg: 'img url',
                itemColor: 'item color',
                itemCost: 'item cost in Rs'
            });
            itemsRepo.deleteItem(item.id);
            const items = itemsRepo.getItems();
            expect(items).toStrictEqual([]);
        })
    })
})
