import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 5rem;
    padding-top: 5rem;

    p {
        margin: 1.5rem 5px;
        font-size: 1.2em;
        color: #808080;
    }

    @media (max-width: 411px) {
        padding: 15px;
        margin: 5rem 0;
    }
`;

export const ContainerCards = styled.div`
    padding: 3.5rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1.2rem;
`;
