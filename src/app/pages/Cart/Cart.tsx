// import React from 'react'
import CartProducts from '../../components/Cart/CartProducts'
import BillingDetails from '../../components/Cart/BillingDetails'

const Cart = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10 relative">
        <CartProducts />
        <div className="flex flex-col flex-1">
          <BillingDetails />
        </div>
      </div>
    </div>
  )
}

export default Cart
