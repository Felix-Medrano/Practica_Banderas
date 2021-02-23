import React from "react";


export default function Pais({ bandera, nombre, capital, poblacion, region }) {
  return (
    <div>
      Pais 2<h2>{nombre}</h2>
      {console.log("bandera ", bandera)}
      <img scr={bandera} alt="" />
      <h3>{capital}</h3>
      <h3>{capital}</h3>
      <h3>{poblacion}</h3>
      <h3>{region}</h3>
    </div>
  );
}
