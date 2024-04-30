import { useEffect, useState } from 'react'
import AddToCart from '../../components/Products/AddToCart'
import Rating from '../../components/Products/Rating'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProductDetails } from '../../../api/getProductDetails'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addToCart, removeFromCart } from '../../store/cartSlice'
import { RootState } from '../../store/cartStore'
import LoadingUI from '../../components/Loader/LoadingUI'

const ProductDetails = () => {
  const cartData = useAppSelector((state: RootState) => state.myCart)
  const dispatch = useAppDispatch()
  // get product id parameter from url
  const { productId } = useParams()
  // states and handler for add to cart button
  const [count, setCount] = useState(0)
  const handleAddToCart = () => {
    setCount(prev => prev + 1)
    dispatch(
      addToCart({
        id: data.id,
        name: data.title,
        price: data.price,
        image: data.image,
        category: data.category,
        quantity: 0,
      }),
    )
  }
  const handleRemoveFromCart = () => {
    setCount(prev => prev - 1)
    dispatch(removeFromCart(data.id))
  }
  // const getCountFromStore = (targetId: number) => {
  //   console.log(cartData)
  // }
  const { status, error, data } = useQuery({
    queryKey: ['productDetails', productId],
    queryFn: () => getProductDetails(productId ?? ''),
  })

  useEffect(() => {
    if (status === 'success' && cartData) {
      console.log(cartData)
      const tempCount = cartData.find(item => item.id === data.id)
      // console.log(`tempcount`, tempCount.quantity)
      setCount(tempCount?.quantity ?? 0)
    }
  }, [data, status, cartData])

  // in case of pending state
  if (status === 'pending') return <LoadingUI />
  // in case of an error
  if (status === 'error')
    return (
      <div className="container-center">
        <h1>{error.toString()}</h1>
      </div>
    )

  // else case when data is resolved.
  return (
    <div className="container-center max-md:pb-32">
      <div className="grid grid-cols-8 gap-5 mx-auto">
        <div className="col-span-1"></div>
        <div className="col-span-6 sm:col-span-2">
          <img src={data.image} className="rounded-xl" />
        </div>
        <div className="col-span-8 sm:col-span-4">
          <div className="flex flex-col gap-4">
            <div className="product-info-group mb-3">
              <h2 className="text-2xl">{data.title}</h2>
            </div>
            <div className="product-info-group">
              <p className="text-sm text-gray-500">Category</p>
              <p className="text-base">{data.category}</p>
            </div>
            <div className="product-info-group">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-xl font-bold">Rs. {data.price}</p>
            </div>
            <div className="product-info-group">
              <p className="text-sm text-gray-500">Description</p>
              <p className="text-base">{data.description}</p>
            </div>
            <div className="product-info-group">
              <p className="text-sm text-gray-500">Rating</p>
              <div className="flex items-center gap-3">
                <Rating rating={data.rating.rate} />
                <p className="text-base">{data.rating.rate}</p>
              </div>
            </div>
            {/* Add to Cart Button */}
            <AddToCart count={count} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
