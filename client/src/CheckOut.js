import React, { useState } from 'react';
import './App.css';
import { selectCartTotal } from './cartSelector';
import { connect, useDispatch } from "react-redux";
import Footerrr from './footer';
import Navbar from './navbar';
import { CountryDropdown, RegionDropdown} from 'react-country-region-selector';
import image from './pexels-pixabay-259200.jpg';
import { CLEAR_CART} from './actions';
import Cities from'./cities';
import { apiInstance } from './Utils';


const config = {
    reference: (new Date()).getTime(),
    email: '',
    amount: '',
    publicKey: 'pk_test_7c6afe2f416184dd8624d85f3678f9e8b2408d52',
}; 

const initialAdressState = {
    fullname:'',
    phonenumber:'',
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip: '',
    country: ''
}



function CheckOut( {total}) {

    const dispatch = useDispatch();
    const [info, setInfo] = useState ({ ...config });
    const [shippingAddress, setshippingAddress] = useState ({ ...initialAdressState });

    const handleConfig = evt => {
        const { name , value} = evt.target;
        setInfo({
            ...info,
            [name] : value,
            amount: total,
        });    
    }

    const handleShipping = evt => {
        const { name , value} = evt.target;
        setshippingAddress({
            ...shippingAddress,
            [name] : value
        });        
    }

    const handleFormSubmit = evt => {
        evt.preventDefault();
        
        if(
            !shippingAddress.fullname || !shippingAddress.phonenumber ||
            !shippingAddress.line1 || !shippingAddress.city ||
            !info.email ||
            !shippingAddress.state || !shippingAddress.country 
        ){
            return;
        }

        apiInstance.post('/payments/create',{
            amount:info.amount,
            email:info.email,
            full_name:shippingAddress.fullname
        }).then(resp => {
            window.location.replace(resp.data);
            console.log(resp.data);
            dispatch({ type: CLEAR_CART})
        });
    }
return (
        <div>
            <Navbar />
           
            <div  className="paymentDetails">
            <div className="d-section">
            <form action="/payments/create" onSubmit = {handleFormSubmit}>

            <div className="d-section1">

                <label> FULL NAME </label>
                <input className= "input"  type= "text" name ="fullname" onChange={evt => handleShipping(evt)} placeholder="Full Name" value= {shippingAddress.fullname}></input>
            
                <label> PHONE NUMBER </label>
                <input className= "input" type= "text" name ="phonenumber" onChange={evt => handleShipping(evt)} placeholder="Phone Number" value= {shippingAddress.phonenumber}></input>
            
                <label> EMAIL </label>
                <input className= "input"  type= "text" name ="email" onChange={evt => handleConfig(evt)} placeholder="Email" value= {info.email}></input>
           
                <label> ADDRESS LINE 1 </label>
                <input className= "input"  type= "text" name ="line1" onChange={evt => handleShipping(evt)} placeholder="Line 1" value= {shippingAddress.line1} ></input>
           
                <label> ADDRESS LINE 2 </label>
                <input className= "input" type= "text" name ="line2" onChange={evt => handleShipping(evt)} placeholder="Line 2" value= {shippingAddress.line2}></input>

                <div className="d-section1-sub1">
                    <div className="d-section1-sub1-sub1">
                        <label className="label-sub"> COUNTRY</label>
                        <CountryDropdown className= "select" onChange={val => handleShipping({
                            target:{
                                name:'country',
                                value: val
                                }
                            })}
                            value= {shippingAddress.country}
                    
                        />
                    </div>
          
                    <div className="d-section1-sub1-sub2">
                        <label className="label-sub"> STATE</label>
            
                        <RegionDropdown className= "select" country={shippingAddress.country} onChange={val => handleShipping({
                            target:{
                                name:'state',
                                value: val
                                }
                            })}
                            value= {shippingAddress.state}
                        />
                    </div>
                </div>
           



                <div className="d-section1-sub2"> 

                    <div className="d-section1-sub2-sub1">
                        <label className="label-sub"> CITY </label>
                        <select className= "select" type= "text" name ="city" onChange={evt => handleShipping(evt)} placeholder="City" value= {shippingAddress.city}>
                            {Cities.map(city => {
                                return <option key={city.value} >{city.value}</option>
                            })}
                        </select>
            
                    </div>

                    <div className="d-section1-sub2-sub2">
                        <label className="label-sub"> ZIP </label> 
                        <input className= "input"  type= "text" name ="zip" onChange={evt => handleShipping(evt)} placeholder="Zip" value= {shippingAddress.zip} ></input>
            
                    </div>

                </div>
            
                <button type="submit" className="payButton"> Continue </button>

            </div>
            
            </form>

            <div className="d-section2">
            
            <img className="d-image" src= {image} alt="Locs"/>

            </div>
            </div>

            </div>

            <Footerrr />
           
        </div>
      );
}

function mapStateToProps(store){
    return { total:selectCartTotal(store) }
}
export default connect(mapStateToProps) (CheckOut);