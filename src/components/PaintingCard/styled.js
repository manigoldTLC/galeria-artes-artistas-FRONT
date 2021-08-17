import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
`

export const ImageContainer = styled.section`
    background-color: #323232;

    img {
        max-height: 50vh;
        max-width: 40vw;
    }
`

export const TitleContainer = styled.title`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    
    span {
        color: #000;
        margin-top: 10px;
        font-size: 1.6rem;
        font-weight: bold;
    }

    p {
        font-style: italic;
        color: #242546;
        font-size: 1.1rem;
        font-weight: normal;
    }
`
