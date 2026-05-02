import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-pattern" />
      </div>
      <div className="hero-content">
        <div className="hero-badge">🫒 طازج يومياً</div>
        <h1 className="hero-title">
          <span className="title-line">مطبخ</span>
          <span className="title-line accent">الحي</span>
        </h1>
        <p className="hero-desc">
          نكهات من كل حواري العالم، تُصنع بأيدي أبناء الحي<br/>
          وصفات أصيلة، مكونات محلية، وحب لا يُقاس
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn-primary">تصفح القائمة ←</a>
          <a href="#about" className="btn-ghost">عن مطبخنا</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><span className="stat-num">٤٨+</span><span className="stat-label">طبق</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">١٢</span><span className="stat-label">ثقافة</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">٢٤</span><span className="stat-label">ساعة خدمة</span></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="dish-card dish-1">
          <div className="dish-emoji">🫕</div>
          <div className="dish-name">يخنة الحي</div>
        </div>
        <div className="dish-card dish-2">
          <div className="dish-emoji">🥙</div>
          <div className="dish-name">شاورما محلية</div>
        </div>
        <div className="dish-card dish-3">
          <div className="dish-emoji">🍛</div>
          <div className="dish-name">كاري العالم</div>
        </div>
        <div className="building-icon">🏡</div>
      </div>
    </section>
  )
}
