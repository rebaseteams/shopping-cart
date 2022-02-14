
export function renderItemCard({name, images, color, price, priceUnit, id}) {
    return function ItemCard() {
        return <>
            <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img src={images[0]} alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center lg:w-full lg:h-full" />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href={`/item/${id}`}>
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                {name}
                            </a>
                        </h3>
                        {color ? <p className="mt-1 text-sm text-gray-500">{color}</p> : <></>}
                    </div>
                    <p className="text-sm font-medium text-gray-900">{priceUnit}{price}</p>
                </div>
            </div>
        </>
    }
}
