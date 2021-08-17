import React, { useState} from 'react';
import { Container } from './styles';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {IconContext} from 'react-icons';
import img1 from '../../assets/images/image-form1.png'

export const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
        const showSidebar = () =>{ 
            
            setSidebar(!sidebar)
        };
    return (
        <Container>

            <div className='logo'>
                <a href='/'>
                    <img src={img1}></img>
                </a>
            </div>
            <div className='middle'>
                <a href='/'>Home</a>
                <a href='/'>Artistas</a>
                <a href='/'>Sobre Nós</a>
            </div>
            <IconContext.Provider value={{ color: '#000', size:'30px' }}>
                <a href='/login'>login</a>
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
