import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    padding: 15px 15px 4px;
    border: 1px solid #c2c2c2;
    border-radius: 10px;

    img {
        width: 100%;
        height: 18.5rem;
        object-fit: cover;
    }

    .caption {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        a {
            text-decoration: none;
            border-bottom: 1px solid #c2c2c2;
            padding: 10px 0;
            span {
                font-size: 1.5em;
                color: #020202;
                font-weight: bold;
            }
        }

        a:hover {
            border-bottom: 1px solid currentColor;

            span {
                color: currentColor;
            }
        }

        p {
            text-align: justify;
            font-weight: 700;
            font-size: 1.3em;
        }
        
        .div-options-artist {
            display: flex;
            gap: 10px;
            font-size: 0.8em;
        }

    }
`;

export const LoadTitle = styled.div `
    display: flex;
    margin-top: 25vh;
    justify-content: center;
    align-items: center;
`;