import { styled } from "styled-components";
import { SummaryCardProps } from ".";
import { css } from "styled-components";

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -5rem;

    @media only screen and (max-width: 600px) {
        overflow: auto;
        
        /* &::-webkit-scrollbar {
            display: none;
        } */

    }
`

export const SummmaryCard = styled.div<SummaryCardProps>`
    background-color: ${props => props.theme["gray-600"]};
    border-radius: 6px;
    padding: 2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: ${props => props.theme["gray-300"]};
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    @media only screen and (max-width: 600px) {
        padding: 1rem;
        width: 280px;
        height: 150px;
    }

    ${props => props.variant === 'green' && css`
        background-color: ${props.theme["green-700"]};
    `}
`