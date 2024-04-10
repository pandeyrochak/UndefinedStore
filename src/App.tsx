import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Cart from './app/pages/Cart/Cart'
import Header from './app/components/Header/Header'
import Products from './app/pages/Products/Products'
import Categories from './app/pages/Categories/Categories'
import ProductDetails from './app/pages/ProductDetails/ProductDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* Routes */}
        <Routes>
          <Route path="/" Component={Products} />
          <Route path="/categories" Component={Categories} />
          <Route path="/product-details" Component={ProductDetails} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
