import { Container } from './styled';
import Title from '../../components/Title'
import imgRegister from '../../assets/images/image-form1.png';

const Homepage = () => {
    return (
        <Container>
            <Title>Galeria MC de Arte Universal</Title>
            <div className='texto'>
                <h1>Arraste para cima e saiba mais.</h1>
            </div>

        </Container>
    );
}

export default Homepage;
