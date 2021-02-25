import React from "react";
import "./App.css";
import ListaPaises from "./components/ListaPaises";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Region from "./components/Region";

const estadoInicial = {
  listaPaises: [],
  paisesPorNombre: [],
  paisesPorRegion: [],
  filtroPorRegion: "",
};

function reductor(estado, accion) {
  // console.log(accion)
  switch (accion.type) {
    case "SET_LISTA_PAISES": {
      // return { estado, listaPaises: accion.payload };
      return { ...estado, listaPaises: accion.payload };
    }
    case "FILTRO_POR_NOMBRE": {
      const paisesPorNombre = (estado.listaPaises || []).filter((pais) =>
        pais.name.toLowerCase().includes(accion.payload.toLowerCase())
      );
      return { ...estado, paisesPorNombre };
    }
    case "FILTRO_POR_REGION": {
      const regionSeleccionada = accion.payload;
      if ("" === regionSeleccionada) {
        console.log("no pasa datos");
        return { ...estado, paisesPorRegion: [], filtroPorRegion: "" };
      }
      // TODO: No pasa datos a paisesPorRegion, AREGLAR!!!!!!!
      const paisesPorRegion = estado.listaPaises.filter(
        (pais) => pais.region === regionSeleccionada
      );
      return {
        ...estado,
        paisesPorRegion,
        filtroPorRegion: regionSeleccionada,
      };
    }
    default: {
      return estado;
    }
  }
}

const store = createStore(reductor, estadoInicial);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Region />
        <ListaPaises />
      </div>
    </Provider>
  );
}

export default App;
