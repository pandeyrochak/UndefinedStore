// import React from 'react'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getAllProducts } from '../../../api/getAllProducts'
import { ProductType } from '../../../utils/responseTypes'
import ProductCard from '../../components/Products/ProductCard/ProductCard'

const Products = () => {
  const { categoryName } = useParams()
  const { status, data, error } = useQuery({
    queryKey: ['all-products', categoryName],
    queryFn: () => getAllProducts(categoryName ?? ''),
  })
  if (status === 'pending')
    return (
      <div className="container-center">
        <h1>Loading...</h1>
      </div>
    )
  if (status === 'error')
    return (
      <div className="container-center">
        <h1>{error.toString()}</h1>
      </div>
    )
  // console.log(data)
  return (
    <div className="container-center">
      <h1 className="text-3xl font-semibold mb-5">
        {categoryName ? `${categoryName.at(0)?.toLocaleUpperCase()}${categoryName.slice(1)}` : 'All Products'}
      </h1>
      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {data.map((item: ProductType, index: number) => (
          <div className="col-span-1" key={index * 88}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
