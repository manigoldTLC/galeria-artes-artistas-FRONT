import PaintingsCarousel from '../../components/PaintingsCarousel';
import Title from '../../components/Title'
import { FirstContainer } from './styled.js';

const Pinturas = () =>  {
    return (
        <>
        <FirstContainer>
            <div className='text-wrapper'>
                <Title>Explore Pinturas</Title>
            </div>
        
            <PaintingsCarousel/>
        </FirstContainer>
        </>
    )
}

export default Pinturas