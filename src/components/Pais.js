import React from "react";
import styled from "styled-components";


const PaisStyled = styled.div`
  width: 264px;
  text-align:left;
  border-radius:5px;
  overflow: hidden;
  box-shadow: 0 0 8px 2px rgba(0,0,0,.3);
  margin: 1em;
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .detalles{
    padding: 1.5em;
  }
  h2{
    margin: 0;
    margin-bottom: 1rem;
    font-size:20px;
  }
  p{
    margin-bottom: .5rem;
    font-size: .9em;
  }
`;

export default function Pais({ bandera, nombre, nativeName, capital, poblacion, region, bordes}) {
  return (
    <PaisStyled>
    
      <img src={bandera} alt="" />
      <div className="detalles">
        <h2>{nombre}</h2>
        <p><strong>Nombre Nativo: </strong>{nativeName}</p>
        <p><strong>Capital: </strong>{capital}</p>
        <p><strong>Poblacion: </strong>{poblacion}</p>
        <p><strong>Region: </strong>{region}</p>
      </div>
    </PaisStyled>
  );
}
