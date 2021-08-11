import { Container } from './styles';
import img1 from '../../assets/images/icon1.png'

export const Footer = () => {
    return (
        <Container >
            <footer>
                <div className= 'left-footer'>
                    <img src={img1}></img>
                    <h1>Nome do Site</h1>
                    <h2>Endereço de Email</h2>
                </div>

                <div className = 'right-footer'>
                    <h3>Struct</h3>
                    <h4>Nomes</h4>
                    <img src={img1}></img>
                </div>
            </footer>
                
        </Container>
    )
}