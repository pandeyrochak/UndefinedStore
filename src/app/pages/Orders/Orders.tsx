const Orders = () => {
  // const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('userOrders') || '[]'))
  // console.log(orders)

  return (
    <div className="container-center">
      <h1>Your Orders</h1>
      {/* <div className="orders-container">
        {orders.map((order: any) => {
          return (
            <div className="order-card">
              <h2>Order ID: {order.orderId}</h2>

              {order.orderDetails.map((orderItem: any) => {
                return (
                  <div className="order-item flex items-center gap-3">
                    <h3>{orderItem.name}</h3>
                    <p>{orderItem.quantity} units</p>
                    <p>₹{orderItem.price}</p>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div> */}
    </div>
  )
}

export default Orders
