import React from 'react';
import '../pages/Footer.css';
import facebook from '../assets/Redes-sociales/facebook.png';
import instagram from '../assets/Redes-sociales/instagram.png';
import youtube from '../assets/Redes-sociales/youtube.png';
import linkedin from '../assets/Redes-sociales/linkedin.png';

function PieDePagina () {
    return (
      <div className='contenedor-piedepagina'>
        <ul className='terminos-legales'>
          <li><a href='x'>Legal Warning</a></li>
          <li><a href='x'>Privacy Policy</a></li>
          <li><a href='x'>Cookies Policy</a></li>
          <li><a href='x'>Quality Policy</a></li>
        </ul>	
        <p className='titulo-footer'>The Rick and Morty</p>
        <div className='redes-sociales'>
        <img src={facebook} href='x' />
        <img src={instagram} href='x' />
        <img src={youtube} href='x' />
        <img src={linkedin} href='x' />
        </div>          
        <ul className='enlaces de contacto'>
          <li><a href='x'>Blog</a></li>
          <li><a href='x'>Contact</a></li>
          <li><a href='x'>FAQs</a></li>
        </ul>	
        <p className='copyright'>&copy Copyright Mayerlin Rojas - 2023</p>
      </div>
    );
}

export default PieDePagina;
