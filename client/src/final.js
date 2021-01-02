import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
    import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
    import './App.css';
    import { selectCartTotal } from './cartSelector';
    import { connect } from "react-redux";
    import Footerrr from './footer';
    import CheckOut from './CheckOut';
import Navbar from './navbar';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import image from './pexels-pixabay-259200.jpg';

import Cities from'./cities';


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



function Final( {total , info}) {
    const history = useHistory();


        // you can call this function anything
        const handlePaystackSuccessAction = (reference) => {
            // Implementation for whatever you want to do with reference and after success call.
            history.push('/');
            console.log(reference);
          };
      
          // you can call this function anything
          const handlePaystackCloseAction = () => {
            // implementation for  whatever you want to do when the Paystack dialog closed.
            console.log('closed')
          }
      
          const componentProps = {
              ...info,
              text: 'PAY',
              onSuccess: (reference) => handlePaystackSuccessAction(reference),
              onClose: handlePaystackCloseAction,
          };
      
         
    
return (
        <div>
            <Navbar />

            <div  className="paymentDetails">
            
            <PaystackButton {...componentProps} className="payButton" /> 

            </div>

            <Footerrr />
            
        </div>
      );
}

function mapStateToProps(store){
    return { total:selectCartTotal(store) }
}
export default connect(mapStateToProps) (Final);