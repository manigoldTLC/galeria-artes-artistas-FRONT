import styled from 'styled-components';

export const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    font-size: 24px;
    text-transform: capitalize;
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
    cursor: pointer;

    :hover {
        background-color: #fff;
        border: 1px solid #000;
        color: #000;
    }
`;
