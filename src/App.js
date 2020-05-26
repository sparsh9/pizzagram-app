import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Main/Navbar";
import ProductList from "./components/Main/ProductList";
import Cart from "./components/Cart/Cart";
import Details from "./components/Main/Details";
import Default from "./components/Main/Default";
import Modal from "./components/Main/Modal";
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
