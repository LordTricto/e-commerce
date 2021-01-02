import React from 'react';
import logo from './download.png';
import './App.css';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import { selectCartItemsCount } from './cartSelector';
import { useSelector } from 'react-redux';

const  Navbar = ({number}) =>{
    
    const { totalNumberCart } = useSelector(mapStateToProps);
    // console.log(number);
    return ( 
        
        <div className="">
            
            <header>
                <nav className="nav2"> 
                    <img className="logoo" src= {logo} alt="logo"/>
                    <ul className="nav-links">
                    <Link to='/shop/product-details/Card'>
                        <li className="badge1" data-badge={totalNumberCart}><FontAwesomeIcon icon={faShoppingBag}  /></li>
                    </Link>
                    </ul>
                </nav>

            </header>
        </div>    
    );
  }
  const mapStateToProps = (state) => {
     return {number:state.cart.length,
            totalNumberCart: selectCartItemsCount(state)  }
  }
export default connect(mapStateToProps) (Navbar);
