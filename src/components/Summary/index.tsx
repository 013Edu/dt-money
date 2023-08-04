import { useContext } from "react";

import { SummaryCard, SummaryContainer } from "./styles";

import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaDollarSign } from "react-icons/fa"
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {

    const summary = useSummary()

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <FaArrowAltCircleUp size={32} color="#00B37e" />
                </header>
                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <FaArrowAltCircleDown size={32} color="#f75a68" />
                </header>
                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <FaDollarSign size={32} color="#fff" />
                </header>
                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}