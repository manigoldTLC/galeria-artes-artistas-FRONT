import { createContext, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import Cookies from "js-cookie";
import { api } from "../../services/api";

const UserContext = createContext();

const UserProvider = ({children}) => {



    const history = useHistory();

    const [user, setUser] = useState(null)

    const handleCookies = async () => {
        const userCookie = Cookies.get('user');
        Cookies.raw = true
        if(userCookie !== undefined) {
            const retrievedUser = JSON.parse(userCookie);
            setUser(retrievedUser);

            api.defaults.headers.common[`X-User-Token`] = retrievedUser.authentication_token
            api.defaults.headers.common[`X-User-Email`] = retrievedUser.email

        }
        return userCookie
    }

    useEffect(() => {

        handleCookies();

    }, [])

    const logout = async ({}) => {

        const done = await handleCookies()

        if (done) {
            
            try{
                const response = await api.post(`users/logout`)
                if (response){
                    console.log (response)
                    Cookies.remove('user')
                    history.go(0)
                }
    
            }catch(e){
            }
        }

    }

    const login = async ({email, password}) => {
        try{
            const response = await api.post('users/login', {
                email,
                password
            });
            if(response.data){
                setUser({...response.data})
                Cookies.set('user', JSON.stringify({...response.data}, {expires: 1}));
                history.push('/')
                api.defaults.headers.common['X-User-Token'] = response.data.authentication_token
                api.defaults.headers.common['X-User-Email'] = response.data.email
            }
        }catch(e){
            alert('falha no login')
        }

    }


    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);

    return context;
}

export default UserProvider;