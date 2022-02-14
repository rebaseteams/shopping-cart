const itemsJSON = require('./items.json');
export function seedItems(itemsService) {
    const items =  itemsService.getItems();
    if (items.length < 1) {
        itemsJSON.forEach(item => {
            itemsService.createItem(item);
        });
    }
}