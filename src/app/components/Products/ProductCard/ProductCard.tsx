import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddToCart from '../AddToCart'
import { ProductType } from '../../../../utils/responseTypes'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { RootState } from '../../../store/cartStore'
import { addToCart, removeFromCart } from '../../../store/cartSlice'
interface ProductCardProps {
  product: ProductType
}
const ProductCard = ({ product }: ProductCardProps) => {
  const cartData = useAppSelector((state: RootState) => state.myCart)
  const dispatch = useAppDispatch()
  const { image, title, id, price, category } = product
  const [count, setCount] = useState(0)

  const handleAddToCart = () => {
    setCount(prev => prev + 1)
    dispatch(
      addToCart({
        id: id,
        name: title,
        price: price,
        image: image,
        category: category,
        quantity: 0,
      }),
    )
  }

  const handleRemoveFromCart = () => {
    setCount(prev => prev - 1)
    dispatch(removeFromCart(id))
  }
  useEffect(() => {
    const tempCount = cartData.find(item => item.id === id)
    setCount(tempCount?.quantity ?? 0)
  }, [id, cartData])

  return (
    <div className="product-card border border-slate-300 rounded-lg w-full h-full flex flex-col justify-between hover:shadow-md transition-shadow duration-100">
      {/* image  */}
      <div className="image-wrapper relative group p-4 border-b border-b-slate-500">
        <div className="absolute top-0 left-0 w-full h-full bg-spray-500  rounded-t-md flex opacity-0 items-center justify-center group-hover:opacity-100 transition-all">
          <Link
            to={`/product-details/${id}`}
            className="text-white font-semibold bg-transparent px-4 py-2 rounded-md border border-white hover:text-spray-500 hover:bg-white"
          >
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
