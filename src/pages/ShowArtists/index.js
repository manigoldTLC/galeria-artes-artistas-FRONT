import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { api } from '../../services/api';

import { Container } from './styles';
import artista01 from '../../assets/images/artista01.png';

const ShowArtist = () => {

    const { id } = useParams()

    const [ artista, setArtista ] = useState([])

    const loadArtista = () => {
        api.get(`/artists/show/${id}`)
        .then((response) => {
            setArtista(response.data)
        })
    }

    useEffect(() => {
        loadArtista();
    }, [])

    return (
        <Container>
            <div className="imagem-artista">
                <img src={artista01} alt='imagem do artista'/>
            </div>
            <div className="descricao-artista">
                <h1>{artista.name}</h1>
                <p>{artista.description}</p>
            </div>
        </Container>
    )
}

export default ShowArtist
