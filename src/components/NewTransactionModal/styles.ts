import { styled } from "styled-components";
import * as Dialog  from "@radix-ui/react-dialog";
import  * as RadioGroup  from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: #00000075;
`

export const  Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 20px 40px;
    background:${props => props.theme["gray-800"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        input {
            border-radius: 6px;
            border: 0;
            background: ${props => props.theme["gray-900"]};
            color: ${ props => props.theme["gray-300"]};
            padding: 16px;

            &::placeholder {
                color: ${props => props.theme["gray-500"]};
            }
        }

        button[type="submit"] {
            height: 58px;
            border: 0;
            background: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
            font-weight: bold;
            padding: 0 10px;
            border-radius: 6px;
            margin-top: 10px;

            cursor:pointer;

            &:hover {
                background: ${props => props.theme["green-700"]};

            }
        }
    }

    @media only screen and (max-width: 600px) {
        min-width: 100%;
        min-height: 60%;

        border-top-right-radius: 32px;
        border-top-left-radius: 32px;

        padding: 40px;
        top: 70%;
        left: 0;
        transform: translate(0%,-50%);
    }

`

export const CloseButton = styled(Dialog.Close) `
    position: absolute;
    background: transparent;
    border: 0;
    top: 12px;
    right: 12px;
    line-height: 0;

    cursor: pointer;
    color: ${props => props.theme["gray-500"]};

    @media only screen and (max-width: 600px) {
        top: 40px;
        right: 30px;
    }
`

export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-top: 4px;
`

interface TransactionTypeButtonProps {
    variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: ${props => props.theme["gray-700"]};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${props => props.theme["gray-300"]};

  svg {
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
  }

  &[data-state='checked'] {
    color: ${props => props.theme.white};
    background: ${props => props.variant === 'income' ? props.theme["green-500"] : props.theme["red-500"]};
  }

  &[data-state='unchecked']:hover {
    background: ${props =>  props.theme["gray-600"]};
    transition: background-color 0.2s;
  }
`