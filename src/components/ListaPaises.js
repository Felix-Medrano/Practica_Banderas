import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Pais from "./Pais";

const ListaPaisesStyled = styled.div`
  display: grid;
  background: var(--fondo);
  grid-row-gap: 2.3rm;
  justify-content: center;
  padding: 4em 2em;
`;

const ListaPaises = () => {
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

  return (
    <ListaPaisesStyled>
      
      {/* {paisesPorNombre.length === 0 && entrada && (
        <p>
          <strong>{entrada}</strong> No se encontro
        </p>
      )} */}
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
