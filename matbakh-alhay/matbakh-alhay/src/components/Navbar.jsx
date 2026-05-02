import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar({ totalItems, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo">
          <span className="logo-icon">🏡</span>
          <div>
            <div className="logo-main">مطبخ الحي</div>
            <div className="logo-sub">نكهات عالمية، بأيد محلية</div>
          </div>
        </div>
        <div className="nav-links">
          <a href="#menu">القائمة</a>
          <a href="#about">عن المطبخ</a>
          <a href="#contact">تواصل معنا</a>
        </div>
        <button className="cart-btn" onClick={onCartOpen}>
          <span className="cart-icon">🛒</span>
          <span>السلة</span>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>
      </div>
    </nav>
  )
}
