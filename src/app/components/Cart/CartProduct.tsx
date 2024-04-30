import { Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { addToCart, removeFromCart, removeItem } from '../../store/cartSlice'
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
  const removeProductFromCart = () => {
    dispatch(removeItem(product.id))
  }

  useEffect(() => {
    setCount(product.quantity)
  }, [product.quantity])

  return (
    <div className="flex items-center hover:bg-gray-100  md:px-6 py-5">
      <div className="flex w-2/5 max-md:flex-col">
        <div className="w-1/5 h-16">
          <img className="w-full h-full object-contain" src={product.image} alt="product" />
        </div>
        <div className="w-4/5 flex flex-col justify-between md:ml-4 max-md:ml-2 max-md:mt-2 flex-grow max-md:gap-2">
          <span className="font-bold text-sm text-justify max-md:pr-4">{product.name}</span>
          <button className="unstyled-btn group flex items-center gap-2 w-fit" onClick={removeProductFromCart}>
            <Trash2 className="w-4 h4 text-red-500 group-hover:scale-110 transition-all" strokeWidth={1} />
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        {count > 0 && (
          <AddToCart handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} count={count} />
        )}
      </div>

      <span className="text-center w-1/5 font-semibold text-sm">₹{product.price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">₹{totalPrice.toFixed(2)}</span>
    </div>
  )
}

export default CartProduct
