import { useState } from "react";

export function renderDeliveryAddressCard() {
    return function DeliveryAddressCard() {
        const [headBackground, setHeadBackground] = useState("bg-blue-500");
        const [headTextColor, setHeadTextColor] = useState("text-white");
        const [editable, setEditable] = useState("");
        const [viewable, setViewable] = useState("hidden");
        const [formState, setFormState] = useState({ 
            name : '',
            locality : '',
            city : '',
            state : '',
            pincode : '',
            mobile : '',
            alternatephone : '',
            landmark : ''
        });

        const handleSave = (event) => {
            event.preventDefault();
            const data = new FormData(event.target);
            setFormState({
                name : data.get('name'),
                locality : data.get('locality'),
                city : data.get('city'),
                state : data.get('state'),
                pincode : data.get('pincode'),
                mobile : data.get('mobile'),
                alternatephone : data.get('alternatephone'),
                landmark : data.get('landmark')
            })
            setHeadBackground("bg-white");
            setViewable("");
            setEditable("hidden");
            setHeadTextColor("text-gray-500");
        }
        return <>
            <div className="border rounded-sm mb-5 shadow-sm">
                <div className={"px-6 flex flex-row justify-between py-4 " + headBackground}>
                    <div className="flex flex-row">
                        <div className="text-blue-500 text-xs h-5 w-5 bg-slate-100 flex items-center justify-center">
                            2
                        </div>
                        <div className="pl-6">
                            <div className={"flex flex-row items-cente pb-1 " + headTextColor}>
                                DELIVERY ADDRESS
                                <div className={"pl-2 " + viewable}>
                                    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="_1t8m48"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#2974f0"></path></svg>
                                </div>
                            </div>
                            <span className={viewable}>
                                <span className="tracking-tighter font-medium text-lg">
                                    {formState.name} {' '}
                                </span>
                                <span className="text-sm">
                                    {`${formState.locality}, ${formState.city}, ${formState.state}`}
                                    {' '} - {' '}
                                    <span className="tracking-tighter font-medium text-lg">
                                        {formState.pincode}
                                    </span>
                                </span>
                            </span>
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
                <div className={"bg-blue-50 px-6 py-4 " + editable}>
                    <form onSubmit={handleSave}>
                    <div className="flex flex-row px-4 pb-4 space-x-4">
                            <div className="border w-72 rounded-sm bg-white px-2 py-2">
                                <div className="text-xs text-gray-400">Name</div>
                                <input id='name' defaultValue={formState.name} name='name' className="outline-none text-gray-800 font-thin text-sm" type="text" />
                            </div>
                            <div className="border w-72 rounded-sm bg-white px-2 py-2">
                                <div className="text-xs text-gray-400">10-digit mobile number</div>
                                <input id='mobile' defaultValue={formState.mobile} name='mobile' className="outline-none text-gray-800 font-thin text-sm" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-row px-4 pb-4 space-x-4">
                            <div className="border w-72 rounded-sm bg-white px-2 py-2">
                                <div className="text-xs text-gray-400">Pincode</div>
                                <input id='pincode' defaultValue={formState.pincode} name='pincode' className="outline-none text-gray-800 font-thin text-sm" type="text" />
                            </div>
                            <div className="border w-72 rounded-sm bg-white px-2 py-2">
                                <div className="text-xs text-gray-400">Locality</div>
                                <input id='locality' defaultValue={formState.locality} name='locality' className="outline-none text-gray-800 font-thin text-sm" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-row px-4 pb-4 space-x-4">
                            <div className="border w-72 rounded-sm bg-white px-2 py-2">
                                <div className="text-xs text-gray-400">City/District/Town</div>
                                <input id='city' defaultValue={formState.city} name='city' className="outline-none text-gray-800 font-thin text-sm" type="text" />
                            </div>
                            <div className="border w-72 rounded-sm bg-white px-2 py-2">
                                <div className="text-xs text-gray-400">State</div>
                                <input id='state' defaultValue={formState.state} name='state' className="outline-none text-gray-800 font-thin text-sm" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-row px-4 pb-4 space-x-4">
                            <div className="border w-72 rounded-sm bg-white px-2 py-2">
                                <div className="text-xs text-gray-400 ">Landmark (Optional)</div>
                                <input id='landmark' defaultValue={formState.landmark} name='landmark' className="outline-none font-thin text-sm" type="text" />
                            </div>
                            <div className="border w-72 rounded-sm bg-white px-2 py-2">
                                <div className="text-xs text-gray-400 ">Alternate Phone (Optional)</div>
                                <input id='alternatephone' defaultValue={formState.alternatephone} name='alternatephone' className="outline-none font-thin text-sm" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-row px-4 pt-6 space-x-10">
                            <button type="submit" data-testid="save" className="text-white bg-orange-500 rounded-sm shadow-sm h-12 px-10 py-4 flex justify-center items-center">SAVE AND DELIVER HERE</button>
                            <button type="button" onClick={
                                () => {
                                    setHeadBackground("bg-white");
                                    setViewable("");
                                    setEditable("hidden");
                                    setHeadTextColor("text-gray-500");
                                }
                            } className="text-blue-500 text-sm">CANCEL</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    }
}