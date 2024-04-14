import CartProduct from './CartProduct'
import emptyCart from '../../../assets/empty-cart.webp'
import { CartItem } from '../../store/cartSlice'

const CartProducts = ({ cartData }: { cartData: CartItem[] }) => {
  return (
    <div className="w-3/4 bg-white px-10 py-10">
      {cartData.length > 0 ? (
        <>
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cartData.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>
          {/* Repeat for each product in the cart */}
          {cartData.map(product => (
            <CartProduct product={product} key={product.id} />
          ))}
          {/* End of product iteration */}
        </>
      ) : (
        <div className="flex items-center justify-center gap-4 flex-col">
          <img src={emptyCart} alt=" " width={200} />
          <h1 className="text-2xl font-semibold text-slate-800 mx-auto">Cart is Empty</h1>
        </div>
      )}
    </div>
  )
}

export default CartProducts
