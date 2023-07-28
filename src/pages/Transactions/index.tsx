import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionDetail, TransactionRow, TransactionTypeAndDate, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
    const { transactions } = useContext(TransactionsContext)

    return (
        <div>
            <Header />

            <Summary />

            <TransactionsContainer>
                <SearchForm/>
            <TransactionsTable>
                {transactions.map(transaction => {
                    return(
                        <TransactionRow>
                        <TransactionDetail isFirstColumn={true}>{transaction.description}</TransactionDetail>
                        <PriceHighlight variant={transaction.type}>{priceFormatter.format(transaction.price)}</PriceHighlight>
                        <TransactionTypeAndDate>
                            <span>{transaction.category}</span>
                            <span>{dateFormatter.format(new Date(transaction.createdAt))}</span>
                        </TransactionTypeAndDate>
                        </TransactionRow>
                    )
                })}

            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}