import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useUserContext } from '../contexts/useUserContext'

const Header = () => {
    
    const {logout, user} = useUserContext();
    const history = useHistory();    return (
        <>
        <div>
            {
                user ? 
                    <Link to onClick={logout}>
                        Logout
                    </Link>

                : 
                <Link to onClick={() => history.push('/login')}>
                    Login
                </Link>
            }
        </div>
        </>
    )
}

export default Header
