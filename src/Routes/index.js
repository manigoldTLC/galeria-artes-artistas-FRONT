import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from '../pages/Homepage'
import Artistas from '../pages/Artistas'
import ShowArtist from '../pages/ShowArtists'
import ArtistCreatePage from '../pages/Artistas/pages/ArtistCreatePage'
import ArtistEditPage from '../pages/Artistas/pages/ArtistEditPage'

import Pinturas from '../pages/Pinturas'
import PinturasCreate from '../pages/Pinturas/PinturasCreate'
import PinturasEdit from '../pages/Pinturas/PinturasEdit'
import PinturasShow from '../pages/Pinturas/PinturasShow'
import PinturasIndex from '../pages/Pinturas/PinturasIndex'

import PaginaLogin from '../pages/Login'
import PaginaCadastro from '../pages/Cadastro'

const MyRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/artistas' component={Artistas}/>    
            <Route path='/artistas/artista_show/:id' component={ShowArtist}/>
            <Route path='/artistas/criar_artista' component={ArtistCreatePage}/>
            <Route path='/artistas/editar_artista/:id' component={ArtistEditPage}/>

            <Route path='/pinturas' component={Pinturas}/>
            <Route path='/paintings' component={PinturasIndex}/>
            <Route path='/paintingscreate' component={PinturasCreate}/>
            <Route path='/paintingsedit/:id' component={PinturasEdit}/>
            <Route path='/paintingshow/:id' component={PinturasShow}/>

            <Route path='/login' component={PaginaLogin}/>
            <Route path='/signup' component={PaginaCadastro}/>
        </Switch>
    )
}

export default MyRoutes