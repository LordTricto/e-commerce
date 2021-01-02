import React, { useEffect } from 'react';
import image1 from './PHOTO-2020-11-30-22-45-52.jpg';
import './App.css';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import Footerrr from './footer';
import Navbar from './navbar';
import { connect } from "react-redux";
import Carditem from './cardItem';
import firebase from 'firebase';
import {app} from './base';
import { useDispatch } from 'react-redux'; 
import { REMOVE, ADD, DECREASE } from './actions';
import { useSelector } from 'react-redux';
import { selectCartTotal } from './cartSelector';

const db = app.firestore()

const Card = ( {cart, total, quantity}) => {
    console.log(quantity);
    const auth = firebase.auth();
    auth.signInAnonymously();
    const dispatch = useDispatch();

    const [items, setItems] = React.useState([]);
   

    useEffect(() => {
        const fetchItems = async () => {
            const itemsMatch =  db.collection('items');
            const itemsCollection = await itemsMatch.where('name','==',`${cart.name}`).get();
            setItems(itemsCollection.docs.map(doc => {
                return doc.data()
            }))
        }
        fetchItems()
    }, [])

    const removeItem = () =>{
        items.map(item =>{
            dispatch({ type: REMOVE, payload: {name: item.name,
                price:item.price, 
                description:item.desciption, 
                item_img:item.item_img} })
        });
        
    }


    if(cart.length === 0){
        return(
            <div className="">    
                <Navbar />
                <nav className="nav3">
                    <h3><Link to='/'> Home </Link> <FontAwesomeIcon icon={faAngleDoubleRight} />  <Link to='/Shop'> Shop </Link> <FontAwesomeIcon icon={faAngleDoubleRight} /> <Link to='/shop/locs'> Locus </Link> <FontAwesomeIcon icon={faAngleDoubleRight} /> <span className="specialText2"> </span></h3> 
                </nav>
                <div className="cardMain">
                    <main>
                        <h2> Your Bag</h2>
                        is currently empty
                    </main>
                </div>
                <Footerrr />
            </div>
        )
    } else{

        return ( 
            <div className="">    
                <Navbar />
                <nav className="nav3">
                    <h3><Link to='/'> Home </Link> <FontAwesomeIcon icon={faAngleDoubleRight} />  <Link to='/Shop'> Shop </Link> <FontAwesomeIcon icon={faAngleDoubleRight} /> <Link to='/shop/locs'> Locus </Link> <FontAwesomeIcon icon={faAngleDoubleRight} /> <span className="specialText2"> </span></h3> 
                </nav>
                <div className="cardMain">
                    <main>
                        <div className="cardHead">
                            <div className="head1">
                                <h2> Product </h2>
                            </div>
                            <div className="head2">
                                <div className="hquantity">
                                <h2> Quantity </h2>
                                </div>
                                <div className="hsubTotal">
                                <h2> Subtotal </h2>
                                </div>
                            </div>
                        </div>
                        {cart.map(item =>{
                            return <div key = {item.name} className="cardBody">
                            <div className="card1">
                                    <div className="cardImg">
                                    <img className="image1" src= {item.item_img} alt="Locs"/>
                                    </div>
                                    <div className="cardDetails">
                                        <div className="cardName">
                                        {item.name}
                                        </div>
                                        <div className="cardPrice">Price: ₦{item.price}</div>
                                        <div className="cardRemove">
                                            <span onClick={() =>
                                             {dispatch({
                                                 type: REMOVE, payload: {name: item.name, price:item.price, description:item.desciption, item_img:item.item_img} 
                                                 })}} className="specialText2">Remove</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card2">
                                    <div className="quantity">
                                        <span onClick={() =>
                                            {dispatch({
                                                type: DECREASE, 
                                                payload: {name: item.name, price:item.price,
                                                description:item.desciption, item_img:item.item_img} 
                                            })}} 
                                            className="lArrow"> {`<`} </span>
                                            
                                        <span> {item.quantity} </span>
                                                
                                        <span onClick={() =>
                                             {dispatch({
                                                type: ADD, 
                                                payload: {name: item.name, price:item.price, 
                                                    description:item.desciption, item_img:item.item_img} 
                                            })}} 
                                            className="rArrow" > {`>`} </span>

                                    </div>
                                    <div className="subTotal">
                                    <h2> ₦{item.price} </h2>
                                    </div>
                                </div> 
                            </div> 
                        })}
                        <div className="cardEnd">
                            <div className="cardEndLine"></div>
                            <div className="totalEnd">
                                <div className="total" > Total </div>
                                <div className="totalPrice"> ₦{total} </div>
                            </div>
                            <div className="cardCheckOut" >
                                <Link  to='/checkout'>
                            <form >
                                        <button className="addButton" type="submit" >
                                             Proceed to Checkout <span> <FontAwesomeIcon icon={faLongArrowAltRight} /> </span>
                                        </button>
                                        </form>
                                        </Link>
                            </div>
                        </div>
                    </main>
                </div>
                <Footerrr />
            </div>
        );
    }
    
  }
  function mapStateToProps(store){
   return {cart: store.cart, total:selectCartTotal(store), quantity:store}
}
export default connect(mapStateToProps) (Card);