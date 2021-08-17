import styled from 'styled-components';
import img1 from '../../assets/images/rick.jpg';
export const Container = styled.div`
    .background {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
        .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 30rem;
            margin-top: 0.9rem;
            font-size: 0.9rem ;
            text-align: justify;
            
        }
            h1{
                font-size: 2rem;
                text-align: center;
                font-style: italic;
            }
            img{
            
                margin-top: 10%;
                height: 30rem;
                width: 30rem;
            }
    `;