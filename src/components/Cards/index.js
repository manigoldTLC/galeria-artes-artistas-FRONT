import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {api} from '../../services/api'

import { Container, LoadTitle } from './styled';
import artista01 from "../../assets/images/artista01.png"

const Card = () => {

    const [artistas, setArtistas] = useState([])
    const [loading, setLoading] = useState(true)

    const loadArtista = async () => {

        const response = await api.get('/artists/index_artists')
        
        setArtistas(response.data);
        setLoading(false)
    }

    useEffect(() => {
        loadArtista();
    }, [])

    if (loading) {
        return <LoadTitle><h1>Carregando...</h1></LoadTitle>
    }

    return (
        <>
            {artistas?.map((artista) => (
                <Container> 
                    <img src={artista01} alt="Imagem do Artista"></img>
                    <div className="caption">
                        <Link to="/artistas/artista_show">
                            <span key={artista.id}> {artista.name} </span>
                        </Link>
                        <p key={artista.id}> {artista.description} </p>
                    </div>
                </Container>
            ))}
        </>
    );
}

export default Card;
