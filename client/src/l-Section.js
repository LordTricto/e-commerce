import React from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import image3 from './PHOTO-2020-11-30-22-46-31.jpg';


function Sec() {
    return ( 
        <div>
            <Link to='/shop/product-details'>
                <div className="lProductContainer">
                    <div className="lProductImg" > <img className="image3" src= {image3} alt="Twist"/> </div>
                    <div className="lProductName" >  <h2> blahdfkn dlfk aeof 'pfoaepofj a'pw;flf </h2> </div>
                    <div className="lProductPrice" >  <h3> Price : 50,000 </h3> </div>
                </div>
            </Link>
        </div>
    );
}

export default Sec;