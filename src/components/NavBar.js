import React from 'react';
import styled from 'styled-components/macro';
import theme  from './styles/theme.js';
const { fontSizes, colors } = theme;

const Nav = styled.div`
    width: 100%;
    opacity: 1;
    a{
        color: ${colors.snow};
        font-size: ${fontSizes.m};
        float: right;
        text-decoration: none;
        padding: 14px 16px;
        &:hover{
            transform: scale(1.5);
        }
    }
`;

const NavBar = () => {
    return(
        <Nav>
            <a href='/resume'>Resume</a>
            <a href='/projects'>Projects</a>
            <a href='/'>Home</a>
        </Nav>
    );
}

export default NavBar;