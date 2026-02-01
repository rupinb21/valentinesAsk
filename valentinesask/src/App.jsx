import { useState } from 'react'
import './App.css'
import marie from './assets/Marie4.webp';
import celbration from './assets/celebration.gif';

function App() {
  const [answer, setAnswer] = useState('None')
  
  return (
    <div className="card">
      {answer === 'None' ? (
      <div>
        <img src={marie} alt="Marie" />
        <h1>Will you be my valentine??</h1>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center' }}>
          <button className ="yes" onClick={() => setAnswer('Yes')}>Yes</button>
          <button className ="no" onClick={() => setAnswer('No')}>No</button>
        </div>
      </div>
    ) : (
    <div>
      {answer === 'No' ? <h1>Too Bad, you're still my valentine ❤️</h1> : <h1>Love you ❤️</h1>}
      <img src={celbration} alt="Celebration" />
    </div>
    )}
    </div>
  )
}

export default App
