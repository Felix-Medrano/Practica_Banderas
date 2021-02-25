import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pais from "./Pais";
import { useSelector, useDispatch } from "react-redux";

const ListaPaisesStyled = styled.div`
  display: grid;
  background: var(--fondo);
  grid-row-gap: 2.3rm;
  justify-content: center;
  padding: 4em 2em;
`;

const ListaPaises = () => {
  const [entrada, setEntrada] = useState("");
  const dispatch = useDispatch();
  const paisesPorNombre = useSelector((estado) => estado.paisesPorNombre);
  const listaPaises = useSelector((estado) => {
    if ("" !== estado.filtroPorRegion) {
      return estado.paisesPorRegion;
    }
    if (paisesPorNombre.length > 0) {
      return paisesPorNombre;
    }
    return estado.listaPaises;
  });
  // const listaPaises, setListaPaises] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((lista) => {
        dispatch({
          type: "SET_LISTA_PAISES",
          payload: lista,
        });
        // setListaPaises(data);
      })
      .catch(() => {
        console.log("Falla");
      });
  }, [dispatch]);
  const filtroPorNombre = (e) => {
    setEntrada(e.target.value);
    dispatch({
      type: "FILTRO_POR_NOMBRE",
      payload: e.target.value,
    });
  };
  const limpiarEntrada = () => {
    dispatch({
      type: "FILTRO_POR_NOMBRE",
      payload: "",
    });
    setEntrada("");
  };
  return (
    <ListaPaisesStyled>
      <input type="text" value={entrada} onChange={filtroPorNombre} />
      {entrada && <button onClick={limpiarEntrada}>Limpiar</button>}
      {paisesPorNombre.length === 0 && entrada && (
        <p>
          <strong>{entrada}</strong> No se encontro
        </p>
      )}
      {listaPaises.map(
        ({ name, flag, capital, population, region, nativeName }) => {
          return (
            <Pais
              bandera={flag}
              nombre={name}
              nativeName={nativeName}
              capital={capital}
              poblacion={population}
              region={region}
              key={name}
            />
          );
        }
      )}
    </ListaPaisesStyled>
  );
};

export default ListaPaises;
