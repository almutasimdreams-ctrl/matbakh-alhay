const categories = [
  { name: 'الكل', icon: '🍽' },
  { name: 'أطباق رئيسية', icon: '🥘' },
  { name: 'مشويات', icon: '🔥' },
  { name: 'سلطات', icon: '🥗' },
  { name: 'حلويات', icon: '🍰' },
  { name: 'مشروبات', icon: '🥤' },
  { name: 'وجبات خفيفة', icon: '🥙' },
]

export default function Categories({ active, setActive }) {
  return (
    <section style={{
      background: '#FBF7EE',
      padding: '48px 40px 32px',
      borderBottom: '1px solid #E0CFA0',
      position: 'sticky', top: 68, zIndex: 90,
    }}>
      <div style={{
        display: 'flex', gap: 12, overflowX: 'auto',
        scrollbarWidth: 'none', justifyContent: 'center', flexWrap: 'wrap',
      }}>
        {categories.map(cat => (
          <button key={cat.name}
            onClick={() => setActive(cat.name)}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '10px 22px', borderRadius: 50,
              border: active === cat.name ? '2px solid #C8873A' : '2px solid #E0CFA0',
              background: active === cat.name ? '#C8873A' : '#fff',
              color: active === cat.name ? '#fff' : '#3D2010',
              fontSize: 14, fontWeight: 600, cursor: 'pointer',
              fontFamily: 'Tajawal, sans-serif',
              transition: 'all 0.25s ease',
              whiteSpace: 'nowrap',
              boxShadow: active === cat.name ? '0 4px 16px rgba(200,135,58,0.35)' : '0 1px 4px rgba(0,0,0,0.06)',
            }}
            onMouseEnter={e => { if (active !== cat.name) { e.currentTarget.style.borderColor = '#C8873A'; e.currentTarget.style.color = '#C8873A' } }}
            onMouseLeave={e => { if (active !== cat.name) { e.currentTarget.style.borderColor = '#E0CFA0'; e.currentTarget.style.color = '#3D2010' } }}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
