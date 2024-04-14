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
      <div className="container-center flex justify-between items-center px-4 py-4 lg:px-0 max-md:flex-wrap">
        {/* Logo */}
        <Link to={'/'} className="flex items-center gap-2 unstyled-button max-md:flex-1">
          <CirclePercent size={32} />
          <span className="max-md:hidden">Bazaar</span>
        </Link>

        {/* Cart Icon and Categories Link */}
        <div className="flex items-center gap-8 max-md:flex-1 max-md:justify-end ">
          <Link to={'/categories'} className="text-inherit">
            <span>Categories</span>
          </Link>
          {/* Search Input */}
          <div className="justify-center items-center relative hidden md:flex">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-lg pr-8 bg-white border "
              onInput={handleSearch}
            />
            <Search size={16} className="absolute right-3" />
          </div>
          <Link
            to={'/cart'}
            className="relative flex items-center max-md:fixed max-md:bottom-4 max-md:right-4 max-md:bg-spray-200 max-md:rounded-full max-md:p-4"
          >
            <ShoppingCart size={24} className="text-spray-600" />
            <span className="w-4 h-4 bg-slate-50 rounded-full text-xs text-black flex justify-center items-center absolute -top-1 -right-1 max-md:bg-transparent max-md:text-spray-600 max-md:top-2 max-md:right-2">
              {totalCartCount}
            </span>
          </Link>
        </div>
        {/* search to show on small screen devices */}
        <div className="justify-center items-center relative flex md:hidden w-full mt-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-lg pr-8 bg-white border w-full "
            onInput={handleSearch}
          />
          <Search size={16} className="absolute right-3" />
        </div>
      </div>
    </header>
  )
}

export default Header
