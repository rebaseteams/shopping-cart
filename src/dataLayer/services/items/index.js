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

    createItem = ({itemName, itemImg, itemColor, itemCost}) => {
        return this.itemsRepo.createItem({itemName, itemImg, itemColor, itemCost});
    }

    deleteItem = (id) => {
        return this.itemsRepo.deleteItem(id);
    }
}