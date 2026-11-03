import Card from "./components/card"
import "./App.css";

function App1() {
  return (
    <div className="Website">
      <h1>Willkommen</h1>

      <div className="picture">
        <Card title="Mohammad" text="Das ist der Traum von Mohammad" image="https://media0.faz.net/image/w1240/046706e202ee/w1470h662x0y190/201812/1.7155506/macht-sehr-viel-geld-doch.webp" />
        <Card title="Furkan" text="Das ist der Traum von Furkan" image="https://image.stern.de/35980822/t/DJ/v4/w1440/r1.7778/-/lamborghini-fenomeno-.jpg" />
        <Card title="Franz-Heinzl-Bauer" text="Das ist der Traum von Franz-Heinzl-Bauer" image="https://www.planet-wissen.de/gesellschaft/familie/patchwork_familien/introfamiliengnormgjpg100~_v-gseapremiumxl.jpg" />
      </div>
    </div>
  )
}

export default App1