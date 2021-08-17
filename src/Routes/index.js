import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import ShowArtist from '../pages/ShowArtists'
import PinturasCreate from '../pages/Pinturas/PinturasCreate'
import PinturasEdit from '../pages/Pinturas/PinturasEdit'
import PinturasShow from '../pages/Pinturas/PinturasShow'
import PinturasIndex from '../pages/Pinturas/PinturasIndex'
const MyRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/showartist' component={ShowArtist}/> 
            <Route exact path='/paintings' component={PinturasIndex}/>
            <Route exact path='/paintingscreate' component={PinturasCreate}/>
            <Route exact path='/paintingsedit/:id' component={PinturasEdit}/>
            <Route exact path='/paintingshow/:id' component={PinturasShow}/>   
        </Switch>
    )
}

export default MyRoutes