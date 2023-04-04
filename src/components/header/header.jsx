import React, { useState } from 'react';
import '../../pages/header/header.scss';
import {  NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
    return (
      <header className={open ? 'Header open': 'Header'}>
        <nav>
            <a className="logo" href="/">
            </a>
            <a className="menu" href="#" onClick={() => setOpen(!open)}>
            </a>
        </nav>
        <nav>
          <ul>
            <li>
              <NavLink
                    onClick={() => setOpen(!open)}
                    to={`/`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
            </li>
            <li>
              <NavLink
                    onClick={() => setOpen(!open)}
                    to={`chapters`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Chapters
                  </NavLink>
            </li>
            <li>
              <NavLink
                    onClick={() => setOpen(!open)}
                    to={`characters`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Characters
                  </NavLink>
            </li>
            <li>
              <NavLink
                    onClick={() => setOpen(!open)}
                    to={`about`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    About
                  </NavLink>
            </li>
            <li>
              <NavLink
                    onClick={() => setOpen(!open)}
                    to={`contactUs`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Contact Us
                  </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
}
export default Header;