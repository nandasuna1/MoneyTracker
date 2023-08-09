import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionDetail,
  TransactionRow,
  TransactionTypeAndDate,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />

      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          {transactions.map((transaction) => {
            return (
              <TransactionRow key={transaction.id}>
                <TransactionDetail isFirstColumn={true}>
                  {transaction.description}
                </TransactionDetail>
                <PriceHighlight variant={transaction.type}>
                  {priceFormatter.format(transaction.price)}
                </PriceHighlight>
                <TransactionTypeAndDate>
                  <span>{transaction.category}</span>
                  <span>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </span>
                </TransactionTypeAndDate>
              </TransactionRow>
            )
          })}
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
