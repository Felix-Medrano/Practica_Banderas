import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Pais from './Pais';

const ListaPaisesStyled=styled.div`
  display: grid;
  background: var(--fondo);
  grid-row-gap: 2.3rm;
  justify-content: center; 
  padding: 4em 2em;
  

`

const ListaPaises = () => {
  const [listaPaises, setListaPaises] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setListaPaises(data)
      console.log(data)
    })
    .catch(()=>{
      console.log('Falla')
    })
  }, []);
  return (
    <ListaPaisesStyled>
      {
        listaPaises.map(({name, flag, capital, population, region, nativeName}) =>{
          return(
          <Pais 
            bandera={flag}
            nombre={name}
            nativeName={nativeName}
            capital={capital}
            poblacion={population}
            region={region}
          />
          )
        })
      }
    </ListaPaisesStyled>
  );
}

export default ListaPaises;
