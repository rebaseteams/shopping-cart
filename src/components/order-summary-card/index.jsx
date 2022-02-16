import { useState } from "react"

export function renderOrderSummaryCard({ email, itemsService, cartService }) {
        const items = cartService.getCartItems();
    return function OrderSummaryCard() {
        const [headBackground, setHeadBackground] = useState("bg-blue-500");
        const [headTextColor, setHeadTextColor] = useState("text-white");
        const [editable, setEditable] = useState("");
        const [viewable, setViewable] = useState("hidden");
        return <>
            <div className="border rounded-sm mb-5 shadow-sm">
                <div className={"px-6 flex flex-row justify-between py-4 " + headBackground}>
                    <div className="flex flex-row">
                        <div className="text-blue-500 text-xs h-5 w-5 bg-slate-100 flex items-center justify-center">
                            3
                        </div>
                        <div className="pl-6">
                            <div className={"flex flex-row items-center text-gray-500 pb-1 " + headTextColor}>
                                ORDER SUMMARY
                                <div className={"pl-2 " + viewable}>
                                    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="_1t8m48"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#2974f0"></path></svg>
                                </div>
                            </div>
                            <div className={"flex flex-row " + viewable}>
                                <span className="tracking-tighter flex items-center">
                                    {items.length} Item
                                </span>
                            </div>
                        </div>
                    </div>
                    <button data-testid="change" onClick={() => {
                        setHeadBackground("bg-blue-500");
                        setViewable("hidden");
                        setEditable("");
                        setHeadTextColor("text-white");
                    }} className={"border rounded-sm px-5 text-blue-500 h-10 text-sm " + viewable}>
                        CHANGE
                    </button>
                </div>
                <div className={"bg-white " + editable}>
                    {items.map((val) => {
                        const item = itemsService.getItem(val.id);
                        console.log(item);
                        return <div className="border-t px-6 py-6">
                        <div className="flex flex-row justify-between mb-5">
                            <div className="flex flex-row">
                            <img className="object-scale-down h-20 w-20" src={item.images[0]} alt="" />
                            <div className="px-6">
                                <div>
                                    {item.name}
                                </div>
                                <div className="font-semibold">
                                    ₹{item.price}
                                </div>
                            </div>
                            </div>
                            <div className="text-xs">
                                <div>
                                    <span>Delivery in 2 days, Fri |</span><span className="text-green-700"> Free</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-6">
                            <div className="flex flex-row space-x-2">
                                <button className="border h-7 w-7 rounded-full text-center text-gray-400">-</button>
                                <input className="border w-10 outline-none text-center text-sm" type="text" value={val.quantity}/>
                                <button className="border h-7 w-7 rounded-full text-center text-gray-400">+</button>
                            </div>
                            <button className="border-none text-black hover:text-blue-500">
                                REMOVE
                            </button>
                        </div>
                    </div>    
                    })}
                    <div className="border-t px-6 py-3 text-sm font-semibold">
                        <span>GST Invoice not available </span><span className="text-blue-500">Details</span>
                    </div>
                    <div className="border-t px-6 flex flex-row justify-between py-3">
                        <div className="flex items-center text-sm space-x-1">
                            <span>Order confirmation email will be sent to</span>
                            <span className="font-semibold">{email}</span>
                        </div>
                        <button
                        onClick={() => {
                            setHeadBackground("bg-white");
                            setViewable("");
                            setEditable("hidden");
                            setHeadTextColor("text-gray-500");
                        }}
                        className="bg-orange-500 text-center text-white px-14 py-3 shadow rounded-sm">
                            CONTINUE
                        </button>
                    </div>
                </div>
            </div>
        </>
    }
}