import React, { useState } from "react";
import styled from "styled-components";
import Entrada from "./Entrada";
import { useDispatch } from "react-redux";

const BuscarStyled = styled.div``;

function Buscar() {
  const [entrada, setEntrada] = useState("");
  const dispatch = useDispatch();
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
    <BuscarStyled>
      <Entrada
        placeholder="Escribe el nombre del Pais"
        value={entrada}
        onChange={filtroPorNombre}
      />
      {entrada && <button onClick={limpiarEntrada}>Limpiar</button>}
    </BuscarStyled>
  );
}

export default Buscar;
