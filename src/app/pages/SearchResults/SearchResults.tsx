import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getAllProducts } from '../../../api/getAllProducts'
import { ProductType } from '../../../utils/responseTypes'
import ProductCard from '../../components/Products/ProductCard/ProductCard'

const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  const { status, data, error } = useQuery({
    queryKey: ['all-products', query],
    queryFn: () => getAllProducts(''),
  })
  const [searchResults, setSearchResults] = useState([])
  useEffect(() => {
    if (status === 'success') {
      const searchResults = data.filter((item: ProductType) =>
        item.title.toLowerCase().includes(query?.toLowerCase() ?? ''),
      )
      setSearchResults(searchResults)
    }
  }, [data, status, query])

  if (status === 'pending')
    return (
      <div className="container-center">
        <h1>Searching...</h1>
      </div>
    )
  if (status === 'error')
    return (
      <div className="container-center">
        <h1>{error.toString()}</h1>
      </div>
    )
  return (
    <div className="container-center">
      {searchResults.length > 0 ? (
        <>
          <h1 className="text-3xl font-semibold mb-5">Search results</h1>
          {/* rendering products */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {searchResults.map((item: ProductType, index: number) => (
              <div className="col-span-1" key={index * 88}>
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <h1>No results found</h1>
      )}
    </div>
  )
}

export default SearchResults
