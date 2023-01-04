import React from 'react'
import ReactDOM from 'react-dom/client'

export default function App() {
  return (
    <div>
      <h1>this is App.js</h1>
    </div>
  )
}

const app = ReactDOM.createRoot(document.getElementById('app'))
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
