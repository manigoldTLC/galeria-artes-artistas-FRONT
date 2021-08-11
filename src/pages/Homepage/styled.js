import styled from 'styled-components';

export const FirstContainer = styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 10% 10% 0 10%;

    .div-wrapper-text {
        .texto {
            display: flex;
            flex-direction: column;
            width: 100%;
            color: #000;
    
            h1 {
                font-size: 24px;
                justify-content: left;
            }
    
            p {
                font-size: 16px
            }
        }
    };

`
export const SecondContainer = styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 5% 10% 0 10%;

    img-wrapper {
        max-width: 40%;
        justify-content: center;
        margin: right;
    };

    content-wrapper {
        max-width 40%;
        justify-content: right;
        margin: left;

        p {
            line-height: 10px;
            font-size: 24px;
        };
    }

`

export const VerticalLine = styled.span`
    display: flex;
    border: 50px 50px solid black;

`