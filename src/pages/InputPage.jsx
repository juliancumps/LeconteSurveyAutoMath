import { useState } from 'react'

function InputPage() {
  const [angle1_deg, setAngle1Deg] = useState('')
  const [angle1_min, setAngle1Min] = useState('')
  const [angle1_sec, setAngle1Sec] = useState('')
  
  const [angle2_deg, setAngle2Deg] = useState('')
  const [angle2_min, setAngle2Min] = useState('')
  const [angle2_sec, setAngle2Sec] = useState('')
  
  const [baselineDistance, setBaselineDistance] = useState('')
  const [pointName, setPointName] = useState('')
  
  const [calculation, setCalculation] = useState(null)
  const [points, setPoints] = useState([])

  // Convert DMS to decimal degrees
  const dmsToDecimal = (deg, min, sec) => {
    if (!deg || !min || !sec) return null
    return parseFloat(deg) + parseFloat(min) / 60 + parseFloat(sec) / 3600
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    
    const decimalAngle1 = dmsToDecimal(angle1_deg, angle1_min, angle1_sec)
    const decimalAngle2 = dmsToDecimal(angle2_deg, angle2_min, angle2_sec)
    const baseline = parseFloat(baselineDistance)
    
    if (!decimalAngle1 || !decimalAngle2 || !baseline) {
      alert('Please fill in all fields')
      return
    }

    // TODO: Implement actual triangle solving math here
    // For now, placeholder calculation
    const angleSum = decimalAngle1 + decimalAngle2
    const thirdAngle = 180 - angleSum

    setCalculation({
      angle1: decimalAngle1,
      angle2: decimalAngle2,
      angle3: thirdAngle,
      baseline: baseline,
      timestamp: new Date().toLocaleTimeString()
    })
  }

  const handleAddPoint = () => {
    if (!calculation) {
      alert('Calculate angles first')
      return
    }

    const newPoint = {
      id: points.length + 1,
      name: pointName || `Point ${points.length + 1}`,
      angle1: calculation.angle1,
      angle2: calculation.angle2,
      angle3: calculation.angle3,
      baseline: calculation.baseline,
      timestamp: calculation.timestamp
    }

    setPoints([...points, newPoint])
    
    // Reset form
    setAngle1Deg('')
    setAngle1Min('')
    setAngle1Sec('')
    setAngle2Deg('')
    setAngle2Min('')
    setAngle2Sec('')
    setPointName('')
    setCalculation(null)
  }

  return (
    <div className="page-container">
      <h1>Calculate Terminus Position</h1>
      <p>Input angle measurements from both theodolites to solve the triangle and locate glacier terminus points.</p>

      <div className="grid-2" style={{ marginTop: '2rem' }}>
        {/* INPUT FORM */}
        <div>
          <form onSubmit={handleCalculate}>
            <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #d0d0d0', backgroundColor: '#fafaf8' }}>
              <h3>Theodolite Station A</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label>Degrees</label>
                  <input
                    type="number"
                    value={angle1_deg}
                    onChange={(e) => setAngle1Deg(e.target.value)}
                    placeholder="0-180"
                    min="0"
                    max="180"
                  />
                </div>
                <div>
                  <label>Minutes</label>
                  <input
                    type="number"
                    value={angle1_min}
                    onChange={(e) => setAngle1Min(e.target.value)}
                    placeholder="0-60"
                    min="0"
                    max="60"
                  />
                </div>
                <div>
                  <label>Seconds</label>
                  <input
                    type="number"
                    value={angle1_sec}
                    onChange={(e) => setAngle1Sec(e.target.value)}
                    placeholder="0-60"
                    min="0"
                    max="60"
                    step="0.1"
                  />
                </div>
              </div>
              {calculation && (
                <div style={{ padding: '0.75rem', backgroundColor: 'rgba(10, 159, 181, 0.1)', border: '1px solid #0a9fb5' }}>
                  <strong>Decimal:</strong> {calculation.angle1.toFixed(4)}°
                </div>
              )}
            </div>

            <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #d0d0d0', backgroundColor: '#fafaf8' }}>
              <h3>Theodolite Station B</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label>Degrees</label>
                  <input
                    type="number"
                    value={angle2_deg}
                    onChange={(e) => setAngle2Deg(e.target.value)}
                    placeholder="0-180"
                    min="0"
                    max="180"
                  />
                </div>
                <div>
                  <label>Minutes</label>
                  <input
                    type="number"
                    value={angle2_min}
                    onChange={(e) => setAngle2Min(e.target.value)}
                    placeholder="0-60"
                    min="0"
                    max="60"
                  />
                </div>
                <div>
                  <label>Seconds</label>
                  <input
                    type="number"
                    value={angle2_sec}
                    onChange={(e) => setAngle2Sec(e.target.value)}
                    placeholder="0-60"
                    min="0"
                    max="60"
                    step="0.1"
                  />
                </div>
              </div>
              {calculation && (
                <div style={{ padding: '0.75rem', backgroundColor: 'rgba(10, 159, 181, 0.1)', border: '1px solid #0a9fb5' }}>
                  <strong>Decimal:</strong> {calculation.angle2.toFixed(4)}°
                </div>
              )}
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label>Baseline Distance (feet)</label>
              <input
                type="number"
                value={baselineDistance}
                onChange={(e) => setBaselineDistance(e.target.value)}
                placeholder="Known distance between theodolites"
                step="0.1"
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label>Point Name (optional)</label>
              <input
                type="text"
                value={pointName}
                onChange={(e) => setPointName(e.target.value)}
                placeholder="e.g., 'Terminus Peak A'"
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              CALCULATE TRIANGLE
            </button>
          </form>
        </div>

        {/* CALCULATION RESULTS */}
        <div>
          {calculation ? (
            <div style={{ padding: '2rem', border: '2px solid #0a9fb5', backgroundColor: 'rgba(10, 159, 181, 0.05)' }}>
              <h3>Triangle Solution</h3>
              
              <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #0a9fb5' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.85rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Angle A (Station 1)</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#0a9fb5' }}>
                    {calculation.angle1.toFixed(4)}°
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.85rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Angle B (Station 2)</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#0a9fb5' }}>
                    {calculation.angle2.toFixed(4)}°
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.85rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Angle C (Terminus)</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ff6b35' }}>
                    {calculation.angle3.toFixed(4)}°
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.85rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Baseline Distance</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {calculation.baseline} ft
                </div>
              </div>

              <button onClick={handleAddPoint} className="btn btn-accent" style={{ width: '100%' }}>
                SAVE THIS POINT
              </button>
            </div>
          ) : (
            <div style={{ padding: '2rem', border: '2px dashed #d0d0d0', backgroundColor: '#fafaf8', textAlign: 'center' }}>
              <p style={{ color: '#999', fontStyle: 'italic' }}>
                Enter angles above and click "CALCULATE TRIANGLE" to see the solution
              </p>
            </div>
          )}

          {/* PLACEHOLDER FOR TRIANGLE VISUALIZATION */}
          <div style={{ marginTop: '2rem', padding: '2rem', border: '1px solid #d0d0d0', backgroundColor: '#fafaf8', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', color: '#999' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📐</div>
              <p>Triangle visualization will appear here</p>
            </div>
          </div>
        </div>
      </div>

      {/* SAVED POINTS TABLE */}
      {points.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h2>Saved Points ({points.length})</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #0a9fb5' }}>
                  <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 'bold', color: '#0a9fb5', textTransform: 'uppercase', fontSize: '0.85rem' }}>Point</th>
                  <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 'bold', color: '#0a9fb5', textTransform: 'uppercase', fontSize: '0.85rem' }}>Angle A</th>
                  <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 'bold', color: '#0a9fb5', textTransform: 'uppercase', fontSize: '0.85rem' }}>Angle B</th>
                  <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 'bold', color: '#0a9fb5', textTransform: 'uppercase', fontSize: '0.85rem' }}>Angle C</th>
                  <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 'bold', color: '#0a9fb5', textTransform: 'uppercase', fontSize: '0.85rem' }}>Time</th>
                </tr>
              </thead>
              <tbody>
                {points.map((point, idx) => (
                  <tr key={point.id} style={{ borderBottom: '1px solid #d0d0d0', backgroundColor: idx % 2 === 0 ? '#fafaf8' : 'white' }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold', color: '#0a9fb5' }}>{point.name}</td>
                    <td style={{ padding: '1rem' }}>{point.angle1.toFixed(4)}°</td>
                    <td style={{ padding: '1rem' }}>{point.angle2.toFixed(4)}°</td>
                    <td style={{ padding: '1rem' }}>{point.angle3.toFixed(4)}°</td>
                    <td style={{ padding: '1rem', fontSize: '0.9rem', color: '#666' }}>{point.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default InputPage