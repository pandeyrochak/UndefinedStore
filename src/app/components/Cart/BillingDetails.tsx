// import { useEffect, useState } from 'react'
// import { RootState } from '../../store/cartStore'
// import { useAppSelector } from '../../store/hooks'

// BillingDetails.js
const BillingDetails = ({ totalAmount }: { totalAmount: string }) => {
  // const cartData = useAppSelector((state: RootState) => state.myCart)
  // const [totalAmount, setTotalAmount] = useState<string>('0')
  // useEffect(() => {
  //   const tempTotal = cartData.reduce((acc, item) => acc + item.price, 0).toFixed(2)
  //   setTotalAmount(tempTotal ?? '0')
  // }, [cartData])

  return (
    <div id="summary" className="w-full sm:px-8 sm:py-10 sticky top-[80px]">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total</span>
          <span>₹{totalAmount ?? 0}</span>
        </div>
        <button
          className="primary-btn font-semibold py-3 text-sm text-white uppercase w-full"
          disabled={totalAmount === '0.00'}
        >
          Checkout
        </button>
      </div>
    </div>
  )
}

export default BillingDetails
