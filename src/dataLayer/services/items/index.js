export class ItemsService {
    itemsRepo;
    constructor(itemsRepo) {
        this.itemsRepo = itemsRepo;
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