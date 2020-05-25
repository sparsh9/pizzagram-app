import React, {Component} from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
import {HeadingButton} from "../Button";
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
                                        <HeadingButton>Your Cart</HeadingButton>
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