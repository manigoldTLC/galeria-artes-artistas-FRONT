import { Container} from './styles';
import { LoremIpsum}from 'react-lorem-ipsum';
import React from 'react';
import img1 from '../../assets/images/rick.jpg';
const ShowArtist = () => {
    return (
        <Container>
            <div className="background" >
                <img src={img1}></img>
                <div className="text">
                    <h1>RickRoll</h1><br/>
                    <LoremIpsum p={2}/>
                </div>
            </div>
        </Container>
    )
}

export default ShowArtist
