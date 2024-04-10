import { useState } from 'react'
import AddToCart from '../../components/Products/AddToCart'
import Rating from '../../components/Products/Rating'

const ProductDetails = () => {
  const [count, setCount] = useState(0)
  const handleAddToCart = () => {
    setCount(count + 1)
  }
  const handleRemoveFromCart = () => {
    setCount(count - 1)
  }

  return (
    <div className="container-center">
      <div className="grid grid-cols-8 gap-5 mx-auto">
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="rounded-xl" />
        </div>
        <div className="col-span-4">
          <div className="flex flex-col gap-4">
            <div className="product-info-group mb-3">
              <h2 className="text-2xl">Product Name</h2>
            </div>
            <div className="product-info-group">
              <p className="text-sm text-gray-500">Category</p>
              <p className="text-base">Personal accessories</p>
            </div>
            <div className="product-info-group">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-xl font-bold">Rs. 1,000</p>
            </div>
            <div className="product-info-group">
              <p className="text-sm text-gray-500">Description</p>
              <p className="text-base">
                Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the
                padded sleeve, your everyday
              </p>
            </div>
            <div className="product-info-group">
              <p className="text-sm text-gray-500">Rating</p>
              <div className="flex items-center gap-3">
                <Rating rating={3.5} />
                <p className="text-base">3.9</p>
              </div>
            </div>
            {/* Add to Cart Button */}
            <AddToCart count={count} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
