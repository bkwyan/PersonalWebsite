import React from 'react';
import styled from 'styled-components/macro';
import theme  from './styles/theme.js';
const { fontSizes, colors, spacing} = theme;

const Nav = styled.div`
    text-align: right;
    margin: ${spacing.sm};
    a{
        color: ${colors.snow};
        font-size: ${fontSizes.xl};
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
            <a href='/'>Home</a>
            <a href='/projects'>Projects</a>
            <a href='/resume'>Resume</a>
        </Nav>
    );
}

export default NavBar;