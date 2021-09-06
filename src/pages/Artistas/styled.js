import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
  
    padding: 5rem;
    padding-top: 5rem;

    p {
        margin: 1.5rem 5px;
        font-size: 1.2em;
        color: #808080;
    }

    .div-btn-add-artist {
        width: fit-content;

        .link-add-artist {
            text-decoration: none;
        }

        button {
            padding: 10px;
            font-size: 1em;
        }
    }

    @media (max-width: 492px) {
        padding: 15px;
        margin: 5rem 0;
    }
`;

export const ContainerCards = styled.div`
    margin: 40px auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    justify-content: center;
    padding: 2rem 20px;
`;
