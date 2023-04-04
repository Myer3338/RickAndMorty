import React from 'react'
import PersonajeRandom from '../personajeRandom/personajeRandom'
import backButtonImage from '../../../assets/images/back_button.svg';
import '../../../pages/random/random.scss'
import actualizar from '../../../assets/images/random/right_image.png'
import {  NavLink } from "react-router-dom";

const RandomContainer = ( { randomPersonaje } ) => {  
  const  rp = randomPersonaje[Math.round(Math.random() * (randomPersonaje.length - 1))]
  if (!rp) {
    return;
  }
  return (
    <>
    <section className='characters-container'>    
      <div className='encabezado'>
        <div className='characters-title'>
            <a className='back-button'>
                <img src={backButtonImage} />
            </a>
          <section className='left'>
            <h2>Characters</h2>
          </section>       
        </div>
        <section className='right'>
        <a className='actionButton' style={{cursor: "pointer"}} onClick={() => window.location.reload()}>
          <img src={actualizar} alt=''></img>
        </a>          
        </section>
      </div>
      
      <div className='characters-card-container'>
      {  <PersonajeRandom 
          key = {rp.id}
          id = {rp.id}
          name = {rp.name}
          status = {rp.status}
          species = {rp.species}
          gender = {rp.gender}          
          image = {rp.image} 
          created = {rp.created}
          origin = {rp.origin.name}
          location = {rp.location.name}/>        
      }
      </div>
    </section>       
    </>
  )
}

export default RandomContainer