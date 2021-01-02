import React, { useEffect } from 'react';
import logo from './download.png';
import image1 from './PHOTO-2020-11-30-22-45-52.jpg';
import image2 from './PHOTO-2020-11-30-22-46-37.jpg';
import image3 from './PHOTO-2020-11-30-22-46-31.jpg';
import image4 from './PHOTO-2020-12-01-23-01-24.jpg';
import './App.css';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag, faAngleDoubleRight, faAngleUp, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faCopyright} from '@fortawesome/free-regular-svg-icons';
import Footerrr from './footer';
import Navbar from './navbar';
import { useParams } from 'react-router-dom';
import {app} from './base';
import firebase from 'firebase';
import { connect } from "react-redux";
import { ADD } from './actions';
import { useDispatch } from 'react-redux';


const db = app.firestore()

function ProductDetails( { match }) {

    const auth = firebase.auth();
    auth.signInAnonymously();
console.log(match);

    const dispatch = useDispatch();
    const [items, setItems] = React.useState([]);
   

    useEffect(() => {
        console.log(match);
        const fetchItems = async () => {
            const itemsMatch =  db.collection('items');
            const itemsCollection = await itemsMatch.where('name','==',`${match.params.productName}`).get();
            setItems(itemsCollection.docs.map(doc => {
                return doc.data()
            }))
        }
        fetchItems()
    }, [])
    
    const addItem = () =>{
        items.map(item =>{
            dispatch({ type: ADD, payload: {name: item.name,
                price:item.price, 
                description:item.desciption, 
                item_img:item.item_img} })
        });
        
    }

    
    return ( 
        <div className="">
            <Navbar />
            {items.map(item =>{
                   return  <div className="mainn" key={item.name}>
                                <nav className="nav3">
                                    <h3><Link to='/'> Home </Link> <FontAwesomeIcon icon={faAngleDoubleRight} />  <Link to='/Shop'> Shop </Link> <FontAwesomeIcon icon={faAngleDoubleRight} /> <Link to='/shop/locs'> Locus </Link> <FontAwesomeIcon icon={faAngleDoubleRight} /> <span className="specialText2"> {item.name} </span></h3> 
                                </nav>
                                <main>
                                <div className="productsSection">
                                    <div className="dSection1" >
                                        <div className="dSection1Sub1"> 
                                            <div className="dProduct">
                                                <img className="image1" src= {item.item_img} alt="item.name"/>
                                            </div>
                                        </div>
                                        <div className="dSection1Sub2">
                                            <div className="productName"> <h3> {item.name} </h3> </div>
                                            <div className="productPrice"> <h3> Price : ₦{item.price} </h3> </div>
                                            <div className="productAdd">
                                                <input type="number" placeholder="0"/>
                                                <Link to='/shop/product-details/Card'>
                                                    <button className="addButton" type="button" onClick={() => addItem()}>
                                                        Add to Cart <span> <FontAwesomeIcon icon={faShoppingCart} /> </span>
                                                    </button>
                                                </Link>
                                   
                                            </div>
                                            <div className="productDetail">
                                                {item.desciption}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dSection2">
                                        <div className="relatedProductsHead">
                                            Related Products
                                        </div>
                                        <div className="relatedProducts">
                                            <div className="lProductContainer">
                                                <div className="lProductImg" > <img className="image3" src= {image3} alt="Twist"/> </div>
                                                <div className="lProductName" >  <h2> blahdfkn dlfk aeof 'pfoaepofj a'pw;flf </h2> </div>
                                                <div className="lProductPrice" >  <h3> Price : 50,000 </h3> </div>
                                            </div>
                                        <div className="lProductContainer">
                                            <div className="lProductImg" > <img className="image3" src= {image3} alt="Twist"/> </div>
                                            <div className="lProductName" >  <h2> blahdfkn dlfk aeof 'pfoaepofj a'pw;flf </h2> </div>
                                            <div className="lProductPrice" >  <h3> Price : 50,000 </h3> </div>
                                        </div>
                                        <div className="lProductContainer">
                                            <div className="lProductImg" > <img className="image3" src= {image3} alt="Twist"/> </div>
                                            <div className="lProductName" >  <h2> blahdfkn dlfk aeof 'pfoaepofj a'pw;flf </h2> </div>
                                            <div className="lProductPrice" >  <h3> Price : 50,000 </h3> </div>
                                        </div>
                                        <div className="lProductContainer">
                                            <div className="lProductImg" > <img className="image3" src= {image3} alt="Twist"/> </div>
                                            <div className="lProductName" >  <h2> blahdfkn dlfk aeof 'pfoaepofj a'pw;flf </h2> </div>
                                            <div className="lProductPrice" >  <h3> Price : 50,000 </h3> </div>
                                        </div>
                                    </div>
                            
                                </div>
                            </div>
                            </main>
                        </div>
                    })}
                <Footerrr />
            </div>
);
}

export default connect() (ProductDetails);