import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/MainPages/Navbar";
import ProductList from "./components/MainPages/ProductList";
import Cart from "./components/Cart/Cart";
import Details from "./components/MainPages/Details";
import Default from "./components/MainPages/Default";
import Modal from "./components/MainPages/Modal";
import Checkout from "./components/Checkout/Checkout";

class App extends React.Component{
        render() {
                return(
                    <React.Fragment>
                        <Navbar/>
                        <Switch>
                                <Route exact path='/' component={ProductList}/>
                                <Route path='/details' component={Details}/>
                                <Route path='/cart' component={Cart}/>
                                <Route path='/checkout' component={Checkout}/>
                                <Route component={Default}/>
                        </Switch>
                            <Modal/>
                    </React.Fragment>
                );
        }
}


export default App;
