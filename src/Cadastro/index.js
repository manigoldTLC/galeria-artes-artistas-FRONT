import { Container, StyleImagemCadastro, FormCadastro } from './styled';
import imgRegister from '../assets/images/image-form1.png';
import Input from '../components/Input';
import Button from '../components/Button';

const PaginaCadastro = () => {
    return (
        <Container>
            <StyleImagemCadastro>
                <img src={ imgRegister } alt='imagem da página de cadastro' className="image-div" /> 
            </StyleImagemCadastro>

            <FormCadastro>
                <div className="div-wrapper-form">
                    <h1>Crie Sua Conta</h1>
                    <div className="inputs-div">
                        <Input placeholder={'nome'} required={true} />
                        <Input placeholder={'e-mail'} required={true} />
                        <Input placeholder={'senha'} required={true} />
                        <Input placeholder={'confirme sua senha'} required={true} />
                    </div>
                    <Button>criar conta</Button>
                </div>
            </FormCadastro>
        </Container>
    );
}

export default PaginaCadastro;
