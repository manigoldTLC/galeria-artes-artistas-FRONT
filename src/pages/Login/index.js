import { Container, StyleImagemCadastro, FormCadastro } from '../Cadastro/styled';
import { Span, ContainerSpan } from './styled'
import Input from '../../components/Input';
import Button from '../../components/Button';
import imgLogin from '../../assets/images/image-form2.png';
import icon2 from '../../assets/images/icon2.png';
import { useState } from 'react';
import { useUserContext } from '../../components/contexts/useUserContext';


const PaginaLogin = () => {

    const {login} = useUserContext();


    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email === ''){
            alert('Email ausente!')
        }else if(password === ''){
            alert('Senha ausente')
        }

        await login({email, password})

    }

    return (
        <Container>
            <StyleImagemCadastro>
                <img src={imgLogin} alt='imagem do formulário de login' className="image-div" />
            </StyleImagemCadastro>

                <form onSubmit={handleSubmit} className="div-wrapper-form">
                    <h1>Entre em sua conta</h1>
                    <div className='div-icon'>
                        <img src={ icon2 } alt='icone da página de login' />
                    </div>
                    <div className="inputs-div" style={{width: '100%'}}>
                        <Input
                        placeholder= 'E-mail'
                        onChange = {(value) => setEmail(value.target.value)}
                        />
                        
                        <Input
                        type = 'password'
                        placeholder='senha'
                        onChange = {(value) => setPassword(value.target.value)}
                        />
                    </div>
                    <Span>Esqueceu sua senha?</Span>
                    <Button type='submit'>Entrar</Button>
                    <ContainerSpan>
                        <Span>Não é cadastrado?</Span>
                        <a href="/signup">Inscreva-se</a>
                    </ContainerSpan>
                </form>

        </Container>
    );
}

export default PaginaLogin;
