import { ItemsService } from "."
import { Store } from "../../../providers/store";
import { ItemsRepo } from "../../repositories/inmemory/items";

describe('Items Service', () =>{
    describe('In Memory', () => {
        const store = new Store();
        const itemsService = new ItemsService(new ItemsRepo(store));

        afterEach(() => {
            store.clear();
        })

        describe('CREATE ITEM', () => {
            test('should create item successfully', () => {
                const item =  itemsService.createItem({
                    itemName : 'item name',
                    itemImg : 'img url',
                    itemColor : 'item color', 
                    itemCost : 'item cost in Rs'
                })
                expect(item.itemName).toContain('item name')
                expect(item).toHaveProperty('id');
            })
    
            test('should create item with when all details not provided with undefined values', () => {
                const item =  itemsService.createItem({
                    itemImg : 'img url',
                    itemColor : 'item color', 
                    itemCost : 'item cost in Rs'
                })
                expect(item.itemName).toStrictEqual(undefined)
                expect(item).toHaveProperty('id');
            })
    
            test('should create two items with same data but different uuids', () => {
                const item =  itemsService.createItem({
                    itemName : "item name",
                    itemImg : 'img url',
                    itemColor : 'item color', 
                    itemCost : 'item cost in Rs'
                })
    
                const item2 =  itemsService.createItem({
                    itemName : "item name",
                    itemImg : 'img url',
                    itemColor : 'item color', 
                    itemCost : 'item cost in Rs'
                })
                expect(item.id).not.toEqual(item2.id);
                expect(item.itemName).toEqual(item2.itemName);
            })
        })
        
        describe('GET ITEMS', () => {
            test('should return empty array when calling get items with no items stored', () => {
                const items = itemsService.getItems();
                expect(items).toStrictEqual([]);
            })
    
            test('should return one item in array on calling get items with one item stored', () => {
                const item =  itemsService.createItem({
                    itemName : 'item name',
                    itemImg : 'img url',
                    itemColor : 'item color', 
                    itemCost : 'item cost in Rs'
                })
                const items = itemsService.getItems();
                expect(items).toStrictEqual([item]);
            })
    
            test('should return multiple items in array on calling get items when multiple items stored', () => {
                const item =  itemsService.createItem({
                    itemName : 'item name',
                    itemImg : 'img url',
                    itemColor : 'item color', 
                    itemCost : 'item cost in Rs'
                });
                const item2 =  itemsService.createItem({
                    itemName : 'item name',
                    itemImg : 'img url',
                    itemColor : 'item color', 
                    itemCost : 'item cost in Rs'
                });
                const items = itemsService.getItems();
                expect(items).toStrictEqual([item, item2]);
            })
        })

        describe('DELETE ITEM', () => {
            test('should delete item that doesnt exists', () => {
                itemsService.deleteItem('1');
                const items = itemsService.getItems();
                expect(items).toStrictEqual([]);
            })
    
            test('should delete item that exists', () => {
                const item =  itemsService.createItem({
                    itemName : 'item name',
                    itemImg : 'img url',
                    itemColor : 'item color', 
                    itemCost : 'item cost in Rs'
                });
                itemsService.deleteItem(item.id);
                const items = itemsService.getItems();
                expect(items).toStrictEqual([]);
            })
        })
    })
})
