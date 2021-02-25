import React from "react";
import { useDispatch, useSelector } from "react-redux";

const porRegion = (regionSeleccionada) => {
  return {
    type: "FILTRO_POR_REGION",
    payload: { regionSeleccionada },
  };
};

export const Region = () => {
  const dispatch = useDispatch();
  const filtroPorRegion = useSelector((estado) => estado.filtroPorRegion);

  const seleccion = (evento) => {
    const valor = evento.target.value;
    dispatch(porRegion(valor));
  };
  return (
    <select onChange={seleccion} value={filtroPorRegion}>
      <option value="">Mostrar Todo</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europa</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Region;
