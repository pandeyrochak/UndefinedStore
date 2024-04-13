import { DeleteIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { addToCart, removeFromCart } from '../../store/cartSlice'
import { useAppDispatch } from '../../store/hooks'
import AddToCart from '../Products/AddToCart'
interface CartProductProps {
  product: {
    id: number
    name: string
    price: number
    image: string
    category: string
    quantity: number
  }
}
const CartProduct = ({ product }: CartProductProps) => {
  const dispatch = useAppDispatch()
  const [count, setCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(product.quantity * product.price)
  const handleAddToCart = () => {
    setCount(prev => prev + 1)
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: 0,
      }),
    )
    setTotalPrice(prev => prev + product.price)
  }
  const handleRemoveFromCart = () => {
    setCount(prev => prev - 1)
    dispatch(removeFromCart(product.id))
    setTotalPrice(prev => prev - product.price)
  }

  useEffect(() => {
    setCount(product.quantity)
  }, [product.quantity])

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-24 h-24">
          <img className="w-full h-full object-contain" src={product.image} alt="product" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{product.name}</span>
          <button className="unstyled-btn hover:text-red-500 flex items-center gap-2">
            <DeleteIcon className="w-6 h-6" />
            Remove
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        {count > 0 && (
          <AddToCart handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} count={count} />
        )}
      </div>

      <span className="text-center w-1/5 font-semibold text-sm">₹{product.price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">₹{totalPrice}</span>
    </div>
  )
}

export default CartProduct
