/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Stars } from "../../components/header/stars"

const defaultProduct = {
  id: '389y84',
  name: 'The basic Tee 6',
  description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  price: 192,
  priceUnit: '$',
  star: 4.5,
  outOfStock: false,
  stockCount: 3222,
  reviewCount: 117,
  details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.',
  images: ['https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg'],
  highlights: ['Hand cut and sewn locally', 'Dyed with our proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'] 
}
export function renderItem(product = defaultProduct) {
  
  return function Item() {
      return <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrum2b">
          <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-medium text-gray-900"> Men </a>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
    
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-medium text-gray-900"> Clothing </a>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
    
            <li className="text-sm">
              <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600"> Basic Tee 6-Pack </a>
            </li>
          </ol>
        </nav>
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 sm:grid-cols-1 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img src={product.images[0]} alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
          </div>
          <div className="aspect-w-3 aspect-h-4 lg:gap-y-8 rounded-lg lg:col-span-2 overflow-hidden lg:block">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>
            <div className="space-y-6 py-6">
              <p className="text-base text-gray-900">
                {product.description}
              </p>
            </div>


            <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">{product.priceUnit}{product.price}</p>
    
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Stars stars={product.star} />
                </div>
                <p className="sr-only">4 out of 5 stars</p>
                <a href="#" classNameName="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {product.reviewCount} review
                </a>
              </div>
            </div>
    
            <form className="mt-10 flex">
              <button type="submit" className="mr-5 bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Buy</button>
              <button type="submit" className="mr-5 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>
            </form>
          </div>

            <div className="py-6">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
    
              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  { 
                    product.highlights.map((h, index) => {
                    return <li key={`highlight${index}`} classNameName="text-gray-400"><span className="text-gray-600">{h}</span></li>
                    })
                  }
                </ul>
              </div>

              <div className="py-6">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
  }
  