import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import { IoBeerSharp } from 'react-icons/io5';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, 
NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer >
                  <NavLogo to='/' style={{textDecoration: 'none' }} onClick={toggleHome}>
                      <IoBeerSharp /> Barnabus
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="mission" smooth={true} style={{textDecoration: 'none' }} 
                          duration={500} spy={true} exact='true' offset={-80}>Mission</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="guest" smooth={true} style={{textDecoration: 'none' }}
                          duration={500} spy={true} exact='true' offset={-80}>Guest</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="hosting" smooth={true} style={{textDecoration: 'none' }}
                          duration={500} spy={true} exact='true' offset={-80}>Host</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="space" smooth={true} style={{textDecoration: 'none' }}
                          duration={500} spy={true} exact='true' offset={-80}>Space</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="signup" smooth={true} style={{textDecoration: 'none' }}
                          duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="/signin" style={{textDecoration: 'none' }} >Sign In</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar;