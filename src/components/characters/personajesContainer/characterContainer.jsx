import React from 'react'
import '../../../pages/characters/characters.scss'
import Cardcharacters from '../cardcharacter/carcharacter'
import backButtonImage from '../../../assets/images/back_button.svg';
import scrollTopImage from '../../../assets/images/scroll_top_icon.svg';

const CharacterContainer = ( {personajes} ) => {
  return (
    <>
      <section className='characters-container'>
        <div className='characters-title'>
            <a className='back-button'>
                <img src={backButtonImage} />
            </a>
            <h2>Characters</h2>
        </div>
        <div className='characters-card-container'>
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
              origin = {p.origin.name}
              location = {p.location.name}
            />)        
          }
        </div>
      </section>
      <div className='scroll-top-container'>
          <a>
              <img src={scrollTopImage} />
          </a>
      </div>
    </>
  )
}

export default CharacterContainer