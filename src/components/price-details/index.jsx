export function renderPriceDetails({ numberOfItems, price, total }) {
    return function priceDetails() {
        return <>
            <div className="border outline-slate-300 rounded-sm bg-white">
                <div className="border-b h-11 flex items-center pl-5 text-slate-500 font-medium">
                    PRICE DETAILS
                </div>
                <div>
                    <div className="flex flex-row h-12 justify-between items-center px-5 w-full">
                        <div>
                            Price ({numberOfItems} item)
                        </div>
                        <div >
                            ₹{price}
                        </div>
                    </div>
                    <div className="px-5">
                        <div className="h-12 items-center border-dashed border-b flex flex-row justify-between w-full">
                            <div>
                                Delivery Charges
                            </div>
                            <div className="text-green-600">
                                FREE
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row h-16 justify-between items-center px-5 w-full font-semibold text-base">
                        <div>
                            Total Payable
                        </div>
                        <div>
                            ₹{total}
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}