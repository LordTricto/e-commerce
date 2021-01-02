import React from 'react';
import logo from './download.png';
import './App.css';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import image1 from './PHOTO-2020-11-30-22-45-52.jpg';

const  CardItem = ({amount, items}) =>{
    
    return ( 
        
        <div className="cardBody">
                    <div className="card1">
                            <div className="cardImg">
                            <img className="image1" src= {image1} alt="Locs"/>
                            </div>
                            <div className="cardDetails">
                                <div className="cardName">
                                    blahdfkn dlfk aeof 'pfoaepofj a'pw;flf
                                </div>
                                <div className="cardPrice">Price: ₦50,000</div>
                                <div className="cardRemove">
                                    <span className="specialText2">Remove</span>
                                </div>
                            </div>
                        </div>
                        <div className="card2">
                            <div className="quantity">
                            <input type="number" placeholder="1"/>
                            </div>
                            <div className="subTotal">
                            <h2> ₦50,000 </h2>
                            </div>
                        </div> 
                    </div>
    );
  }
  const mapStateToProps = (state) => {
    //   console.log(state);
     return {amount:state.amount}
  }
export default connect(mapStateToProps) (CardItem);