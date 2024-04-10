// import React from 'react'

import { useParams } from 'react-router-dom'
import ProductCard from '../../components/Products/ProductCard/ProductCard'

const Products = () => {
  const { categoryName } = useParams()
  return (
    <div className="container-center">
      <h1 className="text-3xl font-semibold mb-5">
        {categoryName ? `${categoryName.at(0)?.toLocaleUpperCase()}${categoryName.slice(1)}` : 'All Products'}
      </h1>
      <ProductCard
        image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        title={'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'}
      />
    </div>
  )
}

export default Products
