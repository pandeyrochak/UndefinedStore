import { CircleCheckBig } from 'lucide-react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <div className="container-center flex flex-col items-center gap-4">
      <CircleCheckBig className="text-green-500" size={48} />
      <h4>Your order has been placed! </h4>
      <div className="flex gap-8 items-center">
        <Link to="/" className="text-inherit font-normal hover:text-inherit">
          <button className="unstyled-btn rounded-md px-4 py-2 border border-zinc-300">Continue Shopping</button>
        </Link>
        <button className="unstyled-btn bg-spray-500 text-white px-4 py-2 border border-transparent rounded-md">
          View Orders
        </button>
      </div>
    </div>
  )
}

export default Checkout
