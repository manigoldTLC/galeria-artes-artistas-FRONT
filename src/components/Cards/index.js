import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {api} from '../../services/api'

import { Container } from './styled';
import artista1 from '../../assets/images/image 2.png'

const Card = () => {

    const [artista, setArtista] = useState([])

    const loadArtista = async () => {

        const response = await api.get('/artists/index_artists', {
            
        })
        console.log(response.data)
        setArtista(response.data);
    }

    useEffect(() => {
        loadArtista();
    }, [])

    return (
        <Container>
            <div className="div-card">
                <div className="div-imagem-artista">
                    <img src={artista1} alt="Imagem do Artista"></img>
                </div>
                <div className="div-nome-artista">
                    <Link to="/artistas/artista">
                        <span>Leonardo Da Vinci</span>
                    </Link>
                </div>
                <div className="div-descricao-artista">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>
            </div>
        </Container>
    );
}

export default Card;
