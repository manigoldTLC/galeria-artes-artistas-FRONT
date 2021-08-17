import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Artistas from '../pages/Artistas'
import Pinturas from '../pages/Pinturas'


const MyRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/login' component={Login}/>
            <Route path='/cadastro' component={Cadastro}/>   
            <Route path='/artistas' component={Artistas}/>    
            <Route path='/pinturas' component={Pinturas}/> 
            <Route path='/*' component={Homepage}/>       
        </Switch>
    )
}

export default MyRoutes