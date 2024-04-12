import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Cart from './app/pages/Cart/Cart'
import Header from './app/components/Header/Header'
import Products from './app/pages/Products/Products'
import Categories from './app/pages/Categories/Categories'
import ProductDetails from './app/pages/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* Routes */}
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/:categoryName?" Component={Products} />
            <Route path="/categories" Component={Categories} />
            <Route path="/product-details/:productId" Component={ProductDetails} />
            <Route path="/cart" Component={Cart} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}

export default App
