import { MouseEventHandler } from 'react'
interface AddToCartProps {
  handleRemoveFromCart: MouseEventHandler<HTMLButtonElement>
  handleAddToCart: MouseEventHandler<HTMLButtonElement>
  count: number
}
const AddToCart = ({ handleRemoveFromCart, handleAddToCart, count }: AddToCartProps) => {
  return count === 0 ? (
    <button onClick={handleAddToCart} className=" primary-btn px-2 sm:px-4 py-2 w-32 ">
      Add to cart
    </button>
  ) : (
    <>
      <div className="cart-controls px-2 sm:px-4 py-2 w-32 flex items-center justify-between primary-btn">
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
