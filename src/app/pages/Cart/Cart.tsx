// import React from 'react'
import CartProducts from '../../components/Cart/CartProducts'
import BillingDetails from '../../components/Cart/BillingDetails'
import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/cartStore'
import { useEffect, useState } from 'react'

const Cart = () => {
  const cartData = useAppSelector((state: RootState) => state.myCart)
  const [totalAmount, setTotalAmount] = useState<string>('0')
  useEffect(() => {
    const tempTotal = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    setTotalAmount(tempTotal ?? '0')
  }, [cartData])
  return (
    <div className="container mx-auto mt-10">
      <div className="flex  my-10 relative">
        <CartProducts cartData={cartData} />
        <div className="flex flex-col flex-1">
          <BillingDetails totalAmount={totalAmount} />
        </div>
      </div>
    </div>
  )
}

export default Cart
