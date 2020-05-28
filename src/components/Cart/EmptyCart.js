import React from 'react';
import {HeadingButton} from "../MainPages/Button";

export default function EmptyCart() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-10 mx-auto text-sm-center text-title text-capitalize'>
                    <HeadingButton>Sorry, Your Cart is Empty</HeadingButton>
                </div>
            </div>
        </div>
    );
}