import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchFormModal } from "./components/SearchModal";
import { PriceHighlight, TransactionDetail, TransactionRow, TransactionTypeAndDate, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />

            <Summary />

            <TransactionsContainer>
                <SearchFormModal/>
            <TransactionsTable>
                <TransactionRow>
                    <TransactionDetail isFirstColumn={true}>Desenvolvimento de site</TransactionDetail>
                    <PriceHighlight variant='income'>R$ 12.000,00</PriceHighlight>
                    <TransactionTypeAndDate>
                        <span>Venda</span>
                        <span>13/04/2022</span>
                    </TransactionTypeAndDate>
                </TransactionRow>

                <TransactionRow>
                    <TransactionDetail isFirstColumn={true}>Viagemss</TransactionDetail>
                    <PriceHighlight variant="outcome">R$ 2.000,00</PriceHighlight>
                    <TransactionTypeAndDate>
                        <span>Venda</span>
                        <span>13/04/2022</span>
                    </TransactionTypeAndDate>
                </TransactionRow>

            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}