import React from 'react'
import '../../../pages/chapters/carchapter/carchapter.scss'
import Cardchapter from '../carchapter/carchapter'

const ChapterContainer = ( {capitulos} ) => {
  return (
    <>
      
      {capitulos.map ( c =>           
        <Cardchapter
          key = {c.id}
          id = {c.id}
          name = {c.name}
          air_date = {c.air_date}
          episode = {c.episode}
          characters = {c.characters} 
          created = {c.created} 
        />)        
      }      
    </>
  )
}

export default ChapterContainer