import { useState } from "react";

export function renderPaymentOptionsCard() {
    return function PaymentOptionsCard() {
        const [headBackground, setHeadBackground] = useState("bg-blue-500");
        const [headTextColor, setHeadTextColor] = useState("text-white");
        const [editable, setEditable] = useState("");
        const [viewable, setViewable] = useState("hidden");
        const [paymentDone, setPaymentDone] = useState(false);
        const [upi, setUpi] = useState("");
        return <>
            <div className="border rounded-sm mb-5 shadow-sm">
                <div className={"px-6 flex flex-row justify-between py-4 " + headBackground}>
                    <div className="flex flex-row">
                        <div className="text-blue-500 text-xs h-5 w-5 bg-slate-100 flex items-center justify-center">
                            4
                        </div>
                        <div className="pl-6">
                            <div className={"flex flex-row items-center text-gray-500 pb-1 " + headTextColor}>
                                PAYMENT OPTIONS
                                <div className={"pl-2 " + viewable}>
                                    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="_1t8m48"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#2974f0"></path></svg>
                                </div>
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
                {paymentDone ?
                    <div className={"bg-white p-6 flex flex-row space-x-5 " + editable}>
                        <div className="flex flex-row justify-center items-center space-x-2">
                            <img className="h-5 w-5" src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="" />
                            <span className="text-green-600">Payment Done</span>
                        </div>
                    </div> :
                    <div className={"bg-white p-6 flex flex-row space-x-5 " + editable}>
                        <div className="w-72">
                            <div className={"border rounded-sm bg-white px-2 py-2 " + (!upi ? "outline outline-red-500 outline-1" : "")}>
                                <div className={"text-xs text-gray-400 " + (!upi ? "text-red-500" : "")}>UPI</div>
                                <input onChange={(ele) => {
                                    setUpi(ele.target.value);
                                }} id='upi' name='upi' className="outline-none text-black font-light text-sm" type="text" />
                            </div>
                            {!upi ? <div className="text-xs pt-1 pl-2 text-red-500">Please fill out this field</div> : <></>}
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    if(!upi) return;
                                    setHeadBackground("bg-white");
                                    setViewable("");
                                    setEditable("hidden");
                                    setHeadTextColor("text-gray-500");
                                    setPaymentDone(true);
                                }}
                                className="bg-orange-500 text-center text-white px-14 py-3 shadow rounded-sm">
                                COMPLETE PAYMENT
                            </button>
                        </div>
                    </div>
                }
            </div>
        </>
    }
}