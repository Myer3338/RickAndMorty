import React from 'react'
import PersonajeRandom from '../personajeRandom/personajeRandom'
import '../../../pages/random/randomContainer/randomContainer.scss'

const RandomContainer = ( { randomPersonaje } ) => {  
 
  const  rp = randomPersonaje[Math.round(Math.random() * (randomPersonaje.length - 1))]
  console.log(rp);
    if (!rp) {
      return;
    }
  return (
    <>
      <div className='contenedorPersonajeRandom'>
      {
          <PersonajeRandom 
              key = {rp.id}
              id = {rp.id}
              name = {rp.name}
              status = {rp.status}
              species = {rp.species}
              gender = {rp.gender}          
              image = {rp.image} 
              created = {rp.created}  
          />        
        }
      </div>        
    </>
  )
}

export default RandomContainer