/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { BreadCrumb } from "../../components/breadcrumb";
import { renderItemCard } from "../../components/item";
import { renderLoading } from "../../components/loading";
import { renderRating } from "../../components/rating";
import { useItem as defaultUseItem } from "../../customHooks/useItem";
import { renderItemsList } from "../items-list";
import { GlobalProvider } from "../../providers/context";

export function renderItem(itemsService, cartService, useItem = defaultUseItem, provider = GlobalProvider) {
  const ItemList = renderItemsList(renderItemCard, itemsService);
  return function Item() {
    const { loading, product, setCount } = useItem(itemsService, provider);

    const onBuy = () => {
      alert("On Buy Under Development"); 
    };

    const onAddCart = () => {
      cartService.addItem(product.id, 1);
      const count = cartService.getCount();
      setCount(count);
    };

    if (loading) return renderLoading();

    if (!product) return <div className="bg-black"><h4>Error</h4></div>;

    const Rating = renderRating(product.star);

    return (
      <div className="bg-white pt-5">
        <BreadCrumb path={product.path} name={product.name} />
        <div className="pt-5">
          <div className="max-w-2xl mx-auto sm:px-6 sm:grid-cols-1 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src={product.images[0]}
                alt="Two each of gray, white, and black shirts laying flat."
                className="w-auto h-auto object-center object-cover"
              />
            </div>
            <div className="aspect-h-4 px-4 lg:gap-y-8 rounded-lg lg:col-span-2 overflow-hidden lg:block">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>
              </div>
              <div className="space-y-6 py-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>

              <div className="mt-4 lg:mt-0 lg:row-span-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">
                  {product.priceUnit}
                  {product.price}
                </p>

                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <Rating />
                    </div>
                    <p className="sr-only">${product.star} out of 5 stars</p>
                    <a
                      href="#"
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {product.reviewCount} review
                    </a>
                  </div>
                </div>
                {renderForm(onBuy, onAddCart)}
              </div>

              <div className="py-6">
                {renderHighlights(product)}
                <div className="py-6">
                  <h2 className="text-sm font-bold text-gray-900">Details</h2>
                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ItemList />
      </div>
    );
  };
}

function renderForm(onBuy, onAddCart) {
  return (
    <>
      <div className="mt-10 flex">
          <button
            data-testid="buy"
            onClick={onBuy}
            className="mr-5 bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Buy
          </button>
        <button
          data-testid="add-to-bag"
          onClick={onAddCart}
          className="mr-5 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add to bag
        </button>
      </div>
    </>
  );
}

function renderHighlights(product) {
  return (
    <>
      <h3 className="text-sm font-bold text-gray-900">Highlights</h3>
      <div className="mt-4">
        <ul role="list" className="pl-4 list-disc text-sm space-y-2">
          {product.highlights.map((h, index) => {
            return (
              <li key={`highlight${index}`} className="text-gray-400">
                <span className="text-gray-600">{h}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
