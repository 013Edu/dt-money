import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
    id: number;
    descriptions: string;
    category: string;
    type: "income" | "outcome";
    price: number;
    createdAt: string;
}

interface TransactionContextType {
    transactions: Transaction[];
}

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransaction] = useState<Transaction[]>([])

    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json();

        setTransaction(data)
    }

    useEffect(() => {
        loadTransactions();
    }, [])

    return (
        <TransactionContext.Provider value={{ transactions }}>
            {children}
        </TransactionContext.Provider>
    )
}