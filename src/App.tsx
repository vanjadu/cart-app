import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CartProvider } from 'react-use-cart'
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import SinglePage from './pages/SinglePage'
import CheckoutPage from './pages/CheckoutPage'

const queryClient = new QueryClient()

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/items/:id' element={<SinglePage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
            </Routes>
          </Router>
        </CartProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
