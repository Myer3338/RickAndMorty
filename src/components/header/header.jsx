import React, { useState } from 'react';
import './header.scss';

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className={open ? 'Header open': 'Header'}>
            <nav>
                <a className="logo" href="#">
                </a>
                <a className="menu" href="#" onClick={() => setOpen(!open)}>
                </a>
            </nav>
            <nav>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Chapters</a>
                    </li>
                    <li>
                        <a href='#'>Characters</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Contact Us</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}