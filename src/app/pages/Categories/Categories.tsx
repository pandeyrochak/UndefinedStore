// import React from 'react'

import Category from '../../components/Products/Category'

const Categories = () => {
  return (
    <div className="container-center">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
          <Category
            categoryName="Electronics"
            image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
            key={101}
          />
        </div>
      </div>
    </div>
  )
}

export default Categories
