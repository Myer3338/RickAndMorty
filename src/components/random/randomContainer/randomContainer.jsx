import React from 'react'
import PersonajeRandom from '../personajeRandom/personajeRandom'

const RandomContainer = ( { randomPersonaje } ) => {
  return (
    <>
        {randomPersonaje.map( rp => 
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
        )
        }
    </>
  )
}

export default RandomContainer