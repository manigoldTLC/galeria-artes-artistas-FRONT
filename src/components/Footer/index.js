import { ContainerFooter } from './styles';
import img1 from '../../assets/images/sobreNos/manigold.jpg'
import img2 from '../../assets/images/sobreNos/aang.jpg'
import img3 from '../../assets/images/sobreNos/shin-gojira.jpg'
import img4 from '../../assets/images/sobreNos/wolverine.jpg'

export const Footer = () => {
    return (
        <ContainerFooter>
            <div className="footer-content">
                <h3>Sobre nós</h3>
                <div className="div-images-us">
                    <div className="div-image-me">
                        <img src={img1} alt="imagem 1" />
                        <p>Gabriel Xavier</p>
                    </div>
                    <div className="div-image-me">
                        <img src={img2} alt="imagem 2" />
                        <p>Venzi</p>
                    </div>
                    <div className="div-image-me">
                        <img src={img3} alt="imagem 3" />
                        <p>Mateus</p>
                    </div>
                    <div className="div-image-me">
                        <img src={img4} alt="imagem 4" />
                        <p>Keven</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy;2021 União Marketing & Comercial All Rights Reserved</p>
            </div>
        </ContainerFooter>
    );
}