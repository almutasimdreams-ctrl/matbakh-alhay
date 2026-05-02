import './Footer.css'

export default function Footer() {
  return (
    <footer id="contact">
      <div id="about" className="about-section">
        <div className="about-inner">
          <div className="about-text">
            <div className="section-badge">🏡 قصتنا</div>
            <h2>من الحارة إلى العالم</h2>
            <p>
              مطبخ الحي وُلد من فكرة بسيطة: أن أطيب الطعام هو ما يُصنع بحب،
              في مطبخ حقيقي، من أيدٍ تعرف ما تطبخ.
              جمعنا نكهات من كل زاوية في العالم وأعدنا تفسيرها بمكونات محلية طازجة.
            </p>
            <div className="about-features">
              <div className="feature">🫒 <span>مكونات محلية طازجة يومياً</span></div>
              <div className="feature">👨‍🍳 <span>طهاة من الحي</span></div>
              <div className="feature">🚚 <span>توصيل سريع لكل الأحياء</span></div>
              <div className="feature">♻️ <span>تغليف صديق للبيئة</span></div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-card">
              <div style={{fontSize:'5rem'}}>🏡</div>
              <div style={{fontSize:'1.2rem', fontWeight:'900', color:'var(--dark)', marginTop:'0.5rem'}}>مطبخ الحي</div>
              <div style={{fontSize:'0.85rem', color:'var(--text-muted)', marginTop:'0.25rem'}}>نكهات عالمية، بأيد محلية</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">🏡 مطبخ الحي</div>
            <p>نكهات عالمية، بأيد محلية</p>
          </div>
          <div className="footer-links">
            <h4>روابط سريعة</h4>
            <a href="#menu">القائمة</a>
            <a href="#about">عن المطبخ</a>
            <a href="#contact">تواصل معنا</a>
          </div>
          <div className="footer-contact">
            <h4>تواصل معنا</h4>
            <p>📞 07X-XXX-XXXX</p>
            <p>📍 عمّان، الأردن</p>
            <p>🕐 يومياً ١٠ص — ١٢م</p>
          </div>
          <div className="footer-social">
            <h4>تابعنا</h4>
            <div className="social-links">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© ٢٠٢٦ مطبخ الحي — جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
