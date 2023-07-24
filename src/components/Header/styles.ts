import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;

    @media only screen and (max-width: 600px) {
        padding: 2.5rem 0; 
    }
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem 3.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 600px) {
        max-width: 600px; 
    }
`
export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
    
    &:hover {
        background: ${props => props.theme["green-700"]};
        transition: background-color 0.5s ;
    }

    @media only screen and (max-width: 600px) {
        width: 130px;
        height: 38px;
        padding: 2%;
        font-size: 14px;
        font-weight: bold;
    }
`
export const HeaderLogo = styled.img`
    @media only screen and (max-width: 600px) {
        width: 117px;
        height: 25px;
    }
`