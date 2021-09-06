import Card from '../../components/Cards';
import { Container, ContainerCards } from './styled';
import Button from '../../components/Button'
import { Link } from 'react-router-dom';

const ArtistsPage = () => {

    const adminSimulation = () =>{
        const adm = true
        if (adm) {
            return (
                <Link to="/artistas/criar_artista" className="link-add-artist">
                    <Button>Adicionar Artista</Button>
                </Link>
            )
        } else {
            return null
        }
    }

    return (
        <Container>
            <h1>Explore Artistas</h1>
            <p> Confira nossa lista de artistas disponíveis para você aprender um pouco mais sobre cada um deles </p>
            <div className="div-btn-add-artist">
                {adminSimulation()}
            </div>
            <ContainerCards>
                <Card />
            </ContainerCards>
        </Container>
    );
}

export default ArtistsPage;
