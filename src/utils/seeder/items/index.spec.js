import { seedItems } from ".";
import { ItemsRepo } from "../../../dataLayer/repositories/inmemory/items";
import { ItemsService } from "../../../dataLayer/services/items";
import { Store } from "../../../providers/store";
import itemsJSON from "./items.json";

describe('Seed Items', () => {
    const store = new Store();
    const itemsService = new ItemsService(new ItemsRepo(store));
    const itemsLength = itemsJSON.length;
    afterEach(() => {
        store.clear();
    })

    test('should seed items data if not present', () => {
        seedItems(itemsService);
        const items = itemsService.getItems();
        expect(items.length).toStrictEqual(itemsLength);
    });

    test('should seed items data if present', () => {
        seedItems(itemsService);
        let items = itemsService.getItems();
        expect(items.length).toEqual(itemsLength);
        seedItems(itemsService);
        items = itemsService.getItems();
        expect(items.length).toEqual(itemsLength);
    })
})
