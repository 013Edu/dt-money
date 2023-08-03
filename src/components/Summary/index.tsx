import { useContext } from "react";

import { SummaryCard, SummaryContainer } from "./styles";

import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaDollarSign } from "react-icons/fa"
import { TransactionContext } from "../../contexts/TransactionsContext";

export function Summary() {

    const { transactions } = useContext(TransactionContext)

    const summary = transactions.reduce((acc, transaction) => {

        if (transaction.type === "income") {
            acc.income += transaction.price
            acc.total += transaction.price
        } else {
            acc.outcome += transaction.price
            acc.total -= transaction.price
        }

        return acc;
    }, {
        income: 0,
        outcome: 0,
        total: 0
    })

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <FaArrowAltCircleUp size={32} color="#00B37e" />
                </header>
                <strong>{summary.income.toString().slice(1, 100)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <FaArrowAltCircleDown size={32} color="#f75a68" />
                </header>
                <strong>{summary.outcome.toString().slice(1, 100)}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <FaDollarSign size={32} color="#fff" />
                </header>
                <strong>{summary.total}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}