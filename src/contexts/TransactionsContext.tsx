import { ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../services/api";
import { createContext } from "use-context-selector";

interface Transaction {
    id: number;
    descriptions: string;
    category: string;
    type: "income" | "outcome";
    price: number;
    createdAt: string;
}

interface CreateTransactionInput {
    descriptions: string;
    price: number;
    type: 'income' | 'outcome';
    category: string;
}

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>
    createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransaction] = useState<Transaction[]>([])

    async function fetchTransactions(query?: string) {
        const response = await api.get('transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        })

        setTransaction(response.data)
    }

    const createTransaction = useCallback(
        async (data: CreateTransactionInput) => {
            const { descriptions, category, price, type } = data;

            const response = await api.post('transactions', {
                descriptions,
                category,
                price,
                type,
                createdAt: new Date()
            })

            setTransaction(state => [response.data, ...state])
        }, []
    )

    useEffect(() => {
        fetchTransactions();
    }, [])

    return (
        <TransactionContext.Provider value={{
            transactions,
            fetchTransactions,
            createTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}