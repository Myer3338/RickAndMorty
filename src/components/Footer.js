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
          <li><a href=''>Legal Warning</a></li>
          <li><a href=''>Privacy Policy</a></li>
          <li><a href=''>Cookies Policy</a></li>
          <li><a href=''>Quality Policy</a></li>
        </ul>	
        <p className='titulo-footer'>The Rick and Morty</p>
        <div className='redes-sociales'>
        <img src={facebook} href='' />
        <img src={instagram} href='' />
        <img src={youtube} href='' />
        <img src={linkedin} href='' />
        </div>          
        <ul className='enlaces de contacto'>
          <li><a href=''>Blog</a></li>
          <li><a href=''>Contact</a></li>
          <li><a href=''>FAQs</a></li>
        </ul>	
        <p className='copyright'>&copy Copyright Mayerlin Rojas - 2023</p>
      </div>
    );
}

export default PieDePagina;
