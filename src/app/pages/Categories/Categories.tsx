// import React from 'react'

import { useQuery } from '@tanstack/react-query'
import Category from '../../components/Products/Category'
import { getAllCategories } from '../../../api/getAllCategories'

const Categories = () => {
  const { status, error, data } = useQuery({
    queryKey: ['all-categories'],
    queryFn: getAllCategories,
  })
  if (status === 'pending')
    return (
      <div className="container-center">
        <p>Loading...</p>
      </div>
    )
  if (status === 'error')
    return (
      <div className="container-center">
        <p>Error: {error.toString()}</p>
      </div>
    )
  return (
    <div className="container-center">
      <div className="grid grid-cols-12 gap-4">
        {data.map((item: string, index: number) => (
          <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
            <Category
              categoryName={item.toUpperCase().slice(0, 1) + item.slice(1, item.length)}
              image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
              key={index * 77}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
