import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="page-container">
      <h1>Auto Math 😛</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#0a9fb5', fontWeight: 'bold' }}>
        Made by Julian
      </p>

      <div className="grid-2" style={{ marginTop: '3rem' }}>
        <div>
          <h2>Placeholder Text</h2>
          <p>
            Cool Math
          </p>
          <p>
            Very Nice
          </p>
        </div>

        <div>
          <h2>How it works</h2>
          <ol style={{ paddingLeft: '1.5rem', lineHeight: '2' }}>
            <li>Open App</li>
            <li>Do Math</li>
            <li>More</li>
            <li>Coming</li>
            <li>Soon</li>
          </ol>
        </div>
      </div>

      <div style={{ marginTop: '4rem', padding: '2rem', border: '2px dashed #0a9fb5', backgroundColor: 'rgba(10, 159, 181, 0.05)' }}>
        <h3>Quick Start</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          Click button below to <strong>Start</strong> 
        </p>
        <Link to="/input" className="btn btn-primary">
          Start Math →
        </Link>
      </div>

      <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
        <div style={{ padding: '1.5rem', border: '1px solid #d0d0d0', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff6b35', marginBottom: '0.5rem' }}>🧊</div>
          <h3 style={{ marginTop: 0 }}>Easy Math</h3>
          <p>Instant calculations for your data</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #d0d0d0', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0a9fb5', marginBottom: '0.5rem' }}>📊</div>
          <h3 style={{ marginTop: 0 }}>Chart</h3>
          <p>See all points plot</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #d0d0d0', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#d4a574', marginBottom: '0.5rem' }}>📥</div>
          <h3 style={{ marginTop: 0 }}>Export</h3>
          <p>Download outputs</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage