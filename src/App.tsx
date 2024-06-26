import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Cart from './app/pages/Cart/Cart'
import Header from './app/components/Header/Header'
import Products from './app/pages/Products/Products'
import Categories from './app/pages/Categories/Categories'
import ProductDetails from './app/pages/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import cartStore from './app/store/cartStore'
import { Provider } from 'react-redux'
import SearchResults from './app/pages/SearchResults/SearchResults'
import Checkout from './app/pages/Checkout/Checkout'
import Orders from './app/pages/Orders/Orders'

function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <BrowserRouter>
        <Provider store={cartStore}>
          <Header />
          {/* Routes */}
          <QueryClientProvider client={queryClient}>
            <div className="max-md:px-4">
              <Routes>
                <Route path="/:categoryName?" Component={Products} />
                <Route path="/categories" Component={Categories} />
                <Route path="/product-details/:productId" Component={ProductDetails} />
                <Route path="/cart" Component={Cart} />
                <Route path="/search-results" Component={SearchResults} />
                <Route path="/checkout" Component={Checkout} />
                <Route path="/orders" Component={Orders} />
              </Routes>
            </div>
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
