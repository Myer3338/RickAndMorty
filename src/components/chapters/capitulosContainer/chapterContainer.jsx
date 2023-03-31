import React from 'react'
import '../../../pages/chapters/capitulosContainer/chapterContainer.scss'
import Cardchapter from '../carchapter/carchapter'
import BasicPagination from '../paginacionChapter/paginacionChapter'


const ChapterContainer = ( {capitulos} ) => {
  return (
    <>
      <div className='chapters-container '>
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
      </div>
      <BasicPagination />     
    </>
  )
}

export default ChapterContainer