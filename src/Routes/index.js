import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ShowArtist from '../pages/ShowArtists'

const MyRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/showartist' component={ShowArtist}/>   
        </Switch>
    )
}

export default MyRoutes