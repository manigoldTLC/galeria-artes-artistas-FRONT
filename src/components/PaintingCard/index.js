import { Container, ImageContainer, TitleContainer } from './styled';
import batalha_avai from '../../assets/images/batalha-avai.jpg'

const PaintingCard = () => {
    return (
        <>
        <Container>
            <ImageContainer>
                <img src={batalha_avai}></img>
            </ImageContainer>
            <TitleContainer>
                <span>Batalha do Avaí</span>
                <p>Autor: Pedro Américo</p>
                <p>Estilo: Nacionalismo</p>
            </TitleContainer>
        </Container>
        </>
    )
}

export default PaintingCard;