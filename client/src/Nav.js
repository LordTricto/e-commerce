import React from 'react';
import logo from './download.png';
import './App.css';


function Nav() {
    return ( 

    <div>
 
        <header>
            <nav className="nav1"> 
                <img className="logoo" src= {logo} alt="logo"/>
                <ul className="nav-links">
                    <li>
                        <input type="text" name="search" placeholder="Search.."/>
                        <button type="submit">Search</button>
                    </li>
                    <li>bag</li>
                </ul>
            </nav>
        </header>

    </div>
      
    );
  }
export default Nav;