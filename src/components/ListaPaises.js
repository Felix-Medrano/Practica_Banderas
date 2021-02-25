import React, { useEffect} from "react";
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
  const dispatch = useDispatch();
  const listaPaises = useSelector((estado) => estado.listaPaises);
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
        // prueba
      })
      .catch(() => {
        console.log("Falla");
      });
  }, []);
  return (
    <ListaPaisesStyled>
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
