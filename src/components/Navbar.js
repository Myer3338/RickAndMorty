import React from 'react';
import '../pages/Navbar.css';

function Navegacion() {
    return (
        <div className='contenedor-encabezado'>
            <nav>
                <ul className='navegacion'>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Chapters</a></li>
                    <li><a href=''>Characters</a></li>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Contact Us</a></li>
                </ul>
            </nav>
        </div>        
    );
}

export default Navegacion;