
export function renderItemsList(renderItemCard, itemsService) {
  return function ItemsList() {
    return <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {itemsService.getItems().map((item) => {
              const ItemCard = renderItemCard(item);
              return (
                <ItemCard key={item.id} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  }
}
