import { useState } from 'react'
import './Menu.css'

const categories = ['الكل', 'وصفات محلية', 'نكهات عالمية', 'حلويات', 'مشروبات']

const items = [
  { id:1, name:'يخنة الحي', desc:'طبق تراثي بالخضار الموسمية والبهارات العائلية', price:5.5, emoji:'🫕', cat:'وصفات محلية', badge:'الأكثر طلباً' },
  { id:2, name:'شاورما الحارة', desc:'شاورما دجاج مشوي بصلصة الثوم المحلية', price:4.5, emoji:'🥙', cat:'وصفات محلية', badge:'' },
  { id:3, name:'مجدرة الجدة', desc:'عدس وأرز مع البصل المقلي وزيت الزيتون', price:3.5, emoji:'🍲', cat:'وصفات محلية', badge:'نباتي' },
  { id:4, name:'كاري العالم', desc:'كاري هندي بالخضار والتوابل المختارة', price:6.0, emoji:'🍛', cat:'نكهات عالمية', badge:'' },
  { id:5, name:'باستا ترانتينو', desc:'باستا إيطالية بصلصة طماطم طازجة وريحان', price:5.5, emoji:'🍝', cat:'نكهات عالمية', badge:'' },
  { id:6, name:'تاكوز المطبخ', desc:'تاكوز مكسيكية بحشوة اللحم والسالسا', price:5.0, emoji:'🌮', cat:'نكهات عالمية', badge:'جديد' },
  { id:7, name:'رامن الحي', desc:'حساء ياباني بمرق دجاج غني ونودلز طازجة', price:6.5, emoji:'🍜', cat:'نكهات عالمية', badge:'' },
  { id:8, name:'كنافة الحارة', desc:'كنافة بالجبن وشربات الورد والفستق', price:3.0, emoji:'🧆', cat:'حلويات', badge:'الأكثر طلباً' },
  { id:9, name:'بقلاوة بيتية', desc:'بقلاوة مصنوعة يدوياً بالفستق والعسل', price:2.5, emoji:'🍯', cat:'حلويات', badge:'' },
  { id:10, name:'تشيز كيك الزعفران', desc:'تشيز كيك بارد بنكهة الزعفران والورد', price:4.0, emoji:'🍰', cat:'حلويات', badge:'جديد' },
  { id:11, name:'قهوة الحي', desc:'قهوة عربية بالهيل والزعفران، على الطريقة القديمة', price:1.5, emoji:'☕', cat:'مشروبات', badge:'' },
  { id:12, name:'عصير الرمان', desc:'رمان طازج معصور يومياً مع رشة نعناع', price:2.0, emoji:'🧃', cat:'مشروبات', badge:'طازج' },
]

export default function Menu({ addToCart }) {
  const [active, setActive] = useState('الكل')
  const [added, setAdded] = useState({})

  const filtered = active === 'الكل' ? items : items.filter(i => i.cat === active)

  const handleAdd = (item) => {
    addToCart(item)
    setAdded(prev => ({...prev, [item.id]: true}))
    setTimeout(() => setAdded(prev => ({...prev, [item.id]: false})), 1200)
  }

  return (
    <section id="menu" className="menu-section">
      <div className="menu-header">
        <div className="section-badge">🍽️ قائمتنا</div>
        <h2 className="section-title">أطباق اليوم</h2>
        <p className="section-desc">من الحارة إلى العالم — كل طبق يحكي قصة</p>
      </div>
      <div className="categories">
        {categories.map(c => (
          <button key={c} className={`cat-btn ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="items-grid">
        {filtered.map(item => (
          <div key={item.id} className="item-card">
            {item.badge && <div className="item-badge">{item.badge}</div>}
            <div className="item-emoji">{item.emoji}</div>
            <div className="item-info">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-desc">{item.desc}</p>
              <div className="item-footer">
                <span className="item-price">{item.price.toFixed(2)} د.أ</span>
                <button
                  className={`add-btn ${added[item.id] ? 'added' : ''}`}
                  onClick={() => handleAdd(item)}
                >
                  {added[item.id] ? '✓ أضيف' : '+ أضف للسلة'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
