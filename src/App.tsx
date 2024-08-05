import { theme } from "./styles/theme"
import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from "styled-components"
import { Home } from "./Page/Home"
import { Pedido } from "./Page/Teste"
import { Success } from "./Page/Success"
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from "./contexts/CartContext"
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        <GlobalStyle/>
      </CartContextProvider>
    </ThemeProvider>
  )
}

