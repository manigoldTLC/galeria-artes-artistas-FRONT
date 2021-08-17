import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from '../pages/Homepage'
import Artistas from '../pages/Artistas'
import Pinturas from '../pages/Pinturas'
import PinturasCreate from '../pages/Pinturas/PinturasCreate'
import PinturasEdit from '../pages/Pinturas/PinturasEdit'
import PinturasShow from '../pages/Pinturas/PinturasShow'
import PinturasIndex from '../pages/Pinturas/PinturasIndex'
import PaginaLogin from '../pages/Login'
import PaginaCadastro from '../pages/Cadastro'
import ShowArtist from '../pages/ShowArtists/index'

const MyRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/artistas' component={Artistas}/>    
            <Route path='/pinturas' component={Pinturas}/> 
            <Route path='/*' component={Homepage}/>       
            <Route path='/paintings' component={PinturasIndex}/>
            <Route path='/paintingscreate' component={PinturasCreate}/>
            <Route path='/paintingsedit/:id' component={PinturasEdit}/>
            <Route path='/paintingshow/:id' component={PinturasShow}/>   
            <Route path='/login' component={PaginaLogin}/>
            <Route path='/signup' component={PaginaCadastro}/>
            <Route path='/artistas' component={ArtistsPage}/>
            <Route path='/artistas/artista' component={ShowArtist}/>
        </Switch>
    )
}

export default MyRoutes