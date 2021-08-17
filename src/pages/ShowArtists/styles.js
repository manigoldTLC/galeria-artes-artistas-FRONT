import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    padding: 2rem;
    
    .imagem-artista {
        display: flex;
        justify-content: center;
        width: 100vw;
        
        img {
            border-radius: 5px;
            object-fit: cover;
            width: 100% !important;
            
        }
    }

    .descricao-artista {
        display: flex;
        flex-direction: column;
        padding: 0 3rem;
        justify-content: center;

        h1 {
            padding-bottom: 1.2rem;
        }
    }

    @media (max-width: 905px) {
        display: flex;
        flex-direction: column;
        padding-top: 40px;
        padding-left: 0;
        padding-right: 0;

        .descricao-artista {
            margin-top: 1.5rem;

            p {
                text-align: justify;
            }
        }
    }
`;