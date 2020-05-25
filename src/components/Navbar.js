import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.png";
import { ButtonContainer } from './Button';

const NavHead = styled.nav`
background: var(--tomatoRed);
.nav-link{
color:var(--mainWhite) !important;
font-size:1.4rem; 
text-transform: capitalize;
}
`;

class Navbar extends Component {
    render() {
        return (
          <NavHead className='navbar navbar-expand-sm bg-danger navbar-dark px-sm-5'>
              <Link to='/'>
                  <img src={logo}  alt='store' className='navbar-brand' />
              </Link>
              <Link to='/' className='ml-auto'>
                  <ButtonContainer>
                      <span className='mr-2'>
                      <i className='fas fa-pizza-slice'></i>
                      </span>
                      Menu
                  </ButtonContainer>
              </Link>

              <Link to='/cart' className='pull-right'>
                  <ButtonContainer>
                      <span className='mr-2'>
                      <i className="fas fa-cart-plus"/>
                      </span>
                      My Cart
                  </ButtonContainer>
              </Link>
          </NavHead>
        );
    }
}

export default Navbar;