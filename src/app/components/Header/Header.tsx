import React from 'react'
import { CirclePercent, Search, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="w-full">
      <div className="container flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <CirclePercent size={32} />
          <span>Bazaar</span>
        </div>

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
          <ShoppingCart size={24} />
        </div>
      </div>
    </header>
  )
}

export default Header
