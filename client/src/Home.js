import React from 'react';
import logo from './download.png';
import './App.css';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag,faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return ( 
    <div className="body1">
 <header>
     <nav className="nav1"> 
         <img className="logoo" src= {logo} alt="logo"/>
         <ul className="nav-links">
             <li>
                 <input type="text" name="search" placeholder="Search.." className="searchP" />
                 <FontAwesomeIcon icon={faSearch} />
             </li>
             <li><FontAwesomeIcon icon={faShoppingBag} /></li>
         </ul>
     </nav>
 </header>





         <div className="mainn">

<main>
    <div className="welcome">
        <div className="welcomeText" > 
            We are <span className="specialText"> Frugals Targets</span>
        </div>
        <div className="welcomeButton">
           <Link to='/shop'>
           <button className="shopButton" type="button">
               Shop now <span> <FontAwesomeIcon icon={faAngleDoubleRight} /> </span>
           </button>
           </Link> 
        </div>
    </div>
    {/* <div className="Aboutus">

        <div className="AboutusText" > 
            <h1>We are Frugals Targets</h1>
            Frugals Tragets is a 
        </div>
    </div> */}

</main>


</div>



    
    </div>
   
      
    );
  }
export default Home;