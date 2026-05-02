import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import Cart from './components/Cart.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === item.id)
      if (exists) return prev.map(i => i.id === item.id ? {...i, qty: i.qty + 1} : i)
      return [...prev, {...item, qty: 1}]
    })
  }

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id))

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(i => i.id === id ? {...i, qty: Math.max(0, i.qty + delta)} : i).filter(i => i.qty > 0))
  }

  const totalItems = cart.reduce((s, i) => s + i.qty, 0)
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <>
      <Navbar totalItems={totalItems} onCartOpen={() => setCartOpen(true)} />
      <Hero />
      <Menu addToCart={addToCart} />
      <Footer />
      <Cart
        cart={cart}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        removeFromCart={removeFromCart}
        updateQty={updateQty}
        totalPrice={totalPrice}
      />
    </>
  )
}
