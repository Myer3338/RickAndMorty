import React from 'react'
import textLogo from '../../assets/images/logo_name.png';
import buttonImage from '../../assets/images/image_button.png';
import arrowImage from '../../assets/images/arrow.png';
import '../../pages/home/home.scss';

const Home = () => {
  return (
    <main className='Main'>
            <section className='left'>
                <img src={textLogo} alt=''></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cupiditate cumque non facere minima neque magni alias natus aut dolore id et ratione, dolorum veniam asperiores nemo, commodi itaque porro?</p>
            </section>
            <section className='right'>
                <h2>PUSH ME</h2>
                <img src={arrowImage} alt='arrow'></img>
                <a href='#' className='actionButton'>
                    <img src={buttonImage} alt=''></img>
                </a>
            </section>
        </main>
  )
}

export default Home