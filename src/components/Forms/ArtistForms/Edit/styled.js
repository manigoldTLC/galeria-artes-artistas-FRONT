import styled from 'styled-components';

export const CardPost = styled.div`
    
    background-color: #c2c2c2;
    padding: 30px 70px;
    border-radius: 10px;
    
    width: auto;

    h1 {
        font-weight: 800;
        text-align: center;

        color: #3E445B;

        font-size: 3rem;
        margin-bottom: 5px;
    }

    .line-post {
        height: 2px;
        background-color: #3E445B;
    }

    .card-body-post {
        margin-top: 25px;

        .fields {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 7px;
            font-size: 1.2rem;
        
            color: #3E445B;
        
        }

        input, textarea {
            width: 100%;
            border-radius: 5px;
            border: 0;
            outline: 0;
            border: 1px solid #000000;
        
            font-size: 1.2rem;
        
            padding-left: 15px;
        }

        input {
            height: 45px;
        }
        
        textarea {
            height: 190px;
            resize: none;
        
            padding-top: 10px;
        }
        
    }

    .error-message {
        padding: 5px;
        color: rgb(240, 47, 47);
    }

`;
