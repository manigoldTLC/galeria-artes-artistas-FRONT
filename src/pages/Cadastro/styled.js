import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
`;

export const StyleImagemCadastro = styled.div`
    width: 50%;
    height: 100vh;

    .image-div {
        object-fit: cover;
        object-position: center 40%;
        width: 100%;
        height: 100vh;
    }

    @media (max-width: 991px) {
        width: 100%;
    }
`;

export const FormCadastro = styled.form`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .div-wrapper-form {

        display: flex;
        flex-direction: column;
        width: 70%;
        align-items: center;

        h1 {
            font-size: 40px;
            font-weight: bold;
        }

        .div-icon {
            display: flex;
            justify-content: center;
            width: 60px;
            height: 60px;
            margin: 2rem;

            img {
                width: 100%;
            }
        }

        .inputs-div{
    
            input {
                margin-bottom: 25px;
            }
        }
    
        button {
            margin: 2rem;
        }

        @media (max-width: 991px) {
            width: 100%;
            button {
                margin: 1rem;
            }
        }
    }

    @media (max-width: 991px) {
        position: absolute;
        width: 95%;
        border-radius: 10px;
        background-color: #fff;
        padding: 20px 15px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

`;