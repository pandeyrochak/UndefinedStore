// import React from 'react'
import { CirclePercent, Search, ShoppingCart } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/cartStore'
import { useEffect, useState } from 'react'

const Header = () => {
  const cartData = useAppSelector((state: RootState) => state.myCart)
  const [totalCartCount, setTotalCartCount] = useState(0)
  const navigate = useNavigate()
  // function to handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    query.length > 3 ? navigate(`/search-results?q=${query}`) : navigate('/')
  }
  useEffect(() => {
    if (cartData) {
      const totalCartCount = cartData.reduce((acc, item) => acc + item.quantity, 0)
      setTotalCartCount(totalCartCount ?? 0)
    }
  }, [cartData])
  return (
    <header className="w-full mb-7 md:mb-14 sticky top-0 bg-zinc-100 z-10">
      <div className="container-center flex justify-between items-center px-5 py-4 lg:px-0">
        {/* Logo */}
        <Link to={'/'} className="flex items-center gap-2 unstyled-button">
          <CirclePercent size={32} />
          <span>Bazaar</span>
        </Link>

        {/* Cart Icon and Categories Link */}
        <div className="flex items-center gap-8">
          <Link to={'/categories'} className="text-inherit">
            <span>Categories</span>
          </Link>
          {/* Search Input */}
          <div className="flex justify-center items-center relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-lg pr-8 bg-white border"
              onInput={handleSearch}
            />
            <Search size={16} className="absolute right-3" />
          </div>
          <Link to={'/cart'} className="relative flex items-center">
            <ShoppingCart size={24} />
            <span className="w-4 h-4 bg-slate-50 rounded-full text-xs text-black flex justify-center items-center absolute -top-1 -right-1">
              {totalCartCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
