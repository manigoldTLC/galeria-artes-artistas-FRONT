import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ShowArtist from '../pages/ShowArtists'
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
            <Route exact páth= '/signup' component={PaginaCadastro}/>
            <Route exact path='/artistas' component={ArtistsPage}/>
            <Route exact path='/artistas/artista' component={ShowArtist}/> 
        </Switch>
    )
}

export default MyRoutes