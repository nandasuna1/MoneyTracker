import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 8px;

    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        background-color: ${props => props.theme["gray-900"]};
        color: ${props => props.theme["gray-300"]};
        padding: 20px;

        &::placeholder {
            color: ${props => props.theme["gray-500"]};
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 12px;

        padding: 8px;
        background-color: transparent;
        border: 1px solid ${props => props.theme["green-300"]};
        color: ${props => props.theme["green-300"]};

        font-weight: bold;
        border-radius: 6px;

        &:hover{
            background-color: ${props => props.theme["green-500"]};;
            border: 1px solid ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};

            transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }
    }
`