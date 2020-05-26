import React, {Component} from 'react';
import Product from "./Product";
import { HeadingButton } from "./Button";
import { ProductConsumer } from '../context';
import middleImage from '../middleImage.png';
import styled from "styled-components";

const MiddleImage = styled.div`
  margin-right: inherit;
  margin-left: inherit;
  width:800px;
  

`;

class ProductList extends Component {
    render() {
               return (
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <MiddleImage>
                            <img src={middleImage} width='800px' alt='store' className='navbar-brand' />
                        </MiddleImage>
                        <HeadingButton>
                            Choose Your Pizza From Down Below
                        </HeadingButton>
                        <div className='row'>
                            <ProductConsumer>
                                {value=>{
                                   return value.products.map( product => {
                                       return <Product key={product.id} product={product}/>;
                                   });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            );
    }
}

export default ProductList;