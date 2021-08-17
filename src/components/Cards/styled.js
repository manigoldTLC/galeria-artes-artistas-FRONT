import styled from 'styled-components';

export const Container = styled.div`
    .div-card {
        background-color: #fff;
        border-radius: 10px;
        border: 0.1px solid #fff;
        box-shadow: -1px 10px 20px #E0E0E0, -1px 10px 20px #E0E0E0;
        display: flex;
        flex-direction: column;
        transition: 0.3s;
        
        .div-imagem-artista{
            padding: 10px 0;
            height: 24rem;

            img {
                width: 100%;
                height: 24rem;
                object-fit: cover;
                object-position: center;
                padding: 0 10px;
            }
        }

        .div-nome-artista {
            display: flex;
            justify-content: center;
            padding-top: 25px;

            span {
                font-weight: bold;
                font-size: 1.7rem;
            }
        }

        .div-descricao-artista {
            padding: 5px 10px;

            p {
                line-height: 1.3;
                color: #808080;
                margin-bottom: 10px;
                font-size: 18px;
                text-align: center;
            }
        }

        :hover {
            cursor: pointer;
            transform: translateY(-3px);
        }

    }

`;
