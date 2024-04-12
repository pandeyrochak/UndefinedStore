import { useState } from 'react'
import { Link } from 'react-router-dom'
import AddToCart from '../AddToCart'
import { ProductType } from '../../../../utils/responseTypes'
interface ProductCardProps {
  product: ProductType
}
const ProductCard = ({ product }: ProductCardProps) => {
  const { image, title, id } = product
  const [count, setCount] = useState(0)

  const handleAddToCart = () => {
    setCount(count + 1)
  }

  const handleRemoveFromCart = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="product-card border border-slate-200 rounded-md w-full h-full flex flex-col justify-between hover:shadow-md transition-shadow duration-100">
      {/* image  */}
      <div className="image-wrapper relative group">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-65 rounded-t-md flex opacity-0 items-center justify-center group-hover:opacity-100 transition-all">
          <Link to={`/product-details/${id}`} className="text-slate-800 font-semibold bg-white px-4 py-2 rounded-md">
            View Details
          </Link>
        </div>
        <img src={image} alt={title} className="w-full h-64 object-contain" />
      </div>
      {/* product info  */}
      <div className="px-4 pt-2 pb-4 w-full">
        <h3 className="font-semibold text-sm mt-2 mb-3 whitespace-nowrap text-ellipsis overflow-hidden">{title}</h3>
        <AddToCart count={count} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  )
}

export default ProductCard
