import React from "react";
import styled from "styled-components";

// TODO: Continuar en el 24:30

const PaisStyled = styled.div`
  width: 264px;
  border: 1px solid gray;
  text-align:left;
  border-radius:5px;
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
    margin-bottom: 8px;
    font-size:20px;
  }
  p{
    border: 1px solid red;
    margin: 5px 0 5px 0;
    font-size:15px;
  }
`;

export default function Pais({ bandera, nombre, capital, poblacion, region }) {
  return (
    <PaisStyled>
    
      <img src={bandera} alt="" />
      <div className="detalles">
        <h2>{nombre}</h2>
        <p><strong>Capital: </strong>{capital}</p>
        <p><strong>Poblacion: </strong>{poblacion}</p>
        <p><strong>Region: </strong>{region}</p>
      </div>
    </PaisStyled>
  );
}
