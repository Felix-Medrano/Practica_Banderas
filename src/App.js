import React from "react";
import "./App.css";
import Pais from "./components/Pais";

const bandera =
  "https://image.freepik.com/foto-gratis/bandera-mexico-representa-estilo-acuarela-liquida-aislado-blanco_76080-7998.jpg";

function App() {
  return (
    <div className="App">
      <Pais
        bandera={bandera}
        nombre="Mexico"
        capital="CDMX"
        poblacion={1234567890}
        region="America"
      />
    </div>
  );
}

export default App;
