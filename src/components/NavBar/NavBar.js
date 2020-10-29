import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Tab } from '@material-ui/core';

const NavBar = () => {
    return(
        <div className='navbar'>
            <Tab component={Link} to={'/'} label='Brandon Yan'>Brandon Yan</Tab>
            <Tab component={Link} to={'/experience'} label='Experience'>Experience</Tab>
            <Tab component={Link} to={'/projects'} label='Projects'></Tab>
        </div>
    );
}

export default NavBar;