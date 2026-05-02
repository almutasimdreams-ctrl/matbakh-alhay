import './Cart.css'

export default function Cart({ cart, open, onClose, removeFromCart, updateQty, totalPrice }) {
  const handleOrder = () => {
    alert('شكراً لطلبك! سنتواصل معك قريباً 🎉')
    onClose()
  }

  return (
    <>
      <div className={`cart-overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <div className={`cart-drawer ${open ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>🛒 سلة الطلبات</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="empty-icon">🍽️</div>
              <p>سلتك فارغة</p>
              <span>أضف بعض الأطباق الشهية!</span>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="ci-emoji">{item.emoji}</div>
                  <div className="ci-info">
                    <div className="ci-name">{item.name}</div>
                    <div className="ci-price">{(item.price * item.qty).toFixed(2)} د.أ</div>
                  </div>
                  <div className="ci-controls">
                    <button onClick={() => updateQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                  <button className="ci-remove" onClick={() => removeFromCart(item.id)}>🗑️</button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>المجموع</span>
              <span className="total-price">{totalPrice.toFixed(2)} د.أ</span>
            </div>
            <div className="cart-note">🚚 التوصيل مجاني للطلبات فوق ١٥ د.أ</div>
            <button className="order-btn" onClick={handleOrder}>تأكيد الطلب ←</button>
          </div>
        )}
      </div>
    </>
  )
}
