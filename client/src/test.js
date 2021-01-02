import React, { useEffect, useState, Component, useReducer } from 'react';
import {app} from './base';
import './App.css';
import { Link} from 'react-router-dom';
import Axios from "axios";
import firebase from 'firebase';
import Footerrr from './footer';
import Navbar from './navbar';



const db = app.firestore()

function Test(){
    


const auth = firebase.auth();

auth.signInAnonymously();

const [fileUrl, setfileUrl] = React.useState(null);
const [items, setItems] = React.useState([]);

const onFileChange = async(e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setfileUrl( await fileRef.getDownloadURL());
}
const onSubmit = (e) => {
    e.preventDefault()

    const itemType = e.target.itemType.value;
    const itemName =  e.target.itemName.value;
    const itemPrice =  e.target.itemPrice.value;
    const itemDescription =  e.target.itemDescription.value;

    db.collection("items").doc(itemName,itemPrice,itemDescription).set({
        type: itemType,
        name: itemName,
        price:itemPrice,
        desciption:itemDescription,
        item_img: fileUrl
    })
}
    
   useEffect(() => {
       const fetchItems = async () => {
           const itemsCollection = await db.collection('items').get();
           setItems(itemsCollection.docs.map(doc => {
               return doc.data()
           }))
       }
       fetchItems()
   }, [])

        return ( 
            <div>
                <Navbar />
        <form onSubmit={onSubmit}>
                <input type="file" onChange = {onFileChange}/> 
                <input type="text" name="itemType" placeholder="Type"/> 
                <input type="text" name="itemName" placeholder="Name"/> 
                <input type="text" name="itemPrice" placeholder="Price"/>  
                <input type="text" name="itemDescription" placeholder="Description"/>  
                <button>Upload</button>
                </form>


            <ul>
                {items.map(item =>{
                    return <li key={item.price}>
                        <img width= "100" height= "100 "src={item.item_img} alt={item.name}/>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.desciption}</p>
                    </li>
                })}

            </ul>
            <Footerrr />
            </div>

            
           
           )
   
}
export default Test;