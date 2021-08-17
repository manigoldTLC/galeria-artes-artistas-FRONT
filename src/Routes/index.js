import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage/index'
import ShowArtist from '../pages/ShowArtists'

const MyRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/showartist' component={ShowArtist}/>   
        </Switch>
    )
}

export default MyRoutes