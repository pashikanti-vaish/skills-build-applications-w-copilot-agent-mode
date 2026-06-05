import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>OctoFit Tracker</h1>
        <p>Track your fitness journey with precision</p>
      </header>
      
      <main className="app-main">
        <div className="welcome-section">
          <h2>Welcome to OctoFit</h2>
          <p>Your personal fitness tracking application</p>
          <button onClick={() => setCount(count + 1)}>
            Counter: {count}
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
