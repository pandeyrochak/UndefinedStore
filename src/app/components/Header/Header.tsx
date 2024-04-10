// import React from 'react'
import { CirclePercent, Search, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="w-full mb-7 md:mb-14">
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
            <input type="text" placeholder="Search" className="px-4 py-2 rounded-lg pr-8" />
            <Search size={16} className="absolute right-3" />
          </div>
          <div className="relative flex items-center">
            <ShoppingCart size={24} />
            <span className="w-4 h-4 bg-slate-50 rounded-full text-xs text-black flex justify-center items-center absolute -top-1 -right-1">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
