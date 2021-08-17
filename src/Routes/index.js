import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage/index'
import ArtistsPage from '../pages/Artistas/index'
import ShowArtist from '../pages/ShowArtists/index'

const MyRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/artistas' component={ArtistsPage}/>
            <Route exact path='/artistas/artista' component={ShowArtist}/> 
        </Switch>
    )
}

export default MyRoutes