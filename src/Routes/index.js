import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PaginaLogin from '../pages/Login'
import PaginaCadastro from '../pages/Cadastro'
import Homepage from '../pages/Homepage/index'
import ArtistsPage from '../pages/Artistas/index'
import ShowArtist from '../pages/ShowArtists/index'

const MyRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/showartist' component={ShowArtist}/>
            <Route exact path= '/login' component={PaginaLogin}/>
            <Route exact path= '/signup' component={PaginaCadastro}/>
            <Route exact path='/artistas' component={ArtistsPage}/>
        </Switch>
    )
}

export default MyRoutes