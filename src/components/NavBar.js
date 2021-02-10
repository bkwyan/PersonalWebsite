import React from 'react';
import styled from 'styled-components/macro';
import theme  from './styles/theme.js';
const { fontSizes, colors, spacing} = theme;

const Nav = styled.div`
    position: fixed;
    z-index: 9999;
    width: 100%;
    text-align: right;
    margin: ${spacing.sm};
    a{
        color: ${colors.snow};
        font-size: ${fontSizes.xl};
        text-decoration: none;
        padding: 14px 16px;
        &:hover{
            animation: pulse;
            animation-duration: 2s;
        }
    }
`;

const NavBar = () => {
    return(
        <Nav>
            <a href='/'>Home</a>
            <a href='/experiences'>Experiences</a>
            <a href='/contact'>Contact</a>
        </Nav>
    );
}

export default NavBar;