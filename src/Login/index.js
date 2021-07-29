import { Container, StyleImagemCadastro, FormCadastro } from '../Cadastro/styled';
import { Span, ContainerSpan } from './styled'
import Input from '../components/Input';
import Button from '../components/Button';
import imgLogin from '../assets/images/image-form2.png';
import icon2 from '../assets/images/icon2.png';

const PaginaLogin = () => {
    return (
        <Container>
            <StyleImagemCadastro>
                <img src={imgLogin} alt='imagem do formulário de login' className="image-div" />
            </StyleImagemCadastro>

            <FormCadastro>
                <div className="div-wrapper-form">
                    <h1>Entre em sua conta</h1>
                    <div className='div-icon'>
                        <img src={ icon2 } alt='icone da página de login' />
                    </div>
                    <div className="inputs-div" style={{width: '100%'}}>
                        <Input placeholder={'e-mail'} required={true} />
                        <Input placeholder={'senha'} required={true} />
                    </div>
                    <Span>Esqueceu sua senha?</Span>
                    <Button>Entrar</Button>
                    <ContainerSpan>
                        <Span>Não é cadastrado?</Span>
                        <a href="#">Inscreva-se</a>
                    </ContainerSpan>
                </div>
            </FormCadastro>
        </Container>
    );
}

export default PaginaLogin;
