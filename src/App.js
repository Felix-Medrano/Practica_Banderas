import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import ListaPaises from "./components/ListaPaises";
import Region from "./components/Region";
import reductor from "./components/reductor";
import Acciones from "./components/Acciones";

const estadoInicial = {
  listaPaises: [],
  paisesPorNombre: [],
  paisesPorRegion: [],
  filtroPorRegion: "",
};

const store = createStore(reductor, estadoInicial);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Acciones />
        <Region />
        <i className="fas fa-moon"></i>
        <ListaPaises />
      </div>
    </Provider>
  );
}

export default App;
