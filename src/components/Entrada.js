import React from "react";
import styled from "styled-components";

// se puede poner styled.label para que al hacer click en el objeto i entre al Input
const EntradaStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.3);
  margin: 0 16px;
  border-radius: 5px;
  input {
    padding: 0;
    border-radius: 5px;
    flex: 1;
    width: 100%;
    height: 30px;
    border: none;
    font-size: 14px;
    text-align: center;
    &::-webkit-input-placeholder {
      color: #4455;
    }
  }
  i {
    width: 30px;
    color: #4455;
  }
`;

function Entrada({ ...props }) {
  return (
    <EntradaStyled>
      <i className="fas fa-search"></i>
      {/* <i class="far fa-sun"></i> icono del sol para el cambio*/}
      <input type="text" {...props} />
    </EntradaStyled>
  );
}

export default Entrada;
