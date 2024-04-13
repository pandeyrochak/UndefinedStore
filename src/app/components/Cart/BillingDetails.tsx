import { RootState } from '../../store/cartStore'
import { useAppSelector } from '../../store/hooks'

// BillingDetails.js
const BillingDetails = () => {
  const cartData = useAppSelector((state: RootState) => state.myCart)
  const totalAmount = cartData.reduce((acc, item) => acc + item.price, 0).toFixed(2)
  return (
    <div id="summary" className="w-full px-8 py-10 sticky top-[80px]">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total</span>
          <span>₹{totalAmount ?? 0}</span>
        </div>
        <button
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full disabled:opacity-50 disabled:bg-gray-400"
          disabled={totalAmount === '0.00'}
        >
          Checkout
        </button>
      </div>
    </div>
  )
}

export default BillingDetails
