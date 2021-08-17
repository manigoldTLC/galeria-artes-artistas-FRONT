import React from 'react'
import { Switch, Route } from 'react-router-dom'


import PinturasCreate from '../pages/Pinturas/PinturasCreate'
import PinturasEdit from '../pages/Pinturas/PinturasEdit'
import PinturasShow from '../pages/Pinturas/PinturasShow'
import PinturasIndex from '../pages/Pinturas/PinturasIndex'
import PaginaLogin from '../pages/Login'
import PaginaCadastro from '../pages/Cadastro'
import Homepage from '../pages/Homepage/index'
import ArtistsPage from '../pages/Artistas/index'
import ShowArtist from '../pages/ShowArtists/index'

const MyRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/paintings' component={PinturasIndex}/>
            <Route exact path='/paintingscreate' component={PinturasCreate}/>
            <Route exact path='/paintingsedit/:id' component={PinturasEdit}/>
            <Route exact path='/paintingshow/:id' component={PinturasShow}/>   
            <Route exact path= '/login' component={PaginaLogin}/>
            <Route exact path= '/signup' component={PaginaCadastro}/>
            <Route exact path='/artistas' component={ArtistsPage}/>
            <Route exact path='/artistas/artista' component={ShowArtist}/>
        </Switch>
    )
}

export default MyRoutes