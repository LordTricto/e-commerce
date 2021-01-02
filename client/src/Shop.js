import React, { useEffect, useState } from 'react';
import image1 from './PHOTO-2020-11-30-22-45-52.jpg';
import image2 from './PHOTO-2020-11-30-22-46-37.jpg';
import image3 from './PHOTO-2020-11-30-22-46-31.jpg';
import image4 from './PHOTO-2020-12-01-23-01-24.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Axios from "axios";
import Footerrr from './footer';
import Navbar from './navbar';
import './App.css';


function Shop() {
    

    useEffect(() => {
        // Axios.get("http://localhost:3001/").then((response) => {
        //     setLocsList(response.data);
          
        //     });
            // console.log(cart.length);
    }, []);
    
    return ( 

        <div>
            <Navbar />
            <div className="mainn">
            <nav className="nav3">
                    <h3><Link to='/'> Home </Link> <span className="specialText2"> <FontAwesomeIcon icon={faAngleDoubleRight} />   Shop </span> </h3> 
                </nav>
                <main>
                    <div>
                        <div className="categories">
                            <h1>Categories</h1>
                            <div className="headTitle"></div>
                            <div className="sSection1">
                                <div className="product locs" > <img className="image1" src= {image1} alt="Locs"/> <Link to='/shop/locs'> <h2> Locs </h2> </Link> </div>
                                <div className="product twist" > <img className="image3" src= {image3} alt="Twist"/> <Link to='/'> <h2> Twist </h2> </Link> </div>
                                <div className="product weaves" > <img className="image4" src= {image4} alt="Weaves"/> <Link to='/'> <h2> Weaves </h2> </Link> </div>
                                <div className="product braids" > <img className="image2" src= {image2} alt="Braids"/> <Link to='/'> <h2> Braids </h2> </Link> </div>
                            </div>
                        </div>
                    </div>
       
                </main>
            </div>
            <Footerrr />
        </div>
    );
  }
export default Shop;