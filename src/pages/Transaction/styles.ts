
import styled from 'styled-components';

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${props => props.theme['gray-700']};

    &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }

    &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    @media(max-width: 641px) {
      width: 100%;
      margin: 0.1rem 0;
  }
  }

  tr {
    @media(max-width: 641px) {
      display: flex;
      flex-direction: column;
      align-items: start;
      margin: 1rem 0;
  }
  
  }
 
`;

interface PriceHighlight {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlight>`
  color: ${props => props.variant === "income" ? props.theme['green-300'] : props.theme['red-300']};
`;