import React from "react";
import "./App.css";
import ListaPaises from "./components/ListaPaises";
import { Provider } from "react-redux";
import { createStore } from "redux";

const estadoInicial = {
  listaPaises: [],
};

function reductor(estado, accion) {
  // console.log(accion)
  switch (accion.type) {
    case "SET_LISTA_PAISES": {
      return { ...estado, listaPaises: accion.payload };
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
        <ListaPaises />
      </div>
    </Provider>
  );
}

export default App;
