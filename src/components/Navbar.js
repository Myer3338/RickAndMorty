import React from 'react';
import '../pages/Navbar.css';

function Navegacion() {
    return (
        <div className='contenedor-encabezado'>
            <nav>
                <ul className='navegacion'>
                    <li className='elementos-navbar'><a href=''>Home</a></li>
                    <li className='elementos-navbar'><a href=''>Chapters</a></li>
                    <li className='elementos-navbar'><a href=''>Characters</a></li>
                    <li className='elementos-navbar'><a href=''>About</a></li>
                    <li className='elementos-navbar'><a href=''>Contact Us</a></li>
                </ul>
            </nav>
        </div>        
    );
}

export default Navegacion;