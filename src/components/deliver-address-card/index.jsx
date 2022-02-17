import { useState } from "react";

export function renderDeliveryAddressCard() {
    return function DeliveryAddressCard() {
        const [headBackground, setHeadBackground] = useState("bg-blue-500");
        const [headTextColor, setHeadTextColor] = useState("text-white");
        const [editable, setEditable] = useState("");
        const [viewable, setViewable] = useState("hidden");
        const [formState, setFormState] = useState({
            name: '', locality: '', city: '', state: '',
            pincode: '', mobile: '', alternatephone: '', landmark: ''
        });
        const [formErrors, setFormErrors] = useState({
            name: false, locality: false, city: false, state: false,
            pincode: false, mobile: false
        });

        const handleSave = (event) => {
            event.preventDefault();
            if (!validateFormState()) return;
            setHeadBackground("bg-white");
            setViewable("");
            setEditable("hidden");
            setHeadTextColor("text-gray-500");
        }

        const validateFormState = () => {
            let state = true;
            for (const key in formErrors) {
                console.log(key, formErrors[key]);
                if(formErrors[key]) return false;
            }
            return state;
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
                            <div className="w-72">
                                <div className={"border rounded-sm bg-white px-2 py-2 " + (formErrors.name ? "outline outline-red-500 outline-1" : "")}>
                                    <div className={"text-xs text-gray-400 " + (formErrors.name ? "text-red-500" : "")}>Name</div>
                                    <input onBlur={(ele) => {if(!ele.target.value) setFormErrors({ ...formErrors, name : true })}} onChange={(ele) => {
                                        setFormState({ ...formState, name : ele.target.value })
                                        if(ele.target.value) setFormErrors({ ...formErrors, name : false })
                                    }} id='name' defaultValue={formState.name} name='name' className="outline-none text-gray-800 font-light text-sm" type="text" />
                                </div>
                                {formErrors.name ? <div className="text-xs pt-1 pl-2 text-red-500">Please fill out this field</div> : <></>}
                            </div>
                            <div className="w-72">
                                <div className={"border rounded-sm bg-white px-2 py-2 " + (formErrors.mobile ? "outline outline-red-500 outline-1" : "")}>
                                    <div className={"text-xs text-gray-400 " + (formErrors.mobile ? "text-red-500" : "")}>10-digit mobile number</div>
                                    <input onBlur={(ele) => {if(!ele.target.value) setFormErrors({ ...formErrors, mobile : true })}} onChange={(ele) => {
                                        setFormState({ ...formState, mobile : ele.target.value })
                                        if(ele.target.value) setFormErrors({ ...formErrors, mobile : false })
                                    }} id='mobile' defaultValue={formState.mobile} name='mobile' className="outline-none text-gray-800 font-light text-sm" type="text" />
                                </div>
                                {formErrors.mobile ? <div className="text-xs pt-1 pl-2 text-red-500">Please fill out this field</div> : <></>}
                            </div>
                        </div>
                        <div className="flex flex-row px-4 pb-4 space-x-4">
                            <div className="w-72">
                                <div className={"border rounded-sm bg-white px-2 py-2 " + (formErrors.pincode ? "outline outline-red-500 outline-1" : "")}>
                                    <div className={"text-xs text-gray-400 " + (formErrors.pincode ? "text-red-500" : "")}>Pincode</div>
                                    <input onBlur={(ele) => {if(!ele.target.value) setFormErrors({ ...formErrors, pincode : true })}} onChange={(ele) => {
                                        setFormState({ ...formState, pincode : ele.target.value })
                                        if(ele.target.value) setFormErrors({ ...formErrors, pincode : false })
                                    }} id='pincode' defaultValue={formState.pincode} name='pincode' className="outline-none text-gray-800 font-light text-sm" type="text" />
                                </div>
                                {formErrors.pincode ? <div className="text-xs pt-1 pl-2 text-red-500">Please fill out this field</div> : <></>}
                            </div>
                            <div className="w-72">
                                <div className={"border rounded-sm bg-white px-2 py-2 " + (formErrors.locality ? "outline outline-red-500 outline-1" : "")}>
                                    <div className={"text-xs text-gray-400 " + (formErrors.locality ? "text-red-500" : "")}>Locality</div>
                                    <input onBlur={(ele) => {if(!ele.target.value) setFormErrors({ ...formErrors, locality : true })}} onChange={(ele) => {
                                        setFormState({ ...formState, locality : ele.target.value })
                                        if(ele.target.value) setFormErrors({ ...formErrors, locality : false })
                                    }} id='locality' defaultValue={formState.locality} name='locality' className="outline-none text-gray-800 font-light text-sm" type="text" />
                                </div>
                                {formErrors.locality ? <div className="text-xs pt-1 pl-2 text-red-500">Please fill out this field</div> : <></>}
                            </div>
                        </div>
                        <div className="flex flex-row px-4 pb-4 space-x-4">
                            <div className="w-72">
                                <div className={"border rounded-sm bg-white px-2 py-2 " + (formErrors.city ? "outline outline-red-500 outline-1" : "")}>
                                    <div className={"text-xs text-gray-400 " + (formErrors.city ? "text-red-500" : "")}>City/District/Town</div>
                                    <input onBlur={(ele) => {if(!ele.target.value) setFormErrors({ ...formErrors, city : true })}} onChange={(ele) => {
                                        setFormState({ ...formState, city : ele.target.value })
                                        if(ele.target.value) setFormErrors({ ...formErrors, city : false })
                                    }} id='city' defaultValue={formState.city} name='city' className="outline-none text-gray-800 font-light text-sm" type="text" />
                                </div>
                                {formErrors.city ? <div className="text-xs pt-1 pl-2 text-red-500">Please fill out this field</div> : <></>}
                            </div>
                            <div className="w-72">
                                <div className={"border rounded-sm bg-white px-2 py-2 " + (formErrors.state ? "outline outline-red-500 outline-1" : "")}>
                                    <div className={"text-xs text-gray-400 " + (formErrors.state ? "text-red-500" : "")}>State</div>
                                    <input onBlur={(ele) => {if(!ele.target.value) setFormErrors({ ...formErrors, state : true })}} onChange={(ele) => {
                                        setFormState({ ...formState, state : ele.target.value })
                                        if(ele.target.value) setFormErrors({ ...formErrors, state : false })
                                    }} id='state' defaultValue={formState.state} name='state' className="outline-none text-gray-800 font-light text-sm" type="text" />
                                </div>
                                {formErrors.state ? <div className="text-xs pt-1 pl-2 text-red-500">Please fill out this field</div> : <></>}
                            </div>
                        </div>
                        <div className="flex flex-row px-4 pb-4 space-x-4">
                            <div className="border w-72 rounded-sm bg-white px-2 py-2">
                                <div className="text-xs text-gray-400 ">Landmark (Optional)</div>
                                <input id='landmark' onChange={(ele) => { setFormState({ ...formState, landmark : ele.target.value }) }} defaultValue={formState.landmark} name='landmark' className="outline-none text-gray-800 font-light text-sm" type="text" />
                            </div>
                            <div className="border w-72 rounded-sm bg-white px-2 py-2">
                                <div className="text-xs text-gray-400 ">Alternate Phone (Optional)</div>
                                <input id='alternatephone' onChange={(ele) => { setFormState({ ...formState, alternatephone : ele.target.value }) }} defaultValue={formState.alternatephone} name='alternatephone' className="outline-none text-gray-800 font-light text-sm" type="text" />
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