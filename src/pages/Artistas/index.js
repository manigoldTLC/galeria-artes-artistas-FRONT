import Card from '../../components/Cards';
import { Container, ContainerCards } from './styled';

const ArtistsPage = () => {
    return (
        <Container>
            <h1>Explore Artistas</h1>
            <p> Confira nossa lista de artistas disponíveis para você aprender um pouco mais sobre cada um deles </p>
            <ContainerCards>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ContainerCards>
        </Container>
    );
}

export default ArtistsPage;
