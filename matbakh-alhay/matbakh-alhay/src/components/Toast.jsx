export default function Toast({ message }) {
  return (
    <div style={{
      position: 'fixed', bottom: 32, right: 32, zIndex: 300,
      background: '#1E1208', color: '#FBF7EE',
      padding: '12px 20px', borderRadius: 12,
      fontSize: 14, fontWeight: 600,
      boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
      animation: 'fadeUp 0.3s ease',
      display: 'flex', alignItems: 'center', gap: 8,
      border: '1px solid #C8873A',
    }}>
      <span style={{ color: '#C8873A' }}>✓</span>
      {message}
    </div>
  )
}
