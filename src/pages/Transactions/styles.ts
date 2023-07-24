import { css, styled } from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 12px;
`;

export interface TableProps {
  isFirstColumn?: boolean;
}

export const TransactionRow = styled.div`
  width: 100%;
  padding: 10px 16px;
  background-color: ${(props) => props.theme["gray-700"]};

  display: flex;
  justify-content: space-around;

  border-radius: 8px;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 180px;

    flex-direction: column;
    gap: 12px;
  }
`;

export const TransactionDetail = styled.div<TableProps>`
  width: ${(props) => (props.isFirstColumn ? 50 : 25)}%;
  color: ${(props) => props.theme["gray-100"]};

    @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;

    margin: 5px 0;

    font-size: 16px;
  }
`;

export const TransactionTypeAndDate = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    display: flex;

    color: ${(props) => props.theme["gray-500"]};
    font-size: 16px;
  }
`;

export interface PriceHighlightProps {
    variant?: "income" | "outcome";
  }

export const PriceHighlight = styled.p<PriceHighlightProps>`
    color: ${props => props.variant === 'income' ? props.theme["green-300"]: props.theme["red-300"]};

    ${props => props.variant === 'outcome' && css`
        &::before {
            content: '-';
        }
    `}
    
    @media screen and (max-width: 600px) {
        /* font-weight: bolder; */
        font-size: 20px;
    }
`
