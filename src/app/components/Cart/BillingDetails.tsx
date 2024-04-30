// import { useEffect, useState } from 'react'
import { RootState } from '../../store/cartStore'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { clearCart } from '../../store/cartSlice'

import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

// BillingDetails.js
const BillingDetails = ({ totalAmount }: { totalAmount: string }) => {
  const cartData = useAppSelector((state: RootState) => state.myCart)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const checkoutButton = useRef<HTMLButtonElement>(null)
  // const [totalAmount, setTotalAmount] = useState<string>('0')
  // useEffect(() => {
  //   const tempTotal = cartData.reduce((acc, item) => acc + item.price, 0).toFixed(2)
  //   setTotalAmount(tempTotal ?? '0')
  // }, [cartData])
  const handleCheckout = () => {
    if (checkoutButton.current) {
      checkoutButton.current.setAttribute('disabled', 'true')
      checkoutButton.current.innerText = 'Processing...'
    }
    const newOrder = {
      orderId: Math.floor(Math.random() * 1000),
      orderDetails: cartData,
    }
    if (cartData.length) {
      if (localStorage.getItem('userOrders')) {
        const userOrders = JSON.parse(localStorage.getItem('userOrders')!)
        userOrders.push(newOrder)
        localStorage.setItem('userOrders', JSON.stringify(userOrders))
      } else {
        localStorage.setItem('userOrders', JSON.stringify([newOrder]))
      }
      dispatch(clearCart())
      navigate('/checkout')
    }
  }

  return (
    <div id="summary" className="w-full sm:px-8 sm:py-10 sticky top-[80px]">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total</span>
          <span>₹{totalAmount ?? 0}</span>
        </div>

        <button
          ref={checkoutButton}
          className="primary-btn font-semibold py-3 text-sm text-white uppercase w-full"
          disabled={totalAmount === '0.00'}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  )
}

export default BillingDetails
