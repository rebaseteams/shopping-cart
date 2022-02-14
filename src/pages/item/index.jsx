/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BreadCrumb } from "../../components/breadcrumb";
import { Stars } from "../../components/stars";

const defaultPath = [
  {
    name: "Mens",
    url: "#",
  },
  {
    name: "Clothing",
    url: "#",
  },
];

const defaultProduct = {
  id: "389y84",
  name: "The basic Tee 6",
  description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
  price: 192,
  priceUnit: "$",
  star: 4.5,
  outOfStock: false,
  stockCount: 3222,
  reviewCount: 117,
  details:
    "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.",
  images: [
    "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
  ],
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  path: defaultPath,
};
export function renderItem(itemsService, product = defaultProduct) {
  return function Item() {
    const { id } = useParams();
    useEffect(() => {
      const item = itemsService.getItems();
      console.log(item);
    });
    console.log(id);
    const onBuy = () => {
      alert("On Buy Under Development");
    };

    const onAddCart = () => {
      alert("On Add Cart Under Development");
    };
    return (
      <div className="bg-white">
        <BreadCrumb path={product.path} name={product.name} />
        <div className="pt-6">
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 sm:grid-cols-1 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src={product.images[0]}
                alt="Two each of gray, white, and black shirts laying flat."
                className="w-full h-full object-center object-cover"
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
                      <Stars stars={product.star} />
                    </div>
                    <p className="sr-only">4 out of 5 stars</p>
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
      </div>
    );
  };
}

function renderForm(onBuy, onAddCart) {
  return (
    <>
      <div className="mt-10 flex">
        <form>
          <button
            type="submit"
            data-testid="buy"
            onClick={onBuy}
            className="mr-5 bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Buy
          </button>
        </form>
        <form>
          <button
            type="submit"
            data-testid="add-to-bag"
            onClick={onAddCart}
            className="mr-5 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add to bag
          </button>
        </form>
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
