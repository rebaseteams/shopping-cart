export function renderLoginCard({name, mobile}) {
    return function LoginCard() {
        return <>
            <div className="border rounded-sm bg-white px-6 flex flex-row justify-between py-4 mb-5 shadow-sm">
                <div className="flex flex-row">
                    <div className="text-blue-500 text-xs h-5 w-5 bg-slate-100 flex items-center justify-center">
                        1
                    </div>
                    <div className="pl-6">
                        <div className="flex flex-row items-center text-gray-500 pb-1">
                            LOGIN
                            <div className="pl-2">
                                <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="_1t8m48"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#2974f0"></path></svg>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <span className="tracking-tighter flex items-center">
                                {name}
                            </span>
                            <span className="pl-2 text-gray-800 flex items-center">
                                {mobile}
                            </span>
                        </div>
                    </div>
                </div>
                <button data-testid="change" onClick={() => alert('change clicked')} className="border rounded-sm px-5 text-blue-500 h-10 text-sm">
                    CHANGE
                </button>
            </div>
        </>
    }
}