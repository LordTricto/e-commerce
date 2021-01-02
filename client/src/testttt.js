
import React, { useState , useEffect } from 'react';
    import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
    import './App.css';
    import { selectCartTotal } from './cartSelector';
    import { connect } from "react-redux";
    
   
    const config = {
      reference: (new Date()).getTime(),
      email: 'lammy_idowu@yahoo.com',
      amount: '1000',
      publicKey: 'pk_test_7c6afe2f416184dd8624d85f3678f9e8b2408d52',
  }; 
    

   const  Appp = ( {total}) => {
    
    // const [config, setInfo] = useState ([

    //   {
    //     reference: (new Date()).getTime(),
    //     email: "lammy_idowu@yahoo.com",
    //     amount: total,
    //     publicKey: 'pk_test_7c6afe2f416184dd8624d85f3678f9e8b2408d52',
    // }
    // ]);  
   





        // you can call this function anything
    const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
      };
  
      // you can call this function anything
      const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
      }
  
      const componentProps = {
          ...config,
          text: 'Paystack Button Implementation',
          onSuccess: (reference) => handlePaystackSuccessAction(reference),
          onClose: handlePaystackCloseAction,
      };
  
    
      return (
        <div className="App">
             <PaystackButton {...componentProps} />
             {console.log(componentProps)}
        </div>
      );
    }
    function mapStateToProps(store){
        return { total:selectCartTotal(store) }
     }
    export default connect(mapStateToProps) (Appp);