
export function renderCheckout() {
  return function Checkout() {
    return <>
      <div className="flex flex-row justify-center space-x-5 pt-5 px-28 bg-gray-100 min-h-screen">
        <div className="w-full">
          <div>Login</div>
          <div>Delivery Address</div>
          <div>Order Summary</div>
          <div>Payment Options</div>
        </div>
        <div>
          <div className="border outline-slate-300 rounded-sm bg-white">
            <div className="border-b h-11 flex items-center pl-5 text-slate-500 font-medium">
              PRICE DETAILS
            </div>
            <div>
              <div className="flex flex-row h-12 justify-between items-center px-5 w-full">
                <div>
                  Price (1 item)
                </div>
                <div >
                  ₹22,990
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
                  ₹22,990
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row pt-5 px-5 space-x-5">
            <div>
              <img className="object-scale-down h-10 w-10" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/shield_5f9216.png" alt="logo" />
            </div>
            <div className="flex items-center text-sm tracking-tight text-gray-500 font-semibold">
              Safe and Secure Payments. Easy returns. 100% Authentic products.
            </div>
          </div>
        </div>
      </div>
    </>
  }
}
