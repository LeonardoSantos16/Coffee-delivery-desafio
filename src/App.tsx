import { theme } from "./styles/theme"
import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from "styled-components"
import { Home } from "./Page/Home"
import { Pedido } from "./Page/Teste"
import { Success } from "./Page/Success"
import { CartContextProvider } from "./contexts/CartContext"
export function App() {


  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <Home/>
        <GlobalStyle/>
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
