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

function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* Routes */}
        <Provider store={cartStore}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/:categoryName?" Component={Products} />
              <Route path="/categories" Component={Categories} />
              <Route path="/product-details/:productId" Component={ProductDetails} />
              <Route path="/cart" Component={Cart} />
            </Routes>
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
