import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="page-container">
      <h1>Glacier Terminus Survey</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#0a9fb5', fontWeight: 'bold' }}>
        Automated Theodolite Triangulation & Terminus Mapping
      </p>

      <div className="grid-2" style={{ marginTop: '3rem' }}>
        <div>
          <h2>What is this?</h2>
          <p>
            A precision surveying tool for mapping glacier terminus positions using dual theodolite measurements. 
            Input angle readings from two survey stations, and the system automatically calculates the 3D position 
            of terminus points through trigonometric triangulation.
          </p>
          <p>
            Track glacier retreat over time by comparing terminus positions year after year with scientific accuracy.
          </p>
        </div>

        <div>
          <h2>How it works</h2>
          <ol style={{ paddingLeft: '1.5rem', lineHeight: '2' }}>
            <li>Deploy theodolites at two known stations</li>
            <li>Measure angles to glacier terminus points</li>
            <li>Input angles and baseline distance</li>
            <li>System solves the triangle</li>
            <li>View all points on interactive map</li>
            <li>Export data for analysis</li>
          </ol>
        </div>
      </div>

      <div style={{ marginTop: '4rem', padding: '2rem', border: '2px dashed #0a9fb5', backgroundColor: 'rgba(10, 159, 181, 0.05)' }}>
        <h3>Quick Start</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          Ready to begin surveying? Head to the <strong>Calculate</strong> page to input your first angle measurements.
        </p>
        <Link to="/input" className="btn btn-primary">
          Start Surveying →
        </Link>
      </div>

      <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
        <div style={{ padding: '1.5rem', border: '1px solid #d0d0d0', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff6b35', marginBottom: '0.5rem' }}>⚡</div>
          <h3 style={{ marginTop: 0 }}>Real-time</h3>
          <p>Instant trigonometric calculations as you input data</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #d0d0d0', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0a9fb5', marginBottom: '0.5rem' }}>📊</div>
          <h3 style={{ marginTop: 0 }}>Visualize</h3>
          <p>See all terminus points plotted together instantly</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #d0d0d0', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#d4a574', marginBottom: '0.5rem' }}>📥</div>
          <h3 style={{ marginTop: 0 }}>Export</h3>
          <p>Download your surveyed points for official mapping</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage