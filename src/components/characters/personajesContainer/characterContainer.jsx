import React from 'react'
import '../../../pages/characters/cardcharacter/carcharacter.scss'
import Cardcharacters from '../cardcharacter/carcharacter'
import BasicPagination from '../paginacionCharacter/CharacterPaginacion'

const CharacterContainer = ( {personajes} ) => {
  return (
    <>
      <div className='characters-container'>
        {personajes.map ( p =>           
          <Cardcharacters 
            key = {p.id}
            id = {p.id}
            name = {p.name}
            status = {p.status}
            species = {p.species}
            gender = {p.gender}          
            image = {p.image} 
            created = {p.created}           
          />)        
        }       
      </div>
      <BasicPagination />      
    </>
  )
}

export default CharacterContainer