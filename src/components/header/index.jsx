import { useCartCount as defaultCartCount } from "../../customHooks/useCartCount";
import { Link } from 'react-router-dom';

export function renderHeader(cartService, useCartCount = defaultCartCount) {
  return function Header() {
    const { cartCount } = useCartCount(cartService);
    return <>
      <div className="sticky top-0 z-50 bg-blue-500 h-16 flex justify-center text-white">
        <Link data-testid="app-logo" to="/" className="flex items-center pr-3">
          <img className="h-5" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo" />
        </Link>
        <div className="flex items-center pr-56">
          <div className="h-9 rounded-sm bg-white pt-1">
            <input className="text-sm w-96 text-black placeholder-slate-500 tracking-tighter text-left pl-2 outline-none" type="text" title="Search for products, brands and more" placeholder="Search for products, brands and more"/>
            <button className="w-8 align-middle">
              <svg width="20" height="20" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fillRule="evenodd"><path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
            </button>
          </div>
        </div>
        <div className="cursor-pointer text-blue-500 flex items-center pr-8">
          <div onClick={() => alert('login clicked')} data-testid="login" className="bg-white font-medium text-base h-8 rounded-sm w-24 flex items-center justify-center">
            Login
          </div>
        </div>
        <div onClick={() => alert("more clicked")} data-testid="more" className="cursor-pointer flex items-center pr-8">
          More
        </div>
        <div className="flex items-center pr-1">
        </div>
        <Link data-testid="cart" to="/checkout" className="flex items-center">
          {
            // If cartCount id zero do not show the count
            cartCount > 0 ? <div className="border relative text-xs left-5 px-1 rounded-full bg-orange-500 bottom-3">{cartCount}</div> : null
          }
          
          <svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
          <span className="ml-2">Cart</span>
        </Link>
        </div>
    </>
  }
}
