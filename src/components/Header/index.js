import React from 'react'

import { useHistory, Link } from 'react-router-dom'
import { useUserContext } from '../contexts/useUserContext'
import * as IoIcons from 'react-icons/io';

const Header = () => {
    
    const {logout, user} = useUserContext();
    const history = useHistory();    return (
        <>
        <div>
            {
                user ? 
                    <Link to onClick ={logout}>
                        <IoIcons.IoMdPeople />
                        Logout
                    </Link>

                : 
                <Link  className='li-nav' to onClick={() => history.push('/login')}>
                    <IoIcons.IoMdPeople />
                    Login
                </Link>
            }
        </div>

        </>
    )
}

export default Header
