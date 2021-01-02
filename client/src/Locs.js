import React, { useEffect }  from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faAngleUp, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Footerrr from './footer';
import Navbar from './navbar';
import Sec from './l-Section';
import {app} from './base';
import firebase from 'firebase';
import { connect } from "react-redux";
import { ADD } from './actions';
import { useDispatch } from 'react-redux';



const db = app.firestore();


function Locs({cart}) {

    const auth = firebase.auth();
    auth.signInAnonymously();
    const dispatch = useDispatch();
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const itemsMatch =  db.collection('items');
            const itemsCollection = await itemsMatch.where('type','==','locs').get();
            setItems(itemsCollection.docs.map(doc => {
                return doc.data()
            }))
        }
        fetchItems()
    }, [])
 
    const addItem = () =>{
        dispatch({ type: ADD, payload: {items} })
    }

    return ( 
        <div className="">  
            <Navbar />
            <div className="mainn">
                <nav className="nav3">
                    <h3><Link to='/'> Home </Link> <FontAwesomeIcon icon={faAngleDoubleRight} />  <Link to='/Shop'> Shop </Link> <span className="specialText2"> <FontAwesomeIcon icon={faAngleDoubleRight} /> Locs </span></h3> 
                </nav>
                <main>
                    <div className="lProducts">
                        <div className="lSection1">
                            <div className="locusHeadSection">
                                <div className="sorting"> All Products</div>
                                <div className="dropDown">
                                    <button className="dropButton">Sort <span><FontAwesomeIcon icon={faAngleUp} /></span></button>
                                    <ul className="dropContent">
                                        <li><a href="/">New In</a></li>
                                        <li><a href="/">Price: High to Low</a></li>
                                        <li><a href="/">Price: Low to High</a></li>
                                    </ul>
                                </div>
                        
                            </div>
                            <div className="headTitle1"></div>
                        </div>
                        <div className="lSection2">   
                            {items.map(item =>{
                                return <div key={item.name}>
                                            <Link key={item.name} {...item} to={`/shop/locs/${item.name}`}>
                                                <div className="lProductContainer">
                                                    <div className="lProductImg" > <img className="image3" src= {item.item_img} alt="{item.name}"/> </div>
                                                    <div className="lProductName" >  <h2> {item.name}</h2> </div>
                                                    <div className="lProductPrice" >  <h3> ₦{item.price} </h3> </div>
                                                    
                                                </div>
                                            </Link>
                                            <button className="addButton" type="button" onClick={() =>
                                             {dispatch({
                                                 type: ADD, payload: {name: item.name, price:item.price, description:item.desciption, item_img:item.item_img} 
                                                 })}}>
                                                        Add to Cart <span> <FontAwesomeIcon icon={faShoppingCart} /> </span>
                                            </button>
                                        </div>
                            })}
                        </div>
                    </div>
                    {/* <div className="noProductAvail">
                        <div className="lSection4">
                            <div className="noP"> 1 </div>
                            <div className="noP"> 2 </div>
                            <div className="noP"> 3 </div>
                            <div className="noP"> - </div>
                        </div>  
                    </div> */}
                </main>
            </div>
            <Footerrr />
        </div>

);
}
function mapStateToProps(store){
    return {cart: store, total:store.total}
}
export default connect(mapStateToProps) (Locs);