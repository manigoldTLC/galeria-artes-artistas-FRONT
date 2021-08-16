import { FirstContainer, SecondContainer, ThirdContainer} from './styled';
import Title from '../../components/Title'
import imgAnjos from '../../assets/images/anjos-homepage.png'
import imgRegister from '../../assets/images/image-form1.png';
import imgAbstract from '../../assets/images/abstract-homepage.jpg'
import { BiChevronDownCircle } from 'react-icons/bi'

const Homepage = () => {
    return (
        <>
        <FirstContainer>
            <Title>Galeria MC de Arte Universal
                <span>Arraste e saiba mais. <BiChevronDownCircle></BiChevronDownCircle></span>
            </Title>
        </FirstContainer>

        <SecondContainer>
            <div className='img-wrapper'>
                <img src={imgAnjos}></img>
            </div>
            <div className='content-wrapper'>
                <Title>Arte em sua mais pura forma.</Title>
                <p>Dos 5 cantos do mundo, nos unimos em uma experiência compartilhada perante a arte. O que seria a arte, senão viver em conjunto?</p>
            </div>

        </SecondContainer>

        <ThirdContainer>
            <div className='content-wrapper'>
                <div className='text-wrapper'>
                    <Title>Sob medida, sem exagero.</Title>
                    <p>Um lugar central, de onde emana o mais variado leque de emoções humanas já colocadas sobre a tela.</p>
                </div>
            </div>
            <div className='img-wrapper'>
                <img src={imgAbstract}></img>
            </div>


        </ThirdContainer>
        </>
    );
}

export default Homepage;
