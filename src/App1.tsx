import Card from './Card'
import "./App.css";

function App1() {
  return (
    <>
      <h1>Willkommen</h1>

      <div className="cardContainer">
        <Card title="peter" text="Das ist Peter" image="https://picsum.photos/200/300" />
        <Card title="susi" text="super susi" />
        <Card title="paul" text="super paul" />
      </div>
    </>
  )
}

export default App1