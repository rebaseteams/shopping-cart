export class ItemsService {
    itemsRepo;
    constructor(itemsRepo) {
        this.itemsRepo = itemsRepo;
    }

    getItem = (id) => {
        return this.itemsRepo.getItem(id);
    }

    getItems = () => {
        return this.itemsRepo.getItems();
    }

    createItem = (item) => {
        return this.itemsRepo.createItem(item);
    }

    deleteItem = (id) => {
        return this.itemsRepo.deleteItem(id);
    }
}