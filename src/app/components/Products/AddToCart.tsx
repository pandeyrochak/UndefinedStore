import { MouseEventHandler } from 'react'
interface AddToCartProps {
  handleRemoveFromCart: MouseEventHandler<HTMLButtonElement>
  handleAddToCart: MouseEventHandler<HTMLButtonElement>
  count: number
}
const AddToCart = ({ handleRemoveFromCart, handleAddToCart, count }: AddToCartProps) => {
  return count === 0 ? (
    <button onClick={handleAddToCart} className="text-white px-2 py-1 rounded-md w-28 bg-blue-500">
      Add to cart
    </button>
  ) : (
    <>
      <div className="cart-controls rounded-md  text-white px-2 py-1 w-28 flex items-center justify-between bg-blue-500">
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
