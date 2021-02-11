import React from 'react';
import {animateScroll as scroll} from 'react-scroll';

import {
    Nav,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    NavBarContainer
} from './styles/NavBarStyle.js';

const toggleHome = () => {
    scroll.scrollToTop();
}

const NavBar = () => {
    return(
        <Nav>
            <NavBarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    YRNYAN
                </NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='home'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >
                        Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='experiences'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Experiences</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavBarContainer>
        </Nav>
    );
}

export default NavBar;