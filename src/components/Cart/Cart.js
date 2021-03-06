import React, {Component} from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
import {HeadingButton} from "../MainPages/Button";
class Cart extends Component {
    render() {
        return (
            <div>
                <section>
                    <ProductConsumer>
                        {value => {
                            const {cart} = value;
                            if(cart.length>0){
                                return(
                                    <React.Fragment>
                                        <div className='col-10 mx-auto text-sm-center text-title text-capitalize'>
                                        <HeadingButton>Your Cart</HeadingButton>
                                        </div>
                                        <CartColumns/>
                                        <CartList value={value} />
                                        <CartTotals value={value} history={this.props.history}/>
                                    </React.Fragment>
                                )
                            }
                            else {
                                return(
                                    <EmptyCart/>
                                    )
                            }
                        }}
                    </ProductConsumer>

                </section>
            </div>
        );
    }
}

export default Cart;