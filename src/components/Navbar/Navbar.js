import React, { useState } from 'react';
import {IconContext} from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon
} from './Navbar.elements';



const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon />
                    ULTRA
                </NavLogo>
                    <MobileIcon onClick={handleClick}> {click ? <FaTimes /> : <FaBars />} </MobileIcon>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
};

export default Navbar