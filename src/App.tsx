import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transations } from "./pages/Transaction";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transations />
      </TransactionsProvider>
    </ThemeProvider>
  )
}


