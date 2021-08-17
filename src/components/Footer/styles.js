import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    bottom: 0;
    left: 0;
    right: 0;
    background: #111;
    height: auto;
    width: 100vw;
    font-family: "Open Sans";
    padding-top: 40px;
    color: #fff;

    .footer-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;

        h3 {
           font-size: 1.8rem;
           font-weight: 400;
           text-transform: capitalize;
           line-height: 3rem;
       }

        p {
           max-width: 500px;
           margin: 10px auto;
           line-height: 28px;
           font-size: 14px;
       }
       
       .div-images-us {
           width: 100%;
           display: flex;
           padding: 3rem 5rem;
           gap: 2rem;
           
            .div-image-me {
                background-color: #fff;
                width: 30vw;
                height: 48vh;
                cursor: pointer;
                padding-bottom: 3.2rem;
                border-radius: 5px;
                
                img {
                    width: 100%;
                    height: 100% !important;
                    object-fit: cover;
                    object-position: center 20%;
                    border-radius: 5px;
                }

                p {
                    color: black;
                    font-size: 1.2em;
                    font-weight: bold;

                }
            }
        
            @media (max-width: 991px) {
                padding: 2rem;
                display: flex;
                flex-direction: column;
                
                .div-image-me {
                    width: 100%;
                }

            }


       }
    }

    .footer-bottom {
        background: #000;
        width: 100vw;
        padding: 20px 0;
        text-align: center;

        p {
            font-size: 14px;
            word-spacing: 2px;
            text-transform: capitalize;
        }

        span {
            text-transform: uppercase;
            opacity: .4;
            font-weight: 200;
        }
    }

`;