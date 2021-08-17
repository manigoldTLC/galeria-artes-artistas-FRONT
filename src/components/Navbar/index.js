import React, { useState, useEffect, useRef } from 'react';
import { Container } from './styles';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {IconContext} from 'react-icons';
import logo from '../../assets/images/logo.png'

export const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
        const showSidebar = () =>{ 
            
            setSidebar(!sidebar)
        };
    return (
        <Container>

            <div className='logo'>
                <a href='/'>
                    <img src={logo}></img>
                </a>
            </div>
            <div className='middle'>
                <a className="li-nav" href='/'>Home</a>
                <a className="li-nav" href='/'>Artistas</a>
                <a className="li-nav" href='/'>Sobre Nós</a>
            </div>
            <IconContext.Provider value={{ color: '#000', size:'30px' }}>
                <a href='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </a>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                        <a href='#' className='menu-bars'>
                            <FiIcons.FiArrowRightCircle />
                        </a>
                        </li>
                        <li className='nav-text'>
                            <a href='/'>
                                <AiIcons.AiFillHome />
                                <span>Home</span>
                            </a>
                        </li>
                        <li className='nav-text'>
                            <a href='#'>
                                <IoIcons.IoIosPaper />
                                <span>Categorias</span>
                            </a>
                        </li>
                        <li className='nav-text'>
                            <a href='#'>
                                <IoIcons.IoMdPeople />
                                <span>Publishers</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider> 
        </Container>  
) }    
