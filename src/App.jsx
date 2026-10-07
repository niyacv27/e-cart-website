import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import PageFooter from './components/PageFooter'

import Home from './pages/Home'
import Products from './pages/Products'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<View />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <PageFooter />
    </>
  )
}

export default App