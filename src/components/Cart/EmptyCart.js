import React from 'react';

export default function EmptyCart() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-10 mx-auto text-sm-center text-title text-capitalize'>
                    <h1>Sorry, Your Cart is Empty...</h1>
                </div>
            </div>
        </div>
    );
}