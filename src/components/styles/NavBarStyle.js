import styled from 'styled-components';
import theme from './theme.js';
import { Link as LinkS } from 'react-scroll';
const { fontSizes, colors} = theme;

export const Nav = styled.nav`
    font-family: 'Lato';
    background: ${colors.grayWeb};
    height: 80px;
    //margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled.p`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: ${colors.mikadoYellow};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`