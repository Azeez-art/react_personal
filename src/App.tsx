import './App.css'
import { Card, Card2, Card3, Card4 } from './Card'

function App() {
  return (
    <div>
      <h1>Sehenswürdigkeiten</h1>
      <div className="card-container">
        <Card />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
    </div>
  )
}

export default App