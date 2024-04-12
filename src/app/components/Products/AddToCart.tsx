import { MouseEventHandler } from 'react'
interface AddToCartProps {
  handleRemoveFromCart: MouseEventHandler<HTMLButtonElement>
  handleAddToCart: MouseEventHandler<HTMLButtonElement>
  count: number
}
const AddToCart = ({ handleRemoveFromCart, handleAddToCart, count }: AddToCartProps) => {
  return count === 0 ? (
    <button onClick={handleAddToCart} className="text-white px-4 py-2  w-32 bg-indigo-500 hover:bg-indigo-600">
      Add to cart
    </button>
  ) : (
    <>
      <div className="cart-controls  text-white px-4 py-2 w-32 flex items-center justify-between bg-indigo-500 hover:bg-indigo-600">
        <button onClick={handleRemoveFromCart} className="unstyled-button bg-transparent">
          -
        </button>
        <span>{count}</span>
        <button onClick={handleAddToCart} className="unstyled-button bg-transparent">
          +
        </button>
      </div>
    </>
  )
}

export default AddToCart
