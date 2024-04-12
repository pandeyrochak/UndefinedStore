// ProductList.js

const CartProducts = () => {
  return (
    <div className="w-3/4 bg-white px-10 py-10">
      <div className="flex justify-between border-b pb-8">
        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
        <h2 className="font-semibold text-2xl">3 Items</h2>
      </div>
      <div className="flex mt-10 mb-5">
        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
        <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
        <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
      </div>
      {/* Repeat for each product in the cart */}
      <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <div className="w-20">
            <img className="h-24" src="dummy-product-image-url" alt="product" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">Product Name</span>
            <span className="text-red-500 text-xs">Brand Name</span>
            <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">
              Remove
            </a>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <input className="mx-2 border text-center w-8" type="text" value="1" />
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
      </div>
      {/* End of product iteration */}
    </div>
  )
}

export default CartProducts
