import { seedItems } from ".";
import { ItemsRepo } from "../../../dataLayer/repositories/inmemory/items";
import { ItemsService } from "../../../dataLayer/services/items";
import { Store } from "../../../providers/store";

describe('Seed Items', () => {
    const store = new Store();
    const itemsService = new ItemsService(new ItemsRepo(store));
    afterEach(() => {
        store.clear();
    })

    test('should seed items data if not present', () => {
        seedItems(itemsService);
        const items = itemsService.getItems();
        expect(items.length).toStrictEqual(4);
    });

    test('should seed items data if present', () => {
        seedItems(itemsService);
        let items = itemsService.getItems();
        expect(items.length).toEqual(4);
        seedItems(itemsService);
        items = itemsService.getItems();
        expect(items.length).toEqual(4);
    })
})
