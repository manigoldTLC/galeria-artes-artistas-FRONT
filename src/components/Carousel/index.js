import Carousel from 'react-elastic-carousel'
import img1 from '../../assets/images/birmingham-museums-trust-zWE5pOLWkio-unsplash 1.png'
import img2 from '../../assets/images/chema-photo-NNCTSXLskYw-unsplash 1.png'
import img3 from '../../assets/images/europeana-YIfFVwDcgu8-unsplash 1.png'
import img4 from '../../assets/images/tamara-menzi-n-vnWQmmVoY-unsplash 1.png'
import img5 from '../../assets/images/usgs-epmiRmGAyv8-unsplash 1.png'
import { StyleCarousel } from './styled'

const HomepageCarousel = () => {
    return (
    <StyleCarousel><Carousel pagination={false} enableAutoPlay={true} itemsToShow='3' showArrows={false}>
        <img src={img1}></img>
        <img src={img2}></img>
        <img src={img3}></img>
        <img src={img4}></img>
        <img src={img5}></img>
    </Carousel></StyleCarousel>
    )
}

export default HomepageCarousel