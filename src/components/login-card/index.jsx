import { useState } from "react";

export function renderLoginCard({ name, mobile }) {
    return function LoginCard() {
        const [headBackground, setHeadBackground] = useState("bg-blue-500");
        const [headTextColor, setHeadTextColor] = useState("text-white");
        const [editable, setEditable] = useState("");
        const [viewable, setViewable] = useState("hidden");
        return <>
            <div className="border rounded-sm mb-5 shadow-sm">
                <div className={"px-6 flex flex-row justify-between py-4 " + headBackground}>
                    <div className="flex flex-row">
                        <div className="text-blue-500 text-xs h-5 w-5 bg-slate-100 flex items-center justify-center">
                            1
                        </div>
                        <div className="pl-6">
                            <div className={"flex flex-row items-center text-gray-500 pb-1 " + headTextColor}>
                                LOGIN
                                <div className={"pl-2 " + viewable}>
                                    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="_1t8m48"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#2974f0"></path></svg>
                                </div>
                            </div>
                            <div className={"flex flex-row " + viewable}>
                                <span className="tracking-tighter flex items-center">
                                    {name}
                                </span>
                                <span className="pl-2 text-gray-800 flex items-center">
                                    {mobile}
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
                <div className={"bg-white px-6 py-4 " + editable}>
                    <div className="px-6">
                        <div className="flex flex-row justify-between tracking-tighter">
                            <div>
                                <div className="flex flex-row py-2 space-x-3">
                                    <span className="text-sm text-gray-500">Name</span>
                                    <span className="text-sm">{name}</span>
                                </div>
                                <div className="flex flex-row py-2 space-x-3">
                                    <span className="text-sm text-gray-500">Phone</span>
                                    <span className="text-sm">{mobile}</span>
                                </div>
                                <div className="py-2 text-sm text-blue-500">Login & Sign in to another account</div>
                                <button onClick={
                                    () => {
                                        setHeadBackground("bg-white");
                                        setViewable("");
                                        setEditable("hidden");
                                        setHeadTextColor("text-gray-500");
                                    }
                                } className="my-2 bg-orange-500 text-white rounded-sm shadow-sm h-11 px-10 py-4 flex justify-center items-center">CONTINUE CHECKOUT</button>
                            </div>
                            <div className="text-sm tracking-tighter">
                                <div className="font-normal text-gray-500 pt-2">Advantages of our secure login</div>
                                <div className="flex flex-row pt-4 space-x-3">
                                    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M9.466 18.257h4.87c0 1.764 1.42 3.195 3.174 3.195a3.185 3.185 0 0 0 3.175-3.195H22.5c.276 0 .499-.23.499-.496v-5.57l-3.273-4.868h-3.261V4.645a.497.497 0 0 0-.497-.502H1.497A.498.498 0 0 0 1 4.645v13.11c0 .277.219.502.497.502h1.62a3.185 3.185 0 0 0 3.175 3.195 3.185 3.185 0 0 0 3.174-3.195zm6.978-8.381H18.7l2.214 3.057h-4.47V9.876zm2.644 8.381c0 .877-.706 1.588-1.578 1.588a1.583 1.583 0 0 1-1.578-1.588c0-.877.706-1.588 1.578-1.588.872 0 1.578.71 1.578 1.588zm-11.218 0c0 .877-.707 1.588-1.578 1.588a1.583 1.583 0 0 1-1.579-1.588c0-.877.707-1.588 1.579-1.588.871 0 1.578.71 1.578 1.588z" fill="#2874f0"></path></g></svg>
                                    <div>Easily Track Orders, Hassle free Returns</div>
                                </div>
                                <div className="flex flex-row pt-4 space-x-3">
                                    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#2874f0" fillRule="evenodd"><path d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z"></path></g></svg>
                                    <div>Get Relevant Alerts and Recommendation</div>
                                </div>
                                <div className="flex flex-row pt-4 space-x-5">
                                    <div className="text-blue-500">★</div>
                                    <div>Wishlist, Reviews, Ratings and more.</div>
                                </div>
                            </div>
                        </div>
                        <span className="text-xs font-extralight text-gray-500">
                            Please note that upon clicking "Logout" you will lose all items in cart and will be redirected to Flipkart home page.
                        </span>
                    </div>
                </div>
            </div>
        </>
    }
}