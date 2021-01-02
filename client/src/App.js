import React from 'react';
import './App.css';
import Axios from "axios";
import Home from './Home';
import Shop from './Shop';
import Locs from './Locs';
import ProductDetails from './Product-Details';
import Card from './Card';
import test from './test';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from "redux";
import reducer from './reducer';
import cartItems from "./cart-items";
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import Appp from './testttt';
import CheckOut from './CheckOut';
import Final from './final';
 






//initial store
const initialStore ={
  cart: []
}
// const config = {
//   publicKey: 'pk_test_7c6afe2f416184dd8624d85f3678f9e8b2408d52',
// }; 

//store
const store = createStore(reducer, initialStore);
// const store2 = createStore(checkOutReducer, config);
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });

const App = () => {
  return (

    <Router>
      <div className="App">
       
        <Switch>
          <Provider store={store} >
          <Route path="/" exact component={Home}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/locs" exact component={Locs}/>
          <Route path="/shop/locs/:productName" component={ProductDetails}/>
          <Route path="/shop/product-details/Card" exact component={Card}/>
          <Route path="/test" exact component={test}/>
          <Route path="/testtt" exact component={Appp}/>
          <Route path="/checkout" exact component={CheckOut}/>
          <Route path="/final" exact component={Final}/>
          </Provider>
        </Switch>
      </div>
    </Router>

   
  );
}
export const persistor = persistStore(store);

export default App;
