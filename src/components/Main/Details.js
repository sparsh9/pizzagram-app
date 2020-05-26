import React, {Component} from 'react';
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import {DetailButton} from "./Button";

class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value)=>{
                   const {id,img,price,title,inCart} = value.detailProduct;
                   return(
                       <div className='container  py-5'>

                           <div className="row">
                               <div className="col-10 mx-auto col-md-6 my-3">
                                   <img src={img} className="img-fluid" alt="" />
                               </div>

                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                   <h1 className='text-red'> Pizza :  </h1> <h1> {title}</h1>
                                   <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                   </h4>
                                   <h4 className="text-red">
                                       <strong>
                                           price : <span>$</span>
                                           {price}
                                       </strong>
                                   </h4>
                                   {/* buttons */}
                                   <div>
                                       <Link to="/">
                                           <DetailButton>back to products</DetailButton>
                                       </Link>
                                       <DetailButton
                                           cart
                                           disabled={inCart ? true : false}
                                           onClick={() => {
                                               value.addToCart(id);
                                               value.openModal(id);
                                           }}>
                                           {inCart ? "in cart" : "add to cart"}
                                       </DetailButton>
                                   </div>
                               </div>
                           </div>
                       </div>
                   )
               }}
           </ProductConsumer>
        );
    }
}

export default Details;