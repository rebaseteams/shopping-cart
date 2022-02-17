/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { renderItemCard } from "../../components/item";
import { renderLoading } from "../../components/loading";
import { useItem as defaultUseItem } from "../../customHooks/useItem";
import { renderItemsList } from "../items-list";
import { CartCount } from "../../providers/context";

export function renderItem(itemsService, cartService, useItem = defaultUseItem, cartCountProvider = CartCount) {
  const ItemList = renderItemsList(renderItemCard, itemsService);
  return function Item() {
    const { loading, product, setCount } = useItem(itemsService, cartCountProvider);

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

    return (
      <div className="bg-white pt-5">
        <div className="flex">
          <div className="flex flex-col">
            {
              product.images.map((img) => {
                return <img className="w-14 h-14 m-1 border-2" src={img} alt={img} />
              })
            }
          </div>


          <div className="flex flex-row justify-start w-full">
            <div className="flex w-96 flex-col items-start">
              <img
                    src={product.images[0]}
                    alt="Two each of gray, white, and black shirts laying flat."
                    className="w-full rounded-lg h-72 object-center object-cover"
              />
              {renderForm(onBuy, onAddCart)}
            </div>

            <div className="px-5 w-full flex flex-col h-screen overflow-y-auto">
              <span className="font-medium">{product.name}</span>

              <div className="flex">
                <div className="flex px-1 text-white bg-green-600 rounded w-fit">
                  {product.star}
                  <img alt="rating" className="m-1" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" />
                </div>
                <div className="ml-5 text-gray-500 font-bold">
                  <p>{product.rating} rating and {product.reviewCount} reviews</p>
                </div>
              </div>

              <div className="my-5 font-medium flex items-center">
                <span className="text-4xl">₹ {product.price - (product.price * ( product.discount/100 ) )}</span>
                <span className="ml-6 line-through text-gray-700 text-xl">₹ {product.price}</span>
                <span className="ml-6 text-green-600 text-xl">{product.discount}% Off</span>
              </div>

              <div className="border flex flex-col">
                <div className="border font-medium p-3"> Product Description </div>
                <div className="p-3">{product.description}</div>
              </div>

              <div className="border mt-5 flex flex-col">
                {renderHighlights(product)}
              </div>
            <ItemList />
            </div>

          </div>
        </div>
      </div>
    );
  };
}

function renderForm(onBuy, onAddCart) {
  return (
    <>
      <div className="mt-5 w-full flex">
          <button
            data-testid="buy"
            onClick={onBuy}
            className="mx-1 w-full bg-orange-500 border border-transparent rounded-sm py-3 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Buy
          </button>
        <button
          data-testid="add-to-bag"
          onClick={onAddCart}
          className="mx-1 w-full bg-orange-600 border border-transparent rounded-sm py-3 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
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
      <h3 className="p-3 font-medium text-gray-900">Highlights</h3>
      <div className="p-3">
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
