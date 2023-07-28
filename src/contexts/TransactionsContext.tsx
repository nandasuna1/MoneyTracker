import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface TransactionInterface {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionProviderProps {
  children: ReactNode
}

interface CreateTransactionInput {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
}

interface TransactionContextInterface {
  transactions: TransactionInterface[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext(
  {} as TransactionContextInterface,
)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionInterface[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function loadItemList() {
    const response = await fetch('http://localhost:3000/transaction')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: TransactionInterface[] = await response.json()
    setTransactions(data)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { category, description, price, type } = data
    const newTransaction = await api.post('transaction', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((prevState) => [newTransaction.data, ...prevState])
  }

  useEffect(() => {
    loadItemList()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
