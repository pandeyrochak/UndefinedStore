import React from 'react'
import CartProducts from '../../components/Cart/CartProducts'
import BillingDetails from '../../components/Cart/BillingDetails'

const Cart = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <CartProducts />
        <BillingDetails />
      </div>
    </div>
  )
}

export default Cart
