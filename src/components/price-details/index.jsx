export function renderPriceDetails({ itemsService, cartService }) {
    return function PriceDetails() {
        let total = 0;
        cartService.getCartItems().forEach((val,index,arr) => {
            const item = itemsService.getItem(val.id);
            total = total + item.price * val.quantity;
        })
        return <>
            <div className="border outline-slate-300 rounded-sm bg-white shadow-sm">
                <div className="border-b h-11 flex items-center pl-5 text-slate-500 font-medium">
                    PRICE DETAILS
                </div>
                <div>
                    <div className="flex flex-row h-12 justify-between items-center px-5 w-full">
                        <div>
                            Price ({cartService.getCount()} item)
                        </div>
                        <div >
                            ₹{total}
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