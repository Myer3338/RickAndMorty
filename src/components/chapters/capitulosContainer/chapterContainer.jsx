import React from 'react'
import Cardchapter from '../carchapter/carchapter'
import backButtonImage from '../../../assets/images/back_button.svg';
import scrollTopImage from '../../../assets/images/scroll_top_icon.svg';

const ChapterContainer = ( {capitulos} ) => {
  return (
    <>
      <section className='chapters-container'>
        <div className='chapters-title'>
            <a className='back-button'>
                <img src={backButtonImage} />
            </a>
            <h2>Chapters</h2>
        </div>
        <div className='chapters-card-container'>
          {capitulos.map ( c =>           
            <Cardchapter
              key = {c.id}
              id = {c.id}
              name = {c.name}
              air_date = {c.air_date}
              episode = {c.episode}
              characters = {c.characters} 
              created = {c.created}
              image = {c.image}
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

export default ChapterContainer