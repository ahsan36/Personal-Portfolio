import React, { useState } from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, MobileIcon, MobileMenu, MobileLink } from './NavbarStyled.js';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Bio } from '../../data/constants.js';
import '../../App.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavbarContainer>

                {/* Logo */}
                <NavLogo to='/'>
                    <a style={{ display: "flex", alignItems: "center", color: "rgb(100, 255, 218)", marginBottom: '20', cursor: 'pointer' }}>
                    <DiCssdeck size="3rem" /> <Span>Ahsan</Span>
                    </a>
                </NavLogo>

                {/* For Mobile Menu */}
                <MobileIcon>
                    <FaBars onClick={() => {
                    setIsOpen(!isOpen)
                    }} />
                </MobileIcon>

                {/* Navbar Items */}
                <NavItems>
                    <NavLink 
                        href="#about" 
                        className='sm:flex-row'
                    >
                            <span className='number'>
                                01.&nbsp;
                            </span>
                            About
                    </NavLink>
                    
                    <NavLink href='#skills'>
                        <span className='number'>
                            02.&nbsp;
                        </span>
                            Skills
                    </NavLink>

                    <NavLink href='#projects'>
                        <span className='number'>
                            03.&nbsp;
                        </span>
                        Projects
                    </NavLink>

                    <NavLink href='#contact'>
                        <span className='number'>
                            04.&nbsp;
                        </span>
                        Contact
                    </NavLink>

                    <GitHubButton 
                        href={Bio.linkedin} 
                        target="_blank" 
                    >
                            Resume
                    </GitHubButton>
                </NavItems>

                {/* For Mobile */}
                {
                    isOpen &&
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink href="#about" onClick={() => {
                            setIsOpen(!isOpen)
                        }}>
                            <span className='number'>
                                01.&nbsp;
                            </span><br />
                            About
                        </MobileLink>

                        <MobileLink href='#skills' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>
                            <span className='number'>
                                02.&nbsp;
                            </span><br />
                            Skills
                        </MobileLink>

                        <MobileLink href='#projects' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>
                            <span className='number'>
                                03.&nbsp;
                            </span><br />
                            Projects
                        </MobileLink>

                        <MobileLink href='#contact' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>
                            <span className='number'>
                                04.&nbsp;
                            </span><br />
                            Contact
                        </MobileLink>
                        <GitHubButton 
                            style={{
                                padding: '10px 16px', 
                                marginLeft: "0px", 
                                width: 'max-content'
                            }} 
                            href={Bio.linkedin} 
                            target="_blank" >
                                Resume
                        </GitHubButton>
                    </MobileMenu>
                }
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
