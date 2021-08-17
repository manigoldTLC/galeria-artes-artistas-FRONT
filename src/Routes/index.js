import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import ShowArtist from '../pages/ShowArtists'
import PaginaLogin from '../pages/Login'
import PaginaCadastro from '../pages/Cadastro'

const MyRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/showartist' component={ShowArtist}/>
            <Route exact path= '/login' component={PaginaLogin}/>
            <Route exact páth= '/signup' component={PaginaCadastro}/>
        </Switch>
    )
}

export default MyRoutes