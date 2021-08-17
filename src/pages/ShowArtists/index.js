import { Container } from './styles';
import { LoremIpsum }from 'react-lorem-ipsum';
import React from 'react';
import img1 from '../../assets/images/rick.jpg';

const ShowArtist = () => {
    return (
        <Container>
            <div className="imagem-artista">
                <img src={img1} alt='imagem do artista'/>
            </div>
            <div className="descricao-artista">
                <h1>Leonardo Da Vinci</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
        </Container>
    )
}

export default ShowArtist
