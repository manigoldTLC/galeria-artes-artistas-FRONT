import styled from 'styled-components';

export const FirstContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 5% 0 0 0%;

    .text-wrapper {
        padding: 0 10% 5% 10%;
    }

`
export const SecondContainer = styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 5% 10% 0 10%;
    align-items: center;

    .img-wrapper {
        width: 40vw;
        border-right: 1px solid black;

        img {
            padding-top: 5%;
            padding-bottom: 5%;
            max-width: 80%
        }
    };

    .content-wrapper {
        max-width: 40%;
        margin-left: auto;
        text-align: right;
        border-left: 2px solid black;

        p {
            margin-top: 3%;
            line-height: 2.2rem;
            font-size: 1.4rem;
        };
    }

`

export const ThirdContainer = styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 5% 10% 0 10%;
    align-items: center;

    .img-wrapper {
        text-align: right;
        width: 30vw;

        img {
            margin-left: 27%;
            margin-right: 0;
            max-width: 100%;
        }
    };

    .content-wrapper {
        width: 40vw;
        text-align: left;
        justify-content: center;
        border-right: 1px solid black;
        padding-top: 20%;
        padding-bottom: 20%;

        .text-wrapper {
            border-right: 2px solid black;
            width: 80%;
        }

        p {
            margin-right: 0;
            margin-top: 3%;
            max-width: 80%;
            line-height: 2.2rem;
            font-size: 1.4rem;
        };
    }

`