
export function renderCheckout(renderPriceDetails, renderLoginCard, renderDeliveryAddressCard, renderOrderSummaryCard, renderPaymentOptionsCard, itemsService, cartService) {
  const PriceDetails = renderPriceDetails({ numberOfItems: 1, price: 1000, total: 1000 });
  const LoginCard = renderLoginCard({
    name: 'PRASANA SHINDE',
    mobile: '+918989898989'
  });
  const DeliveryAddressCard = renderDeliveryAddressCard({
    name: 'Prasana Shinde',
    address: 'Mangaon, Mumbai - 400201, Maharashtra',
    pincode: '400201'
  });
  const OrderSummaryCard = renderOrderSummaryCard({ email : 'prasanashinde@gmail.com', itemsService, cartService });
  const PaymentOptionsCard = renderPaymentOptionsCard();
  return function Checkout() {
    return <>
      <div className="flex flex-row justify-center space-x-5 pt-5 px-28 bg-gray-100 min-h-screen">
        <div className="w-full">
          <LoginCard />
          <DeliveryAddressCard />
          <OrderSummaryCard />
          <PaymentOptionsCard />
        </div>
        <div>
          <PriceDetails />
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
