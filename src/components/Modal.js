import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import {DetailButton} from "./Button";
import { Link } from "react-router-dom";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div
                                            className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                                            id="modal"
                                        >
                                            <h5>item added to cart</h5>
                                            <img src={img} className="img-fluid" alt="" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : ${price}</h5>
                                            <Link to="/">
                                                <DetailButton
                                                    onClick={() => {
                                                        closeModal();
                                                    }}
                                                >
                                                    Go To Menu
                                                </DetailButton>
                                            </Link>
                                            <Link to="/cart">
                                                <DetailButton
                                                    cart
                                                    onClick={() => {
                                                        closeModal();
                                                    }}
                                                >
                                                    Go To Cart
                                                </DetailButton>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

