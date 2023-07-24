import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SummmaryCard } from "./styles";

export interface SummaryCardProps {
    variant?: 'green'
}

export function Summary(props: SummaryCardProps) {
    return(
        <SummaryContainer>
            <SummmaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>R$ 1.700,00</strong>

            </SummmaryCard>
            <SummmaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>R$ 1.700,00</strong>
            </SummmaryCard>
            <SummmaryCard variant="green">
                <header>
                    <span>Entradas</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>
                <strong>R$ 1.700,00</strong>

            </SummmaryCard>
        </SummaryContainer>
    )
}