import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
const MyRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>   
        </Switch>
    )
}

export default MyRoutes